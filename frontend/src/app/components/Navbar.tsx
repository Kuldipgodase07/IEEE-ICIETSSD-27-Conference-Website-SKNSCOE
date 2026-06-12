import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import {
  Menu, X, ChevronDown, MapPin, Calendar, Mail,
  Info, Building2, FileText, BookOpen, Plane,
  CalendarDays, HelpCircle, ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ChildItem = {
  label: string;
  href: string;
  desc: string;
  Icon: React.ElementType;
};

type NavItem = {
  label: string;
  href?: string;
  children?: ChildItem[];
};

const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'About Conference', href: '/#about',       desc: 'Scope, objectives & conference overview',    Icon: Info       },
      { label: 'About Institute',  href: 'https://www.sknscoe.ac.in/About-us.php', desc: 'SKN Sinhgad College of Engineering, Pandharpur', Icon: Building2  },
    ],
  },
  { label: 'Schedule',          href: '/#dates' },
  { label: 'Registration',      href: '/#registration' },
  { label: 'Patrons',           href: '/#patrons' },
  { label: 'Committees',        href: '/#committee' },
  { label: 'Speakers',          href: '/#speakers' },
  { label: 'Conference Tracks', href: '/#tracks' },
  { label: 'Publication',       href: '/#publication' },
  { label: 'Paper Submission',  href: '/#submission' },
  { label: 'Contact',           href: '/#contact' },
];

