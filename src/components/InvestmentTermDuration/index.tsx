import React from 'react';

interface InvestmentTermDurationProps {
    value: number;
    setValue: (value: number) => void;
}

const InvestmentTermDuration: React.FC<InvestmentTermDurationProps> = ({ value, setValue }) => {

    const pluralize = (word: string, value: number) => {
        if (value === 0) return "";
        return `${value} ${word}${value === 1 ? "" : "s"}`;
    };

    const getInvestmentTermDuration = (value: number) => {
        const years = Math.floor(value / 12);
        const months = value % 12;

    return `${pluralize("year", years)}  ${pluralize("month", months)}`;
    };

    return (
        <div>
            <label>Investment Term Duration: </label>
            <input
                type="range"
                value={value}
                min={3}
                max={60}
                onChange={(e) => setValue(Number(e.target.value))}
            />
            <>{getInvestmentTermDuration(value)}</>
        </div>
    );
};

export default InvestmentTermDuration;