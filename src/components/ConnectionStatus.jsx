import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
      <div className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-3 border-2 border-white">
        <WifiOff className="w-6 h-6" />
        <span className="font-bold">No Internet Connection</span>
      </div>
    </div>
  );
};

export default ConnectionStatus;