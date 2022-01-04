# liblock
libre website blocker to help you stay focused. set times you want to prevent access to a website

# mirrors

- [Github](https://github.com/bkf2020/liblock)
- [Gitlab](https://gitlab.com/bkf2020/liblock)
- [Codeberg](https://codeberg.org/bkf2020/liblock)

# getting started
1. install the extension (see `INSTALL.md` for more details).
2. right click on the extension to open the options page
	- or click on the extension icon, and press the button to open the options page
3. set your rules by following the instructions on the options page
4. set a time to start blocking (scroll down on the options page)
5. press "start blocking" to start blocking!

# privacy
This extension DOES NOT collect ANY user data. This extension needs to "read your browsing history"
because when you start blocking, it scans your tabs and makes sure any tabs with blocked websites
are blocked. The extension prevents you from opening a website by using the declaractiveNetRequest
( https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/ ) API, but this API
cannot block websites you have already opened!

The extension DOES NOT send any DATA about you to any server, and all code is available online
and is available under the GNU public license, version 3:
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
- [x] Use a better theme for the extension
- [ ] Clean up the code
	- [ ] Use better names for files
	- [ ] Use simpler logic if possible
- [x] Branding: create an icon, description
- [x] Privacy: tell users why the extension needs certain permissions
- [x] Show users which websites they block on `setrules.html`
