import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string().nullish(),
  title: z.string(),
  price: z.number(),
  discount: z.number(),
  quantity: z.number(),
  mainImage: z.string(),
  images: z.string().array(),
  description: z.string(),
  factoryId: z.string(),
  userId: z.string(),
  modelId: z.string(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema
