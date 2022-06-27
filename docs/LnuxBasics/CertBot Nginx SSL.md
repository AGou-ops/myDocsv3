## Description

I add SSL to the Grafana web server to ensure all traffic is encrypted between the server and web browser.

I use LetsEncrypt by following the [Certbot](https://certbot.eff.org/) instructions.

For **Web Server software**, I choose **Nginx**

For **Operating system**, I choose **Ubuntu 20.04 LTS**

I then SSH onto my new Grafana server,

I enter these commands

```
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo apt-get update
```

then install Certbot with the Nginx option

Copied to clipboard	

```
sudo apt-get install certbot python3-certbot-nginx
```

then run

Copied to clipboard

```
sudo certbot --nginx
```

Follow the prompts, and enter the domain name you want to secure,

After completion, you should then be able to now visit your Grafana server using the url

https://**YOUR-DOMAIN-NAME**

Note that after running Certbot, it has changed the settings of your Nginx configuration file you created earlier. You can see those changes by using the **cat** command.

```
cat /etc/nginx/sites-enabled/YOUR-DOMAIN-NAME
```