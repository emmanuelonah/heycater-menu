import React from 'react';

import { Permission } from 'UserTypes';
import { useLocalStorage } from 'hooks';
import { render, screen } from 'utils';

import { useIsPermitted, PERMISSIONS } from './index.util';

jest.mock('hooks', () => ({
  useLocalStorage: jest.fn(),
}));

const TestComponent: React.FC<{ allowedPermissions: Permission[] }> = ({ allowedPermissions }) => {
  const isPermitted = useIsPermitted();
  const result = isPermitted(allowedPermissions);

  return <div data-testid="result">{result.toString()}</div>;
};

describe('useIsPermitted', () => {
  beforeEach(() => {
    (useLocalStorage as jest.Mock).mockReturnValue([{ permissions: [] }]);
  });

  it('should return false when no permissions are granted', () => {
    render(<TestComponent allowedPermissions={[PERMISSIONS.VIEW_ADMIN_HOME]} />);

    expect(screen.getByTestId('result').textContent).toBe('false');
  });

  it('should return true when the required permission is granted', () => {
    (useLocalStorage as jest.Mock).mockReturnValue([
      { permissions: [PERMISSIONS.VIEW_ADMIN_HOME] },
    ]);

    render(<TestComponent allowedPermissions={[PERMISSIONS.VIEW_ADMIN_HOME]} />);

    expect(screen.getByTestId('result').textContent).toBe('true');
  });

  it('should return false when the required permission is not granted', () => {
    (useLocalStorage as jest.Mock).mockReturnValue([{ permissions: [PERMISSIONS.CREATE_MENU] }]);

    render(<TestComponent allowedPermissions={[PERMISSIONS.VIEW_ADMIN_HOME]} />);

    expect(screen.getByTestId('result').textContent).toBe('false');
  });

  it('should return true when all required permissions are granted', () => {
    (useLocalStorage as jest.Mock).mockReturnValue([
      { permissions: [PERMISSIONS.VIEW_ADMIN_HOME, PERMISSIONS.CREATE_MENU] },
    ]);

    render(
      <TestComponent allowedPermissions={[PERMISSIONS.VIEW_ADMIN_HOME, PERMISSIONS.CREATE_MENU]} />
    );

    expect(screen.getByTestId('result').textContent).toBe('true');
  });

  it('should return false when not all required permissions are granted', () => {
    (useLocalStorage as jest.Mock).mockReturnValue([
      { permissions: [PERMISSIONS.VIEW_ADMIN_HOME] },
    ]);

    render(
      <TestComponent allowedPermissions={[PERMISSIONS.VIEW_ADMIN_HOME, PERMISSIONS.CREATE_MENU]} />
    );

    expect(screen.getByTestId('result').textContent).toBe('false');
  });
});
