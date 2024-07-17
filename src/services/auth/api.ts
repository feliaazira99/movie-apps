import { AuthPayload, AuthResponse } from "./type";

import { API } from "../movie";

const postLogin = async (payloand : AuthPayload) => {
    try {
        const response = await API.post(
            "https://dummyjson.com/auth/login",
            payloand
        );

        console.log(response)
        return response.data as AuthResponse
    } catch (error){
        console.log(error)
    }
}
export {postLogin}