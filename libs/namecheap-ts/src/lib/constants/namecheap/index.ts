import { Domains } from './domains';
import { SSL } from './ssl';
import { Users } from './users';
import { WhoisGuard } from './whois-guard';

export const NameCheap = {
  Domains,
  SSL,
  Users,
  WhoisGuard
} as const;
