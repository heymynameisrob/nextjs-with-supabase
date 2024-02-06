"use client";
import { usePerson } from "@/hooks/_examples";

export const ExampleQueryFetch = ({ initialData }: { initialData: any }) => {
  // React Query uses the initial data and then re-fetches after load.
  // To illustrate the point, we are fetching the ID 1 on the server and 2 on the client.
  // There should be a second where the server data is displayed and then the client data is displayed.
  const { data, isLoading } = usePerson({ initialData, id: 2 });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Random Starwars Character</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <p key={data.name}>{data.name}</p>
      </div>
    </div>
  );
};
