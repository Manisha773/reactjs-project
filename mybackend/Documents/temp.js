module.exports = ({
      tempid,
      firstName,
      lastName,
      email,
      mobile,
      linkedIn,
      github,
      University_or_SchoolName,
      MajorSubject,
      qualification,
      passingYear,
      Percentage,
      companyName,
      Position,
      Start_Date,
      End_Date,
      Description,
      ProjectTitle,
      ProjectLink,
      ProDescription,
      Skill,
      language,
      Certification,
      achievements,
      seminar,
      hobbies }) => {
      if (tempid == '1') {
          return `
          <!DOCTYPE html>
          <html>
          <title>W3.CSS Template</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <style>
          html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
          </style>
          <body class="w3-light-grey" style={{ marginRight: "20px" }}>
            <div class="w3-content w3-margin-top-10" style={{ marginTop: "80px" }}>
                <div class="w3-row-padding">
                    <div class="w3-third">
                        <div class="w3-white w3-text-grey w3-card-4">
                            <div class="w3-display-container">
                                <img src='bio-builder/src/components/avtaar.jpg' alt="Avatar" />
                            </div>
                            <div class="w3-container">
                                <p className="w3-text-black">${firstName} ${lastName}</p>
                                <p>${email} </p>
                                <p>(+91)${mobile} </p>
                                <p>${linkedIn} </p>
                                <p>${github} </p>

                                <hr />
                                <div class="w3-container w3-card w3-white">
                                    <h2 class="w3-text-grey w3-padding-16"><i class=" w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                                    <div class="w3-container">
                                        <h5 class="w3-opacity"><b>${University_or_SchoolName} </b></h5>
                                        <h5 class="w3-opacity"><b>${qualification} </b></h5>
                                        <h6 class="w3-text-teal"><i class="fa-fw w3-margin-right"></i>${passingYear} </h6>
                                        <p>${MajorSubject}</p>
                                        <div class="w3-light-grey w3-round-xlarge w3-small">
                                            <div class="w3-container w3-center w3-round-xlarge w3-teal" >${Percentage} </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <p class="w3-large"><b>Skills</b></p>
                                <p>${Skill}</p>
                                <br />
                                <hr/>
                                <div class="w3-light-grey w3-round-xlarge">
                                    <div class="w3-round-xlarge w3-teal" ></div>
                                </div>
                            </div>
                        </div><br />
                    </div>
                    <div class="w3-twothird">
                        <div class="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 class="w3-text-grey w3-padding-16">Work Experience</h2>
                            <div class="w3-container">
                                <h5 class="w3-opacity"><b>${companyName} ${Position}</b></h5>
                                <h6 class="w3-text-teal">(${Start_Date}-${End_Date} )</h6>
                                <p>${Description}</p>
                                <hr />
                            </div>
                        </div>

                    </div>
                    <div class="w3-twothird">
                        <div class="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 class="w3-text-grey w3-padding-16"><i class="fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Project</h2>
                            <div class="w3-container">
                                <h5 class="w3-opacity"><b>${ProjectTitle} ${ProjectLink} </b></h5>
                                <p>${ProDescription}</p>
                                <hr />
                            </div>
                        </div>

                    </div>
                    <div class="w3-twothird">
                        <div class="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 class="w3-text-grey w3-padding-16">Extra Ciurricular</h2>
                            <div class="w3-container">
                                <h5 class="w3-opacity"><b>${language}</b></h5>
                                <h5 class="w3-opacity"><b>${hobbies}</b></h5>
                                <h5 class="w3-opacity"><b>${Certification}</b></h5>
                                <h5 class="w3-opacity"><b>${achievements}</b></h5>
                                <h5 class="w3-opacity"><b>${seminar}</b></h5>
                                <hr />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </body>
          </html>
          
      `;      
           }
      else if (tempid == '2') {
            return `
          <!doctype html>
          <html>
              <head>
                  <!-- Font Awesome -->
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                  <!-- Bootstrap core CSS -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                  <!-- Material Design Bootstrap -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
      
                  <style>
                    html{
                        zoom: 0.55;
                    }    
                    .rule{
                      border-bottom: 1px solid black;
                      width:80%;
                    }
                    .mobile{
                      margin-top:-10px;
                    }
                    .email{
                      margin-bottom: 0;    
                    }
                    body{
                      font-family: 'Garamond';
                    }
                  </style>
              
              </head>
              <body>
      
              <div class="col-lg-8 mx-auto">
              <br/><br/>
              <div class="row text-center">
                  <div class="col-lg-6">
                      <h1><b>${firstName}${lastName}</b></h1>
                      <p class="lead email"><strong>Email:</strong> ${email}</p>
                      <p class="lead"><strong>Contact:</strong> (+91)${mobile}</p>
                      <p class="lead"><strong>LinkedIn:</strong> ${linkedIn}</p>
                      <p class="lead"><strong>Github:</strong> ${github}</p>
                  </div>    
              </div>
            
              <hr/>
              <div class="col-lg-8 mx-auto bg-warning">
                    <h3><b>Skills</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${Skill}</p>
              </div>
      
              
              <div class="col-lg-8 mx-auto bg-warning">
                    <h3><b>Experience</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${companyName}, ${Position}</b> (${Start_Date}) (${End_Date})</p>
                    <p class="mt-0">${Description}</p>
              </div>
              <div class="col-lg-8 mx-auto bg-warning">
                    <h3><b>Projects</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${ProjectTitle}</b>(${ProjectLink})</p>
                    <p class="mt-0">${ProDescription}</p>
              </div> 
              <div class="col-lg-8 mx-auto bg-warning">
                    <h3><b>Education</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${University_or_SchoolName}</b></p>
                    <p>(${qualification},${MajorSubject}, ${Percentage} ,${passingYear})</p>
              </div>
              
              <div class="col-lg-8 mx-auto bg-warning">
                    <h3><b>Extra-Curriculars/Activities</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <ul>
                      <li><p class="lead"><b>Languages: </b>${language} </p></li>
                      <li><p class="lead"><b>Hobbies: </b>${hobbies} </p></li>
                      <li><p class="lead"><b>Certification: </b>${Certification} </p></li>
                      <li><p class="lead"><b>Achievements: </b>${achievements} </p></li>
                      <li><p class="lead"><b>Seminar: </b>${seminar} </p></li>
                    </ul>
                    
              </div>
              
                  <!-- JQuery -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <!-- Bootstrap tooltips -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
                  <!-- Bootstrap core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                  <!-- MDB core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
              </body>
          </html> 
        `;
      }
      else if (tempid == '3') {
            return `
          <!doctype html>
          <html>
              <head>
                  <!-- Font Awesome -->
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                  <!-- Bootstrap core CSS -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                  <!-- Material Design Bootstrap -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
      
                  <style>
                    html{
                        zoom: 0.55;
                    }    
                    .rule{
                      border-bottom: 1px solid black;
                      width:80%;
                    }
                    .mobile{
                      margin-top:-10px;
                    }
                    .email{
                      margin-bottom: 0;    
                    }
                    body{
                      font-family: 'Garamond';
                    }
                  </style>
              
              </head>
              <body>
      
              <div class="col-lg-8 mx-auto">
              <br/><br/>
              <div class="row text-center">
                  <div class="col-lg-6">
                      <h1><b>${firstName}${lastName}</b></h1>
                      <p class="lead email"><strong>Email:</strong> ${email}</p>
                      <p class="lead"><strong>Contact:</strong> (+91)${mobile}</p>
                      <p class="lead"><strong>LinkedIn:</strong> ${linkedIn}</p>
                      <p class="lead"><strong>Github:</strong> ${github}</p>
                  </div>    
              </div>
            
              <hr/>
              <div class="col-lg-8 mx-auto bg-danger">
                    <h3><b>Skills</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${Skill}</p>
              </div>
      
              
              <div class="col-lg-8 mx-auto bg-danger">
                    <h3><b>Experience</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${companyName}, ${Position}</b> (${Start_Date}) (${End_Date})</p>
                    <p class="mt-0">${Description}</p>
              </div>
              <div class="col-lg-8 mx-auto bg-danger">
                    <h3><b>Projects</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${ProjectTitle}</b>(${ProjectLink})</p>
                    <p class="mt-0">${ProDescription}</p>
              </div> 
              <div class="col-lg-8 mx-auto bg-danger">
                    <h3><b>Education</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${University_or_SchoolName}</b></p>
                    <p>(${qualification},${MajorSubject}, ${Percentage} ,${passingYear})</p>
              </div>
              
              <div class="col-lg-8 mx-auto bg-danger">
                    <h3><b>Extra-Curriculars/Activities</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <ul>
                      <li><p class="lead"><b>Languages: </b>${language} </p></li>
                      <li><p class="lead"><b>Hobbies: </b>${hobbies} </p></li>
                      <li><p class="lead"><b>Certification: </b>${Certification} </p></li>
                      <li><p class="lead"><b>Achievements: </b>${achievements} </p></li>
                      <li><p class="lead"><b>Seminar: </b>${seminar} </p></li>
                    </ul>
                    
              </div>
              
                  <!-- JQuery -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <!-- Bootstrap tooltips -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
                  <!-- Bootstrap core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                  <!-- MDB core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
              </body>
          </html> 
        `;
      }
      else if (tempid == '4') {
            return `
          <!doctype html>
          <html>
              <head>
                  <!-- Font Awesome -->
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                  <!-- Bootstrap core CSS -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                  <!-- Material Design Bootstrap -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
      
                  <style>
                    html{
                        zoom: 0.55;
                    }    
                    .rule{
                      border-bottom: 1px solid black;
                      width:80%;
                    }
                    .mobile{
                      margin-top:-10px;
                    }
                    .email{
                      margin-bottom: 0;    
                    }
                    body{
                      font-family: 'Garamond';
                    }
                  </style>
              
              </head>
              <body>
      
              <div class="col-lg-8 mx-auto">
              <br/><br/>
              <div class="row text-center">
                  <div class="col-lg-6">
                      <h1><b>${firstName}${lastName}</b></h1>
                      <p class="lead email"><strong>Email:</strong> ${email}</p>
                      <p class="lead"><strong>Contact:</strong> (+91)${mobile}</p>
                      <p class="lead"><strong>LinkedIn:</strong> ${linkedIn}</p>
                      <p class="lead"><strong>Github:</strong> ${github}</p>
                  </div>    
              </div>
            
              <hr/>
              <div class="col-lg-8 mx-auto bg-success">
                    <h3><b>Skills</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead"> ${Skill}</p>
              </div>
      
              
              <div class="col-lg-8 mx-auto bg-success">
                    <h3><b>Experience</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${companyName}, ${Position}</b> (${Start_Date}) (${End_Date})</p>
                    <p class="mt-0">${Description}</p>
              </div>
              <div class="col-lg-8 mx-auto bg-success">
                    <h3><b>Projects</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${ProjectTitle}</b>(${ProjectLink})</p>
                    <p class="mt-0">${ProDescription}</p>
              </div> 
              <div class="col-lg-8 mx-auto bg-success">
                    <h3><b>Education</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${University_or_SchoolName}</b></p>
                    <p>(${qualification},${MajorSubject}, ${Percentage} ,${passingYear})</p>
              </div>
              
              <div class="col-lg-8 mx-auto bg-success">
                    <h3><b>Extra-Curriculars/Activities</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <ul>
                      <li><p class="lead"><b>Languages: </b>${language} </p></li>
                      <li><p class="lead"><b>Hobbies: </b>${hobbies} </p></li>
                      <li><p class="lead"><b>Certification: </b>${Certification} </p></li>
                      <li><p class="lead"><b>Achievements: </b>${achievements} </p></li>
                      <li><p class="lead"><b>Seminar: </b>${seminar} </p></li>
                    </ul>
                    
              </div>
              
                  <!-- JQuery -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <!-- Bootstrap tooltips -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
                  <!-- Bootstrap core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                  <!-- MDB core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
              </body>
          </html> 
        `;
      }
      else if (tempid == '5') {
        `
         <!doctype html>
         <html>
             <head>
                 <!-- Font Awesome -->
                 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                 <!-- Bootstrap core CSS -->
                 <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                 <!-- Material Design Bootstrap -->
                 <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
     
                 <style>
                   html{
                       zoom: 0.55;
                   }    
                   .rule{
                     border-bottom: 1px solid black;
                     width:80%;
                   }
                   .mobile{
                     margin-top:-10px;
                   }
                   .email{
                     margin-bottom: 0;    
                   }
                   body{
                     font-family: 'Garamond';
                   }
                 </style>
             
             </head>
             <body>
     
             <div class="col-lg-8 mx-auto">
             <br/><br/>
             <div class="row text-center">
                 <div class="col-lg-6">
                     <h1><b>${firstName}${lastName}</b></h1>
                     <p class="lead email"><strong>Email:</strong> ${email}</p>
                     <p class="lead"><strong>Contact:</strong> (+91)${mobile}</p>
                     <p class="lead"><strong>LinkedIn:</strong> ${linkedIn}</p>
                     <p class="lead"><strong>Github:</strong> ${github}</p>
                 </div>    
             </div>
           
             <hr/>
             <div class="col-lg-8 mx-auto bg-primary">
                   <h3><b>Skills</b></h3>
             </div>
             <div class="col-lg-8 row mx-auto">
                 <p class="lead"> ${Skill}</p>
             </div>
     
             
             <div class="col-lg-8 mx-auto bg-primary">
                   <h3><b>Experience</b></h3>
             </div>
             <div class="col-lg-8 mx-auto">
                   <p class="lead"><b>${companyName}, ${Position}</b> (${Start_Date}) (${End_Date})</p>
                   <p class="mt-0">${Description}</p>
             </div>
             <div class="col-lg-8 mx-auto bg-primary">
                   <h3><b>Projects</b></h3>
             </div>
             <div class="col-lg-8 mx-auto">
                   <p class="lead"><b>${ProjectTitle}</b>(${ProjectLink})</p>
                   <p class="mt-0">${ProDescription}</p>
             </div> 
             <div class="col-lg-8 mx-auto bg-primary">
                   <h3><b>Education</b></h3>
             </div>
             <div class="col-lg-8 mx-auto">
                   <p class="lead"><b>${University_or_SchoolName}</b></p>
                   <p>(${qualification},${MajorSubject}, ${Percentage} ,${passingYear})</p>
             </div>
             
             <div class="col-lg-8 mx-auto bg-primary">
                   <h3><b>Extra-Curriculars/Activities</b></h3>
             </div>
             <div class="col-lg-8 mx-auto">
                   <ul>
                     <li><p class="lead"><b>Languages: </b>${language} </p></li>
                     <li><p class="lead"><b>Hobbies: </b>${hobbies} </p></li>
                     <li><p class="lead"><b>Certification: </b>${Certification} </p></li>
                     <li><p class="lead"><b>Achievements: </b>${achievements} </p></li>
                     <li><p class="lead"><b>Seminar: </b>${seminar} </p></li>
                   </ul>
                   
             </div>
             
                 <!-- JQuery -->
                 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                 <!-- Bootstrap tooltips -->
                 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
                 <!-- Bootstrap core JavaScript -->
                 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                 <!-- MDB core JavaScript -->
                 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
             </body>
         </html> 
       `;
      return 
      }
}