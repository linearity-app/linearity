CREATE TABLE groups (isbanned boolean, messages text, id int);
INSERT INTO groups VALUES (FALSE, '[]', 123);
INSERT INTO groups VALUES (FALSE, '[]', 456);
INSERT INTO groups VALUES (FALSE, '[]', 789);
INSERT INTO groups VALUES (TRUE, '[]', 999);