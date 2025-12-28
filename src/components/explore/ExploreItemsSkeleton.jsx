import React from 'react'
import Skeleton from 'react-loading-skeleton';

const ExploreItemsSkeleton = ({cards}) => {
   return Array(cards)
   .fill(0)
   .map((_, i) => (
<div className='card-skeleton'key={i}>
<div className='left-col'>
<Skeleton circle width={40} height={40}/>
</div>  
<div className='right-col'>
    <Skeleton count={13}  style={{marginBottom: ".6rem"}}/>
    </div>            
</div>))
  ;
};

export default ExploreItemsSkeleton
