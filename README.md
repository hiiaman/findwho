# findwho
<h4>Install</h4>
1. Install docker, docker-compose.<br/>
2. Coppy file docker-compose.yml.example => docker-compose.yml<br/>
3. Change content in file docker-compose.yml :<br/>
    -  /var/www/html/findwho:/var/www/html/findwho => {path/source-code/}:/var/www/html/findwho<br/>
    - "90:80" => - "{port}:80"<br/>
     environment:<br/>
        MYSQL_ROOT_PASSWORD: secret<br/>
        MYSQL_ROOT_USER: homestead<br/>
        MYSQL_DATABASE: homestead<br/>
4. Open terminal :<br/>
  cd {/path/source-code/}<br/>
  docker-compose build<br/>
  docker-compose up -d<br/>
  docker exec -it {findwho_findwho_1} /bin/bash ( {findwho_findwho_1} docker-composer ps view name container )<br/>
  composer install<br/>
  npm run watch<br/>
5. Test type url: localhost:90 or localhost:{port}.<br/>
6. Lest's coding.
