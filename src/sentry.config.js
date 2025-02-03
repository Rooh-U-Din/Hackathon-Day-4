import { withSentryConfig } from '@sentry/nextjs';

const moduleExports = {
  reactStrictMode: true,
  swcMinify: true,
  sentry: {
    disableServerWebpackPlugin: false,
    disableClientWebpackPlugin: false,
  },
  // Add other Next.js configurations here
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

export default withSentryConfig(moduleExports, sentryWebpackPluginOptions);
