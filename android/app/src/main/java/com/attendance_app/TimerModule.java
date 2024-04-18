//package com.attendance_app;
//import android.content.Intent;
//
//import com.facebook.react.bridge.Callback;
//import com.facebook.react.bridge.ReactApplicationContext;
//import com.facebook.react.bridge.ReactContextBaseJavaModule;
//import com.facebook.react.bridge.ReactMethod;
//public class TimerModule extends ReactContextBaseJavaModule {
//    private final ReactApplicationContext reactContext;
//
//    public TimerModule(ReactApplicationContext reactContext) {
//        super(reactContext);
//        this.reactContext = reactContext;
//    }
//
//    @Override
//    public String getName() {
//        return "TimerServiceModule";
//    }
//
//    @ReactMethod
//    public void getElapsedTime(Callback successCallback) {
//        TimerService.TimerBinder binder = new TimerService().new TimerBinder();
//        TimerService timerService = binder.getService();
//        long elapsedTime = timerService.getElapsedTime();
//        // Chuyển đổi elapsedTime sang kiểu Long trước khi truyền vào successCallback
//        successCallback.invoke((double) elapsedTime);
//    }
//    @ReactMethod
//    public void startService() {
//        Intent intent = new Intent(reactContext, TimerService.class);
//        reactContext.startService(intent);
//    }
//
//    @ReactMethod
//    public void stopService() {
//        Intent intent = new Intent(reactContext, TimerService.class);
//        reactContext.stopService(intent);
//    }
//}