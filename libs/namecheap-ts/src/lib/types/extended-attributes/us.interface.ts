export interface IExtendedAttributesUS {
  /**
   * @description {@linkcode IExtendedAttributesUS.RegistrantNexus}
   */
  RegistrantNexus: IExtendedAttributesUS.RegistrantNexus;

  /**
   * @description {@linkcode IExtendedAttributesUS.RegistrantPurpose}
   */
  RegistrantPurpose: IExtendedAttributesUS.RegistrantPurpose;

  /**
   * @description Two-digit country code
   */
  RegistrantNexusCountry?: string;
}

export namespace IExtendedAttributesUS {
  /**
   * * C11 represents a natural person who is a US citizen;
   * * C12 represents a natural person who is a permanent resident;
   * * C21 represents an entity or an organization;
   * * C31 represents a foreign organization;
   * * C32 represents a foreign organization that has an office in US.
   */
  export type RegistrantNexus = 'C11' | 'C12' | 'C21' | 'C31' | 'C32';

  /**
   * * P1 represents a business organization;
   * * P2 represents a non-profit or religious organization or association;
   * * P3 represents personal purpose;
   * * P4 represents educational purpose;
   * * P5 represents government purpose organization, etc.
   */
  export type RegistrantPurpose = 'P1' | 'P2' | 'P3' | 'P4' | 'P5';
}
