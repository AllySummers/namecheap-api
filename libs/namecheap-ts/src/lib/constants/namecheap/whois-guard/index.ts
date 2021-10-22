import { Allot } from './allot.constant';
import { ChangeEmailAdrress } from './change-email-address.constant';
import { Disable } from './disable.constant';
import { Discard } from './discard.constant';
import { Enable } from './enable.constant';
import { Unallot } from './unallot.constant';

export const WhoisGuard = {
  Allot,
  ChangeEmailAdrress,
  Disable,
  Discard,
  Enable,
  Unallot
} as const;
