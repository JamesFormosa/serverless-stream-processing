# prerequisites

1. Launch the IoT Device Simulator through AWS CloudFormation
   1. Navigate to the automated deployment page for the [IoT Simulator](https://docs.aws.amazon.com/solutions/latest/iot-device-simulator/deployment.html#step1) and click Launch Solution. (recommend launching in us-east-1 or us-west-2)
   1. *Specify an Amazon S3 template URL* will already be selected and the template url will be prepoulated. Click *Next*.
   1. On the *Specify Details* page, enter a unique name for the stack (e.g.: *yourlastname*-iot-simulator), enter an administrator name and your email address. Click *Next*.
   1. On the *Options* page, click *Next*.
   1. On the *Review* page, click the checkbox next to **I acknowledge that AWS CloudFormation might create IAM resources with custom names.** Click *Create*.
   
   The stack will take approximately 10 minutes to create. Continue with other prerequisites.
   
2. Create and Populate DynamoDB Table
   1. Navigate to the DynamoDB section of the AWS console and click * Create Table*.
   1. Give the table a unique name for the stack (e.g.: *yourlastname*-patient-register), and enter *patient-id* for the Partition Key. Click *Create*.
   
   
 3. Create a Lambda function to populate the patient register DynamoDB table.
 
 
 4. Create S3 buckets.
 
 
