# serverless-stream-processing
In this serverless IoT use case, you'll learn how to stream data from medical devices, transform and enrich the data to remove confidential patient information, and perform data analytics, all without having to manage infrastructure. You will get hands on experience with AWS IoT, AWS Lambda, Kinesis and S3.

![serverless-stream-processing](https://user-images.githubusercontent.com/37228603/48972002-ad5f7c00-efe7-11e8-96e1-9c1149ed8e1b.png)

Prerequisite: Deploy the IoT Simulator

  https://aws.amazon.com/answers/iot/iot-device-simulator/
  

  https://github.com/awslabs/iot-device-simulator
  
  <img width="920" alt="iot-device-simulator-architecture" src="https://user-images.githubusercontent.com/37228603/48860846-a5a19c80-ed87-11e8-9bae-f2a19f0c7fc1.png">
  


# Kinesis Streams Architecture



![kinesis-data-streams](https://user-images.githubusercontent.com/37228603/48951352-dd355380-ef03-11e8-8b13-a44d20746fd5.png)





# Kinesis Firehose

![kinesis-firehose-data-flow](https://user-images.githubusercontent.com/37228603/48960176-4632c080-ef30-11e8-988e-355b6b2f663a.png)



CREATE OR REPLACE STREAM "DESTINATION_SQL_STREAM" 
  (LastName VARCHAR(8), FirstName VARCHAR(16), DateOfBirth INTEGER, HeartRate INTEGER, SystolicBloodPressure INTEGER, DiastolicBloodPressure INTEGER, OxygenSaturation INTEGER, Respiration INTEGER, BloodTemperature REAL);
 
-- Create pump to insert into output. 
CREATE OR REPLACE PUMP "STREAM_PUMP" AS 
   INSERT INTO "DESTINATION_SQL_STREAM"  
      SELECT "LastName", "FirstName", "DateOfBirth", "HeartRate", "SystolicBloodPressure", "DiastolicBloodPressure", "OxygenSaturation", "Respiration", "BloodTemperature"
      FROM "SOURCE_SQL_STREAM_001"
      WHERE "BloodTemperature" > 99.9;
