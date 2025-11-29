import { z } from 'zod';

export const FavoriteSchema = z.object({
  id: z.string(),
  userId: z.string().nullish(),
  productId: z.string().nullish(),
  createdAt: z.date(),
})

export type Favorite = z.infer<typeof FavoriteSchema>

export default FavoriteSchema;
