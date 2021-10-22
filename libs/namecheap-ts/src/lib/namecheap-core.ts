import type { INameCheapConfig } from './types/namecheap-config.interface';

export class NameCheap {
  public sandbox: boolean;
  public userName: string;
  public apiUser: string;
  public clientIp: string;
  public apiKey: string;

  constructor( { sandbox = false, ...config }: INameCheapConfig ) {
    this.sandbox = sandbox;
    this.apiKey = config.apiKey;
    this.apiUser = config.apiUser;
    this.clientIp = config.clientIp;
    this.userName = config.userName;
  }



}

