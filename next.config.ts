import { withSentryConfig } from '@sentry/nextjs';
import { NextConfig } from 'next';

const moduleExports: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sentry: {
    disableServerWebpackPlugin: false,
    disableClientWebpackPlugin: false,
  },
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

export default withSentryConfig(moduleExports, sentryWebpackPluginOptions);
