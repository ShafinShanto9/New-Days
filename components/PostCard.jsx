import React from 'react';

const PostCard = ({post}) => {
  return (
    <div>
        {post.title}
        {post.reactor}
    </div>
  );
};

export default PostCard;
