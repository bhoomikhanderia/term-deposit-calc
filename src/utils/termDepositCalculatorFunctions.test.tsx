import "@testing-library/jest-dom";
import {
  calculateInterest,
  getInterestPaidFrequency,
  generateInterestAndBalance,
} from "./termDepositCalculatorFunctions";
import { TermDepositFields, InterestPaidFrequency } from "./types";

const fields: TermDepositFields = {
  initialAmount: 10000,
  interestRatePercent: 1.1,
  investmentTermDuration: 10,
  interestFrequency: InterestPaidFrequency.Monthly,
};

describe('termDepositCalculatorFunctions', () => {
    test("calculateInterest function calculates the interest earned correctly", () => {
        expect(calculateInterest(fields)).toBe(92);
        expect(calculateInterest({ ...fields, interestFrequency: InterestPaidFrequency.Quarterly })).toBe(92);
        expect(calculateInterest({ ...fields, interestFrequency: InterestPaidFrequency.Annually })).toBe(92);
        expect(calculateInterest({ ...fields, interestFrequency: InterestPaidFrequency.AtMaturity })).toBe(92);
        expect(
            calculateInterest({ ...fields, interestFrequency: InterestPaidFrequency.Monthly, initialAmount: 74364 })
        ).toBe(684);
        expect(
            calculateInterest({
                ...fields,
                interestFrequency: InterestPaidFrequency.Quarterly,
                initialAmount: 74364,
                investmentTermDuration: 12,
            })
        ).toBe(821);
        expect(
            calculateInterest({
                ...fields,
                interestFrequency: InterestPaidFrequency.Quarterly,
                initialAmount: 74364,
                investmentTermDuration: 24,
                interestRatePercent: 5,
            })
        ).toBe(7770);
        expect(
            calculateInterest({
                ...fields,
                interestFrequency: InterestPaidFrequency.Annually,
                initialAmount: 74364,
                investmentTermDuration: 24,
                interestRatePercent: 5,
            })
        ).toBe(7622);

        expect(
            calculateInterest({
                ...fields,
                interestFrequency: InterestPaidFrequency.AtMaturity,
                initialAmount: 74364,
                investmentTermDuration: 24,
                interestRatePercent: 5,
            })
        ).toBe(7436);
    });

    test("calculateInterestTerm function returns the correct value for each frequency term", () => {
        expect(getInterestPaidFrequency(InterestPaidFrequency.Monthly)).toBe(12);
        expect(getInterestPaidFrequency(InterestPaidFrequency.Quarterly)).toBe(4);
        expect(getInterestPaidFrequency(InterestPaidFrequency.Annually)).toBe(1);
    });

    test("generateInterestAndBalance returns the interest and balance correctly", () => {
        expect(generateInterestAndBalance(fields)).toStrictEqual({
            balance: 10092,
            interest: 92,
        });
        expect(
            generateInterestAndBalance({
                ...fields,
                interestFrequency: InterestPaidFrequency.Quarterly,
                initialAmount: 89328,
                investmentTermDuration: 49,
                interestRatePercent: 3.3,
            })
        ).toStrictEqual({
            balance: 102157,
            interest: 12829,
        });

        expect(
            generateInterestAndBalance({
                ...fields,
                interestFrequency: InterestPaidFrequency.Annually,
                initialAmount: 43234,
                investmentTermDuration: 29,
                interestRatePercent: 2.4,
            })
        ).toStrictEqual({
            balance: 45784,
            interest: 2550,
        });
        expect(
            generateInterestAndBalance({
                ...fields,
                interestFrequency: InterestPaidFrequency.AtMaturity,
                initialAmount: 74364,
                investmentTermDuration: 24,
                interestRatePercent: 5,
            })
        ).toStrictEqual({
            balance: 81800,
            interest: 7436,
        });
    });
});