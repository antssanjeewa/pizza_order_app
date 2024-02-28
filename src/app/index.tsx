import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { Link, Redirect } from 'expo-router';
import { useAuth } from '@/provider/AuthProvider';
import { supabase } from '@/lib/supabase';

const index = () => {

    const { session, loading } = useAuth();

    if (loading) {
        return <ActivityIndicator />
    }

    if (!session) {
        return <Redirect href={'/sign-in'} />
    }

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

            <Button onPress={() => supabase.auth.signOut()} title='Sign Out' />
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