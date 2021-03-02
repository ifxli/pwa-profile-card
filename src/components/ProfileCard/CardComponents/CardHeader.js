import React from 'react';
import DetailArc from './DetailArc';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import './CardHeader.css';
import logo from '../../../assets/images/logo192.png'; // Tell webpack this JS file uses this image


const CardHeader = ({ profile }) => {
  return (
    <div className="profile-header">
      <img className="header-avatar" src={logo} alt="avatar" />
      <div className="header-info">
        <div className="card-name">{profile.PlayerName}</div>
        <div className="card-location">{profile.HomeCourse}</div>
        <div className="card-details">
          <div>
            Quality
            <div className="detail-text">{profile.Quality} <FaCaretUp/></div>
          </div>
          <div className="arc-wrapper">
            <DetailArc
              svgWidth={28}
              arcWidth={3}
              progressPercentage={profile.Quality}
              colorIndicator={"#F43168"}
            />
          </div>
          <div className="v-separator"></div>
          <div className="left-margin">
            Handicap
            <div className="detail-text">{profile.Handicap}</div>
          </div>
          <div className="v-separator"></div>
          <div className="left-margin">
            SG Total
            <div className="detail-text">{profile.SGTotal} <FaCaretDown/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHeader;
