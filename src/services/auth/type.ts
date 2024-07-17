type AuthPayload = {
    username : String 
    password : String 
} 
 type AuthResponse = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
    refreshToken: string
  }
  export type {AuthPayload,AuthResponse};