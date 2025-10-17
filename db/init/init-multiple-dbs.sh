#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE "rusalka-dev";
    CREATE DATABASE "rusalka-auth-dev";
EOSQL
