import React from 'react';
import AppLayout from '../components/common/AppLayout';
import { useSelector } from 'react-redux';
import AddAnimationForm from '../components/addAni/AddAnimationForm';
import AnimationCard from '../components/addAni/AnimationCard';

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
