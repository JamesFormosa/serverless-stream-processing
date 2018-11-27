CREATE OR REPLACE STREAM "DESTINATION_SQL_STREAM" (LastName VARCHAR(8), FirstName VARCHAR(16), HeartRate INTEGER, Systolic INTEGER, Diastolic INTEGER, OxygenSaturation INTEGER, BloodTemperature REAL);

-- Create pump to insert into output.

CREATE OR REPLACE PUMP "STREAM_PUMP" AS INSERT INTO "DESTINATION_SQL_STREAM"
SELECT "LastName", "FirstName", "HeartRate", "Systolic", "Diastolic", "OxygenSaturation", "BloodTemperature" FROM "SOURCE_SQL_STREAM_001" WHERE "BloodTemperature" > 99.9;

