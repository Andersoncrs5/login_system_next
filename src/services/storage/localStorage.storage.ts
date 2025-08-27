import ResponseToken from "@/utils/ResponseToken.response";

export default class LocalStorageService{
    getToken(): string | null {
        return localStorage.getItem("token") 
    }

    getRefreshToken(): string | null {
        return localStorage.getItem("refreshToken") 
    }

    setTokens(tokens: ResponseToken) {
        localStorage.setItem("token", tokens.token)
        localStorage.setItem("refreshToken", tokens.refreshToken)
    }

    clearAll() {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
    }

}