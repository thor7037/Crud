import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants/Colors';

export const styles = StyleSheet.create({
    MainContainer: {

        flex: 1,
        backgroundColor: COLORS.blue

    },
    addicon: {
        marginLeft: 126,
        color:COLORS.white,
        marginTop:56,
        fontWeight:'bold',
        fontSize:20,
backgroundColor:'green'
    },
    Container:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:40
    },
    outline:{
        
    }
    
});