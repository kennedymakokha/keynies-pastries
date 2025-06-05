// lib/useFirebaseMessaging.ts
"use client";

import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging, onMessage } from "./firebase";

const VAPID_KEY = "BNxZggIbzWpzZexd7KGHZcUir1W7tts3w3TIWdxGJjIOUOmVvMIxKzEoSo5yX06Q1g2O82ojXeIeSxJdwWsS0ME"; // from Firebase Console

const useFirebaseMessaging = () => {
  useEffect(() => {
    if (!messaging || typeof window === "undefined") return;

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        if (messaging) {
          getToken(messaging, { vapidKey: VAPID_KEY })
            .then((currentToken) => {
              if (currentToken) {
                console.log("FCM Token:", currentToken);
                // Save this token to backend
              } else {
                console.warn("No registration token available.");
              }
            })
            .catch((err) => console.error("FCM getToken error:", err));
        } else {
          console.error("Messaging instance is null.");
        }
      }
    });

    // Foreground handler
    onMessage(messaging, (payload) => {
      const { title, body } = payload.notification ?? {};
      alert(`${title}\n${body}`);
    });
  }, []);
};

export default useFirebaseMessaging;
