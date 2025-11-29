import { z } from 'zod';

export const LikeScalarFieldEnumSchema = z.enum(['id','userId','productId','createdAt']);

export default LikeScalarFieldEnumSchema;
