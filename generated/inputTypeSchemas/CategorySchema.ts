import { z } from 'zod';

export const CategorySchema = z.enum(['living','dining','bedroom','kids','kitchen']);

export type CategoryType = `${z.infer<typeof CategorySchema>}`

export default CategorySchema;
