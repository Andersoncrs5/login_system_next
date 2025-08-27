import Alert from "@/components/alert/alert.component"
import { UseProfile } from "./profile.hook"
import Btn from "@/components/btn/btn.component"
import { LuLogOut } from "react-icons/lu";
import { MdDelete } from "react-icons/md";


export default function Profile() {
    const {
        alert,
        bgColorAlert,
        colorBorderAlert,
        colorTextAlert,
        load,
        msg,
        user,
        logoutUser,
        deletUser
    } = UseProfile()
    return (
        <>
            {alert && <Alert msg={msg} bgStyle={bgColorAlert} textStyle={colorTextAlert} border={colorBorderAlert} /> }

            {load ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="border border-white p-6 rounded shadow">
                        <div>
                            <h1>Name: {user.userName}</h1>
                            <h4>Email: {user.email}</h4>
                            <h4>phoneNumber: {user.phoneNumber}</h4>
                        </div>
                        <div>
                            <Btn 
                                padding={"p-1"} 
                                icon={<LuLogOut />}
                                fn={() => logoutUser()} 
                            />
                            <Btn 
                                padding={"p-1"} 
                                icon={ <MdDelete /> }
                                fn={() => deletUser()}                                
                            />

                        </div>
                        
                    </div>
                </div>
            )}
        </>
    )
}