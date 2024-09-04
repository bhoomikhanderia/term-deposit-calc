import React from 'react';

interface InitialAmountProps {
    value: number;
    setValue: (value: number) => void;
}

const InitialAmount: React.FC<InitialAmountProps> = ({ value, setValue }) => {
    return (
        <div className="depositField">
            <label className="depositLabel">Starting with: </label>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="$10000"
                max={1500000}
                min={1000}
                required
                className="depositInput"
            />
        </div>
    )
}

export default InitialAmount;