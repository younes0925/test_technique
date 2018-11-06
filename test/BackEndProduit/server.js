const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const app = express();
// default options
app.use(fileUpload());


/**
 * check if we have duplicate filename that contain ()
 * @param {string} uploadPath the name of our file
 * @param {number} nbr the number between () in the filename 
 * @returns {number} that we can use it to  increment our filename  
 */
check_if_exist = function (uploadPath , nbr  ){

    while(fs.existsSync(uploadPath+'('+nbr+')'))
        nbr+=1;
    return nbr ; 
}



app.post('/uploadFile', function(req, res) {
  let sampleFile;
  let uploadPath;
  let inc ;

  if (Object.keys(req.files).length == 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }


  sampleFile = req.files.file;

  uploadPath = __dirname + '/uploads/' + sampleFile.name; //path_name

  /** 
   * check check if we have duplicate filename without 
  */
  if (fs.existsSync(uploadPath)) {
     look = false ;
     inc = check_if_exist(uploadPath,1);
     uploadPath = uploadPath+'('+inc+')';
    }


  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    
    res.json({ message: 'File uploaded!',
              uploadPath: uploadPath });
  });
});

const port = 8000;


app.listen(port, () => {
    console.log('server running on http://localhost:' + port);
});


