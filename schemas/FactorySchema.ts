import { z } from 'zod'


export const FactorySchema = z.object({
  id: z.string().nullish(),
  name: z.string(),
  email: z.string(),
  phone: z.string().nullish(),
  country: z.string().nullish(),
  state: z.string().nullish(),
  city: z.string().nullish(),
  logo: z.string().nullish(),
})

export type Factory = z.infer<typeof FactorySchema>

export default FactorySchema
