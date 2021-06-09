import React from 'react'
import './profile.css';
import {Link} from 'react-router-dom';


function Profile() {
    var loggedinUser=JSON.parse(localStorage.getItem('user'))

    const fetchTemplates=async (e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:8020/app/getTemplates",{
            method:'POST',headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                userID:loggedinUser.id
            })
        });
        const data=await res.json();
        if(data.templates==''){
            window.alert("No resume created yet !")   
        }else{
            localStorage.setItem('templates',JSON.stringify(data.templates))
            window.location='/profile/myprofile'
        }
    }
    return (
        <>
            <div className="card_profile">
                <img src="img/avtar.jpg" className="img-top" alt="John" />
                    <h1>{loggedinUser.username}</h1>
                    <p className="titles">{loggedinUser.email}</p>
                    <button className="button"><a href='/SigninF'>Reset Password</a></button>
                    <br/>
                    <br/>
                    <button className="button" onClick={fetchTemplates}>My resumes</button>
            </div>
        </>
    )
}

export default Profile
