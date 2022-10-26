# Air Quality Restful Api

Install docker and docker compose on your pc
[Read this article](https://support.netfoundry.io/hc/en-us/articles/360057865692-Installing-Docker-and-docker-compose-for-Ubuntu-20-04)

Clone Repository

```sh
git clone https://github.com/especializati/setup-docker-laravel.git laravel9
```

```sh
cd 'AIR QUALITY'
```

Create the .env file

```sh
cp .env.example .env
```

Update environment variables from .env file

```dosini
DB_USERNAME=YOUR_USERNAME
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_DATABASE_NAME
DB_HOST=mysql_air < !-- *KEEP IT AS IT IS --/>
DB_DIALECT=mysql  < !-- *KEEP IT AS IT IS --/>
API_KEY=YOUR_API_KEY  < !-- *SOMTHING LIKE THAT bef46b-3417-405c-......* --/>
```

Upload project containers

```sh
docker-compose up -d
```

access to the container

```sh
docker-compose exec app bash
```

Install project dependencies

```sh
npm install
```

run all of outstanding migrations

```sh
npx sequelize-cli db:migrate
```

endpoint

```sh
http://localhost:8001/api/v1/AirQualityCountry/48.8566/2.3522
```
