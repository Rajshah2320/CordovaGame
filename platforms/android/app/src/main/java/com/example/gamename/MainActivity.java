/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.example.gamename;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.util.Printer;
import android.view.View;
import android.widget.Adapter;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import org.apache.cordova.*;
import org.apache.cordova.file.LocalFilesystem;
import org.apache.cordova.file.LocalFilesystemURL;

import java.io.File;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    private ListView listView;
    private ArrayList<String> gameNames, gamePaths;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activty_main);
        listView = findViewById(R.id.listView);

        Intent intent = new Intent(MainActivity.this, GameActivity.class);


        gameNames = new ArrayList<>();
        gamePaths = new ArrayList<>();

        File[] names = getExternalFilesDir("").listFiles();

        for (int i = 0; i < names.length; i++) {
            if (names[i].isDirectory()) {
                gamePaths.add("file://"+names[i].getAbsolutePath()+"/index.html");
                gameNames.add(names[i].getName());
            }
        }


        ArrayAdapter arrayAdapter = new ArrayAdapter(this, android.R.layout.simple_list_item_1, gameNames);
        listView.setAdapter(arrayAdapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                String url = gamePaths.get(i);
                intent.putExtra("url", url);
                startActivity(intent);
            }
        });
    }
}
