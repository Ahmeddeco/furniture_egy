import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id','userId','productId','review','rating','createdAt','updatedAt']);

export default ReviewScalarFieldEnumSchema;
