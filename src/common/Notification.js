import React from 'react';
import { notification, Button } from 'antd';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
export const ConfirmBuy = (message, title) => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
    </Button>
  );
  notification.open({
    message: title,
    duration: 10,
    description: message,
    btn,
    key,
    onClose: close,
  });
};

export const Notification = (type, title, message) => {
  notification[type]({
    message: title,
    duration: 10,
    description: message,
  });
};
