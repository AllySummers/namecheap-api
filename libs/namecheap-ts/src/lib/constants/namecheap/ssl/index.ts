import { Activate } from './activate.constant';
import { Create } from './create.constant';
import { GetApproverEmailList } from './get-approver.email-list.constant';
import { GetInfo } from './get-info.constant';
import { GetList } from './get-list.constant';
import { ParseCSR } from './parse-csr.constant';
import { PurchaseMoreSans } from './purchase-more-sans.constant';
import { ReIssue } from './re-issue.constant';
import { Renew } from './renew.constant';
import { ResendApproverEmail } from './resend-approver-email.constant';
import { ResendFullfillmentEmail } from './resend-fullfillment-email.constant';
import { RevokeCertificate } from './revoke-certificate.constant';

export const SSL = {
  Activate,
  Create,
  GetApproverEmailList,
  GetInfo,
  GetList,
  ParseCSR,
  PurchaseMoreSans,
  ReIssue,
  Renew,
  ResendApproverEmail,
  ResendFullfillmentEmail,
  RevokeCertificate
} as const;
