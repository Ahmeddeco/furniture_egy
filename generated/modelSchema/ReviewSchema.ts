import { z } from 'zod';

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

export const ReviewSchema = z.object({
  id: z.string(),
  userId: z.string(),
  productId: z.string(),
  review: z.string(),
  rating: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Review = z.infer<typeof ReviewSchema>

export default ReviewSchema;
