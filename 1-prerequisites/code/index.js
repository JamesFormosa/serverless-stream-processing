var AWS = require("aws-sdk");

AWS.config.update({
    region: region: process.env.REGION
});

var patientRegister = [
    {"Patientd":"X45325493","LastName":"Adams","FirstName":"Augustus","DateOfBirth":"19390713","Procedure":"Transmyocardial Revascularization","SurgeonId":"XD76534","SurgeonLastName":"Shah"},
    {"Patientd":"Z15983469","LastName":"Archer","FirstName":"Anne","DateOfBirth":"19420918","Procedure":"Coronary Artery Bypass","SurgeonId":"LG07651","SurgeonLastName":"Shah"},
    {"Patientd":"K69242516","LastName":"Baker","FirstName":"Bartholomew","DateOfBirth":"19211117","Procedure":"Mitral Valve Replacement","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"Patientd":"E36343878","LastName":"Bryan","FirstName":"Bethany","DateOfBirth":"19701115","Procedure":"Myectomy","SurgeonId":"AM93241","SurgeonLastName":"Sutton"},
    {"Patientd":"Q33473899","LastName":"Chernov","FirstName":"Carolyn","DateOfBirth":"19291010","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Wood"},
    {"Patientd":"X65618222","LastName":"Calvin","FirstName":"Charles","DateOfBirth":"19570520","Procedure":"Ventricular Restoration","SurgeonId":"AM93241","SurgeonLastName":"Sutton"},
    {"Patientd":"G52787216","LastName":"Davis","FirstName":"David","DateOfBirth":"19521015","Procedure":"Mitral Valve Replacement","SurgeonId":"HJ98342","SurgeonLastName":"Wood"},
    {"Patientd":"R55832715","LastName":"Dorris","FirstName":"Dorris","DateOfBirth":"19111016","Procedure":"Coronary Artery Bypass","SurgeonId":"HJ98342","SurgeonLastName":"Shah"},
    {"Patientd":"J15943444","LastName":"Ellis","FirstName":"Ellie","DateOfBirth":"19560611","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"Patientd":"H42444597","LastName":"Eversman","FirstName":"Edward","DateOfBirth":"19360727","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Wood"},
    {"Patientd":"B45149132","LastName":"Franklin","FirstName":"Francis","DateOfBirth":"19280309","Procedure":"Coronary Artery Bypass","SurgeonId":"AM93241","SurgeonLastName":"Inman"},
    {"Patientd":"D62553691","LastName":"Forrest","FirstName":"Fae","DateOfBirth":"19581102","Procedure":"Transmyocardial Revascularization","SurgeonId":"XD76534","SurgeonLastName":"Wood"},
    {"Patientd":"V97846925","LastName":"Garrison","FirstName":"George","DateOfBirth":"19560413","Procedure":"Ventricular Restoration","SurgeonId":"LG07651","SurgeonLastName":"Shah"},
    {"Patientd":"I59117864","LastName":"Gardner","FirstName":"Glenda","DateOfBirth":"19621113","Procedure":"Myectomy","SurgeonId":"XD76534","SurgeonLastName":"Wood"},
    {"Patientd":"L22353162","LastName":"Hollis","FirstName":"Harold","DateOfBirth":"19100615","Procedure":"Ventricular Restoration","SurgeonId":"XD76534","SurgeonLastName":"Sutton"},
    {"Patientd":"Z43776624","LastName":"Harvey","FirstName":"Hampton","DateOfBirth":"19120905","Procedure":"Ventricular Restoration","SurgeonId":"LG07651","SurgeonLastName":"Johnston"},
    {"Patientd":"A44966259","LastName":"Irving","FirstName":"Isabella","DateOfBirth":"19620506","Procedure":"Myectomy","SurgeonId":"CD99813","SurgeonLastName":"Johnston"},
    {"Patientd":"K36734634","LastName":"Inman","FirstName":"Isaiah","DateOfBirth":"19460414","Procedure":"Myectomy","SurgeonId":"HJ98342","SurgeonLastName":"Wood"},
    {"Patientd":"M81546619","LastName":"Jones","FirstName":"James","DateOfBirth":"19320814","Procedure":"Myectomy","SurgeonId":"LG07651","SurgeonLastName":"Sutton"},
    {"Patientd":"O52943992","LastName":"Jamison","FirstName":"Jordan","DateOfBirth":"19620612","Procedure":"Myectomy","SurgeonId":"CD99813","SurgeonLastName":"Wood"},
    {"Patientd":"L16467332","LastName":"Kelly","FirstName":"Kristen","DateOfBirth":"19530701","Procedure":"Mitral Valve Replacement","SurgeonId":"CD99813","SurgeonLastName":"Sutton"},
    {"Patientd":"W28974927","LastName":"King","FirstName":"Katherine","DateOfBirth":"19370907","Procedure":"Myectomy","SurgeonId":"XD76534","SurgeonLastName":"Shah"},
    {"Patientd":"V32641716","LastName":"Louis","FirstName":"Logan","DateOfBirth":"19561005","Procedure":"Mitral Valve Replacement","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"Patientd":"Y75454246","LastName":"Landry","FirstName":"Luna","DateOfBirth":"19450127","Procedure":"Myectomy","SurgeonId":"LG07651","SurgeonLastName":"Shah"},
    {"Patientd":"D22476962","LastName":"Morris","FirstName":"Morgan","DateOfBirth":"19530409","Procedure":"Ventricular Restoration","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"Patientd":"O14244547","LastName":"Matthew","FirstName":"Mark","DateOfBirth":"19360808","Procedure":"Transmyocardial Revascularization","SurgeonId":"CD99813","SurgeonLastName":"Sutton"},
    {"Patientd":"F84491843","LastName":"Nance","FirstName":"Nancy","DateOfBirth":"19240108","Procedure":"Mitral Valve Replacement","SurgeonId":"AM93241","SurgeonLastName":"Wood"},
    {"Patientd":"K15224164","LastName":"Norris","FirstName":"Natalie","DateOfBirth":"19240524","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Johnston"},
    {"Patientd":"G62198234","LastName":"Osterman","FirstName":"Oscar","DateOfBirth":"19641022","Procedure":"Coronary Artery Bypass","SurgeonId":"XD76534","SurgeonLastName":"Inman"},
    {"Patientd":"W71679631","LastName":"Overby","FirstName":"Ophelia","DateOfBirth":"19320805","Procedure":"Transmyocardial Revascularization","SurgeonId":"AM93241","SurgeonLastName":"Wood"}
];

exports.handler = (event, context, callback) => {
    var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

    //var table = 'patient-register';
    var table = process.env.TABLE_NAME;
    for (var patient of patientRegister){
        var params = {
            TableName:table,
            Item:{
                'patient-id': {S: patient.Patientd},
                'last-name': {S: patient.LastName},
                'first-name': {S: patient.FirstName},
                'date-of-birth': {N: patient.DateOfBirth},
                'procedure': {S: patient.Procedure},
                'surgeon-id': {S: patient.SurgeonId},
                'surgeon-last-name': {S: patient.SurgeonLastName},
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