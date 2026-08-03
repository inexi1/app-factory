import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { getAppConfig } from "@factory/themes";

// On mobile there's no CSS-variable layer, so each screen resolves the
// config directly and builds its StyleSheet from it. Keep this pattern —
// resolve once at the top of a screen, pass `config` down as a prop —
// rather than importing a specific app's config anywhere.
export default function App() {
  const appId = Constants.expoConfig?.extra?.appId as string;
  const config = getAppConfig(appId);
  const styles = makeStyles(config);

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{config.copy.heroHeadline}</Text>
      <Text style={styles.subhead}>{config.copy.heroSubhead}</Text>
      <Pressable style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>{config.copy.ctaPrimary}</Text>
      </Pressable>
    </View>
  );
}

function makeStyles(config: ReturnType<typeof getAppConfig>) {
  const { colors, radius } = config.theme;
  const radiusMap = { none: 0, sm: 6, md: 10, lg: 16, full: 999 };

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    },
    headline: {
      fontSize: 32,
      fontWeight: "800",
      color: colors.text,
      textAlign: "center",
      marginBottom: 12,
    },
    subhead: {
      fontSize: 16,
      color: colors.textMuted,
      textAlign: "center",
      marginBottom: 24,
    },
    primaryButton: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      paddingHorizontal: 28,
      borderRadius: radiusMap[radius],
    },
    primaryButtonText: {
      color: colors.primaryContrast,
      fontWeight: "700",
      fontSize: 16,
    },
  });
}
