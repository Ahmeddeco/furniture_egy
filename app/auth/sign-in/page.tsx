"use client"

import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { authClient } from "@/lib/auth-client"

export default function SignInPage() {
	const handleLogin = async () => {
		await authClient.signIn.social({
			provider: "google", // or any other provider id
			callbackURL: "/",
		})
	}
	return (
		<Button type="button" onClick={handleLogin}>
			<FcGoogle /> sign in with google
		</Button>
	)
}
