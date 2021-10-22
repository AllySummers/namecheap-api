export interface IExtendedAttributesCOMES {
  /**
   * @description Id of the registrant
   */
  COMESRegistrantId: string;

  /**
   * @description {@linkcode IExtendedAttributesCOMES.COMESRegistrantIdType}
   * The registrant type
   */
  COMESRegistrantIdType: IExtendedAttributesCOMES.COMESRegistrantIdType;

  /**
   * @description {@linkcode IExtendedAttributesCOMES.COMESLegalFormType}
   * The legal form type
   */
  COMESLegalFormType: IExtendedAttributesCOMES.COMESLegalFormType;
}

export namespace IExtendedAttributesCOMES {
  export type COMESRegistrantIdType = 'ALIENID' | 'GENERICID' | 'VATID';

  export type COMESLegalFormType =
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
