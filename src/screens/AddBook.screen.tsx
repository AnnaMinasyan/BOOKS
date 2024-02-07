import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button, Icon, Input } from '@rneui/themed';
import { addBookAction } from '@/store/actions/books-actions';
import { initialAddBookFormValue, validateBook } from '@/validations/bookValidation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParamList } from '@/navigation/MainNavigation';
import { useNavigation } from '@react-navigation/native';
import { ERROR, WHITE } from '@/assets/colors';

type PropsScreen = NativeStackScreenProps<MainParamList, "AddBook">;

const AddBookScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<PropsScreen['navigation']>();

    return (
        <View style={styles.container}>
            <Formik
                validate={validateBook}
                initialValues={initialAddBookFormValue}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(
                        addBookAction(values),
                    );
                    navigation.goBack()
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ handleChange, isSubmitting, handleSubmit, errors }) => (
                    <View style={styles.form}>
                        <Input
                            placeholder='INPUT TITLE'
                            errorStyle={styles.error}
                            errorMessage={errors.title}
                            onChangeText={handleChange('title')}
                        />
                        <Input
                            placeholder='INPUT AUTHOR'
                            errorStyle={styles.error}
                            errorMessage={errors.author}
                            onChangeText={handleChange('author')}
                        />
                        <Input
                            placeholder='INPUT YEAR OF PUBLICATION'
                            errorStyle={styles.error}
                            errorMessage={errors.year_of_publication}
                            onChangeText={handleChange('year_of_publication')}
                        />
                        <Button radius={"sm"} type="solid"
                            style={styles.button}
                            disabled={isSubmitting}
                            onPress={() => handleSubmit()}>
                            <Text style={styles.text}>SAVE</Text>
                            <Icon name="save" color="white" />
                        </Button>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default AddBookScreen;
const styles = StyleSheet.create({
    button: {
        marginTop: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        width: '100%'
    },
    error: {
        color: ERROR
    },
    form: {
        gap: 12
    },
    text: {
        color: WHITE,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight:10
    }
});

