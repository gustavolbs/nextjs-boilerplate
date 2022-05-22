import useSWR from "swr";
import { fetcher } from "../services/api";

export const useUsers = () => {
  const { data, error } = useSWR("/users", fetcher);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};
