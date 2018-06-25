DROP DATABASE IF EXISTS receiptDB;

CREATE DATABASE receiptDB;

USE receiptDB;

CREATE TABLE person (
  id INT NOT NULL AUTO_INCREMENT,
  creditor VARCHAR(45) NULL,
  debtor VARCHAR(45) NULL,
  item VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (creditor, debtor, item, price)
VALUES ("Kanye West", "Taylor Swift", "Pancakes",
12.50);

INSERT INTO products (creditor, debtor, item, price)
VALUES ("Megan Markle", "Kanye West", "Salad",
5.00);

INSERT INTO products (creditor, debtor, item, price)
VALUES ("Taylor Swift", "Megan Markle", "Tea",
18.00);