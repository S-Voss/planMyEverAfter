DROP DATABASE IF EXISTS `everafter_db`;
CREATE DATABASE `everafter_db`;

USE everafter_db;

-- table of all clients
CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
  spouse1_first VARCHAR(60) NOT NULL,
  spouse1_last VARCHAR(60) NOT NULL,
  spouse2_first VARCHAR(60) NOT NULL,
  spouse2_last VARCHAR(60) NOT NULL,
  email VARCHAR(45) NULL,
  phone VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

-- table of all of our vendors
CREATE TABLE vendors (
   id INT NOT NULL AUTO_INCREMENT,
   vendor_name VARCHAR(50),
   category ENUM('venue', 'officiant', 'florist', 'photographer', 'entertainment', 'catering', 'misc', 'transportation', 'hotel'),
   address1 VARCHAR(50),
   address2 VARCHAR(50),
   city VARCHAR(50),
   state CHAR(2),
   ZIP VARCHAR(5),
   email VARCHAR(45) NULL,
   phone VARCHAR(45) NULL,
   min_cost int(6),
   rating int(1) -- range of 1-5  
   available BOOLEAN,
   PRIMARY KEY (id)
);


CREATE TABLE wedding_info (
   id INT NOT NULL AUTO_INCREMENT,
   date DATETIME,
   max_price INT(6), 
   num_of_guests INT(4) NOT NULL,
   ZIP VARCHAR(5),
   wedding_venue VARCHAR(45),
   wedding_officiant VARCHAR(45),
   wedding_florist VARCHAR(45),
   wedding_photo VARCHAR(45),
   wedding_entertainment VARCHAR(45),
   wedding_catering VARCHAR(45),
   wedding_transportation VARCHAR(45),
   wedding_hotel VARCHAR(45),

   PRIMARY KEY (id)
);
   
-- checklist for the client to use
CREATE TABLE checklist (
   id INT NOT NULL AUTO_INCREMENT,
   budget BOOLEAN,
   guest_list BOOLEAN,
   planner BOOLEAN,
   book_venue BOOLEAN,
   hire_officiant BOOLEAN,
   hire_florist BOOLEAN,
   hire_entertainment BOOLEAN,
   hire_catering BOOLEAN,
   hire_transportation BOOLEAN,
   hire_hotel BOOLEAN,
   PRIMARY KEY (id)
);

CREATE TABLE passwords (
  id INT NOT NULL AUTO_INCREMENT,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);