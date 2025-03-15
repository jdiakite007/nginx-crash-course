# nginx-crash-course


Les commandes utilisées dans ce projet:

start nginx
nginx

get options
nginx -h

restart nginx
nginx -s reload

stop nginx
nginx -s stop

print logs
tail -f /usr/local/var/log/nginx/access.log

restart nginx
nginx -s reload

creer un repertoire pour stocker les certficats 
mkdir ~/nginx-certs
cd ~/nginx-certs

créer un certificat auto-signé
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
