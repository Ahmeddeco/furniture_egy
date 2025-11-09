import { z } from 'zod'

export const ReviewSchema = z.object({
  id: z.string().nullish(),
  userId: z.string(),
  productId: z.string(),
  review: z.string(),
  rating: z.number(),
})

export type Review = z.infer<typeof ReviewSchema>

export default ReviewSchema
