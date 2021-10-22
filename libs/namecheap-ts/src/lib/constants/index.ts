import { Authentication } from './authentication-error-codes.constant';
import { NamecheapTransfer } from './namecheap-transfer-statuses.constant';
import { ProviderTransfer } from './provider-transfer-statuses.constant';
import { NameCheap } from './namecheap';
import { Domains } from './domains';

export const ErrorCodes = {
  Authentication,
  NamecheapTransfer,
  ProviderTransfer,
  NameCheap,
  Domains
} as const;
