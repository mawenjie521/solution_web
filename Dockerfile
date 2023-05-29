FROM nginx
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       80; \
                  location ^~ /jeecg-boot { \
                      proxy_pass              http://localhost:8080/jeecg-boot/; \
                      proxy_set_header        Host jeecg-boot-system; \
                      proxy_set_header        X-Real-IP \$remote_addr; \
                      proxy_set_header        X-Forwarded-For \$proxy_add_x_forwarded_for; \
                  } \
                  #解决Router(mode: 'history')模式下，刷新路由地址不能找到页面的问题 \
                  location / { \
                     root   /var/www/html/; \
                      index  index.html index.htm; \
                      if (!-e \$request_filename) { \
                          rewrite ^(.*)\$ /index.html?s=\$1 last; \
                          break; \
                      } \
                  } \
                  access_log  /var/log/nginx/access.log ; \
              } " > /etc/nginx/conf.d/default.conf \
#ADD nginx.conf  /etc/nginx/conf.d/
    && mkdir  -p  /var/www  \
    &&  mkdir -p /var/www/html
ADD default.conf  /etc/nginx/nginx.conf

ADD dist/ /var/www/html/
EXPOSE 80
EXPOSE 443

