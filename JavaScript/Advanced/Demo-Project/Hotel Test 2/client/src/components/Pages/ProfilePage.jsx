import { useContext, useState} from "react";
import { Link,Navigate,useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../../AccountNav";

function ProfilePage(){
    const {ready,user,setUser}=useContext(UserContext);
    const [redirect,setRedirect]=useState(null);


    async function logout(){
        axios.post("http://localhost:4000/logout");
        setUser(null);
        setRedirect("/");
    }

    if(!user && !redirect){
        return <Navigate to={"/login"} />
    }

    if(redirect){
        return <Navigate to={redirect} />
    }

    let {subpage}=useParams();

    if(subpage===undefined){
        subpage="profile";
    }

    return(
        <div>
           <AccountNav /> 

        {subpage==='profile' && (
            <div className="text-center max-w-lg mx-auto">
                Logged as {user.name} ({user.email})<br />
                <button onClick={logout} className="bg-primary max-w-sm mt-2 rounded-full px-20 py-1">
                    Logout
                </button>
            </div>
        )}
        {subpage==='places' && (
            <PlacesPage />
        )}
        </div>
        
    );
}

export default ProfilePage;