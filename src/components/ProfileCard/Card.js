import React from 'react';
import './Card.css';
import CardHeader from './CardComponents/CardHeader';
import SGCategoryBar from './CardComponents/SGCategoryBar';
import ProfileSkeleton from './CardComponents/ProfileSkeleton';

const Card = ({ profile }) => {
  console.log("profile = ", profile);
  return profile ? (
    <div className="profile-card">
      <CardHeader profile={profile} />
      <div className="separator"></div>
      <div className="sg-graphs">
        {profile.SGCategories.map(cat => {
          return <SGCategoryBar category={cat} />
        })}
      </div>
    </div>
  ) : (
    <div className="profile-card skeleton-card">
      <ProfileSkeleton />
    </div>
  )
}

export default Card;
