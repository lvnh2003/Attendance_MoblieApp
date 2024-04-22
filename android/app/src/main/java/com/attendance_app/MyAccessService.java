package com.attendance_app;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.AccessibilityServiceInfo;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;

public class MyAccessService extends AccessibilityService {
    @Override
    public void onAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        Log.d("Aceess","Successfully");
//        String packageName = accessibilityEvent.getPackageName().toString();
//        PackageManager packageManager = this.getPackageManager();
//
//        ApplicationInfo applicationInfo = null;
//        try {
//            applicationInfo = packageManager.getApplicationInfo(packageName, 0);
//            CharSequence applicationLabel = packageManager.getApplicationLabel(applicationInfo);
//            Log.e("Notify", "app name is:" + applicationLabel);
//        } catch (PackageManager.NameNotFoundException e) {
//            throw new RuntimeException(e);
//        }
        if (accessibilityEvent.getEventType() == AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED) {
            // Lấy thông tin về ứng dụng hiện tại được mở
            String currentApp = accessibilityEvent.getPackageName().toString();
            Log.i("App nme","App name is: "+ currentApp);
        }


    }

    @Override
    public void onInterrupt() {
        Log.e("Error","interrupt");
    }

}
