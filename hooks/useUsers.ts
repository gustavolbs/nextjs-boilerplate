import useSWR from "swr";
import { IUser } from "../interfaces/user";
import { fetcher } from "../services/api";

export const useUsers = () => {
  const { data, error } = useSWR("/users", fetcher);

  return {
    users: data as IUser[],
    isLoading: !error && !data,
    isError: error,
  };
};
