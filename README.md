# findwho
<h4>Install</h4>
1. Install docker, docker-composer.
2. Coppy file docker-compose.yml.example => docker-compose.yml
3. Change content in file docker-compose.yml :
    -  /var/www/html/findwho:/var/www/html/findwho => {path/source-code/}:/var/www/html/findwho
    - "90:80" => - "{port}:80"
     environment:
        MYSQL_ROOT_PASSWORD: secret
        MYSQL_ROOT_USER: homestead
        MYSQL_DATABASE: homestead
4. Open terminal :
  cd {/path/source-code/}
  docker-composer build
  docker-composer up -d
  docker exec -it {findwho_findwho_1} /bin/bash ( {findwho_findwho_1} docker-composer ps view name container ).
  npm run watch
5. Let's coding.
