import React, {FC} from 'react';
import {Image} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {Button, P} from "../../../components";
import {Colors} from '../../../styles/styles';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../../redux/auth/auth.types";
import {clearUserData} from "../../../redux/auth/auth.actions";

type Props = NativeStackScreenProps<{ PersonalInformation: undefined, ManageEmployees: { isProfile: boolean }, }>;
export const ProfileScreen: FC<Props> = ({navigation}) => {
    const user = useSelector((state: IStore) => state.auth.user);
    const dispatch = useDispatch()

    return (
        <View>
            <View style={{alignItems: 'center', marginVertical: 10}}>
                {user?.image ? <Image source={{uri: `data:image/jpeg;base64,${user?.image}`}} style={styles.image}/> :
                    <Image style={styles.image} source={require('../../../assets/images/userDefault.png')}/>}
                <P>{`${user?.first_name.concat(' ', user?.last_name)}`}</P>
            </View>
            <View style={{alignItems: 'center'}}>

                <Button body={'Personal information'}
                        onPress={() => navigation.navigate('PersonalInformation')}
                        width={'50%'}/>
                <Button body={'Manage employees'}
                        style={{marginVertical: 10}}
                        onPress={() => navigation.navigate('ManageEmployees', {isProfile: true})}
                        width={'50%'}/>
                <Button body={'Logout'}
                        onPress={() => dispatch(clearUserData())}
                        style={{backgroundColor: 'transparent'}}
                        textStyle={{color: Colors.red}}
                        width={'50%'}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {width: 100, height: 100, borderRadius: 100, marginVertical: 10}
})


