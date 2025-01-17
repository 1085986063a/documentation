---
sidebarDepth: 2
---

# Changelog
## Version

### 0.3.6-1 (2021-06-10)
* (xXBJXx) change from adapter documentation link [(issue #193)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/193)

### 0.3.6-0 (2021-05-27)
* (xXBJXx) State "s" has no existing object message fixed [(issue #184)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/184)

### 0.3.5-0 (2021-05-25)
* (xXBJXx) Brightness change Mode optimized
* (xXBJXx) Adapter tier set to 3
* (xXBJXx) dependencies updates
* (xXBJXx) Check if adapter config is valid modified
* (xXBJXx) added check and testing for Node.js 16 [(issue #170)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/170)

### 0.3.4-0 (2021-04-30)
* (xXBJXx) dependencies updates
* (xXBJXx) fixed wrong type of displayWidthPixels and displayHeightPixels [(issue #164)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/164)
* (xXBJXx) add encodeUrl and change log message

### 0.3.3-beta.0 (2021-02-14)
* (xXBJXx) README edited
* (xXBJXx) removed check for batteryLevel = -1%
* (xXBJXx) camshot function expanded to include continuous shooting, and it is now possible to take and save multiple images.\
  New tab added in config page
* (xXBJXx) fixed brightness checkInterval bug (is now checked as intended every x minutes whether the brightness changed)

### 0.3.2-beta.0 (2021-01-24)
* (xXBJXx) fixed problem with ( has no existing object ) for the new JS controller [(issue #114)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/114)
* (xXBJXx) fixed [(issue #120)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/120) check if the screensaver is defined added
* (xXBJXx) fixed brightness control bug
* (xXBJXx) Added deletion of screenSaver from config [(issue #124)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/124)

### 0.3.1-beta.2 (2021-01-08)
* (xXBJXx) fixed TypeError: Cannot read property 'val' of null [(issue #113)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/113)

### 0.3.1-beta.1 (2021-01-01)
* (xXBJXx) fixed Telegram error message when accessing the config page [(issue #109)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/109)

### 0.3.1-beta.0 (2020-12-31)
* (xXBJXx) test-and-release.yml update
* (xXBJXx) admin Page Revised
* (xXBJXx) check for 0/1 implemented for sockets [(issue #66)](https://github.com/xXBJXx/ioBroker.fully-tablet-control/issues/66)

### 0.3.0-beta.5 (2020-10-24)
* (xXBJXx) reading of the user from telegram adapter instance 0-10 added
* (xXBJXx) Current page added to Device Info

### 0.3.0-beta.4 (2020-10-08)
* (xXBJXx) Motion detector is not defined warning message fixed

### 0.3.0-beta.3 (2020-10-08)
* (xXBJXx) fix camshotUrl folder

### 0.3.0-beta.2 (2020-10-06)
* (xXBJXx) Check for invalid batteryLevel added

### 0.3.0-beta.0 (2020-10-05)
* (xXBJXx) manual brightness revised
* (xXBJXx) Automatic brightness revised
* (xXBJXx) Manuele brightness expanded to include the afternoon control
* (xXBJXx) config page revised
* (xXBJXx) add StartUrl command
* (xXBJXx) add command motionDetection on/Off
* (xXBJXx) add command camshot and 2 states for Image (base64 and imageURl)
* (xXBJXx) change README

### 0.2.15

* (xXBJXx) add media Volume

### 0.2.14

* (xXBJXx) bug fix

### 0.2.12

* (xXBJXx) screensaver brightness control can be switched on or off
* (xXBJXx) dependencies updates

### 0.2.11

* (xXBJXx) add new charge option
* (Steff42) Fix typo in words.js

### 0.2.10

* (xXBJXx) request log output adjusted

### 0.2.9

* (xXBJXx) night brightness manual change added

### 0.2.8

* (xXBJXx) bug in brightness control and charging function fixed

### 0.2.7

* (xXBJXx) Astro time added

### 0.2.6

* (xXBJXx) Brightness control changed and Configuration page changed

### 0.2.5

* (xXBJXx) FullyBrowser implemented
* (xXBJXx) fixed some bugs

### 0.2.4

* (xXBJXx) Screen saver time adjusted now in 1 min steps
* (xXBJXx) State_of_charge adjusted
* (xXBJXx) interval limit added
* (xXBJXx) Switch charging control on / off added
* (xXBJXx) Brightness activated individually

### 0.2.2

* (xXBJXx) Adapter Name Change

### 0.2.0

* (xXBJXx) charging warning message output adjusted

### 0.1.9

* (xXBJXx) bug in Automatic change to home view widget 8 fixed

### 0.1.8

* (xXBJXx) add Automatic change to home view

### 0.1.5

* (xXBJXx) brightness bug fix

### 0.1.4

* (xXBJXx) manuell StateChange optimized

### 0.1.3

* (xXBJXx) Configuration page changed

### 0.1.2

* (xXBJXx) log level adjusted

### 0.1.1

* (xXBJXx) README.md edit

### 0.1.0

* (xXBJXx) Beta Release

### 0.0.8

* (xXBJXx) device activate added
* (xXBJXx) bug fixes

### 0.0.7

* (xXBJXx) back to Fully Browser implemented
* (xXBJXx) bug fixes

### 0.0.6

* (xXBJXx) Screensaver selection implemented
* (xXBJXx) Motion detector added

### 0.0.5

* (xXBJXx) manual brightness control implemented
* (xXBJXx) Screensavers added

### 0.0.4

* (xXBJXx) request optimized for multiple devices
* (xXBJXx) brightness control implemented

### 0.0.3

* (xXBJXx) Charging function optimized
* (xXBJXx) Added selection screen for continuous operation
* (xXBJXx) Telegram warning added

### 0.0.2

* (xXBJXx) added charging function

### 0.0.1

* (xXBJXx) initial release
