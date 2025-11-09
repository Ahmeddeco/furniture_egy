'use server'

import { prisma } from "@/lib/prisma"
import FactorySchema from "@/schemas/FactorySchema"
import ModelSchema from "@/schemas/ModelSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"

/* ---------------------------- addFactoryAction ---------------------------- */
export const addModelAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: ModelSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    const existModel = await prisma.model.findUnique({
      where: { title: submission.value.title! }
    })
    if (!existModel) {
      await prisma.model.create({
        data: {
          title: submission.value.title,
          factoryId: submission.value.factoryId,
          styleId: submission.value.styleId
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
  redirect("/server/models")
}

/* ---------------------------- editModelAction --------------------------- */
export const editModelAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: ModelSchema,
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }
  try {
    await prisma.model.update({
      where: {
        id: submission.value.id!
      },
      data: {
        title: submission.value.title,
        factoryId: submission.value.factoryId,
        styleId: submission.value.styleId
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/models")
}

/* ---------------------------- deleteModelAction --------------------------- */
export const deleteModelAction = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await prisma.model.delete({
      where: {
        id: id as string
      }
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/models")
}