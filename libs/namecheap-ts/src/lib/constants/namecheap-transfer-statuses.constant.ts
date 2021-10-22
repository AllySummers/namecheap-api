export const NamecheapTransfer = {
  '-4': 'Canceled - Domain is locked at current registrar, or is not yet 60 days old',
  '-22': ['Canceled - Invalid entry', 'Waiting for EPP Transfer Code from Customer'],
  '-1': ['EPP Provided. Queued for Transfer', 'Queued for submission or Queued for Transfer or EPP Provided'],
  '-5': 'Authorization mail will be sent shortly',
  '-2': 'Resubmitted - Queued for transfer',
  '-202': 'Unable to retrieve expiration date from Whois database',
} as const;
