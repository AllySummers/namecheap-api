export interface IExtendedAttributesORGUKRequiredCompanyID {
  /**
   * @description {@linkcode IExtendedAttributesORGUK.ORGUKLegalTypeRequired}
   * Legal Type of Registrant Contact
   */
  ORGUKLegalType: IExtendedAttributesORGUK.ORGUKLegalTypeRequired;

  /**
   * @description Company Identification Number
   */
  ORGUKCompanyID: string;

  /**
   * @description Company or Person the domain is registered for
   */
  ORGUKRegisteredfor: string;
}

export interface IExtendedAttributesORGUKNotRequiredCompanyID {
  /**
   * @description {@linkcode IExtendedAttributesORGUK.ORGUKLegalTypeNotRequired}
   * Legal Type of Registrant Contact
   */
  ORGUKLegalType: IExtendedAttributesORGUK.ORGUKLegalTypeNotRequired;

  /**
   * @description Company Identification Number
   */
  ORGUKCompanyID?: string;

  /**
   * @description Company or Person the domain is registered for
   */
  ORGUKRegisteredfor: string;
}

/**
 * {@linkcode IExtendedAttributesORGUKNotRequiredCompanyID}
 * {@linkcode IExtendedAttributesORGUKRequiredCompanyID}
 */
export type IExtendedAttributesORGUK = IExtendedAttributesORGUKNotRequiredCompanyID | IExtendedAttributesORGUKRequiredCompanyID;

export namespace IExtendedAttributesORGUK {
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
  export type ORGUKLegalType = ORGUKLegalTypeNotRequired | ORGUKLegalTypeRequired;

  export type ORGUKLegalTypeNotRequired =
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

  export type ORGUKLegalTypeRequired = 'LLP' | 'LTD' | 'PLC' | 'RCHAR';
}
