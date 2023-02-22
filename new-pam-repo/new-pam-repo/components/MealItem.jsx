import { Text, View, StyleSheet, Pressable, Image } from 'react-native'


function MealItem(props){

    return(
        <View style={styles.mealItem}>
            <Image source={{uri: props.imageUrl}} style={styles.image}></Image>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{props.duration} </Text>
                <Text style={styles.detailItem}>{props.complexity.toUpperCase()} </Text>
                <Text style={styles.detailItem}>{props.affordability.toUpperCase()} </Text>
            </View>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12
    }
})