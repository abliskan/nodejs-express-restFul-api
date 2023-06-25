DROP DATABASE IF EXISTS car_listing;
CREATE DATABASE car_listing;
CREATE USER rickyS WITH ENCRYPTED PASSWORD 'abcxyz';
GRANT ALL PRIVILEGES ON DATABASE car_listing TO rickyS;

\c car_listing

CREATE TABLE users (
ID SERIAL PRIMARY KEY,
name VARCHAR (25) UNIQUE NOT NULL,
phone VARCHAR (12),
password VARCHAR (14) UNIQUE NOT NULL,
created_on TIMESTAMP NOT NULL,
last_login TIMESTAMP 
)

CREATE TABLE cars (
ID SERIAL PRIMARY KEY,
userId INT NOT NULL,
carName VARCHAR (25) NOT NULL,
promotionEndDate DATE,
description VARCHAR (25),
price money NOT NULL,
address VARCHAR (60) NOT NULL,
mileage INT NOT NULL,
carPicture BYTEA,
FOREIGN KEY (userId)
    REFERENCES users (userId)
);

CREATE TABLE carComments (
ID SERIAL PRIMARY KEY,
carId INT NOT NULL,
userId INT NOT NULL,
FOREIGN KEY (carId)
    REFERENCES cars (carId),
FOREIGN KEY (userId)
    REFERENCES users (userId)
);
