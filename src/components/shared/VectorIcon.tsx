import React, { ElementType } from 'react';
import { TouchableOpacity } from 'react-native';
import { IVectorIconProps } from '../../models';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome6Pro from 'react-native-vector-icons/FontAwesome6Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

function VectorIcon(props: IVectorIconProps) {
  const { type, name, size, color, style, onPress } = props;
  let Icon: ElementType;

  const getIcon = () => {
    switch (type) {
      case 'AntDesign':
        return AntDesign;
      case 'Entypo':
        return Entypo;
      case 'EvilIcons':
        return EvilIcons;
      case 'Feather':
        return Feather;
      case 'FontAwesome':
        return FontAwesome;
      case 'FontAwesome5':
        return FontAwesome5;
      case 'FontAwesome5Pro':
        return FontAwesome5Pro;
      case 'FontAwesome6':
        return FontAwesome6;
      case 'FontAwesome6Pro':
        return FontAwesome6Pro;
      case 'Fontisto':
        return Fontisto;
      case 'Foundation':
        return Foundation;
      case 'Ionicons':
        return Ionicons;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'Octicons':
        return Octicons;
      case 'SimpleLineIcons':
        return SimpleLineIcons;
      case 'Zocial':
        return Zocial;
      default:
        return Ionicons;
    }
  };

  Icon = getIcon();

  return (
    <>
      {onPress ? (
        <TouchableOpacity style={style} activeOpacity={0.5} onPress={onPress}>
          <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
      ) : (
        <Icon name={name} size={size} color={color} />
      )}
    </>
  );
}

export default VectorIcon;
