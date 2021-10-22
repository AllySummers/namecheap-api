import { Address } from './address';
import { ChangePassword } from './change-password.constant';
import { CreateAddFundsRequest } from './create-add-funds-request.constant';
import { GetAddFundsStatus } from './get-add-funds-status.constant';
import { GetBalances } from './get-balances.constant';
import { GetPricing } from './get-pricing.constant';
import { Login } from './login.constant';
import { ResetPassword } from './reset-password.constant';
import { Update } from './update.constant';



export const Users = {
  GetPricing,
  GetBalances,
  Login,
  Update,
  ResetPassword,
  Address,
  GetAddFundsStatus,
  CreateAddFundsRequest,
  ChangePassword
} as const;
