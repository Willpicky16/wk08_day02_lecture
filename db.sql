DROP DATABASE IF EXISTS cars_api;

CREATE DATABASE cars_api;

\c cars_api;

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  make TEXT,
  model TEXT,
  reg TEXT
);

INSERT INTO cars (make, model, reg)
  VALUES ('Ford', 'Fiesta', 'DF12 HEL'), ('VW', 'Golf', 'ML16 JDG'), ('Vauxhall', 'Corsa', 'HD12 KDL');

SELECT * FROM cars;
