"use client"

import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Form from "next/form"
import { useActionState } from "react"
import { Field, FieldError, FieldLabel } from "../ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "../ui/input"
import SubmitButton from "../shared/SubmitButton"
import { editModelAction } from "@/actions/modelAction"
import ModelSchema from "@/schemas/ModelSchema"
import { AllFactoriesForModel, AllStylesForModel, OneModel } from "@/dl/model"

type Props = {
	data: OneModel
	styles: AllStylesForModel
	factories: AllFactoriesForModel
}

export default function EditModel({ data, factories, styles }: Props) {
	const [lastResult, action] = useActionState(editModelAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ModelSchema })
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	})
	return (
		<Form id={form.id} action={action} onSubmit={form.onSubmit} className="space-y-6">
			<Input type="hidden" name="id" value={data?.data?.id} />

			{/* ---------------------------------- title ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.title.name}>{fields.title.name}</FieldLabel>
				<Input
					type="text"
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={data?.data?.title ?? ""}
					placeholder="Arkan"
				/>
				<FieldError>{fields.title.errors}</FieldError>
			</Field>

			{/* ------------------------------- factoryId ------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.factoryId.name}>{fields.factoryId.name}</FieldLabel>
				<Select key={fields.factoryId.key} name={fields.factoryId.name} defaultValue={data?.data?.factoryId}>
					<SelectTrigger>
						<SelectValue placeholder="Kanaba" />
					</SelectTrigger>
					<SelectContent>
						{factories?.map(({ id, name }) => (
							<SelectItem key={id} value={id}>
								{name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.factoryId.errors}</FieldError>
			</Field>

			{/* ------------------------------- styleId ------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.styleId.name}>{fields.styleId.name}</FieldLabel>
				<Select key={fields.styleId.key} name={fields.styleId.name} defaultValue={data?.data?.styleId}>
					<SelectTrigger>
						<SelectValue placeholder="Kanaba" />
					</SelectTrigger>
					<SelectContent>
						{styles?.map(({ id, title }) => (
							<SelectItem key={id} value={id}>
								{title}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError>{fields.styleId.errors}</FieldError>
			</Field>

			<SubmitButton text={"edit model"} />
		</Form>
	)
}
