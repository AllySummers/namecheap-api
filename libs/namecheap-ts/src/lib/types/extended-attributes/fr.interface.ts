export interface IExtendedAttributesFRIndividual {
  /**
   * @description Required only when FRLegalType=Individual
   */
  FRRegistrantBirthDate: string;

  /**
   * @description Required only when FRLegalType=Individual
   */
  FRRegistrantBirthplace: string;

  /**
   * @description Required only when FRLegalType=Company.
   * Companies with a European trademark:For companies with a European trademark can additionally add their trademark number using this extension.
   */
  FRRegistrantTradeNumber?: string;

  /**
   * @description Required only when FRLegalType=Company.
   * The DUNS number is a nine-digit number, issued by Dun Bradstreet. DUNS is the abbreviation of Data Universal Numbering System. Companies with a valid DUNS number are still obliged having their head office in the territory of the European Union. The DUNS number can be provided using this extension.
   */
  FRRegistrantDunsNumber?: string;

  /**
   * @description Required only when FRLegalType=Company.
   * Companies with a local identifier specific to a country of the European Economic Area can provide their local identifier using this extension.
   */
  FRRegistrantLocalId?: string;

  /**
   * @description Required only when FRLegalType=Company.
   * French associations listed with the Journal Officiel de la République Francaise - The official gazette of the French Republic: The Journal Official Associations publishes notices of creations, breakup or substantial changes with nonprofit associations in France. Using the website http://www.societe.com and the database they provide, query for the respective data below to register a .FR domain name. - The date of declaration of the association in the form YYYY-MM-DD.
   */
  FRRegistrantJoDateDec?: string;

  /**
   * @description Required only when FRLegalType=Company.
   * The date of publication in the Journal Official in the form YYYY-MM-DD
   */
  FRRegistrantJoDatePub?: string;

  /**
   * @description Required only when FRLegalType=Company.
   * The number of the Journal Official
   */
  FRRegistrantJoNumber?: string;

  /**
   * @description Required only when FRLegalType=Company.
   * The page of the announcement in the Journal Official
   */
  FRRegistrantJoPage?: string;

  /**
   * @description Registrant type
   */
  FRLegalType: 'Individual';
}

export interface IExtendedAttributesFRCompany {
  /**
   * @description Required only when FRLegalType=Individual
   */
  FRRegistrantBirthDate?: string;

  /**
   * @description Required only when FRLegalType=Individual
   */
  FRRegistrantBirthplace?: string;

  /**
   * @description Required only when FRLegalType=Company.
   * Companies with a European trademark:For companies with a European trademark can additionally add their trademark number using this extension.
   */
  FRRegistrantTradeNumber: string;

  /**
   * @description Required only when FRLegalType=Company.
   * The DUNS number is a nine-digit number, issued by Dun Bradstreet. DUNS is the abbreviation of Data Universal Numbering System. Companies with a valid DUNS number are still obliged having their head office in the territory of the European Union. The DUNS number can be provided using this extension.
   */
  FRRegistrantDunsNumber: string;

  /**
   * @description Required only when FRLegalType=Company.
   * Companies with a local identifier specific to a country of the European Economic Area can provide their local identifier using this extension.
   */
  FRRegistrantLocalId: string;

  /**
   * @description Required only when FRLegalType=Company.
   * French associations listed with the Journal Officiel de la République Francaise - The official gazette of the French Republic: The Journal Official Associations publishes notices of creations, breakup or substantial changes with nonprofit associations in France. Using the website http://www.societe.com and the database they provide, query for the respective data below to register a .FR domain name. - The date of declaration of the association in the form YYYY-MM-DD.
   */
  FRRegistrantJoDateDec: string;

  /**
   * @description Required only when FRLegalType=Company.
   * The date of publication in the Journal Official in the form YYYY-MM-DD
   */
  FRRegistrantJoDatePub: string;

  /**
   * @description Required only when FRLegalType=Company.
   * The number of the Journal Official
   */
  FRRegistrantJoNumber: string;

  /**
   * @description Required only when FRLegalType=Company.
   * The page of the announcement in the Journal Official
   */
  FRRegistrantJoPage: string;

  /**
   * @description Registrant type
   */
  FRLegalType: 'Company';
}

/**
 * {@linkcode IExtendedAttributesFRIndividual}
 * {@linkcode IExtendedAttributesFRCompany}
 */
export type IExtendedAttributesFR =
  | IExtendedAttributesFRCompany
  | IExtendedAttributesFRIndividual;

export namespace IExtendedAttributesFR {
  export type FRLegalType = 'Company' | 'Individual';
}
