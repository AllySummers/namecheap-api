export interface IExtendedAttributesNETAU {
  /**
   * @description Id of the registrant
   */
   NETAURegistrantId: string;

  /**
   * @description {@linkcode IExtendedAttributesNETAU.NETAURegistrantIdType}
   * The registrant type
   */
   NETAURegistrantIdType: IExtendedAttributesNETAU.NETAURegistrantIdType;
}

export namespace IExtendedAttributesNETAU {
  /**
   * * ABN represents Australian Business Number
   * * ACN represents Australian Company Number
   * * RBN represents Business Registration Number
   * * TM represents a Trademark Number.
   */
  export type NETAURegistrantIdType = 'ABN' | 'ACN' | 'RBN' | 'TM';
}
