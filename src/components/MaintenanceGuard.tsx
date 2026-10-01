import React from 'react';

interface MaintenanceGuardProps {
  children: React.ReactNode;
}

export const MaintenanceGuard: React.FC<MaintenanceGuardProps> = ({ children }) => {
  // Maintenance mode disabled - allow normal site access for all users
  return <>{children}</>;
};
