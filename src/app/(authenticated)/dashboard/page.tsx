import { ExampleQueryFetch } from "@/components/example-fetch";
import { Container } from "@/components/layout";
import { revalidateFetch } from "@/utils/fetch";
import { ExampleQueryMutate } from "@/components/example-mutate";

export const dyanmic: string = "force-dynamic";

export default async function DashboardPage() {
  const initialFetchData = await revalidateFetch(
    "https://swapi.dev/api/people/1/?format=json",
  );

  const iniitalMutateData = [
    {
      name: "Rob Hough",
      id: "001",
    },
  ]; //Simulate a network request

  return (
    <Container className="py-12 xl:py-20">
      <h1>Dashboard!</h1>
      <ExampleQueryFetch initialData={initialFetchData} />
      <hr className="my-8" />
      <ExampleQueryMutate initialData={iniitalMutateData} />
    </Container>
  );
}
