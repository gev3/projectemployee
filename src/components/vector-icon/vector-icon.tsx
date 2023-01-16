import React, {FC} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ViewStyle} from 'react-native';

const VectorIcons = {
  Ma: MaterialIcons,
  Ev: EvilIcons,
  En: Entypo,
  Aw: FontAwesome,
  AW5: FontAwesome5,
  Fo: Foundation,
  Ion: Ionicons,
  Mac: MaterialCommunityIcons,
  Zo: Zocial,
  Oc: Octicons,
  Si: SimpleLineIcons,
  Ant: AntDesign,
  Fe: Feather,
};

export type iconFamily = keyof typeof VectorIcons;

interface Props {
  groupName: iconFamily;
  name: string;
  size?: number;
  style?: ViewStyle | {};
  color?: string;
}

export const VectorIcon: FC<Props> = ({size = 25, ...props}) => {
  let Icon = VectorIcons[props.groupName];
  return (
    <Icon
      name={props.name}
      size={size}
      color={props.color || '#000'}
      style={props.style}
    />
  );
};

