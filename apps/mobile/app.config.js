const { getAppConfig } = require("@factory/themes");

// Expo reads APP_ID from the shell env at build/start time, e.g.:
//   APP_ID=math-adventure pnpm dev:mobile
//   EAS_PROFILE=math-adventure eas build --profile math-adventure
const appId = process.env.APP_ID;
const config = getAppConfig(appId);

module.exports = {
  expo: {
    name: config.name,
    slug: config.id,
    scheme: config.id,
    icon: config.theme.logo,
    backgroundColor: config.theme.colors.background,
    ios: {
      bundleIdentifier: `app.factory.${config.id.replace(/-/g, "")}`,
    },
    android: {
      package: `app.factory.${config.id.replace(/-/g, "")}`,
    },
    extra: {
      // Re-exposed to JS at runtime via expo-constants, so screens can
      // read the full config without re-deriving it.
      appId: config.id,
    },
  },
};
