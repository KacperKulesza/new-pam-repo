import { useLayoutEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';
import { MEALS, CATEGORIES } from '../data/dummy-data.js'; 
import MealItem from '../components/MealItem';

function MealsOverviewScreen(props){


    useLayoutEffect( () => {
        const categoryTitle = CATEGORIES.find(category => 
            category.id === id).title

        props.navigation.setOptions({
            title: categoryTitle
        });
    },
    [id, props.navigation]
    )



    const id=props.route.params.categoryId
    const displayedMeals=MEALS.filter( (mealItem) =>{
        return mealItem.categoryIds.indexOf(id) >= 0;
    }) 

    function renderMealItem(itemData){
        const mealItemProps= {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }
        return <MealItem {...mealItemProps} />
    }
    return(
        <View>
            <FlatList data={displayedMeals} 
            keyExtractor={(item)=>item.id} 
            renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen