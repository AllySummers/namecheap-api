export interface IExtendedAttributesNOMES {
  /**
   * @description Id of the registrant
   */
  NOMESRegistrantId: string;

  /**
   * @description {@linkcode IExtendedAttributesNOMES.NOMESRegistrantIdType}
   * The registrant type
   */
  NOMESRegistrantIdType: IExtendedAttributesNOMES.NOMESRegistrantIdType;

  /**
   * @description {@linkcode IExtendedAttributesNOMES.NOMESLegalFormType}
   * The legal form type
   */
  NOMESLegalFormType: IExtendedAttributesNOMES.NOMESLegalFormType;
}

export namespace IExtendedAttributesNOMES {
  export type NOMESRegistrantIdType = 'ALIENID' | 'GENERICID' | 'VATID';

  export type NOMESLegalFormType =
    | 'Association'
    | 'CentralGovernmentBody'
    | 'CivilSociety'
    | 'CommunityofOwners'
    | 'CommunityProperty'
    | 'Consulate'
    | 'Cooperative'
    | 'DesignationofOriginSupervisoryCouncil'
    | 'EconomicInterestGroup'
    | 'Embassy'
    | 'EntityManagingNaturalAreas'
    | 'FarmPartnership,Foundation'
    | 'GeneralandLimitedPartnership'
    | 'GeneralPartnership'
    | 'Individual'
    | 'LimitedCompany'
    | 'LocalAuthority'
    | 'LocalPublicEntity'
    | 'MutualInsuranceCompany'
    | 'NationalPublicEntity'
    | 'OrderorReligiousInstitution'
    | 'Others'
    | 'PoliticalParty'
    | 'ProfessionalAssociation'
    | 'PublicLawAssociation'
    | 'PublicLimitedCompany'
    | 'RegionalGovernmentBody'
    | 'RegionalPublicEntity'
    | 'SavingsBank'
    | 'SpanishOffice'
    | 'Sports_Association'
    | 'SportsAssociation'
    | 'SportsFederation'
    | 'TemporaryAllianceofEnterprises'
    | 'TradeUnion'
    | 'WorkerownedCompany'
    | 'WorkerownedLimitedCompany';
}
