import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({ 
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email && !! localStorage.getItem('access-token'),
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;