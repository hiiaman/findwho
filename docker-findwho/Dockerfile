FROM ubuntu:16.04
MAINTAINER Nguyen Truong An <mr.nguyentruongan@gmail.com>

RUN apt-get update && apt-get -y install \
    language-pack-en-base \
    software-properties-common
RUN export LC_ALL=en_US.UTF-8 && export LANG=en_US.UTF-8 && add-apt-repository ppa:ondrej/php && apt-get update
RUN apt-get -y install \
    apache2 \
    php7.1 \
    php7.1-cli \
    php7.1-common \
    php7.1-json \
    php7.1-xml \
    php7.1-gd \
    php7.1-imap \
    php7.1-mbstring \
    php7.1-mysqlnd \
    php7.1-opcache \
    php7.1-pdo \
    php7.1-intl \
    php7.1-mcrypt \
    curl \
    git \
    unzip \
    vim \
    redis-server \
    supervisor
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get -y install \
    nodejs
RUN a2enmod rewrite
RUN a2enmod headers
RUN mkdir /var/www/html/findwho
WORKDIR /var/www/html/findwho
EXPOSE 80
ADD startup.sh /usr/bin/startup.sh
RUN chmod +x /usr/bin/startup.sh
ADD findwho.conf /etc/apache2/sites-enabled/000-default.conf

# Execute the containers startup script which will start many processes/services
CMD ["/bin/bash", "/usr/bin/startup.sh"]
