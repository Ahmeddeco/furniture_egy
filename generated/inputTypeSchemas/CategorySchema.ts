import { z } from 'zod';

export const CategorySchema = z.enum(['modern','classic','industerial']);

export type CategoryType = `${z.infer<typeof CategorySchema>}`

export default CategorySchema;
