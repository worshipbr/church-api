#!/bin/bash
set -e

if [ "$ENVIRONMENT" = "prod" ];
then
    # Configurações do banco de dados
    POSTGRES_DB="wbr_db"
    POSTGRES_USER="wbr_user"
    POSTGRES_PASSWORD=${DB_PASSWORD}
    DATABASE_HOST="dpg-clq50eqe9h4c73aib1s0-a"
    DATABASE_PORT=5432
else
    POSTGRES_DB="wbr_db"
    POSTGRES_USER="postgres"
    POSTGRES_PASSWORD="123"
    DATABASE_HOST="localhost"
    DATABASE_PORT=5432
fi

cat>.env<<EOF
POSTGRES_DB=${POSTGRES_DB}
POSTGRES_USER=${POSTGRES_USER}
POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
DATABASE_HOST=${DATABASE_HOST}
DATABASE_PORT=${DATABASE_PORT}
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${POSTGRES_DB}?schema=public"
EOF
