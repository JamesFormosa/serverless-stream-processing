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
 
 
