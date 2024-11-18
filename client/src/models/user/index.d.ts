declare module 'UserTypes' {
  import { PERMISSIONS } from 'utils';

  export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

  export interface User {
    id: number;
    email: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    role: 'admin' | 'user';
    permissions: Permission[];
  }
}
