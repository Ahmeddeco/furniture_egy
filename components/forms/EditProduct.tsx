"use client"

import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Form from "next/form"
import { useActionState } from "react"
import { Field, FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { UploadManyImagesDropZone, UploadOneImagesDropZone } from "../shared/UploadImagesDropZone"
import SubmitButton from "../shared/SubmitButton"
import { editProductAction } from "@/actions/productAction"
import ProductSchema from "@/schemas/ProductSchema"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
	factories:
		| {
				id: string
				name: string
		  }[]
		| undefined
	users:
		| {
				id: string | null
				name: string | null
		  }[]
		| undefined
	models:
		| {
				id: string | null
				title: string | null
		  }[]
		| undefined
	data:
		| ({
				model: {
					id: string
					title: string
				}
				seller: {
					id: string
					name: string | null
				}
				factory: {
					id: string
					name: string
				}
		  } & {
				id: string
				createdAt: Date
				updatedAt: Date
				title: string
				description: string
				price: number
				discount: number
				quantity: number
				factoryId: string
				userId: string
				modelId: string
				mainImage: string
				images: string[]
		  })
		| null
		| undefined
}

export default function EditProduct({ factories, models, users, data }: Props) {
	const [lastResult, action] = useActionState(editProductAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProductSchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})

	console.log("product from EditProductPage", data)

	return (
		<Form id={form.id} action={action} onSubmit={form.onSubmit} className="space-y-6">
			<Input type="hidden" name="id" value={data?.id} />

			{/* ---------------------------------- title --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.title.name}>{fields.title.name}</FieldLabel>
				<Input
					type="text"
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={data?.title ?? ""}
					placeholder="Modern Sofa"
				/>
				<FieldError>{fields.title.errors}</FieldError>
			</Field>

			{/* ----------------------------- description ----------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.description.name}>{fields.description.name}</FieldLabel>
				<Textarea key={fields.description.key} name={fields.description.name} defaultValue={data?.description ?? ""} />
				<FieldError>{fields.description.errors}</FieldError>
			</Field>

			{/* ---------------------------------- price --------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.price.name}>{fields.price.name} $</FieldLabel>
				<Input
					type="number"
					key={fields.price.key}
					name={fields.price.name}
					defaultValue={data?.price ?? ""}
					placeholder="24 USD"
				/>
				<FieldError>{fields.price.errors}</FieldError>
			</Field>

			{/* ------------------------------- discount ------------------------------ */}
			<Field>
				<FieldLabel htmlFor={fields.discount.name}>{fields.discount.name} %</FieldLabel>
				<Input
					type="number"
					key={fields.discount.key}
					name={fields.discount.name}
					defaultValue={data?.discount ?? ""}
					placeholder="15"
				/>
				<FieldError>{fields.discount.errors}</FieldError>
			</Field>

			{/* ------------------------------- quantity ------------------------------ */}
			<Field>
				<FieldLabel htmlFor={fields.quantity.name}>{fields.quantity.name}</FieldLabel>
				<Input
					type="number"
					key={fields.quantity.key}
					name={fields.quantity.name}
					defaultValue={data?.quantity ?? ""}
					placeholder="162"
				/>
				<FieldError>{fields.quantity.errors}</FieldError>
			</Field>

			{/* --------------------------------- factory -------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.factoryId.name}>factory</FieldLabel>
				<Select key={fields.factoryId.key} name={fields.factoryId.name} defaultValue={data?.factoryId}>
					<SelectTrigger>
						<SelectValue placeholder="Kanaba" />
					</SelectTrigger>
					<SelectContent>
						{factories?.map(({ id, name }) => (
							<SelectItem value={id} key={id}>
								{name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.factoryId.errors}</FieldError>
			</Field>

			{/* -------------------------------- seller -------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.userId.name}>seller</FieldLabel>
				<Select key={fields.userId.key} name={fields.userId.name} defaultValue={data?.userId}>
					<SelectTrigger>
						<SelectValue placeholder="Ahmed" />
					</SelectTrigger>
					<SelectContent>
						{users?.map(({ id, name }) => (
							<SelectItem value={id!} key={id}>
								{name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.userId.errors}</FieldError>
			</Field>

			{/* -------------------------------- model -------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.modelId.name}>model</FieldLabel>
				<Select key={fields.modelId.key} name={fields.modelId.name} defaultValue={data?.modelId}>
					<SelectTrigger>
						<SelectValue placeholder="Istanboly" />
					</SelectTrigger>
					<SelectContent>
						{models?.map(({ id, title }) => (
							<SelectItem value={id!} key={id}>
								{title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.modelId.errors}</FieldError>
			</Field>

			{/* ------------------------------- mainImage ------------------------------ */}
			<UploadOneImagesDropZone
				imageKey={fields.mainImage.key}
				imageName={fields.mainImage.name}
				label={fields.mainImage.name}
				errors={fields.mainImage.errors}
				dbImage={data?.mainImage}
			/>

			{/* --------------------------------- images --------------------------------- */}
			<UploadManyImagesDropZone
				imageKey={fields.images.key}
				imageName={fields.images.name}
				label={fields.images.name}
				errors={fields.images.errors}
				dbImages={data?.images}
			/>

			<SubmitButton text={"edit product"} />
		</Form>
	)
}
