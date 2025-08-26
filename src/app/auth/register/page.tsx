'use client'

import CustomInput from "@/components/customInput/customInput.render"
import { UseRegister } from "./register.hook"
import Alert from "@/components/alert/alert.component"
import BtnSubmit from "@/components/btnSubmit/btnSubmit.component"
import BtnUrl from "@/components/btnUrl/btnUrl.component"
import ErrorForm from "@/components/errorForm/errorForm.component"

export default function Register() {
    const {
        HandleSubmit,
        alert,
        bgColorAlert,
        colorBorderAlert,
        colorTextAlert,
        email,
        isSubmitting,
        msg,
        name,
        password,
        setEmail,
        setName,
        setPassword,
        errorForm,
        msgErrorForm
    } = UseRegister()

    return (
        <>
            {alert && <Alert msg={msg} bgStyle={bgColorAlert} textStyle={colorTextAlert} border={colorBorderAlert} /> }
            {errorForm && <ErrorForm msgs={msgErrorForm} bgStyle={bgColorAlert} textStyle={colorTextAlert} border={colorBorderAlert} /> }
            
            <div className="flex items-center justify-center min-h-screen">
                <div className="border border-white p-6 rounded shadow w-[30%]">
                    <form onSubmit={HandleSubmit} className="flex flex-col">
                        <div className="my-1" >
                            <CustomInput 
                                onChange={(e) => setName(e.target.value)} 
                                value={name} 
                                type={"text"}   
                                required={true}
                                placeholder="example"
                                nameLabel="Name"
                                max={100}
                                min={5}
                            />
                        </div>
                        <div className="my-1" >
                            <CustomInput 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email} 
                                type={"email"}   
                                required={true}
                                placeholder="example@gmail.com"
                                nameLabel="Email"
                                min={10}
                                max={150}
                            />
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
                                url={"/"} 
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
