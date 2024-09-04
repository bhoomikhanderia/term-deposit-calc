import React from 'react';

interface InitialAmountProps {
    value: number;
    setValue: (value: number) => void;
}

const InitialAmount: React.FC<InitialAmountProps> = ({ value, setValue }) => {
    return (
        <div>
            <label>Starting with: </label>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                placeholder="$10000"
                required
            />
        </div>
    )
}

export default InitialAmount;