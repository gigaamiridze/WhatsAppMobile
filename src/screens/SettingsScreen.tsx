import { ScrollView, Text } from 'react-native';

function SettingsScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
      <Text>Settings</Text>
    </ScrollView>
  );
}

export default SettingsScreen;
