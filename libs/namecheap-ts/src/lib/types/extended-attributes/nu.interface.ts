export interface IExtendedAttributesUS {
  /**
   * @description Personal Identification Number
   *
   * For NUOrgNo parameter, the Swedish Resident, should provide a valid
   * * Personal Identification Number, if registrant is an individual
   * * Organization Identification Number, if the registrant is a corporation registered in Sweden.
   */
   NUOrgNo: string;

  /**
   * @description Swedish Organization in addition to Corporation ID, user can also optionally provide additional Tax/VAT Number.
   */
   NUvatNo?: string;
}
