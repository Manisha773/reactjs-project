import React, { Component } from "react";
import Temp from '../Temp'

function LargeResume() {

    const resume=JSON.parse(localStorage.getItem("currentResume"));  
    const updateResume=(e)=>{
        e.preventDefault();
        window.location='/editresume'
    }

    return (
      <>
      <Temp values={{
            firstName: (resume.firstName),
            lastName: (resume.lastName),
            email: (resume.email),
            mobile: (resume.mobile),
            linkedIn: (resume.linkedIn),
            github: (resume.github),
            University_or_SchoolName:(resume.University_or_SchoolName),
            MajorSubject: (resume.MajorSubject),
            qualification: (resume.qualification),
            passingYear: (resume.passingYear),
            Percentage: (resume.Percentage),
            companyName: (resume.companyName),
            Position: (resume.Position),
            Start_Date: (resume.Start_Date),
            End_Date: (resume.End_Date),
            Description: (resume.Description),
            ProjectTitle: (resume.ProjectTitle),
            ProjectLink: (resume.ProjectLink),
            ProDescription: (resume.ProDescription),
            Skill: (resume.Skill),
            language: (resume.language),
            Certification: (resume.Certification),
            achievements: (resume.achievements),
            seminar: (resume.seminar),
            hobbies: (resume.hobbies)}}/>
      <br/>
      <button type="button" className='btn' style={{  marginLeft:'40%', marginBottom:'20px' ,width:'20%' ,height:'40px'}}
      onClick={updateResume}>update</button>
        </>
    );
}

export default LargeResume;