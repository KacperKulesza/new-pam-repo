import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummy-data'

const MealDetailScreen = (props) => {
    const mealId = props.route.params.mealId
    const selectedMeal = MEALS.find( meal => meal.id === mealId )

    return(
        <View>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image} />
            <MealDetails duration={props.duration} 
                affordability={props.affordability}
                complexity={props.complexity}/>
        </View>
    )
}


export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 200
    }
})