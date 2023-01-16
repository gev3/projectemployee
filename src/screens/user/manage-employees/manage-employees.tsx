import React, { Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, GroupManagement, P} from "../../../components";
import {employees} from "../../../helpers/helpers";
import {Fonts} from "../../../styles/styles";
import {useNavigation} from "@react-navigation/native";

export const ManageEmployees = ({}) => {
    const navigation = useNavigation<{ goBack(): void; }>()
    return (
        <Fragment>
            <P style={styles.title}>Manage your group.</P>
            <GroupManagement members={employees}/>
            <View style={styles.btnWrapper}>
                <Button body={'Back'} width={'30%'} onPress={() => navigation.goBack()}/>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    title: {color: '#000', textAlign: 'center', fontWeight: '500', fontSize: Fonts.h1, marginVertical: 15},
    btnWrapper: {alignItems: 'center', marginVertical: 20},
})

