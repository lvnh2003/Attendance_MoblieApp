import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { NativeModules } from 'react-native';
const { BoundModule } = NativeModules;

export default function Home() {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const startTime= ()=>{
        BoundModule.startService();
    }
    const stopTime = ()=>{
        BoundModule.stopService();
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="start"  onPress={startTime}/>
            <Button title="stop"  onPress={stopTime}/>
        </View>
    );
}
