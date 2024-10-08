import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ url }) => {
  return (
    <div>
      <QRCode value={url} size={256} />
    </div>
  );
};

export default QRCodeComponent;