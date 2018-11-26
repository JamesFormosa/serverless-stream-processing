console.log('Loading function');

var AWS = require("aws-sdk");

AWS.config.update({
    region: process.env.REGION
});

exports.handler = function(event, context) {

    var getPatientData = (patientId) => {
        var params = {
            TableName: ""
            Key: {
                "Artist": {
                    S: "Acme Band"
                },
                "SongTitle": {
                    S: "Happy Day"
                }
            },
            TableName: "Music"
        };
    }

    //console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function(record) {
        // Kinesis data is base64 encoded so decode here
        var payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        console.log('Decoded payload:', payload);

        var enrichedPatient = {

        }
    });
};