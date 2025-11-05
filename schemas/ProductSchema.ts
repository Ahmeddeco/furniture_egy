import { z } from 'zod';
import { SizeSchema } from '../inputTypeSchemas/SizeSchema'
import { CategorySchema } from '../inputTypeSchemas/CategorySchema'

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  size: SizeSchema,
  category: CategorySchema,
  id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number(),
  mainImage: z.string(),
  images: z.string().array(),
  description: z.string(),
  factoryId: z.string(),
  modelId: z.string(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
