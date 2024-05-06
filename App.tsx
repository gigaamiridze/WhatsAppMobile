import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
        <Text>WhatsApp</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
