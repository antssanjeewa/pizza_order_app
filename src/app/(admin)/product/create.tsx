import { View, Text, StyleSheet, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/Button'
import { Images } from '@/constants';
import { useLocalSearchParams } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const CreateProduct = () => {

    const { id } = useLocalSearchParams();
    const isUpdate = !!id;

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [error, setError] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const validateInput = () => {
        setError('')
        if (!name) {
            setError("name is required");
            return false;
        }
        if (!price) {
            setError("price is required");
            return false;
        }
        if (isNaN(parseFloat(price))) {
            setError("price is want to number");
            return false;
        }

        return true;
    }

    const saveData = () => {
        if (!validateInput()) {
            return;
        }

        if (isUpdate) {
            updateProduct();
        } else {
            createProduct();
        }
    }

    const createProduct = () => { }
    const updateProduct = () => { }
    const deleteProduct = () => { }
    const deleteData = () => {
        Alert.alert("Confirm", "Are you sure, you want to delete This..", [
            {
                text: "Cancel"
            },
            {
                text: "Confirm",
                style: 'destructive',
                onPress: deleteProduct
            }
        ])
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={image ? { uri: image } : Images.Dog} />

            <Text style={styles.imageText} onPress={pickImage}>Select Image</Text>

            <Text style={styles.label} >Name</Text>
            <TextInput
                style={styles.input}
                placeholder='Product Name'
                placeholderTextColor='gray'
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label} >Price ($)</Text>
            <TextInput
                placeholder="9.99"
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor='gray'
                value={price}
                onChangeText={setPrice}
            />

            <Text style={{ color: 'red' }}>{error}</Text>

            <Button name="Create" action={saveData} />

            <Button name="Delete" action={deleteData} />
        </View>
    )
}

export default CreateProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 100,
        alignSelf: 'center'
    },
    imageText: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 30
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },
    label: {
        color: 'gray',
        fontSize: 16,
    },
})