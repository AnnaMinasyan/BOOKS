import BookCard from '@/components/BookCard';
import { deleteBookByIdAction, getBooksListAction, setSelectedBookAction } from '@/store/actions/books-actions';
import { booksSelector } from '@selectors/books-selector';
import React, { useEffect } from 'react';
import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IBookDTO } from '@/interfaces/interfaces';
import { Icon } from '@rneui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainParamList } from '@/navigation/MainNavigation';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, WHITE } from '@/assets/colors';

type PropsScreen = NativeStackScreenProps<MainParamList, 'Books'>;

const BookScreen: React.FC = () => {
    const dispatch = useDispatch();
    const books = useSelector(booksSelector);
    const navigation = useNavigation<PropsScreen['navigation']>();

    const handleGetBooks = () => {
        dispatch(getBooksListAction())
    }
    useEffect(() => {
        handleGetBooks()
    }, [])
    const handleRemoveBook = (id: number) => {
        dispatch(deleteBookByIdAction(id))
    }
    const handleEditBook = (book: IBookDTO) => {
        dispatch(setSelectedBookAction(book));
        navigation.navigate('EditBook')
    }
    const handleAddBook = () => {
        navigation.navigate("AddBook")
    }
    const Item = ({ item }: { item: IBookDTO }) => (
        <View key={item.id} style={styles.card}>
            <Pressable onPress={handleGetBooks}>
                <BookCard book={item} onRemove={handleRemoveBook} onEdit={handleEditBook} />
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>

            <FlatList
                data={books}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id.toString()}
            />
            <Pressable onPress={handleAddBook}>
                <Icon
                    name='add'
                    color={PRIMARY}
                    size={36} />
            </Pressable>
        </View>
    );
};

export default BookScreen;
const styles = StyleSheet.create({
    card: {
        marginBottom: 15
    },
    container: {
        backgroundColor: WHITE,
        flex: 1,
        paddingHorizontal: 16,
        width: '100%'
    }
});

