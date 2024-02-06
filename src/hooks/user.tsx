import { getUserProfile } from "@/db/auth";
import { User } from "@/db/types";
import { useQuery } from "@tanstack/react-query";

export const useUser = ({ initialData }: { initialData: User }) => {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["currentUser"], // Try to keep the keys the same on both server-side actions and client-side queries
    queryFn: async () => {
      const { data, error } = await getUserProfile();

      if (error) throw Error("Could not get user");
      return data;
    },
    initialData,
  });

  return {
    user: user || initialData,
    error,
    isLoading,
  };
};
