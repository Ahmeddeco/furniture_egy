import RoleSchema from '@/generated/inputTypeSchemas/RoleSchema'
import { z } from 'zod'

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string().nullish(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  mobile: z.string().nullish(),
  country: z.string().nullish(),
  state: z.string().nullish(),
  city: z.string().nullish(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema
