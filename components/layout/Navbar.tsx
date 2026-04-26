'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);



  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowDropdown(false);
      router.push('/login');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        transition: 'background 0.3s ease, border-bottom 0.3s ease',
        background: scrolled ? '#111118' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <Link href="/" className="flex items-center gap-[10px]">
          <div className="w-[28px] h-[28px] bg-[#5b6ef5] rounded-[6px] flex items-center justify-center">
            <span className="text-white font-display italic text-[16px]">V</span>
          </div>
          <div className="flex items-center">
            <span className="font-display italic text-[20px] text-[#f0f0f5]">Voter</span>
            <span className="font-body font-light text-[20px] text-[#5b6ef5]">Lens</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center">
          {loading ? null : !user ? (
            <button
              onClick={() => router.push('/login')}
              className="flex items-center gap-2 text-[14px] font-medium bg-[#5b6ef5] text-white rounded-[8px] px-[20px] py-[8px] hover:bg-[#4a5cd4] transition-colors"
            >
              Sign in
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2"
              >
                {user.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt="User photo"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-[#1e1e2e]"
                  />
                ) : (
                  <div className="w-[32px] h-[32px] rounded-full border-2 border-[#1e1e2e] bg-[#1a1a28] flex items-center justify-center text-[#f0f0f5] text-[14px]">
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                  </div>
                )}
                <span className="text-[14px] text-[#f0f0f5]">
                  {user.displayName ? (user.displayName.length > 12 ? user.displayName.substring(0, 12) + '...' : user.displayName) : 'User'}
                </span>
                <ChevronDown size={14} className="text-[#9090a8]" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-[#111118] border border-[#1e1e2e] rounded-[8px] overflow-hidden shadow-lg py-1">
                  <button
                    className="w-full text-left px-4 py-2 text-[14px] text-[#f0f0f5] hover:bg-[#1a1a28] transition-colors"
                  >
                    My progress
                  </button>
                  <div className="h-[1px] bg-[#1e1e2e] my-1" />
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-[14px] text-[#ef4444] hover:bg-[#1a1a28] transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-[#f0f0f5] p-2"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div className="sm:hidden absolute top-[64px] left-0 right-0 bg-[#111118] border-b border-[#1e1e2e] p-4 flex flex-col gap-4 shadow-xl">
            {loading ? null : !user ? (
              <button
                onClick={() => { router.push('/login'); setShowMobileMenu(false); }}
                className="w-full flex items-center justify-center gap-2 text-[14px] font-medium bg-[#5b6ef5] text-white rounded-[8px] px-[16px] py-[12px]"
              >
                Sign in
              </button>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 pb-4 border-b border-[#1e1e2e]">
                  {user.photoURL ? (
                    <Image src={user.photoURL} alt="User photo" width={40} height={40} className="rounded-full border-2 border-[#1e1e2e]" />
                  ) : (
                    <div className="w-[40px] h-[40px] rounded-full border-2 border-[#1e1e2e] bg-[#1a1a28] flex items-center justify-center text-[#f0f0f5] text-[16px]">
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>
                  )}
                  <span className="text-[15px] font-medium text-[#f0f0f5]">
                    {user.displayName || 'User'}
                  </span>
                </div>
                <button
                  onClick={() => { handleSignOut(); setShowMobileMenu(false); }}
                  className="w-full text-left px-2 py-2 text-[15px] text-[#ef4444] font-medium"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
