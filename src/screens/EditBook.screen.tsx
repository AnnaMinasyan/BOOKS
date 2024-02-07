import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Button, Icon, Input } from '@rneui/themed';
import { changeBookAction } from '@/store/actions/books-actions';
import { validateBook } from '@/validations/bookValidation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParamList } from '@/navigation/MainNavigation';
import { useNavigation } from '@react-navigation/native';
import { selectedBookSelector } from '@/store/selectors/books-selector';
import { ERROR, WHITE } from '@/assets/colors';

type PropsScreen = NativeStackScreenProps<MainParamList, "AddBook">;

const EditBookScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<PropsScreen['navigation']>();
    const selectedBook = useSelector(selectedBookSelector)

    return (
        <View style={styles.container}>
            <Formik
                validate={validateBook}
                enableReinitialize={true}
                initialValues={selectedBook}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(
                        changeBookAction({ id: selectedBook.id, body: values }),
                    );
                    navigation.goBack()
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ handleChange, isSubmitting, handleSubmit, errors, values }) => (
                    <View style={styles.form}>
                        <Input
                            placeholder='INPUT TITLE'
                            errorStyle={styles.error}
                            errorMessage={errors.title}
                            onChangeText={handleChange('title')}
                            value={values.title}
                        />
                        <Input
                            placeholder='INPUT AUTHOR'
                            errorStyle={styles.error}
                            errorMessage={errors.author}
                            onChangeText={handleChange('author')}
                            value={values.author}
                        />
                        <Input
                            placeholder='INPUT YEAR OF PUBLICATION'
                            errorStyle={styles.error}
                            errorMessage={errors.year_of_publication}
                            onChangeText={handleChange('year_of_publication')}
                            value={values.year_of_publication.toString()}
                        />
                        <Button radius={"sm"} type="solid"
                            style={styles.button}
                            disabled={isSubmitting}
                            onPress={()=>handleSubmit()}>
                            <Text style={styles.text}>CHANGE</Text>
                            <Icon name="refresh" color="white" />
                        </Button>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default EditBookScreen;
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
        color: ERROR,
    },
    form: {
        gap: 12
    },
    text:{
        color:WHITE,
        fontSize:16,
        fontWeight:'bold'
    }
});

