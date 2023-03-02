import { AuthLayout } from "@/auth/layouts/AuthLayout";
import { LoginForm, WelcomeMessage } from "@/auth/components";
import { A } from "@/auth/styled-components";
import { AppRoutes } from "@/router";

export default function LoginPage() {
  return (
    <AuthLayout>
      <WelcomeMessage />
      <LoginForm />
      <A to={AppRoutes.SIGNUP}>Don't have an account?<br/><span>Sign up</span></A>
    </AuthLayout>
  )
}
