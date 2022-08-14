CREATE DATABASE url_shortener_db;

CREATE TABLE url_tab(
  id SERIAL PRIMARY KEY,
  long_url VARCHAR(200) NOT NULL,
  short_url VARCHAR(100) NOT NULL,
  created_at BIGINT NOT NULL
);