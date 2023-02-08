import {Text, View, FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle"

function renderCategoryItem(itemData){
    return(
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
    )
}

function CategoriesScreen(){

    return(
        <FlatList data={CATEGORIES} 
        KeyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}>

        </FlatList>
    )
}

export {CategoriesScreen}

