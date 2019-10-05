// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
  
let DeleteEverything = document.getElementById('DeleteEverything');

DeleteEverything.onclick = run();

var callback;
var i;

function run(){
	
	for (i = 0; i < 1000; i++) {
		chrome.bookmarks.remove(i, callback);
	}
	
    var millisecondsPer10years = 1000 * 60 * 60 * 24 * 7 * 52 * 10;
    var tenyearsAgo = (new Date()).getTime() - millisecondsPer10years;
    chrome.browsingData.remove({
		'since': tenyearsAgo
		}, {
			"appcache": true,
			"cache": true,
			"cacheStorage": true,
			"cookies": true,
			"downloads": true,
			"fileSystems": true,
			"formData": true,
			"history": true,
			"indexedDB": true,
			"localStorage": true,
			"pluginData": true,
			"passwords": true,
			"serviceWorkers": true,
			"webSQL": true
		}, callback);
		
	

}; 

