import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyles } from '../assets';

function CommunityScreen() {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView
        contentInsetAdjustmentBehavior={'automatic'}
        showsVerticalScrollIndicator={false}
      >
        <Text>Community</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CommunityScreen;
