import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen min-h-[100vh] bg-black">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold text-primary">
          Loading...
        </p>
      </div>
    </div>
  );
}