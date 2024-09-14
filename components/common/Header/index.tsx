import React from 'react';
import useNeedAuth from '~/hooks/auth/useNeedAuth';

export default function Header({ currentPage = '' }) {
  const needAuth = useNeedAuth();
  return <header>{needAuth ? 'need' : 'no-need'}</header>;
}
