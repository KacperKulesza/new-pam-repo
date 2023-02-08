import {Text, View, FlatList} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderCategoryItem(itemData){
    return(
        <CategoryGridTitle title={itemData.item.title} />
    )
}

function CategoriesScreen(){

    return(
        <FlatList data={CATEGORIES} 
        KeyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}>

        </FlatList>
    )
}

export {CategoriesScreen}