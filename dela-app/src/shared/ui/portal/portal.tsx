import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const mount = document.createElement('div');
  const el = document.createElement('div');

  React.useEffect(() => {
    mount.appendChild(el);
    document.body.appendChild(mount);

    return () => {
      document.body.removeChild(mount);
    };
  }, [el, mount]);

  return ReactDOM.createPortal(children, el);
};
