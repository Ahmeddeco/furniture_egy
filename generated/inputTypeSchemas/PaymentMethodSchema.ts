import { z } from 'zod';

export const PaymentMethodSchema = z.enum(['credit','paypal','cash']);

export type PaymentMethodType = `${z.infer<typeof PaymentMethodSchema>}`

export default PaymentMethodSchema;
