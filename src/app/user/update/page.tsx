'use client'

import Alert from "@/components/alert/alert.component"
import BtnSubmit from "@/components/btnSubmit/btnSubmit.component"
import BtnUrl from "@/components/btnUrl/btnUrl.component"
import CustomInput from "@/components/customInput/customInput.render"
import ErrorForm from "@/components/errorForm/errorForm.component"
import { UseUpdate } from "./update.hook"

export default function UpdateUser() {

    const {
        alert,
        bgColorAlert,
        colorBorderAlert,
        colorTextAlert,
        errorForm,
        isSubmitting,
        msgErrorForm,
        password,
        setPassword,
        user,
        msg,
        HandleSubmit
    } = UseUpdate()

    return (
        <>
            {alert && <Alert msg={msg} bgStyle={bgColorAlert} textStyle={colorTextAlert} border={colorBorderAlert} /> }
            {errorForm && <ErrorForm msgs={msgErrorForm} bgStyle={bgColorAlert} textStyle={colorTextAlert} border={colorBorderAlert} /> }
            
            <div className="flex items-center justify-center min-h-screen">
                <div className="border border-white p-6 rounded shadow w-[30%]">
                    <form onSubmit={HandleSubmit} className="flex flex-col">
                        <div className="text-center" >
                            <h1>Hello {user?.userName}</h1>
                        </div>
                        <div className="my-1" >
                            <CustomInput 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={"password"}   
                                required={true}
                                placeholder="12345678"
                                nameLabel="Password"
                                min={8}
                                max={50}
                            />
                        </div>
                        <div className="mt-2 flex justify-between" >
                            <BtnSubmit 
                                isSubmitting={isSubmitting}
                                bgColor="bg-transparent"
                                name="SUBMIT"
                            />
                            <BtnUrl 
                                url={"/user/profile"} 
                                bgColor={"bg-transparent"}   
                                name="BACK"
                                pdd={"p-1"}
                            />
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
