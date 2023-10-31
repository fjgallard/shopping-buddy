import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'sb-list',
  exposes: {
    './Module': 'apps/sb-list/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
