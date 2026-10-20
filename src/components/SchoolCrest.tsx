import React from 'react';

interface SchoolCrestProps {
  className?: string;
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({ className = 'w-12 h-12' }) => {
  return (
    <svg
      viewBox="0 0 120 130"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="At-Tanzeel Success Academy Official Crest — A.S.A Ibadan"
    >
      {/* Outer Shield */}
      <path
        d="M16 12 H104 L98 78 C95 98 60 110 60 110 C60 110 25 98 22 78 L16 12 Z"
        fill="#FFFFFF"
        stroke="#0a1f44"
        strokeWidth="4"
      />
      {/* Inner Shield Frame */}
      <path
        d="M28 26 H92 L88 74 C86 88 60 97 60 97 C60 97 34 88 32 74 L28 26 Z"
        fill="#F8FAFC"
        stroke="#DC2626"
        strokeWidth="2"
      />

      {/* Top Text: SUCCESS */}
      <text
        x="60"
        y="22"
        textAnchor="middle"
        fill="#0a1f44"
        fontSize="8.5"
        fontFamily="Outfit, sans-serif"
        fontWeight="800"
        letterSpacing="1"
      >
        SUCCESS
      </text>

      {/* Open Book in Center */}
      <path
        d="M38 66 Q49 62 60 66 Q71 62 82 66 L82 40 Q71 36 60 40 Q49 36 38 40 Z"
        fill="#FFFFFF"
        stroke="#15803D"
        strokeWidth="2"
      />
      <line x1="60" y1="40" x2="60" y2="66" stroke="#15803D" strokeWidth="1.5" />

      {/* Crescent & Star inside Book */}
      <path
        d="M55 46 A6 6 0 1 0 55 58 A4.8 4.8 0 1 1 55 46 Z"
        fill="#DC2626"
      />
      <polygon
        points="67,48 68.2,51 71.5,51 68.8,52.8 69.8,56 67,54 64.2,56 65.2,52.8 62.5,51 65.8,51"
        fill="#DC2626"
      />

      {/* A.S.A initials */}
      <text
        x="60"
        y="80"
        textAnchor="middle"
        fill="#15803D"
        fontSize="9.5"
        fontFamily="Outfit, sans-serif"
        fontWeight="800"
      >
        A.S.A
      </text>

      {/* Bottom Shield Text: IBADAN */}
      <text
        x="60"
        y="92"
        textAnchor="middle"
        fill="#0a1f44"
        fontSize="7.5"
        fontFamily="Outfit, sans-serif"
        fontWeight="800"
      >
        IBADAN
      </text>

      {/* Bottom Motto Ribbon */}
      <path
        d="M12 112 Q60 122 108 112 L104 123 Q60 131 16 123 Z"
        fill="#FFFFFF"
        stroke="#0a1f44"
        strokeWidth="2"
      />
      <text
        x="60"
        y="121"
        textAnchor="middle"
        fill="#0a1f44"
        fontSize="5.2"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
      >
        FAITH, KNOWLEDGE AND WORK
      </text>
    </svg>
  );
};
