export default interface ResponseToken {
    token: string
    refreshToken: string
    expirationToken: Date
    expirationRefreshToken?: Date
}