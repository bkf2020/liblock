# liblock
libre website blocker to help you stay focused. set times you want to prevent access to a website

# mirrors

- [Github](https://github.com/bkf2020/liblock)
- [Gitlab](https://gitlab.com/bkf2020/liblock)
- [Codeberg](https://codeberg.org/bkf2020/liblock)

# license
Some code was taken from https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/
The license is CC-BY-SA-4.0 and it is allowed to license that under GPL.

# goals

- [Allow users to update rules with UpdateRuleOptions](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#type-UpdateRuleOptions)
- Use storage API to allow users to store rules
- Add a background task that checks if the time the user set has passed
- Allow whitelisting websites?
	- Tried whitelisting a youtube playlist, but that allows the user to browse YouTube
		- Use the `tab` api?
- Use a table to display `setrules.html`
- When a user presses start, close all blocked websites with the `tab` api
- Allow users to press enter to enter a new rule
- clear dynamic rules when time expires
