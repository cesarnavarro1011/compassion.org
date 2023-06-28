import { Box, Text, Heading, VStack, HStack, FormControl, Input, Link, Button, Stack, Center, NativeBaseProvider, Flex,} from "native-base";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PerfilStaff() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
              <View style={styles.container_perfil}>

              </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: "auto",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },

    container_perfil: {
        backgroundColor: "green",
        width: 150,
        height: 150,
        borderRadius: 100,

    },
})

// export default () =>{
//     return (
//         <NativeBaseProvider>
//           <Center flex={1} px="300">
//               <PerfilStaff />
//           </Center>
//       </NativeBaseProvider>
//     );
// }




































