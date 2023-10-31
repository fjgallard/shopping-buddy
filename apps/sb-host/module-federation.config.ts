import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'sb-host',
  remotes: ['sb-user', 'sb-list'],
};

export default config;
