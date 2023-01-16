import React, {FC, useEffect, useState} from "react";
import {Alert, StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button, GroupManagement, P} from "../../../components";
import {employees, IEmployee, makeId} from "../../../helpers/helpers";
import {Fonts} from "../../../styles/styles";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../../redux/auth/auth.types";
import {setUserToken} from "../../../redux/auth/auth.actions";

type Props = NativeStackScreenProps<{ RegisterScreen: { text: string } }>;

export const SecondStepRegister: FC<Props> = ({navigation}) => {
    const selectedEmployees = useSelector((state: IStore) => state.auth.selectedEmployees);
    const dispatch = useDispatch();
    const [members, setMembers] = useState<IEmployee[]>([])


    // Imagine that we are receiving employees data from the backend
    useEffect(() => {
        (async () => {
            setTimeout(() => {
                setMembers([...employees])
            }, 0)
        })()
    }, [])

    return (
        <View style={{flex: 1}}>
            <P style={styles.title}>Create
                your group.</P>
            <GroupManagement members={members}/>
            <View style={{alignItems: 'center'}}>
                <View style={{
                    flexDirection: 'row',
                    width: '60%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Button body={"Previous"} onPress={() => navigation.goBack()} width={"45%"}
                            style={{marginTop: 20}}/>
                    <Button body={"Finish"} onPress={() => {
                        if (selectedEmployees.length < 5) {
                            Alert.alert('Please add at least 5 members')
                        } else {
                            dispatch(setUserToken(makeId(35)))
                        }
                    }} width={"40%"} style={{marginTop: 20}}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {color: '#000', textAlign: 'center', fontWeight: '500', fontSize: Fonts.h1, marginVertical: 15},
})
