// app/_components/FirebaseClient.tsx
"use client";

import useFirebaseMessaging from "../lib/useFirebaseMessaging";



export default function FirebaseClient() {
  useFirebaseMessaging();
  return null;
}
