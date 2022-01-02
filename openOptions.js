function openOptions() {
	chrome.runtime.openOptionsPage();
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('optionsButton')
		.addEventListener('click', openOptions);
});

chrome.storage.sync.get(['blocking'], function(result) {
	if(result.blocking) {
		document.getElementById("optionsButton").innerText = "view websites you are blocking and time left";
	} else {
		document.getElementById("optionsButton").innerText = "change blocked websites and start blocking";
	}
});
