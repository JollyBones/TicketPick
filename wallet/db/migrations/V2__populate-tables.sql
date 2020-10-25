INSERT INTO wallet.wallet (id, user_id) VALUES (1, 1);
INSERT INTO wallet.wallet (id, user_id) VALUES (2, 2);
INSERT INTO wallet.wallet (id, user_id) VALUES (3, 3);
INSERT INTO wallet.wallet (id, user_id) VALUES (4, 4);

INSERT INTO wallet.event (id, wallet_id, version, event_type, payload) VALUES ('event1', 1, 1, 'CREATED_WALLET', '{}');
INSERT INTO wallet.event (id, wallet_id, version, event_type, payload) VALUES ('event2', 1, 2, 'DEPOSITED_FUNDS', '{"amount": 10000}');

INSERT INTO wallet.event (id, wallet_id, version, event_type, payload) VALUES ('event3', 2, 1, 'CREATED_WALLET', '{}');
INSERT INTO wallet.event (id, wallet_id, version, event_type, payload) VALUES ('event4', 3, 1, 'CREATED_WALLET', '{}');
INSERT INTO wallet.event (id, wallet_id, version, event_type, payload) VALUES ('event5', 4, 1, 'CREATED_WALLET', '{}');