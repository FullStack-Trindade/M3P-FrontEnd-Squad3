const URL_BASE = "http://localhost:3008"

const Login = async (data) => {
    return await fetch(`${URL_BASE}/api/usuarios/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    })
}

const SetToken = async (data) => {
    localStorage.setItem('authToken', JSON.stringify(data))
}

const GetToken = async() => {
    const data = JSON.parse(localStorage.getItem('authToken'))
    // verificar token
    if(data === "logado") return console.log('user logado')
}

export const AuthService = {
    Login,
    SetToken,
    GetToken,
}