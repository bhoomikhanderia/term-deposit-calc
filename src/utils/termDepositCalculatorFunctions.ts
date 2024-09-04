import { InterestPaidFrequency, TermDepositFields } from "./types";

export const getInterestPaidFrequency = (frequency: InterestPaidFrequency) => {
    if (frequency === "Monthly") return 12;
    if (frequency === "Quarterly") return 4;
    if (frequency === "Annually") return 1;
    return 0;
};

export const calculateInterest = (fields: TermDepositFields) => {
    const { initialAmount, interestRatePercent, investmentTermDuration, interestFrequency } = fields;
    if (interestFrequency === "At Maturity")
    return Math.round(
      initialAmount * (interestRatePercent / 100 / 12) * investmentTermDuration
    );

    const years = investmentTermDuration / 12;
    const rate = interestRatePercent / 100;
    const term = getInterestPaidFrequency(interestFrequency);

    return Math.round(
    initialAmount * Math.pow(1 + rate / term, term * years) - initialAmount
    );
};

export const generateInterestAndBalance = (fields: TermDepositFields) => {
    const interest = calculateInterest(fields);
    return { interest, balance: interest + fields.initialAmount };
};