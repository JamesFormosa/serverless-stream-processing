# Kinesis Analytics

1. Create a Kinesis Analytics application.

1. Enter SQL statements to pull patients with a temp above 99.9.

1. Setup an SNS topic for alerts to be sent to for patients having a temp above 99.9.

1. Setup an SQS queue and subscribe to the SNS topic.

1. Adjust the Lambda IAM role to provide Publish capability to the SNS topic.

1. Implement a Lambda function to publish alerts to SNS.

   *One environment variable*
   
1. Run test from IoT device simulator.
