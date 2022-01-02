chrome.alarms.onAlarm.addListener(function() {
	chrome.storage.sync.set({blocking: false});
	chrome.tabs.query({"url" : ["chrome-extension://*/setrules.html"]}).then(function(result) {
		for(var i = 0; i < result.length; i++) {
			var tab = result[i];
			chrome.tabs.reload(tab.id);
		}
	});
	// delete all dynamic rules in browser
	chrome.storage.sync.get(['userRules'], function(result) {
		if(result.userRules === undefined) return false;
		var rules_id = [];
		for(var i = 1; i <= result.userRules.length; i++) {
			rules_id.push(i);
		}
		chrome.declarativeNetRequest.updateDynamicRules({"removeRuleIds": rules_id});
		return true;
	});
	// notification that the block session is over
	chrome.notifications.create({
		"iconUrl": "/icon.jpg",
		"message": "liblock has finished blocking websites! If you want, start a new blocking session.",
		"title": "liblock",
		"type": "basic"
	});
});
