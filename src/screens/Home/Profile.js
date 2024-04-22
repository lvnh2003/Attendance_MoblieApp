import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';

const MyAirplaneModeModule = NativeModules.MyAirplaneModeModule;
const eventEmitter = new NativeEventEmitter(MyAirplaneModeModule);

export default function Profile({ navigation }) {
    // State để theo dõi trạng thái của chế độ máy bay
    const [airplaneModeEnabled, setAirplaneModeEnabled] = React.useState(false);

    React.useEffect(() => {
        // Tạo subscription để lắng nghe sự kiện khi chế độ máy bay được bật
        const airplaneModeEnabledSubscription = eventEmitter.addListener(
            'AirplaneModeEnabled',
            () => {
                console.log('Chế độ máy bay đã được bật');
                setAirplaneModeEnabled(true); // Cập nhật trạng thái của chế độ máy bay
            }
        );
        
        // Tạo subscription để lắng nghe sự kiện khi chế độ máy bay được tắt
        const airplaneModeDisabledSubscription = eventEmitter.addListener(
            'AirplaneModeDisabled',
            () => {
                console.log('Chế độ máy bay đã được tắt');
                setAirplaneModeEnabled(false); // Cập nhật trạng thái của chế độ máy bay
            }
        );

        // Xóa các subscriptions khi component unmount để tránh memory leak
        return () => {
            airplaneModeEnabledSubscription.remove();
            airplaneModeDisabledSubscription.remove();
        };
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
            <Text style={{ fontSize: 18, marginTop: 20 }}>
                {airplaneModeEnabled ? 'Chế độ máy bay đã được bật' : 'Chế độ máy bay đang tắt'}
            </Text>
            <Button
                title="Go to Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
