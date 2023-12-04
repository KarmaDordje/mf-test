import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'projects',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
