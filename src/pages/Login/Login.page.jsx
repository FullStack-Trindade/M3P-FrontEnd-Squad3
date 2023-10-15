import LoginComponent from '../../components/Login/Login.component'
import * as Style from './LoginPage.style'

export default function LoginPage() {
  return (
    <Style.Container>
        <Style.LoginContainer>
            <LoginComponent />
        </Style.LoginContainer>
    </Style.Container>
  )
}
