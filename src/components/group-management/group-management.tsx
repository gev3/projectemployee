import React, {FC, useState, Fragment} from 'react';
import {View, FlatList, TextInput, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {VectorIcon} from '../vector-icon/vector-icon';
import {IEmployee} from "../../helpers/helpers";
import {useDispatch, useSelector} from 'react-redux';
import {handleSetEmployee, onDeleteEmployee} from "../../redux/auth/auth.actions";
import {IStore} from "../../redux/auth/auth.types";
import {Colors} from '../../styles/styles';
import {P} from '../p/p';

interface IGroup {
    members: IEmployee[]
}

export const GroupManagement: FC<IGroup> = ({members}) => {
    const [value, setValue] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectedEmployees = useSelector((state: IStore) => state.auth.selectedEmployees);
    const dispatch = useDispatch();
    const employeesExist = !!selectedEmployees?.length;

    // Adding member logic in a component is written here
    const handleAddMember = (item: IEmployee) => {
        if (selectedEmployees && selectedEmployees?.length >= 5) {
            return Alert.alert(`Limit`)
        } else {
            const selectedEmployeesIds = selectedEmployees?.map((item) => item.id)
            if (!selectedEmployeesIds?.includes(item.id)) return dispatch(handleSetEmployee(item))
            Alert.alert(`You already added ${item.first_name}`)
        }
    }

    // Employees list items with first and last name
    const renderItem = ({item}: { item: IEmployee, index: number }) => {
        return (
            <TouchableOpacity onPress={() => handleAddMember(item)} style={{paddingVertical: 3}}>
                <Text>{[item.first_name.concat(' ', item.last_name)]}</Text>
                <Text style={{fontSize: 11}}>At {item.department} as <Text
                    style={{fontSize: 11}}>{item.job_title}</Text></Text>
            </TouchableOpacity>
        )
    }

    // Search logic
    const result = members?.filter((item) => {
        const inputValueLowerCase = value?.toLowerCase();
        const stringValueLowerCase = item?.first_name?.toLowerCase();
        return stringValueLowerCase?.includes(inputValueLowerCase);
    });

    return (
        <View style={{alignItems: 'center'}}>
            <View style={[styles.inputWrapper, {
                borderBottomLeftRadius: (!isOpen && !employeesExist) ? 10 : 0,
                borderBottomRightRadius: (!isOpen && !employeesExist) ? 10 : 0,
            }]}>
                <TextInput
                    value={value}
                    onFocus={() => setIsOpen(true)}
                    onChangeText={setValue}
                    style={styles.inputStyle}
                    placeholder={'Search'}/>
                <TouchableOpacity style={{position: 'absolute', right: 0}} onPress={() => setIsOpen(!isOpen)}>
                    <VectorIcon groupName={'En'} name={!isOpen ? 'chevron-down' : 'chevron-up'}
                                style={{paddingRight: 20}}/>
                </TouchableOpacity>
            </View>
            {employeesExist && <View style={[styles.employeesWrapper, {
                borderBottomLeftRadius: (employeesExist && !isOpen) ? 10 : 0,
                borderBottomRightRadius: (employeesExist && !isOpen) ? 10 : 0,
            }]}>
                <View style={styles.flexAndFlexWrap}>
                    {selectedEmployees.map((item) => {
                        return (
                            <View key={item.id} style={styles.selectedWrapper}>
                                <P style={{color: Colors.black}}>{item.first_name}</P>
                                {/* Member removal functionality is written in a small middleware function in redux, in auth.utils.ts file */}
                                <TouchableOpacity onPress={() => dispatch(onDeleteEmployee(item))}>
                                    <VectorIcon groupName={'Ma'} size={18} name={'close'} color={Colors.red}/>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </View>}
            {isOpen &&
            <View style={styles.resultWrapper}>
                <FlatList
                    data={result}
                    renderItem={renderItem}
                    style={{maxHeight: 100}}
                    keyExtractor={(item: IEmployee) => item.id.toString()}
                    ListFooterComponent={<Fragment>
                        {(!!value && !result?.length) && <P>Not found</P>}
                    </Fragment>}
                />
            </View>}
        </View>
    )
}

const w = '80%'

const styles = StyleSheet.create({
    selectedWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.employeeBackground,
        padding: 3, borderRadius: 5,
        paddingHorizontal: 7,
        marginRight: 10, marginBottom: 10
    },
    inputWrapper: {
        width: w,
        backgroundColor: 'rgba(189,189,189,0.25)',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    inputStyle: {paddingHorizontal: 15, width: '100%'},
    employeesWrapper: {
        width: w,
        backgroundColor: 'rgba(189,189,189,0.25)',
        paddingHorizontal: 15
    },
    flexAndFlexWrap: {flexDirection: 'row', flexWrap: 'wrap', marginTop: 3},
    resultWrapper: {
        width: w,
        backgroundColor: 'rgba(189,189,189,0.25)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
})
