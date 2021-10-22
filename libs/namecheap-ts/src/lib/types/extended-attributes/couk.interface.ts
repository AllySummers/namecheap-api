export interface IExtendedAttributesCOUKRequiredCompanyID {
  /**
   * @description {@linkcode IExtendedAttributesCOUK.COUKLegalTypeRequired}
   * Legal Type of Registrant Contact
   */
  COUKLegalType: IExtendedAttributesCOUK.COUKLegalTypeRequired;

  /**
   * @description Company Identification Number
   */
  COUKCompanyID: string;

  /**
   * @description Company or Person the domain is registered for
   */
  COUKRegisteredfor: string;
}

export interface IExtendedAttributesCOUKNotRequiredCompanyID {
  /**
   * @description {@linkcode IExtendedAttributesCOUK.COUKLegalTypeNotRequired}
   * Legal Type of Registrant Contact
   */
  COUKLegalType: IExtendedAttributesCOUK.COUKLegalTypeNotRequired;

  /**
   * @description Company Identification Number
   */
  COUKCompanyID?: string;

  /**
   * @description Company or Person the domain is registered for
   */
  COUKRegisteredfor: string;
}

/**
 * {@linkcode IExtendedAttributesCOUKNotRequiredCompanyID}
 * {@linkcode IExtendedAttributesCOUKRequiredCompanyID}
 */
export type IExtendedAttributesCOUK = IExtendedAttributesCOUKNotRequiredCompanyID | IExtendedAttributesCOUKRequiredCompanyID;

export namespace IExtendedAttributesCOUK {
  /**
   * * CRC represents UK Corporation by Royal Charter
   * * FCORP represents Foreign Organization
   * * FIND represents a Non-UK individual
   * * FOTHER represents Other Foreign Organizations.
   * * GOV represents UK Government Body
   * * IND represents a UK individual
   * * IP represents UK Industrial/Provident Registered Company
   * * LLP represents UK Limited Liability Partnership*
   * * LTD represents a UK Limited Company*
   * * OTHER represents UK Entity (other)
   * * PLC represents a UK Public Limited Company*
   * * PTNR represents UK Partnership
   * * RCHAR represents UK Registered Charity*
   * * SCH represents UK School
   * * STAT represents UK Statutory Body FIND
   * * STRA represents UK Sole Trader
   */
  export type COUKLegalType = COUKLegalTypeNotRequired | COUKLegalTypeRequired;

  export type COUKLegalTypeNotRequired =
    | 'CRC'
    | 'FCORP'
    | 'FIND'
    | 'FOTHER'
    | 'FOTHER'
    | 'GOV'
    | 'IND'
    | 'IP'
    | 'OTHER'
    | 'PTNR'
    | 'SCH'
    | 'STAT'
    | 'STRA';

  export type COUKLegalTypeRequired = 'LLP' | 'LTD' | 'PLC' | 'RCHAR';
}
