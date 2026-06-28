'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceStatus: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const apiServiceStatusURL = process.env.NEXT_PUBLIC_API_SERVICESTATUS_URL || "";

  const dotColor = () => {
    if (status === "operational") return "bg-green-400 shadow-[0_0_8px_#4ade80]";
    if (status === "downtime") return "bg-yellow-400 shadow-[0_0_8px_#facc15]";
    if (status === "degraded") return "bg-red-400 shadow-[0_0_8px_#f87171]";
    return "bg-white/20";
  };

  const textColor = () => {
    if (status === "operational") return "text-green-400";
    if (status === "downtime") return "text-yellow-400";
    if (status === "degraded") return "text-red-400";
    return "text-white/30";
  };

  useEffect(() => {
    async function getStatusData() {
      try {
        const response = await axios.get(apiServiceStatusURL);
        setStatus(response.data.heartbeatResponse.serviceStatus);
      } catch {
        // silently fail
      }
    }
    getStatusData();
  }, []);

  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
      <span className="relative flex-shrink-0">
        <span className={`block w-[1rem] h-[1rem] rounded-full ${dotColor()} transition-all duration-300`} />
        {status === "operational" && (
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
        )}
      </span>
      <span className={`font-mono text-[1.35rem] ${textColor()} transition-colors duration-300`}>
        {status ? status : "checking..."}
      </span>
    </div>
  );
};

export default ServiceStatus;
