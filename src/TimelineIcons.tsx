import React from 'react';

export const ArrivalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Elegant doorway / arrival abstract */}
    <path d="M4 22h16" />
    <path d="M8 22V6a4 4 0 0 1 8 0v16" />
    <path d="M12 22V6" />
    <circle cx="12" cy="11" r="1" />
  </svg>
);

export const PoruwaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Elegant minimalist lotus */}
    <path d="M12 22c0-4-3-8-7-10 4-2 7 2 7 10z" />
    <path d="M12 22c0-4 3-8 7-10-4-2-7 2-7 10z" />
    <path d="M12 22c0-6-2-12-6-15 4 0 6 6 6 15z" />
    <path d="M12 22c0-6 2-12 6-15-4 0-6 6-6 15z" />
    <path d="M12 22V6" />
  </svg>
);

export const RegistrationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Elegant quill and signature */}
    <path d="M6 18h12" />
    <path d="M9 22h6" />
    <path d="M17 3C14 3 11 6 11 10c0 4 2 7 3 9l1 3 3-5c1-3 2-6 1-9-1-3-3-5-5-5z" />
    <path d="M11 10L6 14l2 2 4-4" />
  </svg>
);

export const ReceptionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Elegant wine glasses clinking */}
    <path d="M8 2v5c0 2 1.5 4 4 4s4-2 4-4V2" />
    <path d="M12 11v8" />
    <path d="M9 19h6" />
    <path d="M6 5l3 2" />
    <path d="M15 7l3-2" />
    <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" opacity="0.5" />
    <circle cx="10" cy="5" r="0.5" fill="currentColor" stroke="none" opacity="0.5" />
    <circle cx="14" cy="4" r="0.5" fill="currentColor" stroke="none" opacity="0.5" />
  </svg>
);

export const GoingAwayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Vintage car / going away */}
    <path d="M5 14h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3z" />
    <path d="M4 14l2-6h12l2 6" />
    <path d="M8 14v-4h8v4" />
    <circle cx="7" cy="19" r="2" />
    <circle cx="17" cy="19" r="2" />
    <path d="M2 14h20" />
  </svg>
);
