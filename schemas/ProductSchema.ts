import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string().nullish(),
  title: z.string(),
  description: z.string().min(10).max(1000),
  price: z.number().min(0),
  discount: z.number().min(0).max(100),
  quantity: z.number().min(0),
  factoryId: z.string(),
  userId: z.string(),
  modelId: z.string(),
  mainImage: z.string(),
  images: z.string().array(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema
