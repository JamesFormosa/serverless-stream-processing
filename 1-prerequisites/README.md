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
 
    *Attribute data is located in message-payload.txt*
 
 1. Create Widgets and test the simulator setup.
