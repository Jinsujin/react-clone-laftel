import React from 'react';
import AppLayout from '../components/common/AppLayout';
import { useSelector } from 'react-redux';
import WritePostForm from '../components/writePost/WritePostForm';
import PostCard from '../components/writePost/PostCard';

const AddPost = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <AppLayout>
      {me && <WritePostForm />}
      {mainPosts.map(ani => (
        <PostCard key={ani.id} post={ani} />
      ))}
    </AppLayout>
  );
};
export default AddPost;
