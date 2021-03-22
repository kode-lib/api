# api

## Build status

[![CI](https://github.com/kode-lib/api/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/kode-lib/api/actions/workflows/CI.yml)


## Configuration

The configurations is done via `dotenv` so you can create a `.env` file in the root of the project or export the following environment variables:

**PORT**

Application port. Defaults to 400

## Development environment

```
npm install
npm run develop
```

## Build Docker image

```
docker build -t kodelib-api .
```