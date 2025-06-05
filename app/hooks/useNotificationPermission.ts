import { useEffect, useState } from 'react';

export function useNotificationPermission() {
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((perm) => {
        setPermission(perm);
      });
    }
  }, []);

  return permission;
}
