var Form=require('../models/form')
var archive=require('../models/archive')

const allForm = async (req, res) => {

    try {
      console.log("Fetching all forms...");
      const data = await Form.find({});
     
      console.log("this is data: " + data)
      if (!data || data.length === 0) {
        return res.status(404).json({ error: "No forms found" });
      }
      return res.status(200).json({ data });
    } catch (error) {
      console.error("Error fetching forms:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  
  
  const particularStudentForm=async(req,res)=>
  {
    try {
      let id=req.params.id
      let data= await Form.findById(id).populate('student');
      if(!data)
      {
        console.log('no data found!!')
        res.send({message:"no data found"})
      }
      res.send({data})
    } catch (error) {
      console.log(error.message)
    }
  }
  const archiveForm = async (req, res) => {
    try {
      const formId = req.params.id;
  
      // Find the form by ID
      const form = await Form.findById(formId);
  
      if (!form) {
        return res.status(404).json({ message: 'Form not found' });
      }
  
      // Create a new archive document with form details
      const archiveData = {
        destination: form.destination,
        className: form.className,
        duration: form.duration,
        line: form.line,
        student: form.student,
        approvalDate: Date.now(),
      };
  
      const archivedForm = await archive.create(archiveData);

      await studentModal.updateOne(
        { _id: form.student },
        { $push: { archiveForms: archivedForm._id } }
      );
  
      // Delete the form from the 'Form' collection
      await Form.findByIdAndDelete(formId);
  
      res.status(200).json({
        message: 'Form archived successfully',
        archivedForm,
      });
    } catch (error) {
      console.error('Error archiving form:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  module.exports={allForm,particularStudentForm,archiveForm}