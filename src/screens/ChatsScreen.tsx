import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyles } from '../assets';

function ChatsScreen() {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <ScrollView
        contentInsetAdjustmentBehavior={'automatic'}
        showsVerticalScrollIndicator={false}
      >
        <Text>Chats</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChatsScreen;
