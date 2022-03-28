-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE
DROP DATABASE IF EXISTS cowlist;
CREATE DATABASE cowlist;
USE cowlist;

CREATE TABLE Cows (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (100) NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO Cows (name, description) VALUES ("a", "abc");

INSERT INTO Cows (name, description) VALUES ("Buttercup", "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.");

INSERT INTO Cows (name, description) VALUES ("Daisy", "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.");
INSERT INTO Cows (name, description) VALUES ("Milkshake", "a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.");
INSERT INTO Cows (name, description) VALUES ("Bessie", "a person's best or closest friend.");
INSERT INTO Cows (name, description) VALUES ("MooDonna", "archaic : lady - used as a form of respectful address.");
INSERT INTO Cows (name, description) VALUES ("MooLawn", "a legendary Chinese warrior from the Northern and Southern dynasties period (420 589) of Chinese history.");

