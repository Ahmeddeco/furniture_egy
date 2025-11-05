import { z } from 'zod';

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

export const ReviewSchema = z.object({
  id: z.string(),
  review: z.string(),
  userId: z.string(),
  productId: z.string(),
})

export type Review = z.infer<typeof ReviewSchema>

export default ReviewSchema;
