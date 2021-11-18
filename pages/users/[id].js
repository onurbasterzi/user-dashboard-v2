import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_USER_BY_ID } from "../api/queries";
import User from "../../components/users/user-details";

const UserDetails = () => {
    const router = useRouter();
    const id = router.query.id;

    const {data,loading,error} =useQuery(GET_USER_BY_ID,{variables:{id}})

    return ( <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {data && <User user={data}/>}
        
    </div> );
}
 
export default UserDetails;