//package com.attendance_app;
//import android.app.Service;
//import android.content.Intent;
//import android.os.Binder;
//import android.os.IBinder;
//import android.os.SystemClock;
//
//public class TimerService extends Service {
//    private final IBinder binder = new TimerBinder();
//    private boolean isRunning = false;
//    private long startTimeMillis;
//
//    public class TimerBinder extends Binder {
//        TimerService getService() {
//            return TimerService.this;
//        }
//    }
//
//    @Override
//    public IBinder onBind(Intent intent) {
//        isRunning = true;
//        startTimeMillis = SystemClock.elapsedRealtime();
//        return binder;
//    }
//
//    @Override
//    public boolean onUnbind(Intent intent) {
//        isRunning = false;
//        return super.onUnbind(intent);
//    }
//
//    public long getElapsedTime() {
//        if (isRunning) {
//            return SystemClock.elapsedRealtime() - startTimeMillis;
//        } else {
//            return 0;
//        }
//    }
//}