/**
 * Example hooks to demonstrate how fetching works
 *
 *
 */

import { useQuery } from "@tanstack/react-query";

export const usePerson = ({
  initialData,
  id,
}: {
  initialData: any;
  id: number;
}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["person"],
    queryFn: async () => {
      const res = await fetch(
        `https://swapi.dev/api/people/${id}/?format=json`,
      );
      const data = await res.json();
      return data;
    },
    initialData,
  });

  return {
    data: data || initialData,
    error,
    isLoading,
  };
};
