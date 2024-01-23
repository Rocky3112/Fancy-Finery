import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClient = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isClient, isLoading: isClientLoading} = useQuery({ 
        queryKey: ['isClient', user?.email],
        enabled: !!user?.email && !! localStorage.getItem('access-token'),
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/client/${user?.email}`);
            return res.data.client
        }
    })
    return [isClient, isClientLoading]
};

export default useClient;