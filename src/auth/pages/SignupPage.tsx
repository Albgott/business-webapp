import { AuthLayout } from "@/auth/layouts/AuthLayout";
import { SignupForm, WelcomeMessage } from "@/auth/components";
import { A } from "@/auth/styled-components";
import { AppRoutes } from "@/router";

export default function SignupPage() {
  return (
    <AuthLayout>
      <WelcomeMessage />
      <SignupForm />
      <A to={AppRoutes.LOGIN}>Already have an account?<br/><span>Log in</span></A>
    </AuthLayout>
  )
}
