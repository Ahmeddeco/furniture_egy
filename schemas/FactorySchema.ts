import { z } from 'zod';

/////////////////////////////////////////
// FACTORY SCHEMA
/////////////////////////////////////////

export const FactorySchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string().nullish(),
  country: z.string().nullish(),
  state: z.string().nullish(),
  city: z.string().nullish(),
  logo: z.string().nullish(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Factory = z.infer<typeof FactorySchema>

export default FactorySchema;
