package com.attendance_app;
import android.app.Service;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.os.SystemClock;

public class TimerService extends Service {

    private final IBinder binder = new LocalBinder();
    private long startTime;
    private boolean isRunning;

    public class LocalBinder extends Binder {
        TimerService getService() {
            return TimerService.this;
        }
    }

    @Override
    public IBinder onBind(Intent intent) {
        return binder;
    }

    public void startTimer() {
        if (!isRunning) {
            startTime = SystemClock.elapsedRealtime();
            isRunning = true;
        }
    }

    public void stopTimer() {
        if (isRunning) {
            isRunning = false;
        }
    }

    public long getElapsedTime() {
        if (isRunning) {
            return SystemClock.elapsedRealtime() - startTime;
        } else {
            return 0;
        }
    }
}