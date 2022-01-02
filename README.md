# liblock
libre website blocker to help you stay focused. set times you want to prevent access to a website

# mirrors

- [Github](https://github.com/bkf2020/liblock)
- [Gitlab](https://gitlab.com/bkf2020/liblock)
- [Codeberg](https://codeberg.org/bkf2020/liblock)

# license
Some code was taken from https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/
The license is CC-BY-SA-4.0 and it is allowed to license that under GPL.

The file `icon.jpg` is under CC0 and is from [public domain pictures](https://www.publicdomainpictures.net/en/view-image.php?image=312428&picture=penguin-print).

The files in the folder `icons` are also under CC0, since it is just the original picture resized.

# goals

- [x] [Allow users to update rules with UpdateRuleOptions](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#type-UpdateRuleOptions)
- [x] Use storage API to allow users to store rules
- [x] Add a background task that checks if the time the user set has passed (using `alarm` api)
- [ ] Allow whitelisting websites?
	- Tried whitelisting a youtube playlist, but that allows the user to browse YouTube
		- Use the `tab` api?
- [ ] Use a table to display `setrules.html`
- [x] When a user presses start, close all blocked websites with the `tab` api
- [ ] Allow users to press enter to enter a new rule
- [x] clear dynamic rules when time expires
- [ ] Maybe query tabs instead of using `declarativeNetRequest` and see which tabs need to be closed/redirected
- [ ] Use a better theme for the extension
- [ ] Clean up the code
	- [ ] Use better names for files
	- [ ] Use simpler logic if possible
- [ ] Branding: create an icon, description
- [ ] Privacy: tell users why the extension needs certain permissions
- [ ] Show users which websites they block on `setrules.html`
