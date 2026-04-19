import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { NavigationProvider, useNavigation } from './NavigationContext';

function NavigationConsumer() {
  const { isOpen, openMenu, closeMenu, toggleMenu } = useNavigation();

  return (
    <div>
      <p data-testid="state">{isOpen ? 'open' : 'closed'}</p>

      <button type="button" onClick={openMenu}>
        open
      </button>
      <button type="button" onClick={closeMenu}>
        close
      </button>
      <button type="button" onClick={toggleMenu}>
        toggle
      </button>
    </div>
  );
}

describe('NavigationContext', () => {
  it('по умолчанию закрыт', () => {
    render(
      <NavigationProvider>
        <NavigationConsumer />
      </NavigationProvider>
    );

    expect(screen.getByTestId('state')).toHaveTextContent('closed');
  });

  it('переключает меню', () => {
    render(
      <NavigationProvider>
        <NavigationConsumer />
      </NavigationProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'open' }));
    expect(screen.getByTestId('state')).toHaveTextContent('open');

    fireEvent.click(screen.getByRole('button', { name: 'close' }));
    expect(screen.getByTestId('state')).toHaveTextContent('closed');

    fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
    expect(screen.getByTestId('state')).toHaveTextContent('open');

    fireEvent.click(screen.getByRole('button', { name: 'toggle' }));
    expect(screen.getByTestId('state')).toHaveTextContent('closed');
  });

  it('бросает ошибку вне NavigationProvider', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<NavigationConsumer />)).toThrow(
      'useNavigation must be used inside NavigationProvider'
    );

    consoleErrorSpy.mockRestore();
  });
});