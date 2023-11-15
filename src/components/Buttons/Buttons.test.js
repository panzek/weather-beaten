import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Buttons from './Buttons';

describe('Buttons component', () => {
    it('shows 2 buttons being rendered', () => {
        render(<Buttons />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
      });

    it('Button is disabled when city length is 0 and status is submitting', () => {
      //Create mock props
      const mockProps = {
        refresh: jest.fn(),
        city: 'EnteredCity',
        handleChange: jest.fn(),
        status: 'submitting',
        handleClick: jest.fn(),
        checkWeather: 'Check Weather',
        refreshTest: 'Refresh',
      };

      // Render Component and mockprops
      render(<Buttons { ...mockProps } /> );

      // Query the button
      const checkWeatherBtn = screen.getByRole('button', { 
        name: /Check Weather/i 
      });

      // Simulate a button click click using userEvent
      userEvent.click(checkWeatherBtn);

      // Assert the button is disabled
      expect(checkWeatherBtn).toBeDisabled();

    })

});