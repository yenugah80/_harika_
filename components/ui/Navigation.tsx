'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
]

const ease = [0.25, 0.4, 0.25, 1]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={false}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-4' : 'py-6'
        )}
      >
        {/* Background blur */}
        <motion.div
          className={cn(
            'absolute inset-0 -z-10 border-b',
            isHome ? 'border-[#230a2f]/10' : 'border-white/[0.04]'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHome ? 1 : isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: isHome ? 'rgba(247, 238, 252, 0.9)' : 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(16px)',
          }}
        />

        <nav className="container mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'relative text-base font-medium tracking-normal transition-colors duration-300',
                isHome ? 'text-[#230a2f] hover:text-[#602ba8]' : 'text-white/90 hover:text-white'
              )}
            >
              <span className="relative z-10">Harika Y.</span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <nav
                className={cn(
                  'flex items-center gap-1 p-1 rounded-full border',
                  isHome
                    ? 'bg-[#fff8fd]/72 border-[#230a2f]/15 shadow-[0_12px_30px_rgba(35,10,47,0.08)]'
                    : 'bg-white/[0.03] border-white/[0.06]'
                )}
              >
                {navLinks.map((link) => {
                  const active = isActive(link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
                    >
                      {/* Active background */}
                      {active && (
                        <motion.div
                          layoutId="activeNavPill"
                          className={cn(
                            'absolute inset-0 rounded-full',
                            isHome ? 'bg-[#230a2f] shadow-[0_8px_20px_rgba(35,10,47,0.14)]' : 'bg-white/[0.08]'
                          )}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      )}
                      <span
                        className={cn(
                          'relative z-10 transition-colors duration-200',
                          isHome
                            ? active
                              ? 'text-[#fff8fd]'
                              : 'text-[#6c5775] hover:text-[#230a2f]'
                            : active
                              ? 'text-white'
                              : 'text-white/50 hover:text-white/80'
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Right side - Subscribe link */}
            <Link
              href="/subscribe"
              className={cn(
                'hidden md:block text-sm font-medium transition-colors duration-200',
                isHome ? 'text-[#6c5775] hover:text-[#230a2f]' : 'text-white/50 hover:text-white'
              )}
            >
              Subscribe
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'md:hidden p-2 -mr-2 rounded-lg transition-colors',
                isHome
                  ? 'text-[#230a2f]/70 hover:text-[#230a2f] hover:bg-[#230a2f]/5'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
              )}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="relative flex flex-col items-center justify-center h-full"
            >
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.05, duration: 0.3, ease }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-2xl font-medium tracking-tight transition-colors duration-200',
                        isActive(link.href)
                          ? 'text-white'
                          : 'text-white/40 hover:text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="w-12 h-px bg-white/10 my-4"
                />

                {/* Subscribe */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.3, duration: 0.3, ease }}
                >
                  <Link
                    href="/subscribe"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-white/40 hover:text-white transition-colors duration-200"
                  >
                    Subscribe
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
