import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
            <Link replace style={styles.button} href={'/(user)'}>
                <Text>User</Text>
            </Link>

            <Link replace style={styles.button} href={'/(admin)'}>
                <Text>Admin</Text>
            </Link>

            <Link replace style={styles.button} href={'/sign-in'}>
                <Text>Auth</Text>
            </Link>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    button: {
        marginBottom: 20,
        padding: 20,
        borderRadius: 50,
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white'
    }
})