import React from 'react';

import { render, screen, fireEvent, act } from 'utils';

import { useLocalStorage } from './useLocalStorage.hook';

const TestComponent: React.FC<{ keyName: string; initialValue: string }> = ({
  keyName,
  initialValue,
}) => {
  const [value, setValue] = useLocalStorage<string>(keyName, initialValue);

  return (
    <div>
      <div data-testid="value">{value}</div>
      <button onClick={() => setValue('newValue')}>Set to New Value</button>
      <button onClick={() => setValue(initialValue)}>Reset to Initial Value</button>
    </div>
  );
};

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with the provided initial value', () => {
    render(<TestComponent keyName="testKey" initialValue="initialValue" />);

    expect(screen.getByTestId('value').textContent).toBe('initialValue');
  });

  it('should update the value in localStorage and component state', () => {
    render(<TestComponent keyName="testKey" initialValue="initialValue" />);

    const setValueButton = screen.getByText('Set to New Value');

    fireEvent.click(setValueButton);
    expect(screen.getByTestId('value').textContent).toBe('newValue');
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'));
  });

  it('should reset the value to the initial value', () => {
    render(<TestComponent keyName="testKey" initialValue="initialValue" />);

    const setValueButton = screen.getByText('Set to New Value');
    const resetValueButton = screen.getByText('Reset to Initial Value');

    fireEvent.click(setValueButton);
    fireEvent.click(resetValueButton);

    expect(screen.getByTestId('value').textContent).toBe('initialValue');
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('initialValue'));
  });

  it('should update the component state when localStorage changes', () => {
    render(<TestComponent keyName="testKey" initialValue="initialValue" />);

    act(() => {
      localStorage.setItem('testKey', JSON.stringify('externalValue'));
      window.dispatchEvent(new StorageEvent('storage', { key: 'testKey' }));
    });

    expect(screen.getByTestId('value').textContent).toBe('externalValue');
  });
});
