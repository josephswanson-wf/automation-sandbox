# Getting Started

**Account Setup:**

* [Set up a free Sauce Labs account.](https://saucelabs.com/signup/plan/free)
* Add your Sauce Labs username as system variable `SAUCE_USERNAME`
* Add your Sauce Labs account access key as system variable `SAUCE_ACCESS_KEY`.  This can be found on your Sauce Labs account page at the bottom of the leftmost container. 

![](/intern-tutorial/docs/access_key.png)

**Project Setup**

* `npm install`
* If grunt's command line interface is not installed globally, run `npm install -g grunt-cli`

****
# Running Tests
There are currently 4 easy to use grunt tasks:

`grunt unit`: Runs the unit test of the hello.js example in Firefox locally.

`grunt unit-sauce`: Pushes the unit test of the hello.js example to Sauce Labs to be run in Chrome on Windows 7.

`grunt functional`: Runs the functional test of the simple-example.html in Firefox locally.

`grunt functional-sauce`: Pushes the functional test of the simple-example.html to Sauce Labs to be run in Chrome on OSX 10.9 and Windows 7, IE 8 and 9 on Windows 7, and on the Safari browser on an iPad 7.1 simulator.

****
# Notes
Local functional tests will only work in Firefox by default.  If you wish to run tests against another browser, you will need to download the appropriate webdriver and add it to your system PATH.

Intern docs: [https://github.com/theintern/intern/wiki](https://github.com/theintern/intern/wiki)

Intern selenium API: [http://theintern.github.io/leadfoot/Command.html](http://theintern.github.io/leadfoot/Command.html)