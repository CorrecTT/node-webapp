//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU5MjY1MTk3LCJleHAiOjE2NTkyNjg3OTcsIm5iZiI6MTY1OTI2NTE5NywianRpIjoiS1VUOEJMcXowUjIwU2ZMbCIsInN1YiI6MTE0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Vi7X2squgU5VOvE9vPd1XehRAdoZCJGcSvYdWUR7G3M"; // put access token
const student = {
  student_id: 63362419,
  name: 'ธนกร คำเกิด', // replace with your full name.
  age: 19, // put your age.
  gender: 'ไม่ระบุ', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}