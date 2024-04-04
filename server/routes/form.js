var express=require('express')
var router=express.Router()
var {allForm,particularStudentForm, archiveForm}=require('../controllers/form')

router.get('/forms',allForm)
router.get('/:id',particularStudentForm)
router.post('/archive/:id', archiveForm);

module.exports=router;

// {
//     "_id": "65ee069e7fdbd439da38cd84",
//     "destination": "vashi",
//     "className": "First",
//     "duration": "Monthly",
//     "line": "Harbour",
//     "student": {
//         "archiveForms": [],
//         "_id": "65bd379c5f4597d37afae7fe",
//         "erp_no": 220600289,
//         "Password": 238420,
//         "Name": "APOORVA BASANT RAJPUT",
//         "dob": "1997-11-10T00:00:00.000Z",
//         "gender": "Female",
//         "fees_status": "paid",
//         "academic_status": "Eligible",
//         "phone_no": "7890123456",
//         "email": "apoorva@example.com",
//         "address": "789 Pine St",
//         "college_year": "TE",
//         "class": "C",
//         "rollNo": "3",
//         "aadhar_card_no": "345678901234",
//         "form": "65eee0f75930c32d7ca5ec54"
//     }