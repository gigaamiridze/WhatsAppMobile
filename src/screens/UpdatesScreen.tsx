import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyles } from '../assets';

function UpdatesScreen() {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView
        contentInsetAdjustmentBehavior={'automatic'}
        showsVerticalScrollIndicator={false}
      >
        <Text>Updates</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UpdatesScreen;