/* ─── Professional IEEE-style Dropdown ─────────────────────────────────── */
function DropdownMenu({
  label,
  items,
  isOpen,
}: {
  label: string;
  items: ChildItem[];
  isOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.14, ease: 'easeOut' }}
          className="absolute top-full left-0 mt-0 z-50"
          style={{ minWidth: 290 }}
        >
          {/* caret */}
          <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45" />

          <div
            className="relative bg-white overflow-hidden"
            style={{
              borderRadius: 4,
              border: '1px solid #d1d5db',
              boxShadow: '0 8px 30px rgba(0,0,0,0.11), 0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            {/* Header strip — IEEE blue bar + section label */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{
                background: 'linear-gradient(90deg, #00629B 0%, #0A4D8C 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <div className="w-0.5 h-3.5 rounded-full bg-white/60" />
              <span
                className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/90"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                {label}
              </span>
            </div>

            {/* Items */}
            <div className="py-1">
              {items.map((item, idx) => (
                <a
                  key={item.href + item.label}
                  href={item.href}
                  className="group flex items-start gap-3.5 px-4 py-3.5 transition-colors hover:bg-[#F0F6FB] border-b border-slate-50 last:border-0"
                >
                  {/* Icon box */}
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover:bg-primary"
                    style={{ background: '#EBF4FB', border: '1px solid #C7DDEF' }}
                  >
                    <item.Icon
                      className="w-4 h-4 transition-colors group-hover:text-white"
                      style={{ color: '#00629B' }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[13px] font-bold text-slate-800 group-hover:text-primary transition-colors leading-tight"
                      style={{ fontFamily: 'var(--font-manrope)' }}
                    >
                      {item.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug font-medium">
                      {item.desc}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    className="w-3.5 h-3.5 text-slate-300 group-hover:text-primary mt-1.5 transition-all group-hover:translate-x-0.5 flex-shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Footer bar */}
            <div
              className="h-[3px] w-full"
              style={{ background: 'linear-gradient(90deg, #00629B 0%, #00C2FF 100%)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Navbar ────────────────────────────────────────────────────────────── */
export function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [openDropdown, setOpenDropdown]     = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location  = useLocation();
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [location.pathname, location.hash]);

  const enter = (label: string) => { if (timerRef.current) clearTimeout(timerRef.current); setOpenDropdown(label); };
  const leave = ()              => { timerRef.current = setTimeout(() => setOpenDropdown(null), 180); };

  const isActive = (item: NavItem) => {
    const currentPath = location.pathname;
    const currentHash = location.hash;
    const fullCurrent = currentPath + currentHash;
    
    return item.href ? fullCurrent === item.href
                     : (item.children?.some(c => fullCurrent === c.href) ?? false);
  };

  return (
    <header className="w-full z-50 sticky top-0">

      {/* ── Top Info Bar ─────────────────────────────────────────────────── */}
      <div className="hidden lg:block" style={{ background: '#0A192F', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5 text-[11px] text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-accent" />
              10–11 June 2027
            </span>
            <span className="w-px h-3 bg-slate-700" />
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-accent" />
              SKN Sinhgad CoE, Pandharpur, Maharashtra
            </span>
            <span className="w-px h-3 bg-slate-700" />
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-accent" />
              icietss2027@skncoe.edu.in
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400 font-semibold">
            <span
              className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest"
              style={{ background: 'rgba(0,194,255,0.1)', color: '#00C2FF', border: '1px solid rgba(0,194,255,0.22)' }}
            >
              IEEE Technically Sponsored
            </span>
            <a href="/submission"   className="hover:text-white transition-colors">Submit Paper</a>
            <span className="text-slate-700">|</span>
            <a href="/registration" className="hover:text-white transition-colors">Register</a>
          </div>
        </div>
      </div>

      {/* ── Main Nav Bar ─────────────────────────────────────────────────── */}
      <nav
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[60px]">

            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0 mr-4 group relative z-10">
               <img 
                 src="/images/ICIETSSD-Nav-Logo.png" 
                 alt="ICIETSS-2027 Logo" 
                 className="h-[60px] sm:h-[80px] w-auto object-contain -ml-1 -my-2 transition-transform group-hover:scale-[1.02] origin-left" 
               />
            </a>

            {/* ── Desktop Links ── */}
            <div className="hidden 2xl:flex items-stretch h-[60px] flex-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative flex items-stretch"
                  onMouseEnter={() => link.children && enter(link.label)}
                  onMouseLeave={() => link.children && leave()}
                >
                  {link.href ? (
                    <a href={link.href}
                      className="relative flex items-center px-3 text-[14px] font-semibold whitespace-nowrap transition-colors"
                      style={{ color: isActive(link) ? '#00629B' : '#374151' }}
                    >
                      <span className="relative hover:text-primary transition-colors py-1">
                        {link.label}
                        {isActive(link) && (
                          <motion.span
                            layoutId="navUnderline"
                            className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full"
                            style={{ background: 'linear-gradient(90deg,#00629B,#00C2FF)' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                      </span>
                    </a>
                  ) : (
                    <>
                      <button
                        className="relative flex items-center gap-1 px-3 text-[14px] font-semibold whitespace-nowrap transition-colors group"
                        style={{ color: isActive(link) ? '#00629B' : '#374151' }}
                      >
                        <span className="relative group-hover:text-primary transition-colors py-1">
                          {link.label}
                          {isActive(link) && (
                            <motion.span
                              layoutId="navUnderline"
                              className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full"
                              style={{ background: 'linear-gradient(90deg,#00629B,#00C2FF)' }}
                              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                            />
                          )}
                        </span>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 group-hover:text-primary ${openDropdown === link.label ? 'rotate-180 text-primary' : 'text-slate-400'}`}
                        />
                      </button>
                      <DropdownMenu label={link.label} items={link.children!} isOpen={openDropdown === link.label} />
                    </>
                  )}
                </div>
              ))}
            </div>



            {/* Hamburger */}
            <button
              className="2xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded ml-auto transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen
                  ? <motion.div key="x"    initial={{ rotate:-90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:90, opacity:0 }} transition={{ duration:0.13 }}><X    className="w-5 h-5" /></motion.div>
                  : <motion.div key="menu" initial={{ rotate: 90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:-90,opacity:0 }} transition={{ duration:0.13 }}><Menu className="w-5 h-5" /></motion.div>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity:0, height:0 }}
              animate={{ opacity:1, height:'auto' }}
              exit={{ opacity:0, height:0 }}
              transition={{ duration:0.22, ease:[0.16,1,0.3,1] }}
              className="2xl:hidden overflow-hidden bg-white border-t border-slate-100"
              style={{ boxShadow:'0 12px 32px rgba(0,0,0,0.1)' }}
            >
              <div className="px-4 py-3 space-y-0.5 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.href ? (
                      <a href={link.href}
                        className="flex items-center px-4 py-2.5 text-[13px] font-semibold rounded transition-colors"
                        style={{ color: isActive(link) ? '#00629B' : '#374151', background: isActive(link) ? '#EBF4FB' : 'transparent' }}
                      >
                        {isActive(link) && <span className="w-1 h-4 rounded-full bg-primary mr-3 flex-shrink-0" />}
                        {link.label}
                      </a>
                    ) : (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-[13px] font-semibold rounded text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                        >
                          {link.label}
                          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180 text-primary' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.label && (
                            <motion.div
                              initial={{ height:0, opacity:0 }}
                              animate={{ height:'auto', opacity:1 }}
                              exit={{ height:0, opacity:0 }}
                              transition={{ duration:0.18 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 pl-3 border-l-2 border-primary/25 my-1 space-y-0.5">
                                {link.children!.map((child) => (
                                  <a
                                    key={child.href + child.label}
                                    href={child.href}
                                    className="flex items-center gap-3 px-3 py-2.5 text-[12px] rounded transition-colors hover:bg-[#EBF4FB] text-slate-600 hover:text-primary group"
                                  >
                                    <div className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0 bg-slate-100 group-hover:bg-primary/10 transition-colors">
                                      <child.Icon className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <div>
                                      <div className="font-bold text-[12px] leading-tight">{child.label}</div>
                                      <div className="text-[10.5px] text-slate-400 leading-snug mt-0.5">{child.desc}</div>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
                <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 pb-2">
                  <a href="/submission"   className="flex justify-center py-2.5 text-[12px] font-bold text-white rounded" style={{ background:'linear-gradient(135deg,#00629B,#0A4D8C)' }}>Submit Paper</a>
                  <a href="/registration" className="flex justify-center py-2.5 text-[12px] font-bold text-primary rounded border-2 border-primary/25 bg-primary/5">Register Now</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
