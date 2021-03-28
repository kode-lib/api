# api

## Build status

[![CI](https://github.com/kode-lib/api/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/kode-lib/api/actions/workflows/CI.yml)


## Configuration

The configurations is done via `dotenv` so you can create a `.env` file in the root of the project or export the following environment variables:

| Name          | Description        | Required | Default               |
|---------------|--------------------|----------|-----------------------|
| PORT          | Application port   | No       | 4000                  |
| AUTH_DOMAIN   | Auth0 API domain   | No       | ''                    |
| AUTH_AUDIENCE | Auth0 API audience | No       | http://localhost:4000 |

## Development environment

```
npm install
npm run develop
```

## Build Docker image

```
docker build -t kodelib-api .
```
