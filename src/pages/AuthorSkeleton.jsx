import React from 'react'

const AuthorSkeleton = ({width, height, borderRadius}) => {
  return (
    <div
      className="skeleton-box"
      style={{
        width,
        height,
        borderRadius,
      }}>
    </div>
  )
}

export default AuthorSkeleton
