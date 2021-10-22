import { Create } from './create.constant';
import { GetList } from './get-list.constant';
import { GetStatus } from './get-status.constant';
import { UpdateStatus } from './update-status.constant';

export const Transfer = {
  Create,
  GetList,
  GetStatus,
  UpdateStatus
} as const;
