import React from 'react';
import './OurCourses.css';
import animal from '../images/animation-sketching.jpg';
import mchc from '../images/3mchc.jpg';
import ydfa from '../images/1ydfa.jpg';
import ydfaa from '../images/2ydfa.jpg';
import entrance from '../images/entrance-prepration.jpg'
import entrance2 from '../images/entrance-prepration2.jpg'
import entrance3 from '../images/entrance-prepration3.jpg'
import bfa from '../images/bfa.jpg';
import ma from '../images/ma.jpg';
import kidl1 from '../images/kidl1.jpg'
import kidl2 from '../images/kidl2.jpg'
import hccfk from '../images/hccfk.jpg'

const OurCourses = () => {
  return (
    <div>
      <div className="main-container">
        <h1>Our Courses</h1>
        <div className="our-courses">
        <div className="card1">
            <img src={animal} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={mchc} alt=""/>
             <p>1 to 3 Months Certificate Hobby Course (Regular and Weekend)</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={ydfa} alt=""/>
             <p>One Year Diploma in Fine Arts-Regular/Part Time-Level-3</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={ydfaa} alt=""/>
             <p>Two years Advance Diploma in Fine Arts - Regular/Part time</p>
             <button>Know More</button>
        </div>
        </div>
        <div className="our-courses">
        <div className="card1">
            <img src={entrance} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={bfa} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={ma} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={entrance3} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        </div>
        <div className="our-courses">
        <div className="card1">
            <img src={kidl1} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={kidl2} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={entrance2} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        <div className="card1">
            <img src={hccfk} alt=""/>
             <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
             <button>Know More</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OurCourses
