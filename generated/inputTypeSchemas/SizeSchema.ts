import { z } from 'zod';

export const SizeSchema = z.enum(['lg','xl','xs']);

export type SizeType = `${z.infer<typeof SizeSchema>}`

export default SizeSchema;
