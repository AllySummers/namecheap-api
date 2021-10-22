export interface IExtendedAttributesMEUKRequiredCompanyID {
  /**
   * @description {@linkcode IExtendedAttributesMEUK.MEUKLegalTypeRequired}
   * Legal Type of Registrant Contact
   */
  MEUKLegalType: IExtendedAttributesMEUK.MEUKLegalTypeRequired;

  /**
   * @description Company Identification Number
   */
  MEUKCompanyID: string;

  /**
   * @description Company or Person the domain is registered for
   */
  MEUKRegisteredfor: string;
}

export interface IExtendedAttributesMEUKNotRequiredCompanyID {
  /**
   * @description {@linkcode IExtendedAttributesMEUK.MEUKLegalTypeNotRequired}
   * Legal Type of Registrant Contact
   */
  MEUKLegalType: IExtendedAttributesMEUK.MEUKLegalTypeNotRequired;

  /**
   * @description Company Identification Number
   */
  MEUKCompanyID?: string;

  /**
   * @description Company or Person the domain is registered for
   */
  MEUKRegisteredfor: string;
}

/**
 * {@linkcode IExtendedAttributesMEUKNotRequiredCompanyID}
 * {@linkcode IExtendedAttributesMEUKRequiredCompanyID}
 */
export type IExtendedAttributesMEUK = IExtendedAttributesMEUKNotRequiredCompanyID | IExtendedAttributesMEUKRequiredCompanyID;

export namespace IExtendedAttributesMEUK {
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
  export type MEUKLegalType = MEUKLegalTypeNotRequired | MEUKLegalTypeRequired;

  export type MEUKLegalTypeNotRequired =
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

  export type MEUKLegalTypeRequired = 'LLP' | 'LTD' | 'PLC' | 'RCHAR';
}
