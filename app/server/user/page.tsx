import { isAdmin } from "@/functions/isAdmin"
import { MoreVertical, PhoneOff, PlusCircle, User2 } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getAllUsers } from "@/database/user"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import Form from "next/form"
import { deleteUser } from "@/actions/userAction"
import { Input } from "@/components/ui/input"

export default async function UsersPage({ searchParams }: { searchParams: Promise<{ page: string; size: string }> }) {
	await isAdmin()

	const { page, size } = await searchParams
	const pageNumber = +page > 1 ? +page : 1
	const pageSize = +size || 10
	const users = await getAllUsers(pageSize, pageNumber)

	return (
		<ServerPageCard
			icon={PlusCircle}
			title={"all users"}
			description={"All users in the database."}
			btnTitle={"add user"}
			href={"/server/user/add"}
		>
			{!users ? (
				<EmptyCard href={"/server/user/add"} linkTitle={"add user"} linkIcon={User2} />
			) : (
				<Table>
					{/* ---------------------------- TableHeader ---------------------------- */}
					<TableHeader>
						<TableRow>
							<TableHead>image</TableHead>
							<TableHead>name</TableHead>
							<TableHead>role</TableHead>
							<TableHead>email</TableHead>
							<TableHead>mobile</TableHead>
							<TableHead>address</TableHead>
							<TableHead className="text-right">settings</TableHead>
						</TableRow>
					</TableHeader>
					{/* ----------------------------- TableBody ----------------------------- */}
					<TableBody>
						{users.data.map(({ country, email, image, mobile, name, role, state, id }) => (
							<TableRow key={id}>
								<TableCell>
									<Image
										src={image ?? "/icons/noImage.svg"}
										alt={""}
										width={50}
										height={50}
										className="rounded-lg object-cover aspect-square"
									/>
								</TableCell>
								<TableCell className="capitalize">{name}</TableCell>
								<TableCell className="capitalize">{role}</TableCell>
								<TableCell>{email}</TableCell>
								<TableCell>{mobile ?? <PhoneOff />}</TableCell>
								<TableCell className="capitalize">
									{country ?? "no country"} - {state ?? "no state"}
								</TableCell>
								{/* -------------------------------- settings -------------------------------- */}
								<TableCell className="text-right">
									<DropdownMenu>
										<DropdownMenuTrigger>
											<MoreVertical />
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end" className="space-y-2">
											<DropdownMenuItem asChild>
												<Button variant={"default"} size={"full"}>
													<Link href={`/server/user/edit/${id}`}>edit</Link>
												</Button>
											</DropdownMenuItem>
											{/* ---------------------------- delete --------------------------- */}
											<DropdownMenuItem asChild>
												<Dialog>
													<DialogTrigger asChild>
														<Button variant={"destructive"} size={"full"}>
															delete
														</Button>
													</DialogTrigger>
													<DialogContent>
														<DialogHeader>
															<DialogTitle>Are you sure you want to delete this user ?</DialogTitle>
															<DialogDescription>
																This action cannot be undone. This will permanently delete this user and remove his data
																from our servers.
															</DialogDescription>
														</DialogHeader>
														<div className="flex items-center justify-between ">
															<Button asChild>
																<DialogClose>cancel</DialogClose>
															</Button>
															<Form action={deleteUser}>
																<Input type="hidden" name="id" value={id} />
																<Button variant={"destructive"} type="submit">
																	delete
																</Button>
															</Form>
														</div>
													</DialogContent>
												</Dialog>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
					{/* ---------------------------- Pagination ---------------------------- */}
					<TableCaption>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									{/* --------------------------- Previous --------------------------- */}
									{pageNumber > 1 && <PaginationPrevious href={`?size=${pageSize}&page=${pageNumber - 1}`} />}
								</PaginationItem>
								{/* ------------------------- PaginationLink ------------------------ */}
								{Array.from({ length: users.totalPages ?? 1 }).map((_, index) => (
									<PaginationItem key={index}>
										<PaginationLink href={`?size=${pageSize}&page=${index + 1}`} isActive={pageNumber === index + 1}>
											{index + 1}
										</PaginationLink>
									</PaginationItem>
								))}
								<PaginationItem>
									{/* ----------------------------- Next ----------------------------- */}
									{pageNumber < users.totalPages && (
										<PaginationNext href={`?size=${pageSize}&page=${pageNumber + 1}`} />
									)}
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</TableCaption>
				</Table>
			)}
		</ServerPageCard>
	)
}
