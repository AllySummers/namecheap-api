export interface IExtendedAttributesDE {
  /**
   * @description {@linkcode IExtendedAttributesDE.DEConfirmAddress}
   * To confirm the Administrative address is a valid German address
   */
  DEConfirmAddress: IExtendedAttributesDE.DEConfirmAddress;

  /**
   * @description {@linkcode IExtendedAttributesDE.DEAgreeDelete}
   * To agree the renewal terms for the domain name
   */
   DEAgreeDelete: IExtendedAttributesDE.DEAgreeDelete;
}

export namespace IExtendedAttributesDE {
  export type DEConfirmAddress = 'DE';

  export type DEAgreeDelete = 'No' | 'Yes';
}
