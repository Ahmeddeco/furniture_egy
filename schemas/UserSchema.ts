import RoleSchema from '@/generated/inputTypeSchemas/RoleSchema'
import { z } from 'zod'

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string().nullish(),
  name: z.string(),
  email: z.string(),
  mobile: z.string().min(8),
  country: z.string().nullish(),
  state: z.string().nullish(),
  city: z.string().nullish(),
  image: z.string(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema
