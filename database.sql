CREATE DATABASE url_shortener_db;

CREATE TABLE url_tab(
  id SERIAL PRIMARY KEY,
  long_url VARCHAR(2400) NOT NULL UNIQUE,
  short_url VARCHAR(160) NOT NULL UNIQUE,
  created_at BIGINT NOT NULL
);