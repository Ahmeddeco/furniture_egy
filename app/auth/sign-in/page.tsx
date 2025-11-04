"use client"

import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { authClient } from "@/lib/auth-client"
import { FaXTwitter } from "react-icons/fa6"

export default function SignInPage() {
	const signinWithGoogle = async () => {
		await authClient.signIn.social({
			provider: "google", // or any other provider id
			callbackURL: "/",
		})
	}
	const signinWithTwitter = async () => {
		await authClient.signIn.social({
			provider: "twitter", // or any other provider id
			callbackURL: "/",
		})
	}
	return (
		<div className="flex items-center  gap-4">
			<Button type="button" onClick={signinWithGoogle}>
				<FcGoogle /> sign in with google
			</Button>
			<Button type="button" onClick={signinWithTwitter}>
				<FaXTwitter /> sign in with twitter
			</Button>
		</div>
	)
}
