export enum InterestPaidFrequency {
    Monthly = 'Monthly',
    Quarterly = 'Quarterly',
    Annually = 'Annually',
    AtMaturity = 'At Maturity'
}

export type TermDepositFields = {
    initialAmount: number;
    interestRatePercent: number;
    investmentTermDuration: number;
    interestFrequency: InterestPaidFrequency;
};