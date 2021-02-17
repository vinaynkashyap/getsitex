"liveServer.settings.useLocalIp": true

In my case, I encountered this issue on MacOS.

I activated "liveServer.settings.useLocalIp": true. This gave me an IP looking like http://192.168.95.1:5500/ (instead of 127.0.0.1:5500).

Still I got an error message when connecting over mobile.

Then I went into the MacOS Preferences > Network. There it showed "Wifi is connected to NetworkName with IP address 192.168.0.227.

So I entered http://192.168.0.227:5500/ on my mobile device and BAM!, it worked :)

Liveserver did not work use browser sync

https://www.youtube.com/watch?v=cj29XdGzNt8

<!--
Project URL D:/Projects/Websites/Templates/code/dist/redx

Works from: Template
--watch dev/scss -o dist/redx/css

Working from dist\hired:
browser-sync start --server --files "*.html,css/*.css"

browser-sync start --server --files "*.html,css/*.css,scripts/*.js"

browser-sync start --server --files "*.*"






-->
