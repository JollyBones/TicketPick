CREATE TABLE wallet.wallet (
    id INT PRIMARY KEY,
    user_id INT NOT NULL
);

CREATE UNIQUE INDEX wallet_id_idx ON wallet.wallet("id");
CREATE UNIQUE INDEX wallet_user_id_idx ON wallet.wallet("user_id");

CREATE TABLE wallet.event (
    id TEXT PRIMARY KEY,
    wallet_id INT NOT NULL,
    version INT NOT NULL DEFAULT 1,
    event_type TEXT NOT NULL,
    payload JSON
);

CREATE UNIQUE INDEX event_id_idx ON wallet.event("id");
CREATE INDEX events_wallet_id_idx ON wallet.event("wallet_id");
CREATE INDEX events_event_type_idx ON wallet.event("event_type");