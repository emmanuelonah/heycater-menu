const __TEST__ = process.env.NODE_ENV === 'test';
const __DEV__ = process.env.NODE_ENV === 'development';
const __PROD__ = process.env.NODE_ENV === 'production';

enum HOST_TYPES {
  LOCAL = 'local',
  STAGING = 'staging',
  PROD = 'production',
}

function isStaging() {
  return window.location.hostname === 'heycater-menu.staging.com';
}

function isProduction() {
  return window.location.hostname === 'heycater-menu.com';
}

function host() {
  if (isStaging()) return HOST_TYPES.STAGING;

  if (isProduction()) return HOST_TYPES.PROD;

  return HOST_TYPES.LOCAL;
}

export { __TEST__, __DEV__, __PROD__, HOST_TYPES, isStaging, isProduction, host };
