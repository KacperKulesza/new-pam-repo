import {View, Text, Pressable} from "react-native"
function CategoryGridTitle(props){
    
    return(
        <View>
            <Pressable>
                <View>
                    <Text>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTitle