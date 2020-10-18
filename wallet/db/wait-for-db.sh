#!/bin/bash

until PGPASSWORD=${POSTGRES_PASSWORD} psql -p 5432 -U ${POSTGRES_USER} -h db -c "SELECT 1"
do
    echo "Waiting for postgres to become active..."
    sleep 1
done

flyway -url=jdbc:postgresql://db:5432/ -user=${POSTGRES_USER} -password=${POSTGRES_PASSWORD} migrate -locations=filesystem:/opt/migrations/