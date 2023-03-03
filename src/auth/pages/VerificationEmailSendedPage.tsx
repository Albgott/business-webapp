import { AuthLayout } from "@/auth/layouts/AuthLayout";

export default function VerificationEmailSended() {
  return (
    <AuthLayout>
      <div style={{textAlign:"center"}}>
        <h2><strong>You have been registered on our systems.</strong></h2>
        <p style={{marginTop: "-25px"}}>You will soon receive an email to verify your email address.</p>
      </div>
    </AuthLayout>
  )
}
