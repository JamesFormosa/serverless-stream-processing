# Kinesis Streams

1. Create the Kinesis Streams
   1. In the AWS Console navigate to Kinesis Streams and click Get Started.
   1. Click on Create Data Stream
   1. Name the stream *yourlastname*-kinesis-iot-stream
   1. Enter 1 for Number of Shards and click on Create kinesis stream.
   1. Once the status of this stream changes to Acrive, click on Create KInesis Stream to create the second stream.
   1. Name the stream *yourlastname*-kinesis-patient-stream
   1. Enter 1 for Number of Shards and click on Create kinesis stream.
1. Create an IAM Policy and Roe to greanm accessto the Kinesis IoT stream from IoT.
   1. In the AWS console, navigate to IAM and click Policies in the left-ahnd menu.
   1. Click on Creat policy and then click the JSON tab.
   1. Paste in the poilcy statement from yje kinesis-iot-stream-policy.json file in te IAM directory.
   1. Click Review POlicy
   1. Enter *yourlastname*-iot-stream-policy for the name and click Create policy.
   1. Click on Roles in the left-hand menu and then click Create role.
   1. Select IoT fro the service that will use the role and IoT for the iuse case.
   1. Click Next: Permissions
   1. Click Next:Tags
   1. Click Next:Review
   1. Enter *yourlastname*-iot-stream-role and click Create role.
   1. Navigate to the newly cteraetd role and click om Attach POlicies and select the foros-iot-policy creted above.
   1. Remove the opter policies.
1. Create an IoT rule to stream data into the IoT Stream created in step 1.
   1. Click on Creat a rile.
   1. Enter: select * from '/patient/data'  for the Rule quert statement
   1. Name the rule patient_data_to_kinesis and click on Add action under Set one or more actions.
   1. On the Select an action dialog, click Send messages to an Amazon Kinesis Stream.
   1.Click Configure action.
   1. Select the IoT kinesis stream created above, Enter patinet-data for the partitio0ley and choose the iot-stream role cretaed above.
   1. CLick Add action.
   
