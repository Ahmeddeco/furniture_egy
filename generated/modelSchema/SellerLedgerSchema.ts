import { z } from 'zod';
import { PaymentStatusSchema } from '../inputTypeSchemas/PaymentStatusSchema'
import { PaymentMethodSchema } from '../inputTypeSchemas/PaymentMethodSchema'

/////////////////////////////////////////
// SELLER LEDGER SCHEMA
/////////////////////////////////////////

export const SellerLedgerSchema = z.object({
  status: PaymentStatusSchema,
  method: PaymentMethodSchema,
  id: z.string(),
  amount: z.number(),
  sellerId: z.string(),
  orderItemId: z.string(),
  factoryId: z.string().nullish(),
  createdAt: z.date(),
})

export type SellerLedger = z.infer<typeof SellerLedgerSchema>

export default SellerLedgerSchema;
