import { render, screen } from "@testing-library/react";
import { InterestPaidFrequency } from '../../utils/types';
import InterestFrequencySelector from "./InterestFrequencySelector";

describe('InterestFrequencySelector', () => {
    let setValue: jest.Mock;

    beforeEach(() => {
        setValue = jest.fn();
    });

    test('renders dropdown and displays value', () => {
        render(<InterestFrequencySelector value={InterestPaidFrequency.Monthly} setValue={setValue} />)
        expect(screen.getByText('Interest Paid:')).toBeInTheDocument();
        expect(screen.getByText('Monthly')).toBeInTheDocument();
    })
})