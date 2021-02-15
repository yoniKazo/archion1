 drop schema GovernmentDecision cascade;

CREATE SCHEMA GovernmentDecisionAPI AUTHORIZATION #{pg_user}#;

CREATE TABLE IF NOT EXISTS archives(
id serial PRIMARY KEY,
UNID VARCHAR (255) not null,
CommityNameAndNum VARCHAR (255),
CommityName VARCHAR (255),
CommityNumber int ,
CommityDecsionDate VARCHAR (255),
ForumDescription1 VARCHAR (255),
ForumDescription VARCHAR (255),
GovDecision float,
GovDecisionDate VARCHAR (255),
DecisionTitle VARCHAR (255),
OpeningText VARCHAR (255),
DecisionText VARCHAR (Max),
AppealText VARCHAR (255),
DecisionType VARCHAR (255),
DecisionNumAndPrimeName VARCHAR (255),
SecriteryNum float,
Embeded  VARCHAR (MAX),
updated_by VARCHAR (50),
updated_on timestamp  
);

-------------

CREATE OR REPLACE FUNCTION contractors.get_archives()
   RETURNS  setof archives
AS $$
BEGIN
   RETURN QUERY SELECT
     *
   FROM
      archives;
 

END; $$

CREATE TABLE IF NOT EXISTS archives-legend(
id serial PRIMARY KEY,
shortName VARCHAR (50),
name VARCHAR (1000),
updated_by VARCHAR (50),
updated_on timestamp  
);

-------------

CREATE OR REPLACE FUNCTION contractors.get_archives-legend()
   RETURNS  setof archives-legend
AS $$
BEGIN
   RETURN QUERY SELECT
     *
   FROM
      archives-legend;
 

END; $$




LANGUAGE 'plpgsql';