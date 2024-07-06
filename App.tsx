import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { StackNavigation } from './src/navigation';
import { globalStyles } from './src/assets';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={globalStyles.flex}>
        <StatusBar barStyle={'light-content'} />
        <StackNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
