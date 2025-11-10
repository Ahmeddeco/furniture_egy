import { z } from 'zod';

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  discount: z.number(),
  quantity: z.number(),
  mainImage: z.string(),
  images: z.string().array(),
  description: z.string(),
  factoryId: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
