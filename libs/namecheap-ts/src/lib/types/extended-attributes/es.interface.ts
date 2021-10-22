export interface IExtendedAttributesES {
  /**
   * @description Id of the registrant
   */
  ESRegistrantId: string;

  /**
   * @description {@linkcode IExtendedAttributesES.ESRegistrantIdType}
   * The registrant type
   */
  ESRegistrantIdType: IExtendedAttributesES.ESRegistrantIdType;

  /**
   * @description {@linkcode IExtendedAttributesES.ESLegalFormType}
   * The legal form type
   */
  ESLegalFormType: IExtendedAttributesES.ESLegalFormType;

  /**
   * @description {@linkcode IExtendedAttributesES.ESAdminIdType}
   * Admin ID type
   */
  ESAdminIdType: IExtendedAttributesES.ESAdminIdType;

  /**
   * @description ID of the Admin
   */
  EsAdminID: string;

  /**
   * @description {@linkcode IExtendedAttributesES.ESAcceptAgreement}
   * To agree the terms for the domain name
   */
  ESAcceptAgreement: IExtendedAttributesES.ESAcceptAgreement;
}

export namespace IExtendedAttributesES {
  export type ESRegistrantIdType = 'ALIENID' | 'GENERICID' | 'VATID';

  export type ESLegalFormType =
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

  export type ESAdminIdType = 'ALIENID' | 'GENERICID' | 'NATIONALIDENTITY';

  export type ESAcceptAgreement = 'No' | 'Yes';
}
