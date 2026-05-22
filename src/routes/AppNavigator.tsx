import React from "react";
import { NavigationContainer }
    from '@react-navigation/native';
import { createStackNavigator }
    from "@react-navigation/stack";
//importar os componentes de tela (screens)
import ListaProdutos
    from '../screens/ListaProdutos';
import Detalhe from "../screens/Detalhe";

//criar um objeto do StackNavigation
//desestruturação JS
//const {Navigator, Screen} = createStackNavigator();
const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        //é o componente pai, contexto da navegação
        <NavigationContainer>
            {/*estrutura (telas) para navegação*/}
            <Stack.Navigator
                initialRouteName="pag-produtos">

                <Stack.Screen
                    name="pag-produtos"
                    component={ListaProdutos}
                    options={{
                        title: "Produto",
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'gray',
                        }
                    }}
                /> 
                <Stack.Screen
                    name="pag-detalhe"//nome da tela na rota
                    component={Detalhe}//componente a ser exibido (screen)
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}