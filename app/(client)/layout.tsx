import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main className="min-h-dvh pt-12 lg:pt-14 px-4">{children}</main>
			<Footer />
		</>
	)
}
