# Kinesis Streams

1. Create the Kinesis Streams

1. Create an IAM Policy to grant access to the Kinesis IoT stream from IoT Core.

1. Create an IAM Role to apply to the IoT rule that will push records from IoT to the Kinesis stream.

1. Create an IoT rule to stream data into the Kinesis stream.

1. Update the IAM role to include policy for Kinesis access.

1. Implement a Lambda function to process records from the IoT KInesis stream into the Patient Kinesis stream.

   *Three environment variables.*

1. Add and configure the Lambda function with a Kinesis trigger.

1. Run the IoT device simulator and check the CloudWatch logs for the Lambda function.
