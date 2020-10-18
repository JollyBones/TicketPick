FROM boxfuse/flyway

RUN apt-get update && apt-get install netcat -y && apt-get install postgresql -y

COPY ./wait-for-db.sh ./
RUN chmod 755 ./wait-for-db.sh

ENTRYPOINT [ "./wait-for-db.sh" ]