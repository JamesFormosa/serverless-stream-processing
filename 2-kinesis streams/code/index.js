var AWS = require("aws-sdk");

AWS.config.update({
    region: process.env.REGION
});

var table = process.env.TABLE_NAME;
var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
var kinesis = new AWS.Kinesis();

function putToStream(record){
    var params = {
        Data: record,
        PartitionKey: 'patient-data',
        StreamName: 'formosa-patient-iot-stream'
    };
    kinesis.putRecord(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}

function fetchPatientData (iotRecord) {
    let patient = JSON.parse(iotRecord.PatientInfo.replace(/;/g,","));

    var params = {
        TableName:table,
        Key: {
            "PatientId": {
                S: patient.PatientId
            }
        }
    };
    ddb.getItem(params, function(err, data) {
        if (err)
            console.log(err, err.stack); // an error occurred
        else {
            console.log("" + JSON.stringify(data));
            var patientRecord = {
                "PatientId": patient.PatientId,
                "LastName": patient.LastName,
                "FirstName": data.Item.FirstName.S,
                "Procedure": data.Item.Procedure.S,
                "HeartRate": iotRecord.HeartRate,
                "Systolic": iotRecord.SystolicBloodPressure,
                "Diastolic": iotRecord.DiastolicBloodPressure,
                "OxygenSaturation": iotRecord.OxygenSaturation,
                "BloodTemperature": iotRecord.BloodTemperature,
                "SurgeonId": data.Item.SurgeonId.S,
                "SurgeonLastName": data.Item.SurgeonLastName.S
            };
            console.log(patientRecord);
            putToStream(JSON.stringify(patientRecord));
        }
    });
}

exports.handler = function(event, context) {
    console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function(record) {
        let payload = Buffer.from(record.kinesis.data, 'base64');
        let obj = JSON.parse(payload.toString('utf8'));
        fetchPatientData(obj);
    });
};
