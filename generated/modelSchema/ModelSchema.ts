import { z } from 'zod';

/////////////////////////////////////////
// MODEL SCHEMA
/////////////////////////////////////////

export const ModelSchema = z.object({
  id: z.string(),
  title: z.string(),
  factoryId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  productId: z.string(),
})

export type Model = z.infer<typeof ModelSchema>

export default ModelSchema;
