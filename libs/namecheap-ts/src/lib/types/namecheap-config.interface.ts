export interface INameCheapConfig {
  /**
   * @description Whether or not to use the sandbox API
   * @default false
   */
  sandbox?: boolean;

  /**
   * @description The Username on which a command is executed.
   * Generally, the values of ApiUser and UserName parameters are the same.
   */
  UserName: string;

  /**
   * @description Username required to access the API
   */
  ApiUser: string;

  /**
   * @description An IP address of the server from which our system receives API calls (only IPv4 can be used).
   */
  ClientIp: string;

  /**
   * @description Password required used to access the API
   */
   ApiKey: string;
}
