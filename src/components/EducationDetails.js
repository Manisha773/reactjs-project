import React, { Component } from "react";
import Temp from './Temp';
import './form.css';

export class EducationDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
      <div style={{display:'flex',minHeight:'100vh'}}>
        <div className="card1">
          <div className="card-body" style={{background:'transparent'}}>
            <h3 className="card-titles" style={{color:'black'}}>Educational Details</h3>
          </div>
          <br />
          <br />
          <div className="row1">
            <div className="column1">
              <label>University/SchoolName</label>
              <input
                type="text"
                placeholder="University/School Name"
                name="University_or_SchoolName"
                onChange={handleChange("University_or_SchoolName")}
                defaultValue={values.University_or_SchoolName}
              />
            </div>
            <div className="column2">
              <label>Qualification</label>
              <input
                type="text"
                placeholder="Qualification"
                name="Qualification"
                onChange={handleChange("qualification")}
                defaultValue={values.qualification}
              />
            </div>
          </div>
          <br />
          <br/>
          <div className="row2">
              <label>Major Subject</label>
              <input
                type="text"
                placeholder="Major Subject"
                name="MajorSubject"
                onChange={handleChange("MajorSubject")}
                defaultValue={values.MajorSubject}
              />
            </div>
            <br/>
            <br/>
            <div className="row3">
              <label>Passing Year</label>
              <input
                type="date"
                placeholder="Enter Passing Year"
                name="Passing Year"
                onChange={handleChange("passingYear")}
                defaultValue={values.passingYear}
              />
            </div>
            <br/>
            <br/>
            <div className="row4">
              <label>Percentage</label>
              <input
                type="text"
                placeholder="Enter Percentage"
                name="Percentage"
                onChange={handleChange("Percentage")}
                defaultValue={values.Percentage}
              />
            </div>
          <br />
          <br />
          <br />
          <div className="row1">
            <div className="column1">
            <button type="button" className="button2" style={{background:'linear-gradient(90deg,rgb(52,119,136)0%,rgb(36,58,61)100%)'}} onClick={this.back}>
            Back</button></div>
            <div className="column1">
            <button type="button" className="button1" style={{background:'linear-gradient(90deg,rgb(52,119,136)0%,rgb(36,58,61)100%)'}} onClick={this.continue}>
              Next</button></div>
          </div>
          <br />
          </div>
          <div style={{height:'500px',width:'75vw',zoom:'0.6'}}>
      <Temp values={values}/>
      </div>
    </div>
      </>
    );
  }
}

export default EducationDetails;