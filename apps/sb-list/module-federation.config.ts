import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'sb-list',
  exposes: {
    './List': 'apps/sb-list/src/app/modules/list/list.module.ts'
  },
};

export default config;
