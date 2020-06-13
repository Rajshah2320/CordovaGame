package com.example.gamename;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import org.apache.cordova.CordovaActivity;

public class GameActivity extends CordovaActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        String url=getIntent().getStringExtra("url");

        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        // Set by <content src="index.html" /> in config.xml
        //  loadUrl(launchUrl);
        //loadUrl("file:///android_asset/www2/index.html");
      //  String url="file://"+getExternalFilesDir("").getAbsolutePath()+ "/www2/index.html";
        Log.i("URL",  url);
        //    /sdcard/Android/data/com.example.gamename/files/www/index.html
        loadUrl(url);
    }
}
