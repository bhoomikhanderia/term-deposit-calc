import { render, fireEvent } from '@testing-library/react';
import InitialAmount from './InitialAmount';

describe('InitialAmount', () => {
    it('does not change value if input is within range', () => {
        const setValue = jest.fn();
        const { getByPlaceholderText } = render(<InitialAmount value={50000} setValue={setValue} />);
        const input = getByPlaceholderText('$10000') as HTMLInputElement;

        fireEvent.blur(input);

        expect(setValue).not.toHaveBeenCalled();
    });

    it('calls setValue with the correct value on change', () => {
        const setValue = jest.fn();
        const { getByPlaceholderText } = render(<InitialAmount value={50000} setValue={setValue} />);
        const input = getByPlaceholderText('$10000') as HTMLInputElement;

        fireEvent.change(input, { target: { value: '60000' } });

        expect(setValue).toHaveBeenCalledWith(60000);
    });
});