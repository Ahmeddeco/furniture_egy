import { z } from 'zod';

export const LikeSchema = z.object({
  id: z.string(),
  userId: z.string().nullish(),
  productId: z.string().nullish(),
  createdAt: z.date(),
})

export type Like = z.infer<typeof LikeSchema>

export default LikeSchema;
