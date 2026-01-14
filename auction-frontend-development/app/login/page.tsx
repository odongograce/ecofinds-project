import { LoginForm } from "@/components/login-form"
import { Leaf } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
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
            <h1 className="text-3xl font-bold text-foreground">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Sign in to continue bidding</p>
          </div>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-muted-foreground">
          {"Don't have an account? "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  )
}
