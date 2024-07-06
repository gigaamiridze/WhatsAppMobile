import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyles } from '../assets';

function CallsScreen() {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView
        contentInsetAdjustmentBehavior={'automatic'}
        showsVerticalScrollIndicator={false}
      >
        <Text>Calls</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CallsScreen;
