import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','mobile','country','state','city','role','createdAt','updatedAt','productId']);

export default UserScalarFieldEnumSchema;
