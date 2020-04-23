#Dynium

## Start up
Start up the services by running
```
docker-compose up -d mongo
```
```
docker-compose up -d backend
```
Please give some time for the mongoDB to start, before starting up backend as there are no health checks available


Add data to database by posting the starwars-characters json to 
```
http://localhost:4000/people
```
You can retrieve all people by calling the GET
```
http://localhost:4000/people/all
```

Navigate to the frontend directory and run to bring up the UI and start searching
```
npm start
```