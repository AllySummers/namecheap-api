export interface IExtendedAttributesORGAU {
  /**
   * @description Id of the registrant
   */
   ORGAURegistrantId: string;

  /**
   * @description {@linkcode IExtendedAttributesORGAU.ORGAURegistrantIdType}
   * The registrant type
   */
   ORGAURegistrantIdType: IExtendedAttributesORGAU.ORGAURegistrantIdType;
}

export namespace IExtendedAttributesORGAU {
  /**
   * * ABN represents Australian Business Number
   * * ACN represents Australian Company Number
   * * RBN represents Business Registration Number
   * * TM represents a Trademark Number.
   */
  export type ORGAURegistrantIdType = 'ABN' | 'ACN' | 'RBN' | 'TM';
}
