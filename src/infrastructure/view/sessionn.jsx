import { TouchableOpacity } from "react-native-gesture-handler";


export default function Sessionn({navigation}) {
    return (
         <TouchableOpacity 
         onPress={() => {navigation.navigate('AppAcess')}}>
            ingresar
        </TouchableOpacity>   
    );
}