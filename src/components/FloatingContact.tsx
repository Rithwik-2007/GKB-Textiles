"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FloatingContact() {
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Hide immediately if already on the contact page or admin section
    if (pathname === '/contact' || pathname.startsWith('/admin')) {
      setShowButton(false);
      return;
    }

    // Set a timer to show the button after 10 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 10000); // 10000ms = 10 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!showButton) return null;

  return (
    <Link 
      href="/contact"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        backgroundColor: 'var(--terracotta, #c4704b)',
        color: '#ffffff',
        padding: '12px 20px',
        borderRadius: '50px',
        boxShadow: '0 10px 25px -5px rgba(196, 112, 75, 0.4), 0 8px 10px -6px rgba(196, 112, 75, 0.4)',
        cursor: 'pointer',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '0.85rem',
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s',
        animation: 'slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      }}
      className="floating-contact-btn"
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
        e.currentTarget.style.backgroundColor = 'var(--terracotta-dark, #b35f3b)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.backgroundColor = 'var(--terracotta, #c4704b)';
      }}
    >
      {/* Stitching effect layer */}
      <span 
        style={{
          position: 'absolute',
          inset: '3px',
          border: '1.5px dashed rgba(255, 255, 255, 0.4)',
          borderRadius: '50px',
          pointerEvents: 'none',
        }}
      />
      
      {/* Mail Envelope SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      Enquire Now

      {/* Slide in styles */}
      <style jsx global>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>
    </Link>
  );
}
