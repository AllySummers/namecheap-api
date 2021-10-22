import { GetEmailForwarding } from './get-email-forwarding.constant';
import { GetHosts } from './get-hosts.constant';
import { GetList } from './get-list.constant';
import { SetCustom } from './set-custom.constant';
import { SetDefault } from './set-default.constant';
import { SetEmailForwarding } from './set-email-forwarding.constant';
import { SetHosts } from './set-hosts.constant';

export const DNS = {
  GetEmailForwarding,
  GetHosts,
  GetList,
  SetCustom,
  SetDefault,
  SetEmailForwarding,
  SetHosts
} as const;
