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
        handleChange: jest.fn(),
        status: 'submitting',
        handleClick: jest.fn(),
        checkWeather: 'Check Weather',
      };

      // Render Component with mockprops into the DOM
      render(<Buttons { ...mockProps } /> );

      // Query the button
      const checkWeatherBtn = screen.getByRole('button', { 
        name: /Check Weather/i 
      });

      // Simulate a button click using userEvent
      userEvent.click(checkWeatherBtn);

      // Assert the button is disabled
      expect(checkWeatherBtn).toBeDisabled();

    });

    it('Button is enabled when city length is greater than 0 and status is empty', () => {
      //Create mock props
      const mockProps = {
        refresh: jest.fn(),
        city: 'EnteredCity',
        handleChange: jest.fn(),
        status: 'empty',
        handleClick: jest.fn(),
        checkWeather: 'Check Weather',
        refreshText: 'Refresh',
      };

      // Render Component with mockprops into the DOM
      render(<Buttons { ...mockProps } /> );

      // Query the button
      // Click will trigger hover events before clicking, 
      // set the skipHover option to true to disable it
      const checkWeatherBtn = screen.getByRole('button', { 
        skipHover: true, name: /Check Weather/i 
      });

      // Simulate a button click using userEvent
      userEvent.click(checkWeatherBtn);

      // assertion based on the userEvent
      expect(checkWeatherBtn).toHaveTextContent('Check Weather');

      // Assert the button is disabled
      expect(checkWeatherBtn).not.toBeDisabled();

    });

    it('Button should have refresh text content', () => {
      
      const mockProps = {
        refresh: jest.fn(),
        handleClick: jest.fn(),
        refreshText: 'Refresh',
      };

      render(<Buttons { ...mockProps } />);

      const refreshBtn = screen.getByRole('button', {
        name: /refresh/i
      });

      userEvent.click(refreshBtn);

      expect(refreshBtn).toHaveTextContent('Refresh');

    });

});