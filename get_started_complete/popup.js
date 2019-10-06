// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let DeleteEverything = document.getElementById('DeleteEverything');

DeleteEverything.onclick = run();

var callback;
var i;

chrome.tts.speak('Caution');

var confirm_action;
function run(){
  confirm_action=confirm("You're about to delete your history, cookies, downloads, passwords, localStorage,\ and cache. \nAre you sure you would like to continue?")
  if(confirm_action==true){


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

}else{
  window.close()
}

};
