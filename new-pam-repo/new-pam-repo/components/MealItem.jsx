import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

function MealItem(props){

    const navigation = useNavigation();

    function selectMealItemHandler(event){
        navigation.navigate("MealsDetails", {
            mealId: props.id
        })
    }

    return(
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItemHandler}>
                <Image source={{uri: props.imageUrl}} style={styles.image}></Image>
                <Text style={styles.title}>{props.title}</Text>
                <MealDetails duration={props.duration} 
                affordability={props.affordability}
                complexity={props.complexity}/>
            </Pressable>
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
    }
})