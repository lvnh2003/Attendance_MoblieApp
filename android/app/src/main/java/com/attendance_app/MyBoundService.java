package com.attendance_app;

import android.app.Service;
import android.content.Intent;
import android.hardware.display.DisplayManager;
import android.os.Binder;
import android.os.Handler;
import android.os.IBinder;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.Timer;
import java.util.TimerTask;

public class MyBoundService extends Service {
    private IBinder mBinder = new MyBinder();
    private static int count = 0;
    private Timer timer;
    @Override
    public void onCreate(){
        super.onCreate();
        Log.d("MyboundService","created");
    }
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {

//        handleIntent(intent);
        return mBinder;
    }
    public  class MyBinder extends Binder{
        MyBoundService getService(){
            return MyBoundService.this;
        }
    }
    public void startTime(){
        timer = new Timer();
        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                count++;
                Log.i("Started","Current count: " + count);
            }
        }, 0, 1000);
    }

    private void pauseTime() {
        Log.e("stopped","Stop!!");
        if (timer != null) {
            timer.cancel();
            System.out.println("Counting stopped. Final count: " + count);
        }
    }
    @Override
    public void onTaskRemoved(Intent rootIntent){
        super.onTaskRemoved(rootIntent);
        stopSelf();
    }
    @Override
    public void onDestroy(){
        super.onDestroy();
        Log.e("stopped","Stop!!");
        if (timer != null) {
            timer.cancel();
            System.out.println("Counting stopped. Final count: " + count);
        }
    }
    private void handleIntent(Intent intent) {
        if (intent != null) {
            // Xử lý intent ở đây
            // Ví dụ: kiểm tra action của intent và thực hiện hành động tương ứng
            String action = intent.getAction();
            if (action != null && action.equals("ACTION_START_TIME")) {
                startTime();
            }
        }
    }
}
