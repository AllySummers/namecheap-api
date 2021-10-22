export interface IExtendedAttributesEU {
  /**
   * @description {@linkcode IExtendedAttributesEU.EUAgreeWhoisPolicy}
   */
  EUAgreeWhoisPolicy: IExtendedAttributesEU.EUAgreeWhoisPolicy;

  /**
   * @description {@linkcode IExtendedAttributesEU.EUAgreeDeletePolicy}
   */
  EUAgreeDeletePolicy: IExtendedAttributesEU.EUAgreeDeletePolicy;

  /**
   * @description {@linkcode IExtendedAttributesEU.EUAdrLang}
   */
  EUAdrLang?: IExtendedAttributesEU.EUAdrLang;
}

export namespace IExtendedAttributesEU {
  /**
   * I hereby agree that the Registry is entitled to transfer the data contained in this application to third parties (i) if ordered to do so by a public authority, carrying out its legitimate tasks; and (ii) upon demand of an ADR Provider as mentioned in section 16 of the [.EU Terms and Conditions](http://www.eurid.eu/) and (iii) as provided in Section 2 (WHOIS look-up facility) of the [.EU Domain Name WHOIS Policy](http://www.eurid.eu/).
   */
  export type EUAgreeWhoisPolicy = 'YES';

  /**
   * I agree and acknowledge to the special renewal and expiration terms set forth below for this domain name, including those terms set forth in the Registration Agreement. I understand that unless I have set this domain for autorenewal, this domain name must be explicitly renewed by the expiration date or the 20th of the month of expiration, whichever is sooner. (e.g. If the name expires on Sept 4th, 2008, then a manual renewal must be received by Sept 4th, 2008. If name expires on Sep 27th, 2008, the renewal request must be received prior to Sep 20th, 2008). If the name is not manually renewed or previously set to autorenew, a delete request will be issued by Namecheap. When a delete request is issued, the name will remain fully functional in my account until expiration, but will no longer be renewable nor will I be able to make any modifications to the name. These terms are subject to change.
   */
  export type EUAgreeDeletePolicy = 'NO' | 'YES';

  /**
   * * BG stands for Bulgaria;
   * * CS stands for Czech;
   * * DS stands for Danish;
   * * NL stands for Dutch;
   * * EN stands for English;
   * * ET stands for Estonian;
   * * FI stands for Finnish;
   * * FR stands for French;
   * * DE stands for German;
   * * EL stands for Greek;
   * * HU stands for Hungarian;
   * * IT stands for Italian;
   * * LV stands for Latvian;
   * * LI stands for Lithuanian;
   * * MT stands for Maltese;
   * * PL stands for Polish;
   * * RO stands for Romania;
   * * SK stands for Slovak;
   * * SL stands for Slovenian;
   * * ES stands for Spanish;
   * * SV stands for Swedish.
   */
  export type EUAdrLang =
    | 'BG'
    | 'CS'
    | 'DE'
    | 'DS'
    | 'EL'
    | 'EN'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FR'
    | 'HU'
    | 'IT'
    | 'LI'
    | 'LV'
    | 'MT'
    | 'NL'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'SK'
    | 'SL'
    | 'SV';
}
