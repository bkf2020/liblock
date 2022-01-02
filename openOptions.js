function openOptions() {
	chrome.runtime.openOptionsPage();
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('optionsButton')
		.addEventListener('click', openOptions);
});
