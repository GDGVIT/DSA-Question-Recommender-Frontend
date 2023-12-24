// import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-auth bg-cover">
      <div className="w-full max-w-lg bg-[#082032] bg-opacity-80 py-10 px-10 rounded-md">
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
