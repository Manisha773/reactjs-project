import React,{useState} from 'react'
import "../pages/myResume.css"
import Temp from '../Temp'



 function MyResume(){

    const ret=JSON.parse(localStorage.getItem("templates"));  

    const handleOpen = (currentResume) => {
        localStorage.setItem('currentResume',JSON.stringify(currentResume))
        window.location='/viewresume';
    };



    return (
        <>
            <div class="w3-container">
                <h3>Created Templates</h3>
                {ret.map((user, index) => (
                    <div>
                    {(()=>{
                        if (user.tempid==1){
                            
                            return(
                                <div><h3 className=" column1" style={{textIndent:'50px',color:"blue"}}>  
                                <div style={{height:'300px',width:'60vw',zoom:'0.3'}} onClick={() => handleOpen(user)}>
                                    <Temp values={{
                                    firstName: (user.firstName),
                                    lastName: (user.lastName),
                                    email: (user.email),
                                    mobile: (user.mobile),
                                    linkedIn: (user.linkedIn),
                                    github: (user.github),
                                    University_or_SchoolName:(user.University_or_SchoolName),
                                    MajorSubject: (user.MajorSubject),
                                    qualification: (user.qualification),
                                    passingYear: (user.passingYear),
                                    Percentage: (user.Percentage),
                                    companyName: (user.companyName),
                                    Position: (user.Position),
                                    Start_Date: (user.Start_Date),
                                    End_Date: (user.End_Date),
                                    Description: (user.Description),
                                    ProjectTitle: (user.ProjectTitle),
                                    ProjectLink: (user.ProjectLink),
                                    ProDescription: (user.ProDescription),
                                    Skill: (user.Skill),
                                    language: (user.language),
                                    Certification: (user.Certification),
                                    achievements: (user.achievements),
                                    seminar: (user.seminar),
                                    hobbies: (user.hobbies)}}/>
                                     
                                </div>
                                </h3></div>
                            )}
                            {/* else if (user.tempid==2){
                            return(
                                <div><h3 className="column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img2} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )}
                            else if (user.tempid==3){
                            return(
                                <div><h3 className=" column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img3} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )}
                            else if (user.tempid==4){
                            return(
                                <div><h3 className=" column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img4} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )}
                            else if (user.tempid==5){
                            return(
                                <div><h3 className=" column1" style={{textIndent:'50px',color:"blue"}}>  
                                <img src={img5} style={{height:'200px',width:'200px'}}/>
                                </h3></div>
                            )} */}
                            })()}
                    </div>
                ))}
            </div> 
        </>
    )
}

export default MyResume;
