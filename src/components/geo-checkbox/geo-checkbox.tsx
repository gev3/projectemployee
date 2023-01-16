import React, {FC} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import * as Animatable from "react-native-animatable";
import {Colors} from '../../styles/styles';
import {P} from '../p/p';
import {VectorIcon} from '../vector-icon/vector-icon';

export const GeoCheckbox: FC<{ check: boolean, onPress: () => void }> = ({
                                                                             check,
                                                                             onPress,

                                                                         }) => {
    return (
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable
                    onPress={onPress}
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed ? (check ? 'rgb(231, 248, 235)' : 'rgb(224, 224, 224)') : 'transparent',
                            borderColor: (pressed && check) ? Colors.default : 'transparent',
                        },
                        styles.pressableStyle
                    ]}>
                    <View style={[{
                        borderColor: check ? Colors.default : 'rgba(0, 0, 0, 0.6)',
                        backgroundColor: check ? Colors.default : Colors.white,
                    }, styles.wrapper]}>
                        {check && <Animatable.View animation={'bounceIn'} duration={1000}>
                            <VectorIcon groupName={'AW5'} name={'check'} size={15} color={'#fff'}/>
                        </Animatable.View>}
                    </View>

                </Pressable>
                <Pressable onPress={onPress}>
                    <P style={{marginLeft: 10, color: Colors.black}}>Share my location</P>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet?.create({
    wrapper: {
        width: 19,
        height: 19,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 2,
        borderWidth: 2
    },
    pressableStyle: {
        borderWidth: 1,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    }
})
