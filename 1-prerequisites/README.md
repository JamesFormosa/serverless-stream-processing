# prerequisites

1. Launch the [IoT Device Simulator](https://docs.aws.amazon.com/solutions/latest/iot-device-simulator/deployment.html#step1) through AWS CloudFormation.
   
   The stack will take approximately 10 minutes to create. Continue with other prerequisites.
   
1. Create a DynamoDB table to store the patient register.
   
1. Create an IAM Policy to Grant PutItem and GetItem on the DynamoDB table to AWS Lambda functions.
 
1. Create an IAM Role to manage access for AWS Lambda functions.

1. Create a Lambda function to populate the patient register DynamoDB table.

   *Include two environemnt variables.*

 1. Create an S3 bucket for Firehose target.
    
 1. Login to the IoT Device Simulator and change password.
 
 1. Create Device Type
 
    1. Locate the email containing the login details for the IoT DEvice Similator and login.
    1. Follow the instructions to change your password.
    1. Click on *Create a Device Type*
    1. Use the followoing valiues for the Device Type Definition:
    
       Attribute|Value
       ---------|-----
       Device Type Name | ICU Monitor
       Data Topic | /patient/data
       Data Transmission Duration | 300000
       Data Transmission Interval | 1000
    
    1. Open the message-payload.txt file in the data directory - this file comntais the values we'll ge using for the message payloads.
    1. Under Message Payload, click on Add Attribute.
       1. In the Message Attribute dialog box, enter PatientInfo for the Attribute Name and select PICK ONE FROM ARRAY for the attribute data type.
       1. Copy the information from the JSON-like array under PatientInfo in the messagepayloiad.txt file and paste it into the Array section of te dialog. Click Submit.
       1. Complete steps a and b for each of the following. Array values are loted io ythe message-payload.txt file.
       
       Attribute Name | Attribute Data Type
       ---------------|--------------------
       HeartRate | PICK ONE FROM ARRAY
       SystolicBloodPressure | PICK ONE FROM ARRAY
       DiastolicBloodPressure | PICK ONE FROM ARRAY
       OxygenSaturation | PICK ONE FROM ARRAY
       BloodTemperature | PICK ONE FROM ARRAY
       
       1. Click on Save to Save the device type.
       
  7. Test the Device Simukator
     1. In the Device Simulator console, click on Widgets and the clik Add Widhet
     1. Make sure ICU Montor is selected for the device Type and Enter 3 for the nuimber of Widgets. Scloic on Submit.
     1. Login to the AWS console, if neccesary and navigate to IoT Core.
     1. Click on Test in the AWS IoT menu on the left-hand side of the pasge
     1. Enter /patient/data for the Subscriuption topic and click Subscribe to topic.
     1. Veridy thayt messages are streamiong in from your devices.
     
     
