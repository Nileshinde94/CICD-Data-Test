export interface Borrower {
    id: number;
    accountnumber:string;
    segmentidentifier:string;
    flag:boolean;
    memberbranchcode:string;
    previousmemberbranchcode:string;
    borrowername:string;
    borrowershortname:string;
    companyregistrationnumber:string;
    dateofIncorporation:Date;
    pancardborrower:string;
    cinborrower:string;
    tinborrower:string;
    servicetaxborrower:string;
    otheridborrower:string;
    borrowersLegalConstitution: number;
    businessCategory: string;
    business: string;
    classOfActivity1: string;
    classOfActivity2: string;
    classOfActivity3: string;
    sicCode: number;
    salesFigure: string;
    financialYear: Date; // DateOnly is not directly supported in TypeScript; we'll use a string for dates
    numberOfEmployees: number;
    creditRating: string;
    assessmentAgency: string;
    creditRatingAsOn: string;
    creditRatingExpiryDate: string;
    filler: string;
    createdOn: Date; // C# DateTime maps to JavaScript Date
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;
    isDeleted: boolean;
  }
