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

var rules = [];
var ptr = 0;

// this evt is based off https://stackoverflow.com/a/11986895, by Zaloz
// license if CC BY SA 4.0, so it can be GPL licensed
function deleteRule(evt) {
	var which = evt.currentTarget.ptr;
	rules[which] = "";
	document.getElementById('rule' + which.toString() + 'text').remove();
	document.getElementById('rule' + which.toString() + 'btn').remove();
	document.getElementById('rule' + which.toString() + 'br').remove();
}

function addRule() {
	var blocked = document.getElementById('new-rule').value;
	if(blocked !== "") {
		rules.push(blocked);
		var currentRuleText = document.getElementById('rule' + ptr.toString() + 'text');
		var nextRuleText = currentRuleText.cloneNode(true);

		currentRuleText.innerText = blocked + " ";
		currentRuleText.style = "";

		var currentRuleButton = document.getElementById('rule' + ptr.toString() + 'btn');
		var nextRuleButton = currentRuleButton.cloneNode(true);
		currentRuleButton.style = "";

		// these two lines are based off https://stackoverflow.com/a/11986895, by Zaloz
		// license if CC BY SA 4.0, so it can be GPL licensed
		currentRuleButton.addEventListener('click', deleteRule, false);
		currentRuleButton.ptr = ptr;

		var currentRuleBr = document.getElementById('rule' + ptr.toString() + 'br');
		var nextRuleBr = currentRuleBr.cloneNode(true);

		ptr++;
		nextRuleText.id = "rule" + ptr.toString() + "text";
		nextRuleButton.id = "rule" + ptr.toString() + "btn";
		nextRuleBr.id = "rule" + ptr.toString() + "br";
		document.getElementById('rules').appendChild(nextRuleText);
		document.getElementById('rules').appendChild(nextRuleButton);
		document.getElementById('rules').appendChild(nextRuleBr);
	}
	document.getElementById('new-rule').value = "";
}

function startBlocking() {
	// temp
	var rules_id = [];
	for(var i = 1; i <= 10000; i++) {
		rules_id.push(i);
	}
	chrome.declarativeNetRequest.updateDynamicRules({"removeRuleIds": rules_id});

	var rules_json = [];
	var curr_id = 1;
	for(var i = 0; i < rules.length; i++) {
		var r = rules[i];
		if(r !== "") {
			rules_json.push({"id": curr_id, "priority": 1,
				"action": { "type": "redirect", "redirect": { "extensionPath": "/blocked.html" } },
				    "condition": { "urlFilter": r, "resourceTypes": ["main_frame"] }});
			curr_id++;
		}
	}
	chrome.declarativeNetRequest.updateDynamicRules({"addRules": rules_json});
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('add-rule')
		.addEventListener('click', addRule);
	document.getElementById('start-blocking')
		.addEventListener('click', startBlocking);
});
