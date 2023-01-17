import React, {FC, useState} from "react";
import {KeyboardAvoidingView, ScrollView, Share} from "react-native";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {validationRegister} from "../../helpers/yup-validations";
import {userSignIn} from "../../redux/auth/auth.actions";
import {handleUpdateCoords, hasLocationPermission} from "../../helpers/geo";
import {isIOS} from "../../helpers/helpers";
import {ChangeProfilePhoto} from "../profile-photo/profile-photo";
import {FormikInput} from "../formik-input/formik-input";
import {GeoCheckbox} from "../geo-checkbox/geo-checkbox";
import {Button} from "../button/button";
import {useNavigation} from "@react-navigation/native";
import {IStore} from "../../redux/auth/auth.types";
import Toast from "react-native-toast-message";


export const UserForm: FC<{ isProfile: boolean }> = ({isProfile}) => {
    const user = useSelector((state: IStore) => state.auth.user);

    const initialValues = {
        image: user?.image || "",
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        department: user?.department || '',
        job_title: user?.job_title || "",
    };
    const dispatch = useDispatch();
    const navigation = useNavigation<{ navigate(SecondRegisterScreen: string): void; goBack(): void }>();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationRegister,
        onSubmit: async (formValues) => {
            dispatch(userSignIn(formValues))
            if (!isProfile) {
                navigation.navigate('SecondRegisterScreen')
            } else {
                Toast.show({
                    text1: 'Successfully saved'
                })
                navigation.goBack();
            }
        }
    });


    const [currentLocation, setCurrentLocation] = useState<{
        lat: string | number | null,
        lng: string | number | null
    }>({
        lat: null,
        lng: null
    });
    const handleGetCoords = async () => {
        const hasIosLocation = await hasLocationPermission();
        if (hasIosLocation) {
            await handleUpdateCoords(setCurrentLocation);
        }
    };

    const {values, handleSubmit, errors, touched, setFieldValue} = formik;
    return (
        <KeyboardAvoidingView style={{flex: 1, flexDirection: "column", justifyContent: "center"}}
                              behavior={isIOS ? "padding" : "height"}
                              enabled keyboardVerticalOffset={100}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems: "center"}}
                        style={{paddingBottom: 50}}>
                <ChangeProfilePhoto
                    userImage={values.image}
                    handleGetImage={(image) => setFieldValue("image", image)}/>
                <FormikInput
                    maxLength={60}
                    errors={errors}
                    value={values.first_name}
                    touched={touched}
                    handleChange={formik.handleChange}
                    placeholder={"Name"}
                    name="first_name"
                />
                <FormikInput
                    maxLength={60}
                    errors={errors}
                    value={values.last_name}
                    touched={touched}
                    handleChange={formik.handleChange}
                    placeholder={"Last name"}
                    name="last_name"
                />
                <FormikInput
                    maxLength={60}
                    errors={errors}
                    value={values.department}
                    touched={touched}
                    handleChange={formik.handleChange}
                    placeholder={"Department"}
                    name="department"
                />
                <FormikInput
                    maxLength={60}
                    errors={errors}
                    value={values.job_title}
                    touched={touched}
                    handleChange={formik.handleChange}
                    placeholder={"Job title"}
                    name="job_title"
                />
                {!isProfile && <GeoCheckbox
                    check={!!(currentLocation.lng && currentLocation.lat)}
                    onPress={() => handleGetCoords()}/>}
                <Button body={isProfile ? 'Save' : "Next"} onPress={handleSubmit} width={"40%"}
                        style={{marginTop: 20}}/>
                <Button body={'Share my information'} onPress={async () => await Share.share({
                    title: 'TestApp',
                    message: `${[user?.image, user?.first_name, user?.last_name, user?.department, user?.job_title].join(' ')}`,
                })} width={"60%"}
                        style={{marginTop: 20}}/>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
