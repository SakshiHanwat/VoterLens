'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { signInWithPopup, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowDropdown(false);
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

        <div className="flex items-center">
          {!user ? (
            <button
              onClick={handleSignIn}
              className="flex items-center gap-2 text-[13px] border border-[#1e1e2e] bg-transparent text-[#9090a8] rounded-[8px] px-[16px] py-[8px] hover:border-[#5b6ef5] hover:text-[#f0f0f5] transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
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
                <div className="absolute right-0 mt-2 w-48 bg-[#111118] border border-[#1e1e2e] rounded-[8px] overflow-hidden shadow-lg">
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-3 text-[14px] text-[#9090a8] hover:bg-[#1a1a28] hover:text-[#f0f0f5] transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        </div>
      </nav>
    </>
  );
}
