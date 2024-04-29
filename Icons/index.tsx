import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import type {PropsWithChildren} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;
export default function Icons({name,color}:any) {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color={color}/>;
      break;
    case 'cross':
      return <Icon name="times" size={38} color="pink" />;
      break;
    default:
        return <Icon name="pencil" size={38} color="pink" />;
      break;
  }
}

const styles = StyleSheet.create({});
