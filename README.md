## Description

Prueba de usuario, alumno, cursos con JWT, Docker con Postgres.

## Installation

```bash
$ npm install

docker-compose up -d database

npm run migrations:generate -- [nombre-de-entidad(es)-modificadas]

npm run migrations:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## TOKEN (POST)
/auth

```bash
{
	"username": "username",
  "password": "password"
}
```

## APIs (GET, POST, PUT y DELETE)

/api/users
/api/alumnos
/api/cursos