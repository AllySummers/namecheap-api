import { Create } from './create.constant';
import { Delete } from './delete.constant';
import { GetInfo } from './get-info.constant';
import { GetList } from './get-list.constant';
import { SetDefault } from './set-default.constant';
import { Update } from './update.constant';

export const Address = {
  Create,
  Delete,
  GetInfo,
  GetList,
  SetDefault,
  Update
} as const;
