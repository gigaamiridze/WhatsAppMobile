import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
import { globalStyles } from './src/styles';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={globalStyles.flex}>
        <StatusBar barStyle={'light-content'} />
        <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
          <Text>WhatsApp</Text>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
