import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { Platform } from 'react-native';

const App = () => {
  // Definisci il percorso per il file locale in base alla piattaforma
  const localFile = Platform.OS === 'ios' ? require('./widget.html') : 'file:///android_asset/widget.html';

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={Platform.OS === 'ios' ? localFile : { uri: localFile }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
