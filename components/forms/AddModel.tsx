"use client"

import { useForm } from "@conform-to/react"
import { parseWithZod } from "@conform-to/zod"
import Form from "next/form"
import { useActionState } from "react"
import { Field, FieldError, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import SubmitButton from "../shared/SubmitButton"
import { addModelAction } from "@/actions/modelAction"
import ModelSchema from "@/schemas/ModelSchema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AllFactoriesForModel, AllStylesForModel } from "@/dl/model"

type Props = {
	factories: AllFactoriesForModel
	styles: AllStylesForModel
}

export default function AddModel({ factories, styles }: Props) {
	const [lastResult, action] = useActionState(addModelAction, undefined)
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
			{/* ---------------------------------- title ---------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.title.name}>{fields.title.name}</FieldLabel>
				<Input
					type="text"
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={fields.title.initialValue}
					placeholder="Arkan"
				/>
				<FieldError>{fields.title.errors}</FieldError>
			</Field>

			{/* ------------------------------- factoryId ------------------------------- */}
			<Field>
				<FieldLabel htmlFor={fields.factoryId.name}>{fields.factoryId.name}</FieldLabel>
				<Select key={fields.factoryId.key} name={fields.factoryId.name} defaultValue={fields.factoryId.initialValue}>
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
				<Select key={fields.styleId.key} name={fields.styleId.name} defaultValue={fields.styleId.initialValue}>
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

			<SubmitButton text={"add model"} />
		</Form>
	)
}
