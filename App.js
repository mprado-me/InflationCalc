import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

class App extends React.Component {
  constructor() {
    super();
    this.checkPreviousSession();
  }

  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert("Sorry about that crash, we'are working on a solution.");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Calculate inflation"
          onPress={() => {
            Analytics.trackEvent('calculate_inflation', {
              Internet: 'Cellular',
              GPS: 'Off',
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 16,
  },
});

export default App;
