import React from 'react';
import { InterestPaidFrequency } from '../../utils/types';

interface InterestFrequencySelectorProps {
    value: InterestPaidFrequency;
    setValue: (value: InterestPaidFrequency) => void;
}

const InterestFrequencySelector: React.FC<InterestFrequencySelectorProps> = ({ value, setValue }) => {
    return (
        <div>
            <label className="depositLabel">Interest Paid: </label>            
                {Object.values(InterestPaidFrequency).map((frequency) => (
                    <>
                        <input type="radio" name="frequency" key={frequency} id={frequency} value={frequency} onChange={(e) => setValue(e.target.value as any)} checked={value === frequency} />
                        <label>{frequency}</label>
                    </>
                ))}
        </div>
    );
};

export default InterestFrequencySelector;
