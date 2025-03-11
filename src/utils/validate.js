export const validate=(email,password)=>{
        const isEmailValid=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
        const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

        if(!isEmailValid) return "Email is not valid. Use standard form of email"
        if(!isPasswordValid) return "Password is not valid for registration.Use strong password combining of small letter , capital letter ,special character,number & then try"

        return null
}