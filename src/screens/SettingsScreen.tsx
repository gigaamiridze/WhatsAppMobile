import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyles } from '../assets';

function SettingsScreen() {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView
        contentInsetAdjustmentBehavior={'automatic'}
        showsVerticalScrollIndicator={false}
      >
        <Text>Settings</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SettingsScreen;
