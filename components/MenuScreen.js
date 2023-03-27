import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Alert} from 'react-native';

    
export default function MenuScreen({ navigation }) {
    
    showAlert = viewId => Alert.alert('Alert', viewId)
    
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.topRightButton}
                onPress={() => showAlert('Sign Out')}>
                <Text style={styles.topRightButton}>Sign Out</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#EBEBEB',
    },
    topRightButton:{
      height: 20,
      textAlign:'right',
      right: 10,
    },
})