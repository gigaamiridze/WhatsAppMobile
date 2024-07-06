import { ScrollView, Text } from 'react-native';

function ChatsScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
      <Text>Chats</Text>
    </ScrollView>
  );
}

export default ChatsScreen;
