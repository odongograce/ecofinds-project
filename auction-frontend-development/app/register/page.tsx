import { RegisterForm } from "@/components/register-form"
import { Leaf } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
            <div className="bg-primary rounded-full p-2">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-foreground">ecoFinds</span>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Create your account</h1>
            <p className="text-muted-foreground mt-2">Start bidding on sustainable treasures</p>
          </div>
        </div>

        <RegisterForm />

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
