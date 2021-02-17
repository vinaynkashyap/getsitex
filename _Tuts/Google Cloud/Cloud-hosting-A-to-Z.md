## How to register a domain name with Google Domains.

## How to connect your existing domain name with Google Cloud.

## How to Migrate from Go daddy to Google Cloud.

## How to Install Wordpress on Google Cloud

## How to Host a static Site on a Google Cloud WordPress installation

## Enable XFrame to preview your demos on ThemeForest

Change file permission

https://www.siteyaar.com/fix-sftp-ftp-permission-denied-on-google-cloud/

Change XFrame options

https://stackoverflow.com/questions/46148018/x-frame-options-sameorigin-issue

Might be nothing, but on the google cloud I went to /opt/bitnami/apache2/conf/httpd.conf and changed it to this, now it works:

<IfVersion >= 2.4.7 >
Header always setifempty X-Frame-Options "ALLOW-FROM https://example.com"

</IfVersion>
<IfVersion < 2.4.7 >
    Header always merge X-Frame-Options "ALLOW-FROM https://example.com"
</IfVersion>

Restart apache

### Start or stop services

Each Bitnami stack includes a control script that lets you easily stop, start and restart services.

Obtain the status of a service:

`sudo /opt/bitnami/ctlscript.sh status`

Call it without any service name arguments to start all services:

`sudo /opt/bitnami/ctlscript.sh start`

Or use it to restart a single service, such as Apache only, by passing the service name as argument:

`sudo /opt/bitnami/ctlscript.sh restart apache`

Use this script to stop all services:

`sudo /opt/bitnami/ctlscript.sh stop`

Restart the services by running the script without any arguments:

`sudo /opt/bitnami/ctlscript.sh restart`
