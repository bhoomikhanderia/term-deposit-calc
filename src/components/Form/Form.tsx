import { useState } from 'react';
import InitialAmount from '../InitialAmount/InitialAmount';
import InterestRatePercent from '../InterestRatePercent/InterestRatePercent';
import InvestmentTermDuration from '../InvestmentTermDuration/InvestmentTermDuration';
import InterestFrequencySelector from '../InterestFrequencySelector/InterestFrequencySelector';
import { InterestPaidFrequency } from '../../utils/types';
import { generateInterestAndBalance } from '../../utils/termDepositCalculatorFunctions';

const Form = () => {
    const [initialAmount, setInitialAmount] = useState<number>(10000);
    const [interestRatePercent, setInterestRatePercent] = useState<number>(1);
    const [investmentTermDuration, setInvestmentTermDuration] = useState<number>(3);
    const [interestFrequency, setInterestFrequency] = useState<InterestPaidFrequency>(InterestPaidFrequency.Monthly);
    const { interest, balance } = generateInterestAndBalance({ initialAmount, interestRatePercent, investmentTermDuration, interestFrequency });


    return (
        <form className="depositForm">
            <InitialAmount value={initialAmount} setValue={setInitialAmount} />
            <InterestRatePercent value={interestRatePercent} setValue={setInterestRatePercent} />
            <InvestmentTermDuration value={investmentTermDuration} setValue={setInvestmentTermDuration} />
            <InterestFrequencySelector value={interestFrequency} setValue={setInterestFrequency} />
            {initialAmount > 0 && <div className="depositField">Initial Deposit: ${initialAmount}</div>}
            {interest > 0 && <div className="depositField">Total Interest Earned: ${interest}</div>}
            {balance > 0 && <div className="depositField">Final Balance Earned: ${balance}</div>}
        </form>  
    )
}

export default Form;