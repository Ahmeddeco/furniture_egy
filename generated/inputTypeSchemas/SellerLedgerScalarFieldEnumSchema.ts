import { z } from 'zod';

export const SellerLedgerScalarFieldEnumSchema = z.enum(['id','amount','status','method','sellerId','orderItemId','factoryId','createdAt']);

export default SellerLedgerScalarFieldEnumSchema;
