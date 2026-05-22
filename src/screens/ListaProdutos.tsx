import React from 'react';
import { View, Text, Button, StyleSheet }
    from 'react-native';

export default function ListaProdutos( {navigation} : any ) {
    //mock
    const livro = {
        id: '456',
        titulo: 'Teste 2',
        editora: 'Vozes',
    }

    const handleVerDetalhe = () => {        
        navigation.navigate('pag-detalhe', {
            idlivro: livro.id,
            titulolivro: livro.titulo,
            editoralivro: livro.editora,
            teste: 'olá',
        });
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>
                Lista de Produtos
            </Text>
            <Button
                title='Ver detalhes Livro'
                onPress={handleVerDetalhe}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    }
})