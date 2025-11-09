import { z } from 'zod'

export const ModelSchema = z.object({
  id: z.string().nullish(),
  title: z.string(),
  factoryId: z.string(),
  styleId: z.string(),
})

export type Model = z.infer<typeof ModelSchema>

export default ModelSchema
