import { SafeAreaView, Image } from 'react-native';
import { FlexBox, Heading } from '../../components';
import { globalStyles } from '../../assets';
import { Colors } from '../../constants';
import { images } from '../../assets';
import styles from './styles';

function SplashScreen() {
  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <FlexBox
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Image src={images.whatsapp} style={styles.whatsAppLogo} />
        <FlexBox
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Heading title='from' type={5} />
          <FlexBox alignItems='center' justifyContent='center' rowGap={10}>
            <Image src={images.meta} style={styles.metaLogo} />
            <Heading title='Meta' type={3} color={Colors.GREEN} fontSize={22} fontWeight='600' />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </SafeAreaView>
  );
}

export default SplashScreen;
