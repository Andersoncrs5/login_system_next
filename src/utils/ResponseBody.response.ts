export default interface ResponseBody<T> {
    message: string
    url?: string
    body?: T
    success?: boolean
    statusCode?: number
    timestamp?: Date
    links: []
}