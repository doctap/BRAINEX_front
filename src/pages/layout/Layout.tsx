import React from 'react';
import { Header } from '../../components/headers';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>

      <Outlet />
    </>
  );
};
