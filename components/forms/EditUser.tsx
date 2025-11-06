"use client"

import { editUserAction } from "@/actions/userAction"
import Form from "next/form"
import { useActionState } from "react"
import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import UserSchema from "@/schemas/UserSchema"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "../ui/input"
import SubmitButton from "../shared/SubmitButton"
import CountryInput from "../shared/CountryInput"
import Phone from "../shared/Phone"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import RoleSchema from "@/generated/inputTypeSchemas/RoleSchema"
import { UploadOneImagesDropZone } from "../shared/UploadImagesDropZone"
import { User } from "@/generated/modelSchema/UserSchema"

type data = {
	data: User
}

export default function EditUser(data: data) {
	console.log("data from EditUser", data)

	const [lastResult, action] = useActionState(editUserAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: UserSchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})

	return (
		<Form
			id={form.id}
			action={action}
			onSubmit={form.onSubmit}
			// noValidate
			className="space-y-6"
		>
			<Input type="hidden" name="id" value={data.data.id} />
			{/* ---------------------------------- name ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.name.name}>{fields.name.name}</FieldLabel>
				<Input
					type="text"
					key={fields.name.key}
					name={fields.name.name}
					defaultValue={data.data.name ?? ""}
					placeholder="Ahmed Mohamed"
				/>
				<FieldError>{fields.name.errors}</FieldError>
			</Field>

			{/* ---------------------------------- email --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.email.name}>{fields.email.name}</FieldLabel>
				<Input
					type="email"
					key={fields.email.key}
					name={fields.email.name}
					defaultValue={data.data.email ?? ""}
					placeholder="something@email.com"
				/>
				<FieldError>{fields.name.errors}</FieldError>
			</Field>

			{/* --------------------------------- mobile --------------------------------- */}
			<Phone
				key={fields.mobile.key}
				name={fields.mobile.name}
				defaultValue={data.data.mobile ?? ""}
				errors={fields.mobile.errors}
			/>

			{/* ---------------------------------- role ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.role.name}>{fields.role.name}</FieldLabel>
				<Select key={fields.role.key} name={fields.role.name} defaultValue={data.data.role}>
					<SelectTrigger>
						<SelectValue placeholder="Role" />
					</SelectTrigger>
					<SelectContent>
						{Object.values(RoleSchema.Enum).map((role) => (
							<SelectItem key={role} value={role}>
								{role}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.role.errors}</FieldError>
			</Field>

			{/* ------------------------------ CountryInput ------------------------------ */}
			<Field>
				<CountryInput
					userCity={data.data.city ?? ""}
					userState={data.data.state ?? ""}
					userCountry={data.data.country ?? ""}
				/>
			</Field>

			{/* ---------------------------------- image --------------------------------- */}
			<UploadOneImagesDropZone
				dbImage={data.data.image ?? ""}
				imageKey={fields.image.key}
				imageName={fields.image.name}
				label={fields.image.name}
				errors={fields.image.errors}
			/>

			<SubmitButton text={"edit user"} />
		</Form>
	)
}
