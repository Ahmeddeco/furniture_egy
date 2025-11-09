import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','mobile','country','state','city','role','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
