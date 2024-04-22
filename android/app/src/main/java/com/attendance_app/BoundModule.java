package com.attendance_app;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.app.Activity;
import android.os.IBinder;
import android.provider.Settings;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class BoundModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private MyBoundService mService;
    private Boolean isServiceConnected;
    private ServiceConnection serviceConnection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName componentName, IBinder iBinder) {
            MyBoundService.MyBinder myBinder = (MyBoundService.MyBinder) iBinder;
            mService = myBinder.getService();
            mService.startTime();
            isServiceConnected = true;
        }

        @Override
        public void onServiceDisconnected(ComponentName componentName) {
            isServiceConnected = false;
        }
    };

    public BoundModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "BoundModule";
    }

    @ReactMethod
    public void startService(Callback callback) {
        Log.d("Start from React Native","Count");
        callback.invoke(" CCCC");
        Intent intent = new Intent(getCurrentActivity(), MyBoundService.class);
        // cái này để làm gì
        getCurrentActivity().bindService(intent, serviceConnection, Context.BIND_AUTO_CREATE);
    }

    @ReactMethod
    public void stopService() {
        Log.e("Stop from React Native","Count");
        if (isServiceConnected) {
            getCurrentActivity().unbindService(serviceConnection);
            isServiceConnected = false;
        }
    }
    @ReactMethod
    public void allowPermission()
    {
        Intent intent = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
        getCurrentActivity().startActivity(intent);
    }
}
