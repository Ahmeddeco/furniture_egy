import { z } from 'zod';

export const RoleSchema = z.enum(['admin','seller','user']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
