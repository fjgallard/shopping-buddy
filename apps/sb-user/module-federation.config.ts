import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'sb-user',
  exposes: {
    './Login': 'apps/sb-user/src/app/login/login.module.ts',
  },
};

export default config;
