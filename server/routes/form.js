var express=require('express')
var router=express.Router()
var {allForm,particularStudentForm, archiveForm, allArchiveForm, archives}=require('../controllers/form')

router.get('/forms',allForm)
router.get('/:id',particularStudentForm)
router.post('/archive', archiveForm);
router.get('/all',archives)

module.exports=router;
