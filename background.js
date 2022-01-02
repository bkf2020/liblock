chrome.alarms.onAlarm.addListener(function() {
	chrome.storage.sync.set({blocking: false});
	chrome.tabs.query({"url" : ["chrome-extension://*/setrules.html"]}).then(function(result) {
		for(var i = 0; i < result.length; i++) {
			var tab = result[i];
			chrome.tabs.reload(tab.id);
		}
	});
});
