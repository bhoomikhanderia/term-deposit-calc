import React from 'react';

interface InterestRatePercentProps {
    value: number;
    setValue: (value: number) => void;
}

const InterestRatePercent: React.FC<InterestRatePercentProps> = ({ value, setValue }) => {
    return (
        <div className="depositField">
            <label className="depositLabel">Interest Rate %: </label>
            <input
                type="number"
                data-testid="interest-rate"
                step="0.1"
                min="0"
                max="15"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="1.0%"
                required
                className="depositInput"
            />
        </div>
    );
};

export default InterestRatePercent;
