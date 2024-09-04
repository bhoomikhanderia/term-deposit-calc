import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvestmentTermDuration from './InvestmentTermDuration';

describe('InvestmentTermDuration', () => {
    let setValue: jest.Mock;

    beforeEach(() => {
        setValue = jest.fn();
    });

    test('renders slider and display value correctly', () => {
        render(<InvestmentTermDuration value={10} setValue={setValue} />);

        const slider = screen.getByRole('slider');
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveValue('10');

        const displayValue = screen.getByText('10 months');
        expect(displayValue).toBeInTheDocument();
    });

    test('calls setValue with correct value on slider change', () => {
        render(<InvestmentTermDuration value={10} setValue={setValue} />);

        const slider = screen.getByRole('slider');
        fireEvent.change(slider, { target: { value: '15' } });

        expect(setValue).toHaveBeenCalledWith(15);
    });

    test('formats display value correctly for values above 12 months', () => {
        const { rerender } = render(<InvestmentTermDuration value={12} setValue={setValue} />);

        let displayValue = screen.getByText('1 year');
        expect(displayValue).toBeInTheDocument();

        rerender(<InvestmentTermDuration value={30} setValue={setValue} />);
        displayValue = screen.getByText('2 years 6 months');
        expect(displayValue).toBeInTheDocument();

        rerender(<InvestmentTermDuration value={24} setValue={setValue} />);
        displayValue = screen.getByText('2 years');
        expect(displayValue).toBeInTheDocument();
    });
});