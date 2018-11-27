var AWS = require("aws-sdk");

AWS.config.update({
    region: process.env.REGION
});

var patientRegister = [
    {"PatientId":"X45325493","LastName":"Adams","FirstName":"Augustus","DateOfBirth":"19390713","Procedure":"Transmyocardial Revascularization","SurgeonId":"XD76534","SurgeonLastName":"Shah"},
    {"PatientId":"Z15983469","LastName":"Archer","FirstName":"Anne","DateOfBirth":"19420918","Procedure":"Coronary Artery Bypass","SurgeonId":"LG07651","SurgeonLastName":"Shah"},
    {"PatientId":"K69242516","LastName":"Baker","FirstName":"Bartholomew","DateOfBirth":"19211117","Procedure":"Mitral Valve Replacement","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"PatientId":"E36343878","LastName":"Bryan","FirstName":"Bethany","DateOfBirth":"19701115","Procedure":"Myectomy","SurgeonId":"AM93241","SurgeonLastName":"Sutton"},
    {"PatientId":"Q33473899","LastName":"Chernov","FirstName":"Carolyn","DateOfBirth":"19291010","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Wood"},
    {"PatientId":"X65618222","LastName":"Calvin","FirstName":"Charles","DateOfBirth":"19570520","Procedure":"Ventricular Restoration","SurgeonId":"AM93241","SurgeonLastName":"Sutton"},
    {"PatientId":"G52787216","LastName":"Davis","FirstName":"David","DateOfBirth":"19521015","Procedure":"Mitral Valve Replacement","SurgeonId":"HJ98342","SurgeonLastName":"Wood"},
    {"PatientId":"R55832715","LastName":"Dorris","FirstName":"Dorris","DateOfBirth":"19111016","Procedure":"Coronary Artery Bypass","SurgeonId":"HJ98342","SurgeonLastName":"Shah"},
    {"PatientId":"J15943444","LastName":"Ellis","FirstName":"Ellie","DateOfBirth":"19560611","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"PatientId":"H42444597","LastName":"Eversman","FirstName":"Edward","DateOfBirth":"19360727","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Wood"},
    {"PatientId":"B45149132","LastName":"Franklin","FirstName":"Francis","DateOfBirth":"19280309","Procedure":"Coronary Artery Bypass","SurgeonId":"AM93241","SurgeonLastName":"Inman"},
    {"PatientId":"D62553691","LastName":"Forrest","FirstName":"Fae","DateOfBirth":"19581102","Procedure":"Transmyocardial Revascularization","SurgeonId":"XD76534","SurgeonLastName":"Wood"},
    {"PatientId":"V97846925","LastName":"Garrison","FirstName":"George","DateOfBirth":"19560413","Procedure":"Ventricular Restoration","SurgeonId":"LG07651","SurgeonLastName":"Shah"},
    {"PatientId":"I59117864","LastName":"Gardner","FirstName":"Glenda","DateOfBirth":"19621113","Procedure":"Myectomy","SurgeonId":"XD76534","SurgeonLastName":"Wood"},
    {"PatientId":"L22353162","LastName":"Hollis","FirstName":"Harold","DateOfBirth":"19100615","Procedure":"Ventricular Restoration","SurgeonId":"XD76534","SurgeonLastName":"Sutton"},
    {"PatientId":"Z43776624","LastName":"Harvey","FirstName":"Hampton","DateOfBirth":"19120905","Procedure":"Ventricular Restoration","SurgeonId":"LG07651","SurgeonLastName":"Johnston"},
    {"PatientId":"A44966259","LastName":"Irving","FirstName":"Isabella","DateOfBirth":"19620506","Procedure":"Myectomy","SurgeonId":"CD99813","SurgeonLastName":"Johnston"},
    {"PatientId":"K36734634","LastName":"Inman","FirstName":"Isaiah","DateOfBirth":"19460414","Procedure":"Myectomy","SurgeonId":"HJ98342","SurgeonLastName":"Wood"},
    {"PatientId":"M81546619","LastName":"Jones","FirstName":"James","DateOfBirth":"19320814","Procedure":"Myectomy","SurgeonId":"LG07651","SurgeonLastName":"Sutton"},
    {"PatientId":"O52943992","LastName":"Jamison","FirstName":"Jordan","DateOfBirth":"19620612","Procedure":"Myectomy","SurgeonId":"CD99813","SurgeonLastName":"Wood"},
    {"PatientId":"L16467332","LastName":"Kelly","FirstName":"Kristen","DateOfBirth":"19530701","Procedure":"Mitral Valve Replacement","SurgeonId":"CD99813","SurgeonLastName":"Sutton"},
    {"PatientId":"W28974927","LastName":"King","FirstName":"Katherine","DateOfBirth":"19370907","Procedure":"Myectomy","SurgeonId":"XD76534","SurgeonLastName":"Shah"},
    {"PatientId":"V32641716","LastName":"Louis","FirstName":"Logan","DateOfBirth":"19561005","Procedure":"Mitral Valve Replacement","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"PatientId":"Y75454246","LastName":"Landry","FirstName":"Luna","DateOfBirth":"19450127","Procedure":"Myectomy","SurgeonId":"LG07651","SurgeonLastName":"Shah"},
    {"PatientId":"D22476962","LastName":"Morris","FirstName":"Morgan","DateOfBirth":"19530409","Procedure":"Ventricular Restoration","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"PatientId":"O14244547","LastName":"Matthew","FirstName":"Mark","DateOfBirth":"19360808","Procedure":"Transmyocardial Revascularization","SurgeonId":"CD99813","SurgeonLastName":"Sutton"},
    {"PatientId":"F84491843","LastName":"Nance","FirstName":"Nancy","DateOfBirth":"19240108","Procedure":"Mitral Valve Replacement","SurgeonId":"AM93241","SurgeonLastName":"Wood"},
    {"PatientId":"K15224164","LastName":"Norris","FirstName":"Natalie","DateOfBirth":"19240524","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"PatientId":"G62198234","LastName":"Osterman","FirstName":"Oscar","DateOfBirth":"19641022","Procedure":"Coronary Artery Bypass","SurgeonId":"XD76534","SurgeonLastName":"Inman"},
    {"PatientId":"W71679631","LastName":"Overby","FirstName":"Ophelia","DateOfBirth":"19320805","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Wood"}
];

exports.handler = (event, context, callback) => {
    var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

    //var table = 'patient-register';
    var table = process.env.TABLE_NAME;
    for (var patient of patientRegister){
        var params = {
            TableName:table,
            Item:{
                'PatientId': {S: patient.PatientId},
                'LastName': {S: patient.LastName},
                'FirstName': {S: patient.FirstName},
                'DateOfBirth': {N: patient.DateOfBirth},
                'Procedure': {S: patient.Procedure},
                'SurgeonId': {S: patient.SurgeonId},
                'SurgeonLastName': {S: patient.SurgeonLastName},
            }
        };
        console.log(params);
        ddb.putItem(params, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });
    }
};