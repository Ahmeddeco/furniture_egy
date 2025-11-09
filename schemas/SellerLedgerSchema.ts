import PaymentMethodSchema from '@/generated/inputTypeSchemas/PaymentMethodSchema'
import PaymentStatusSchema from '@/generated/inputTypeSchemas/PaymentStatusSchema'
import { z } from 'zod'

/////////////////////////////////////////
// SELLER LEDGER SCHEMA
/////////////////////////////////////////

export const SellerLedgerSchema = z.object({
  status: PaymentStatusSchema,
  method: PaymentMethodSchema,
  id: z.string().nullish(),
  amount: z.number(),
  sellerId: z.string(),
  orderItemId: z.string(),
  factoryId: z.string().nullish(),
  createdAt: z.date(),
})

export type SellerLedger = z.infer<typeof SellerLedgerSchema>

export default SellerLedgerSchema
