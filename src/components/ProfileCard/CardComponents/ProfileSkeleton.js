import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import './CardHeader.css';

const ProfileSkeleton = () => {
  return (
    <div>
      <div className="profile-header">
        <Skeleton variant="circle" width={56} height={56} />
        <div className="header-info">
          <Skeleton variant="rect" width="60%" height={12} />
          <Skeleton variant="rect" width="60%" height={12} style={{marginTop: 8}} />
          <Skeleton variant="rect" width="30%" height={12} style={{marginTop: 8}} />
        </div>
      </div>
      <Skeleton variant="rect" width="100%" height={120} style={{marginTop: 70}} />
      <Skeleton variant="rect" width="100%" height={20} style={{marginTop: 25}} />
      <Skeleton variant="rect" width="100%" height={170} style={{marginTop: 25}} />
    </div>
  )
}

export default ProfileSkeleton;
