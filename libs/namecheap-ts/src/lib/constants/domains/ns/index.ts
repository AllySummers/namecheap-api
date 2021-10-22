import { Create } from './create.constant';
import { Delete } from './delete.constant';
import { GetInfo } from './get-info.constant';
import { Update } from './update.constant';

export const NS = {
  Create,
  Delete,
  Update,
  GetInfo
} as const;
