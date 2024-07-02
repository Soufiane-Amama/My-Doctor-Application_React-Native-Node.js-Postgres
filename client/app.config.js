const fs = require('fs');
require('dotenv').config();

const appJson = {
  expo: {
    name: "mydoctor",
    slug: "mydoctor",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon-d.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.soufianeamama.mydoctor"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "3307829d-a714-47b4-9c3c-e72205cbd279",
        expoUsername: process.env.EXPO_USERNAME
      }
    },
    updates: {
      enabled: true,
      checkAutomatically: "ON_LOAD",
      fallbackToCacheTimeout: 0
    }
  }
};

fs.writeFileSync('app.json', JSON.stringify(appJson, null, 2));
console.log('app.json has been updated with environment variables');
