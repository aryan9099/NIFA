import React from 'react';
import './OnlineClasses.css';
import gplay from '../images/gplay.png';
import appstore from '../images/appstore.png'

const OnlineClasses = () => {
  return (
    <div>
      <div className="OnlineClasses">
        <div className="right">
            <h1>Online Classes</h1>
            <p>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home.</p>
            <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
            <button type="button">Read More</button>
            <h3>Download The App</h3>
            <a href="/"><img src={gplay} alt=""/></a>
            <a href="/"><img src={appstore} alt=""/></a>
            </div>
        <div className="left">
            <div className="iframe">
            <iframe  src="https://www.youtube.com/embed/-9cJjaLXKqE?si=PrsSJzIREgu96tOR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineClasses;
