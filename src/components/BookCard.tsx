import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Icon } from '@rneui/themed';
import { IBookDTO } from '@/interfaces/interfaces';
import { BLUE, DARK, ERROR, LIGHT, PRIMARY } from '@/assets/colors';

type Props = {
    book: IBookDTO;
    onRemove:(value:number)=>void;
    onEdit:(value:IBookDTO)=>void;
}

const BookCard: React.FC<Props> = ({ book,onRemove,onEdit }) => {
    const { id,title, author, year_of_publication } = book
    
    return (
        <View style={styles.container}>
            <Icon
                name='book'
                color={PRIMARY}
                size={36} />
            <View>
                <Text style={styles.title}>Title:</Text>
                <Text style={styles.author}>Author:</Text>
                <Text>Year of publication:</Text>
            </View>
            <View>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.author}>{author}</Text>
                <Text>{year_of_publication}</Text>
            </View>
            <View>
                <Pressable style={styles.button} onPress={()=>onEdit(book)}>
                    <Icon
                        name='edit'
                        color={DARK}/>
                </Pressable>
                <Pressable style={styles.button} onPress={()=>onRemove(id)}>
                    <Icon
                        name='delete'
                        color={ERROR} />
                </Pressable>
            </View>
        </View>
    );
};

export default BookCard;
const styles = StyleSheet.create({
    author: {
        fontSize: 16,
        marginVertical:4
    },
    button: {
        padding: 10,
        
    },
    container: {
        alignItems:'center',
        backgroundColor: LIGHT,
        borderRadius: 8,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 10,
        shadowColor: BLUE,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '100%'
    },
    title: {
        color:PRIMARY,
        fontSize: 18,
        fontWeight:'600',
        maxWidth:150
    }
});

