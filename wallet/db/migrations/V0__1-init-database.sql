CREATE TABLE wallet (
    id INT PRIMARY KEY,
    user_id INT NOT NULL
);

CREATE UNIQUE INDEX wallet_id_idx ON wallet("id");
CREATE UNIQUE INDEX wallet_user_id_idx ON wallet("user_id");

CREATE TABLE event (
    id TEXT PRIMARY KEY,
    wallet_id INT NOT NULL,
    version INT NOT NULL DEFAULT 1,
    event_type TEXT NOT NULL,
    payload JSON
);

CREATE UNIQUE INDEX event_id_idx ON "event"("id");
CREATE INDEX events_wallet_id_idx ON "event"("wallet_id");
CREATE INDEX events_event_type_idx ON "event"("event_type");