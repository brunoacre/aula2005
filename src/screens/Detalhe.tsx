import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Detalhe({ route, navigation } : any) {

    //desestruturação de objetos JS
    const {idlivro, titulolivro} = route.params;

    return (
        <View style={{ flex: 1 }}>
            <Text>Detalhes do Livro</Text>
            <Text>ID: { idlivro }</Text>
            <Text>Titulo: { titulolivro }</Text>
            <Button
                title='Voltar'
                onPress={ () => navigation.goBack() }
            />
        </View>
    );

}