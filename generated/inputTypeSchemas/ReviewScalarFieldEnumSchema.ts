import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id','review','userId','productId']);

export default ReviewScalarFieldEnumSchema;
