/*
    liblock: libre site blocker to block distracting websites
    Copyright (C) 2021 bkf2020

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, ONLY version 3 of the License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
