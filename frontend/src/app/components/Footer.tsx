import { Link } from 'react-router';
import { Mail, Phone, MapPin, ExternalLink, Twitter, Linkedin, Youtube, Globe, BookOpen } from 'lucide-react';

const cols = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'Speakers', href: '/#speakers' },
    { label: 'Contact', href: '/#contact' },
  ],
  'Important Links': [
    { label: 'Conference Tracks', href: '/#tracks' },
    { label: 'FAQ', href: '/#faq' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-extrabold text-xl" style={{ fontFamily: 'var(--font-manrope)' }}>
                  ICIETSS-2027
                </div>
                <div className="text-xs text-accent font-semibold tracking-wide">IEEE International Conference</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              1st International Conference on Innovations in Engineering Technologies and Sciences for Sustainable Development — 10–11 June 2027.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>SKN Sinhgad College of Engineering,<br />Pandharpur, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>icietss2027@skncoe.edu.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Youtube, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-primary text-slate-400 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-white font-bold text-sm mb-5 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-sm text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-accent transition-colors flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1.5 rounded-md text-xs font-bold text-white bg-primary">
              IEEE Technically Sponsored
            </span>
            <span className="px-3 py-1.5 rounded-md text-xs font-semibold text-slate-300 flex items-center gap-1.5 bg-slate-800">
              <ExternalLink className="w-3 h-3 text-accent" />
              IEEE Xplore Publication
            </span>
          </div>
          <div className="text-xs text-slate-500 text-center flex flex-col gap-1 mt-4 sm:mt-0">
            <span>Designed and Developed by <span className="text-accent font-semibold text-[13.5px]">Mr. Kuldip Mahesh Godase</span>.</span>
            <span>© ICIETSSD'27 · SKN Sinhgad College of Engineering · All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
