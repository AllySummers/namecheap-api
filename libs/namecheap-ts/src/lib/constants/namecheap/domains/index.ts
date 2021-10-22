import { Check } from './check.constant';
import { Create } from './create.constant';
import { DNS } from './dns';
import { GetContacts } from './get-contacts.constant';
import { GetInfo } from './get-info.constant';
import { GetList } from './get-list.constant';
import { GetRegistrarLock } from './get-registrar-lock';
import { GetTLDList } from './get-tld-list.constant';
import { Reactivate } from './reactivate.constant';
import { Renew } from './renew.constant';
import { SetContacts } from './set-contacts.constant';
import { SetRegistrarLock } from './set-registrar-lock';

export const Domains = {
  Check,
  Create,
  DNS,
  GetContacts,
  GetInfo,
  GetList,
  GetRegistrarLock,
  GetTLDList,
  Reactivate,
  Renew,
  SetContacts,
  SetRegistrarLock
} as const;
