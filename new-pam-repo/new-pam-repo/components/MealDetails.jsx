import {View, Text, StyleSheet} from 'react-native'

function MealDetails(props){

    return(
        <>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{props.duration} </Text>
                <Text style={styles.detailItem}>{props.complexity} </Text>
                <Text style={styles.detailItem}>{props.affordability} </Text>
            </View>
        </>
    )
}

export default MealDetails

const styles = StyleSheet.create({
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