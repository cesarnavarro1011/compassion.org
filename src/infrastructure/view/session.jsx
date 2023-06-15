import React from "react";   
import { StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Box, Text, Heading, VStack, HStack, FormControl, Input, Link, Button, Stack, Center, NativeBaseProvider, Flex,} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


function Session({ navigation }) {

  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ ...errors,
        name: 'Name is required'
    })
    } if (formData.password === undefined) {
      setErrors({ ...errors,
        password: 'password is required'
    })
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors,  
        name: 'Name is too short'
      });
      return false;
    }
    else if (formData.password.length < 3) {
      setErrors({ ...errors,  
        password: 'Name is too short'
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };


    return <Center w="100%"> 
        <Image source={require('../../../assets/img/logos/sembrando_la_preciosa_semilla.png')}
          alt="logo cdi-581" 
          style={styles.logo_cdi}
        />
          <Box safeArea p="2" py="18" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
              Bienvenido 
            </Heading>
            <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
              Inicia session para continuar!
            </Heading>
            <VStack space={3} mt="5">
              <FormControl isRequired isInvalid={'name' in errors}>
                <FormControl.Label>Correo</FormControl.Label>
                <Input 
                  fontSize= "md" 
                  placeholder="Johnlewil@gmail.com" 
                  onChangeText={value => setData({ ...formData, name: value })}
                />
              </FormControl>
              <FormControl isRequired isInvalid={'password' in errors}>
              <FormControl.Label>Contraseña</FormControl.Label>
                <Input 
                  type="password" 
                  placeholder="carateres @#$%&"
                  fontSize= "md"
                  onChangeText={value => setData({ ...formData, password: value })}
                />
                <Link _text={{ fontSize: "sm", fontWeight: "500", color: "indigo.500" }} alignSelf="flex-end" mt="1" >
                  Se te ha olvidado la contraseña?
                </Link>
              </FormControl>
              <Button mt="2" bg="primary.600" colorScheme="indigo" 
                // isLoading isLoadingText="Enviando"
                onPress={onSubmit} >
                Iniciar Session
              </Button>
              {/* <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                  I'm a new user.{" "}
                </Text>
                <Link _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm"
              }} href="#">
                  Sign Up
                </Link>
              </HStack> */}
            </VStack>
          </Box>
    </Center>;
}

export default () => {
    return (
      <NativeBaseProvider>
        <Flex direction="row" style={styles.container_logo}>
          <Image source={require('../../../assets/img/logos/compassion.png')} 
            alt="logo compassion" 
            style={styles.logo_compassion}
            />
        </Flex>
        <Center flex={1} px="3">
            <Session />
        </Center>
        <HStack style={styles.container_create} w="40" alignSelf="flex-end">
            <Text fontSize="xs" fontWeight="200" italic>Create by </Text>
            <Text fontSize="xs" fontWeight="200"> César Navarro</Text>
        </HStack>

      </NativeBaseProvider>
    );
};
 
const styles = StyleSheet.create({

    container_logo: {
        marginTop: 35,
        width: "100%",
        height: 0,
        display: "flex",
        justifyContent: "flex-end"
    },

    logo_cdi : {
        width: 80,
        height: 80,
    },

    logo_compassion	: {
        width: 120,
        height: 40,
        marginRight: 10,
    },

    container_create: {
      marginBottom: 10,
    }
});