import * as React from 'react';
import { View, Text } from 'react-native';

export default function Test({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Test" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Test Screen</Text>
        </View>
    );
}