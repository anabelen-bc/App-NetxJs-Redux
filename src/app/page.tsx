'use client'

import React from 'react';
import UserForm from '@/app/components/feature/folders/UserForm';
import UserList from './components/feature/folders/UserList';

const HomePage: React.FC = () => {
  

  return (
    <div>
      <h1>My App</h1>
      <UserForm />
      <UserList/>
      
    </div>
  );
};

export default HomePage;