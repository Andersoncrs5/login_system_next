import RegisterDTO from "@/model/dtos/RegisterDTO.dto";
import api from "@/services/api";
import LocalStorageService from "@/services/storage/localStorage.storage";
import { BgStyleType } from "@/types/bg.type";
import { BorderStyleType } from "@/types/border.type";
import { TextStyleType } from "@/types/text.type";
import ResponseBody from "@/utils/ResponseBody.response";
import { AxiosError, AxiosResponse } from "axios";
import router from "next/router";
import { useEffect, useState } from "react";

export function UseRegister() {
    const localStorageService = new LocalStorageService()
    const timeMsg = 6000;

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [alert, setAlert] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>('');

    const [bgColorAlert, setBgColorAlert] = useState<BgStyleType>("bg-transparent");
    const [colorTextAlert, setColorTextAlert] = useState<TextStyleType>("text-white");
    const [colorBorderAlert, setColorBorderAlert] = useState<BorderStyleType>("border-white");

    const [errorForm, setErrorForm] = useState<boolean>(false);
    const [msgErrorForm, setMsgErrorForm] = useState<string[]>([]);

    useEffect(() => {
        checkLog()
    },[])

    function checkLog() {
        const token = localStorageService.getToken()

        if (token != null) {
            router.push("/user/profile")
        }
    }

    async function HandleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setIsSubmitting(true)

        const dto: RegisterDTO = { name, email, password } as RegisterDTO

        try {
            const response: AxiosResponse<ResponseBody<string>, any> = await api.post("/v1/auth/register", dto)

            console.log(response)

            if (response.status === 201) {
                showAlert(
                    "bg-transparent", 
                    "text-green-500", 
                    "border-green-500",
                    response.data.message
                )
            }
        } catch(e: any) {
            const err = e as AxiosError<ResponseBody<string[]>>

            if (err.response?.status === 400) {
                showErrorForm(
                    "bg-transparent", 
                    "text-yellow-500", 
                    "border-yellow-500",
                    err.response.data.body as string[]
                )
            }

            if (err.response?.status === 409) {
                const errConflict = e as AxiosError<ResponseBody<string>>
                console.log(errConflict)

                showAlert(
                    "bg-transparent", "text-yellow-500", 
                    "border-yellow-500", errConflict.response?.data.message as string
                )
            }

            if (err.response?.status && err.response?.status >= 500 &&  err.response?.status <= 599) {
                console.log(err)
                showAlert(
                    "bg-transparent", "text-red-500", 
                    "border-red-500","Error the server please try again later"
                )
            }

        } finally {
            setIsSubmitting(false)
            clearInputs()
        }
    }

    function clearInputs() {
        setName('')
        setEmail('')
        setPassword('')
    }

    function showErrorForm(
        bg: BgStyleType,text: TextStyleType,border: BorderStyleType, msgs: string[]
    ) {
        setErrorForm(true)

        setBgColorAlert(bg)
        setColorTextAlert(text)
        setColorBorderAlert(border)

        setMsgErrorForm(msgs)

        setTimeout(() =>{
            setErrorForm(false)
        }, timeMsg)
    }

    function showAlert(
        bg: BgStyleType,text: TextStyleType,border: BorderStyleType,m: string
    ) {
        setAlert(true)

        setBgColorAlert(bg)
        setColorTextAlert(text)
        setColorBorderAlert(border)

        setMsg(m)

        setTimeout(() =>{
            setAlert(false)
        }, timeMsg)
    }

    return {
        HandleSubmit,
        name,
        setName,
        email, 
        setEmail,
        password,
        setPassword,
        isSubmitting,
        alert,
        bgColorAlert,
        colorTextAlert,
        colorBorderAlert,
        msg,
        errorForm,
        msgErrorForm
    }
}