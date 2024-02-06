"use client";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const LIST_OF_PEOPLE = [
  {
    name: "Harriet Goodman",
    id: "002",
  },
  {
    name: "Daisy",
    id: "003",
  },
  {
    name: "Bella",
    id: "004",
  },
];

export const ExampleQueryMutate = ({ initialData }: { initialData: any }) => {
  // QueryClient is used to manage the cache and perform actions on the cache
  const queryClient = useQueryClient();

  /**
   * The useQuery hook is used to fetch data from the server and cache it in the app.
   * We preload the initialData prop with any data fetched on the server with RSC
   */
  const { data, isLoading } = useQuery({
    queryKey: ["exampleMutate"],
    queryFn: async () => {
      // Using a setTimeout and localStorage to simulate a network request to a DB.
      // Can use any async function or fetch (see /db folder)
      new Promise((resolve) => setTimeout(resolve, 1000));
      return JSON.parse(localStorage.getItem("exampleMutate")!!);
    },
    initialData,
  });

  /**
   * Mutations - useMutation hook updates the state, manages cache, and sorts everything out
   * Pass in Server action or POST request to update the server
   */
  const { mutate: addPerson } = useMutation({
    mutationFn: async (data: any) => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a network request
      const current = JSON.parse(localStorage.getItem("exampleMutate")!!);
      return localStorage.setItem(
        "exampleMutate",
        JSON.stringify([...current, data]),
      );
    },
    /* onMutate is used to update the cache optimistically before the mutation is complete */
    /* This is good practice as it improves responsiveness. */
    onMutate: (newPerson: any) => {
      console.log("Optimistically updating the data");
      queryClient.setQueryData(["exampleMutate"], (existingData: any) => [
        ...existingData,
        newPerson,
      ]);
    },
    /* onSuccess is used perform actions after mutation is complete (e.g clear cache, feedback to user) */
    onSuccess: () => {
      // Remember to invalidate the cache after a mutation success
      console.log("Mutation was successful");
      queryClient.invalidateQueries({ queryKey: ["exampleMutate"] }); // Clears the app cache
    },
  });

  const { mutate: removePerson } = useMutation({
    mutationFn: async (id: any) => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a network request
      const current = JSON.parse(localStorage.getItem("exampleMutate")!!);
      const filtered = current.filter((person: any) => person.id !== id);
      console.log(id, filtered);
      return localStorage.setItem("exampleMutate", JSON.stringify(filtered));
    },
    onSuccess: () => {
      // Remember to invalidate the cache after a mutation success
      console.log("Mutation was successful");
      queryClient.invalidateQueries({ queryKey: ["exampleMutate"] }); // Clears the app cache
    },
  });

  /**
   * Loading state is optional because we're preloading the data with the initialData prop
   */
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {data &&
          data.map((person: any) => (
            <p onClick={() => removePerson(person.id)} key={person.id}>
              {person.id} {person.name}
            </p>
          ))}
      </div>
      <Button onClick={() => addPerson(LIST_OF_PEOPLE[data.length])}>
        Add Person
      </Button>
    </div>
  );
};
