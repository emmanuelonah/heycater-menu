import { useCallback } from 'react';

import { useLocalStorage } from 'hooks';
import { Permission, User } from 'UserTypes';

const PERMISSIONS = {
  VIEW_ADMIN_HOME: 'VIEW_ADMIN_HOME',
  CREATE_MENU: 'CREATE_MENU',
} as const;

function useIsPermitted() {
  const [{ permissions = [] }] = useLocalStorage<User>('user', {} as User);

  const checkIsPermitted = useCallback(
    (allowedPermissions: Permission[]) => {
      return allowedPermissions.every((permission) => permissions.includes(permission));
    },
    [permissions]
  );

  return checkIsPermitted;
}

export { PERMISSIONS, useIsPermitted };
