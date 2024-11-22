/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  __TEST__,
  __DEV__,
  __PROD__,
  HOST_TYPES,
  isStaging,
  isProduction,
  host,
} from './index.util';

describe('env', () => {
  describe('Env variables', () => {
    it('should confirm that this is a Node JS Test environment', () => {
      expect(__TEST__ && !__DEV__ && !__PROD__).toBeTruthy();
    });

    describe('Host Functions', () => {
      const originalWindowLocation = window.location;

      beforeEach(() => {
        // @ts-ignore
        delete window.location;
        window.location = { ...originalWindowLocation, hostname: '' };
      });

      afterEach(() => {
        window.location = originalWindowLocation;
      });

      it('should identify staging environment', () => {
        window.location.hostname = 'heycater-menu.staging.com';
        expect(isStaging()).toBe(true);
        expect(isProduction()).toBe(false);
        expect(host()).toBe(HOST_TYPES.STAGING);
      });

      it('should identify production environment', () => {
        window.location.hostname = 'heycater-menu.com';
        expect(isStaging()).toBe(false);
        expect(isProduction()).toBe(true);
        expect(host()).toBe(HOST_TYPES.PROD);
      });

      it('should default to local environment', () => {
        window.location.hostname = 'localhost';
        expect(isStaging()).toBe(false);
        expect(isProduction()).toBe(false);
        expect(host()).toBe(HOST_TYPES.LOCAL);
      });
    });

    describe('HOST_TYPES enum', () => {
      it('should have correct values', () => {
        expect(HOST_TYPES.LOCAL).toBe('local');
        expect(HOST_TYPES.STAGING).toBe('staging');
        expect(HOST_TYPES.PROD).toBe('production');
      });
    });
  });
});
