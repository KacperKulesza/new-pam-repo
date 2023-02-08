import {View, Text, Pressable, StyleSheet} from "react-native"
function CategoryGridTitle(props){
    
    return(
        <View style={styles.outerView}>
            <Pressable>
                <View style={styles.innerView}>
                    <Text>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTitle;

const styles=StyleSheet.create({
    outerView:{
        flex: 1,
        marigin: 16,
        height: 150,
        elevation: 6,
        borderRadius: 18,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height:2},
        shadowRadius: 8
    },
    innerView:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
})