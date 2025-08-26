'use client'

import LoginDTO from "@/model/dtos/LoginDTO.dto";
import api from "@/services/api";
import { loginSuccess } from "@/store/authSlice";
import { BgStyleType } from "@/types/bg.type";
import { BorderStyleType } from "@/types/border.type";
import { TextStyleType } from "@/types/text.type";
import ResponseBody from "@/utils/ResponseBody.response";
import ResponseToken from "@/utils/ResponseToken.response";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function UseLogin() {
    const dispatch = useDispatch()
    const timeMsg = 6000;

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

    async function HandleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setIsSubmitting(true)

        const dto: LoginDTO = { email, password } as LoginDTO

        try {
            const response: AxiosResponse<ResponseToken, any> = await api.post("/v1/auth/login", dto)

            if (response.status === 200) {
                showAlert(
                    "bg-transparent", 
                    "text-green-500", 
                    "border-green-500",
                    "Welcome again"
                )

                dispatch(loginSuccess({
                    token: response.data.token,
                    refreshToken: response.data.refreshToken,
                    expirationToken: response.data.expirationToken
                }))
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

            if (err.response?.status === 401) {
                showAlert(
                    "bg-transparent", 
                    "text-red-500", 
                    "border-red-500",
                    "Login invalid"
                )
            }

            if (err.response?.status && err.response?.status >= 500 &&  err.response?.status <= 599) {
                console.log(err)
                showAlert(
                    "bg-transparent", 
                    "text-red-500", 
                    "border-red-500",
                    "Error the server please try again later"
                )
            }

        } finally {
            setIsSubmitting(false)
            clearInputs()
        }
    }

    function clearInputs() {
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
        isSubmitting,
        alert,
        msg,
        email,
        password,
        setEmail,
        setPassword,
        HandleSubmit,
        bgColorAlert,
        colorTextAlert,
        colorBorderAlert,
        errorForm,
        msgErrorForm
    }
}