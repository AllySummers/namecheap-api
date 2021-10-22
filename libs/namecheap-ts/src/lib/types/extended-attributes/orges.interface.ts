export interface IExtendedAttributesORGES {
  /**
   * @description Id of the registrant
   */
  ORGESRegistrantId: string;

  /**
   * @description {@linkcode IExtendedAttributesORGES.ORGESRegistrantIdType}
   * The registrant type
   */
  ORGESRegistrantIdType: IExtendedAttributesORGES.ORGESRegistrantIdType;

  /**
   * @description {@linkcode IExtendedAttributesORGES.ORGESLegalFormType}
   * The legal form type
   */
  ORGESLegalFormType: IExtendedAttributesORGES.ORGESLegalFormType;
}

export namespace IExtendedAttributesORGES {
  export type ORGESRegistrantIdType = 'ALIENID' | 'GENERICID' | 'VATID';

  export type ORGESLegalFormType =
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
