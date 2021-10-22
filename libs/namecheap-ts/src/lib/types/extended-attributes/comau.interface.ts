export interface IExtendedAttributesCOMAU {
  /**
   * @description Id of the registrant
   */
   COMAURegistrantId: string;

  /**
   * @description {@linkcode IExtendedAttributesCOMAU.COMAURegistrantIdType}
   * The registrant type
   */
   COMAURegistrantIdType: IExtendedAttributesCOMAU.COMAURegistrantIdType;
}

export namespace IExtendedAttributesCOMAU {
  /**
   * * ABN represents Australian Business Number
   * * ACN represents Australian Company Number
   * * RBN represents Business Registration Number
   * * TM represents a Trademark Number.
   */
  export type COMAURegistrantIdType = 'ABN' | 'ACN' | 'RBN' | 'TM';
}
