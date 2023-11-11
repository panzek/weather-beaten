import { render, screen } from '@testing-library/react';
import Buttons from './Buttons';

describe('Buttons component', () => {
    fit('shows 2 buttons being rendered', () => {
        render(<Buttons />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
      });
})