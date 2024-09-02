"use client";
import { useEffect, useState } from "react";

const useNotificationPermissionStatus = () => {
  const [permission, setPermission] =
    useState<NotificationPermission>("default");

  //多分アクセスしたときに実行される
  useEffect(() => {
    const handler = () => {
      //iOSの場合はNotificationがundefinedになる
      if (typeof Notification !== "undefined") {
        setPermission(Notification.permission);
      }
    };
    handler();
    //iOS対策
    if (typeof Notification !== "undefined") {
      Notification.requestPermission().then(handler);
    }

    navigator.permissions
      .query({ name: "notifications" })
      .then((notificationPerm) => {
        notificationPerm.onchange = handler;
      });
  }, []);

  return permission;
};

export default useNotificationPermissionStatus;
