import { z } from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id','createdAt','status','total','userId']);

export default OrderScalarFieldEnumSchema;
