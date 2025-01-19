import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import useAuth from "./useAuth";


const UserRole = () => {
  const { user, loading } = useAuth();
  const Axios = UseAxios();

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await Axios(`/users/${user?.email}`);
      console.log(data.role)
      return data.role;
    },
  });

  return [role, isLoading];
};

export default UserRole;
