import React from "react";   
import { StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Box, Text, Heading, VStack, HStack, FormControl, Input, Link, Button, Stack, Center, NativeBaseProvider, Flex,} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


function SessionForm({ navigation }) {

  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  
  const validate = () => {

    if (formData.name === undefined && formData.password === undefined) {
      setErrors({ ...errors,
        name:'El campo Correo está vacio',
        password:'El campo Contraseña está vacio'
      })
    return false;
    }
    if (formData.name === undefined) {
      setErrors({ ...errors,
        password: 'El campo Correo está vacio'
    })
      return false;
    } 
    if (formData.password === undefined) {
      setErrors({ ...errors,
        password: 'El campo Contraseña está vacio'
      })
      return false;
    } 
    else if (formData.name.length === "@" ) {
      setErrors({ ...errors,  
        name: 'No parece Correo'
      });
      return false;
    } 
    else if (formData.password.length < 3) {
      setErrors({ ...errors,  
        password: 'La contraseña está vacia'
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    // validate() ? console.log(formData) : console.log('Validation Failed');

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
                  placeholder="Jhon+cdi581@gmail.com" 
                  onChangeText={value => setData({ ...formData, name: value })}
                />
                {'name' in errors ? 
                <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> : 
                  <FormControl.HelperText></FormControl.HelperText>
                }
              </FormControl>
              <FormControl isRequired isInvalid={'password' in errors}>
              <FormControl.Label>Contraseña</FormControl.Label>
                <Input 
                  type="password" 
                  placeholder="Contener más de 6 caracteres"
                  fontSize= "md"
                  onChangeText={value => setData({ ...formData, password: value })}
                />
                {'password' in errors ? 
                <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage> : 
                  <FormControl.HelperText></FormControl.HelperText>
                }
                <Link _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }} alignSelf="flex-end" mt="1" >
                  Se te ha olvidado la contraseña?
                </Link>
              </FormControl>
              <Button mt="2" bg="primary.600" colorScheme="indigo" 
                // isLoading isLoadingText="Enviando"
                onPress = {()=> {
                  navigation.navigate('AppAcess')
                }} >
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

export default function Session({ navigation }) {
    return (
      <NativeBaseProvider>
        <Flex direction="row" style={styles.container_logo}>
          <Image source={require('../../../assets/img/logos/compassion.png')} 
            alt="logo compassion" 
            style={styles.logo_compassion}
            />
        </Flex>
        <Center flex={1} px="3">
            <SessionForm navigation={navigation}/>
        </Center>
        <HStack w="40" alignSelf="flex-end">
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