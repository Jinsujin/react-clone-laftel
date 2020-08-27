import React from 'react';
import AppLayout from '../components/common/AppLayout';
import { useSelector } from 'react-redux';
import AddAnimationForm from '../components/addAnimation/AddAnimationForm';
import AnimationCard from '../components/addAnimation/AnimationCard';

const AddAnimation = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainAnimations } = useSelector(state => state.animation);

  return (
    <AppLayout>
      {isLoggedIn && <AddAnimationForm />}
      {mainAnimations.map(ani => (
        <AnimationCard key={ani.id} animation={ani} />
      ))}
    </AppLayout>
  );
};
export default AddAnimation;
