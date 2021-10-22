export interface IExtendedAttributesCA {
  /**
   * @description {@linkcode IExtendedAttributesCA.CIRALegalType}
   * Legal Type of Registrant Contact
   */
  CIRALegalType: IExtendedAttributesCA.CIRALegalType;

  /**
   * @description {@linkcode IExtendedAttributesCA.CIRAWhoisDisplay}
   * Individuals (CCT, RES, ABO, LGR) may keep their Registrant contact information private in CIRA’s Whois; non-individuals must show their full Registrant information.
   */
  CIRAWhoisDisplay: IExtendedAttributesCA.CIRAWhoisDisplay;

  /**
   * @description {@linkcode IExtendedAttributesCA.CIRAAgreementVersion}
   * Version of the CIRA Registrant Agreement to which Registrant is agreeing.
   */
  CIRAAgreementVersion: IExtendedAttributesCA.CIRAAgreementVersion;

  /**
   * @description {@linkcode IExtendedAttributesCA.CIRAAgreementValue}
   * This value should be Y (agreed to agreement) for the domain to be registered. Passing other values will fail the registration.
   */
  CIRAAgreementValue: IExtendedAttributesCA.CIRAAgreementValue;

  /**
   * @description {@linkcode IExtendedAttributesCA.CIRALanguage}
   * Language in which to communicate with he contact.
   * @default en
   */
  CIRALanguage?: IExtendedAttributesCA.CIRALanguage;
}

export namespace IExtendedAttributesCA {
  /**
   * * CCO represents a Corporation
   * * CCT represents a Canadian citizen
   * * RES represents a Canadian resident
   * * GOV represents a Government entity
   * * EDU represents an Educational
   * * ASS represents a Unincorporated Association
   * * HOP represents a Hospital
   * * PRT represents a Partnership
   * * TDM represents a Trade-mark
   * * TRD represents a Trade Union
   * * PLT represents a Political Party
   * * LAM represents Libraries, Archives and Museums
   * * TRS represents a Trust
   * * ABO represents Aboriginal Peoples
   * * INB represents Indian Band
   * * LGR represents Legal Representative
   * * OMK represents an Official Mark
   * * MAJ represents The Queen.
   */
  export type CIRALegalType =
    | 'ABO'
    | 'ASS'
    | 'CCO'
    | 'CCT'
    | 'EDU'
    | 'GOV'
    | 'HOP'
    | 'INB'
    | 'LAM'
    | 'LGR'
    | 'MAJ'
    | 'OMK'
    | 'PLT'
    | 'PRT'
    | 'RES'
    | 'TDM'
    | 'TRD'
    | 'TRS';

    export type CIRAWhoisDisplay = 'Full' | 'Private';

    export type CIRAAgreementVersion = '2.0';

    export type CIRAAgreementValue = 'Y';

    export type CIRALanguage = 'en' | 'fr';
}
