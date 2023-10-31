import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'sb-user',
  exposes: {
    './Module': 'apps/sb-user/src/app/remote-entry/entry.module.ts',
    './Login': 'apps/sb-user/src/app/login/login.module.ts',
  },
};

export default config;
