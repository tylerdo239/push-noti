import React from 'react';
import Button from '~/components/primitives/Button';
import { urlBase64ToUint8Array } from '~/utils/base';

function HomeContainer() {
  const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  // const VAPID_PRIVATE_KEY = 'WEFJfR87Gh-uMN12m3ep7Su5NddjqqXI071MACBrTpQ'; // Use this key for server

  const subscribeUserToPush = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      console.log(registration);

      // Get public VAPID key
      const applicationServerKey = urlBase64ToUint8Array(VAPID_PUBLIC_KEY);
      console.log(applicationServerKey);

      const subscription = await registration.pushManager.subscribe({
        applicationServerKey,
        userVisibleOnly: true,
      });
      // Send the subscription details to your server to store it
      console.log('Push subscription:', JSON.stringify(subscription));
    } catch (error) {
      console.log(error);
    }
  };

  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      await subscribeUserToPush();
    } else {
      console.log('Notification permission denied.');
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Button
        onClick={async () => {
          await requestNotificationPermission();
          console.log('Done');
        }}
      >
        Turn on notification and subscribe
      </Button>
    </div>
  );
}

export default HomeContainer;
