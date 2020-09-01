import React from 'react';
import AppLayout from '../components/common/AppLayout';
import { useSelector } from 'react-redux';
import AddPostForm from '../components/addPost/AddPostForm';
import PostCard from '../components/addPost/PostCard';

const AddPost = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <AppLayout>
      {me && <AddPostForm />}
      {mainPosts.map(ani => (
        <PostCard key={ani.id} post={ani} />
      ))}
    </AppLayout>
  );
};
export default AddPost;
