import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../api/queries";
import User from "../../components/users/user-details";
import Loading from "../../components/ui/loading";
import ErrorPage from "../../components/ui/custom-error";

const UserDetails = () => {
    const router = useRouter();
    const id = router.query.id;

    const {data,loading,error} =useQuery(GET_USER_BY_ID,{variables:{id}})

    return ( <div>
        {loading && <Loading/>}
        {error && <ErrorPage/>}
        {data && <User user={data}/>}
        
    </div> );
}
 
export default UserDetails;