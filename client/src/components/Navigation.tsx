import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { fetchData, NavigationData } from '@/lib/data';
import { resolveImagePath } from '@/lib/utils';

export function Navigation() {
  const [navData, setNavData] = useState<NavigationData | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    fetchData<NavigationData>('navigation.json').then(setNavData);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!navData) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3" data-testid="nav-logo">
          <img src={resolveImagePath('/favicon.png')} alt="LGC Logo" className="w-10 h-10 rounded-lg object-cover" />
          <span className="font-display text-xl font-bold text-gradient">LGC</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navData.items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`nav-link-${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-foreground"
          data-testid="nav-mobile-toggle"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navData.items.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  data-testid={`nav-mobile-link-${item.id}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}