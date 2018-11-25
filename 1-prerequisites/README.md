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
   1. Make note of the ARN.
   
   
 3. Create an IAM Policy and Role to provide access to the patient register Dynamo DB table.
    1. create the patient-register policy to grant access to the DynamoDB table contauininig patientb recoprds
    1. copy the json from the patient-register-policy json document
    1. save as *yourlastname*-patient-register-policy
    1. create a new role 
       1. select Lambda as the service and click Next:Permissions
       1. filter policies by patient and select the patient-register-policy just created
       1. click Next: Tags
       1. click Next: Review
       1. name it *yourlastname*-patient-register-role and click Create role
 
 4. Create a Lambda function to populate the patient register DynamoDB table.
    1. create a lambda function called *your-last-name*-patient-register-upload
    1. for code entry type select upload a .zip file
    1. add an environment variable called TABLE_NAME and give it a value equal to the name of your DynamoDB patient register table
    1. add an environment variable for Region and set the vaue to the appropriate AWS region.
    1. change tuimeout to 5 desc and cick Save
    1. in the select a test event dropdown, select Configure test events
    1. In the Configure Test event dialog, enter TestPatientUplaod and click Save.
    1. Click Test
    1. Navigate to DynamoDB and click on the Items tab for your parient-register table to confirm data have been uploaded.
 
 5. Create S3 buckets.
    1. Create an S3 bucket called *yourlastname*-surgeon-contact.
    1. Upload the surgeon-contact-info.csv file to this bucket.
    1. Create an S3 bucket called *yourlastname*-patient-data.
    
 6. Login to the IoT Device Simulator.
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
     
     
