import { render, fireEvent } from "@testing-library/react";
import InterestRatePercent from "./InterestRatePercent";

describe('InterestRatePercent', () => {
    let value = 0;
    const setValue = jest.fn((newValue) => {
        value = newValue;
    });

    beforeEach(() => {
        value = 0;
        setValue.mockClear();
    });

    test('renders correctly with initial value', () => {
        const { getByTestId } = render(<InterestRatePercent value={value} setValue={setValue} />);
        const input = getByTestId('interest-rate') as HTMLInputElement
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('0');
    });

    test('increments value correctly', () => {
        const { getByTestId } = render(<InterestRatePercent value={value} setValue={setValue} />);
        const input = getByTestId('interest-rate') as HTMLInputElement
        fireEvent.change(input, { target: { value: '0.25' } });
        expect(setValue).toHaveBeenCalledWith(0.25);
    });

    test('handles empty input correctly', () => {
        const { getByTestId } = render(<InterestRatePercent value={value} setValue={setValue} />);
        const input = getByTestId('interest-rate') as HTMLInputElement
        fireEvent.change(input, { target: { value: '' } });
        expect(setValue).toHaveBeenCalledWith(0);
    });
})