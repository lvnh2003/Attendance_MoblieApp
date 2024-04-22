import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { NativeModules } from 'react-native';
const { BoundModule, YoutubeDetector } = NativeModules;

export default function Home() {
    const startTime= ()=>{
        BoundModule.startService((result) => {
            console.log('Received result from Java:', result);
        });
    }
    const stopTime = ()=>{
        BoundModule.allowPermission();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="start"  onPress={startTime}/>
            <Button title="stop"  onPress={stopTime}/>
        </View>
    );
}
