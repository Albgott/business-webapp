import { AuthLayout } from "@/auth/layouts/AuthLayout";
import { LoginForm, WelcomeMessage } from "@/auth/components";
import { A } from "@/auth/styled-components";
import { PublicRoutes } from "@/router";

export default function LoginPage() {
  return (
    <AuthLayout>
      <WelcomeMessage />
      <LoginForm />
      <A to={PublicRoutes.SIGNUP}>Don't have an account?<br/><span>Sign up</span></A>
    </AuthLayout>
  )
}
