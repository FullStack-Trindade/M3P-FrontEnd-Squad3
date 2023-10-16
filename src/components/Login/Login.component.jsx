import { useEffect } from "react"
import { AuthService } from "../../services/Auth.service"
import * as Styled from "./loginComponent.style"
import { useForm } from "react-hook-form"

export default function LoginComponent() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data) => {
		console.log("submit")
		await AuthService.Login(data).then(async (res) => {
			const response = await res.json()
			console.log(response.mensagem)

			if (res.status === 200) {
				// colocar o token no localStorage
				AuthService.SetToken("logado")
			}
		})
	}

	useEffect(() => {
		const asyncFn = async () => {
			await AuthService.GetToken(async (res) => {
				console.log('res', res)
				if (res === "logado") alert('logado')
			})
		}
		asyncFn()
	}, [])

	return (
		<>
			<Styled.Form onSubmit={handleSubmit(onSubmit)}>
				<legend>REACTive Login</legend>
				<Styled.InputGroup>
					<Styled.Label htmlFor="email">E-mail</Styled.Label>
					<Styled.Input
						type="email"
						placeholder="Digite seu e-mail"
						{...register("email", {
							pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
							required: "E-mail obrigatório",
						})}
					/>
					{errors.email && (
						<Styled.Small>{errors.email.message}</Styled.Small>
					)}
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="senha">Senha</Styled.Label>
					<Styled.Input
						type="password"
						placeholder="Digite a senha"
						{...register("senha", {
							required: "Senha é obrigatória",
							minLength: {
								value: 6,
								message: "A senha deve ter no mínimo 6 caracteres",
							},
						})}
					/>
					{errors.senha && (
						<Styled.Small>{errors.senha.message}</Styled.Small>
					)}
				</Styled.InputGroup>

				<Styled.Submit type="submit">Entrar</Styled.Submit>
				<Styled.Link href="">Gostaria de criar uma conta?</Styled.Link>
			</Styled.Form>
		</>
	)
}
