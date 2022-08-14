import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>{element}</NotificationProvider>
);

export const shouldUpdateScroll = ({ pathname }) => {
  console.log('ppp', pathname);

  if (!pathname.includes('/products/')) {
    return false;
  }
};
