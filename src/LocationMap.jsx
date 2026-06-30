import React from "react";
export default function LocationMap({
  address = "22a Eastern Bypass, Port Harcourt, 500101, Rivers State",
  zoom = 16,
  height = "450px",
  className = "",
}) {
  const query = encodeURIComponent(address);
  const src = `https://maps.google.com/maps?q=${query}&z=${zoom}&output=embed`;

  return (
    <div
      className={`w-full overflow-hidden rounded-[20px] border border-gray-200 shadow-sm ${className}`}
      style={{ height }}
    >
      <iframe
        title="Location map"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
