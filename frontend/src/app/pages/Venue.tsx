import { motion } from 'motion/react';
import { MapPin, Train, Plane, Bus, Hotel, Navigation, ExternalLink } from 'lucide-react';

const hotels = [
  { name: 'Hotel Vitthal International', dist: '0.5 km', price: '₹1,200/night', stars: 3 },
  { name: 'Pandharpur Guest House', dist: '1 km', price: '₹800/night', stars: 2 },
  { name: 'Maharaja Hotel', dist: '2 km', price: '₹1,800/night', stars: 3 },
  { name: 'Hotel Solapur Residency', dist: '45 km', price: '₹2,500/night', stars: 4 },
];

const travel = [
  {
    icon: Plane,
    title: 'By Air',
    color: '#00629B',
    details: [
      'Nearest airport: Solapur Airport (SOA) — 45 km',
      'Pune Airport (PNQ) — 200 km',
      'Pre-booked cab available from both airports',
    ],
  },
  {
    icon: Train,
    title: 'By Train',
    color: '#00C2FF',
    details: [
      'Pandharpur Railway Station — 3 km from venue',
      'Direct trains from Pune, Mumbai, Hyderabad',
      'Solapur Junction — 45 km (better connectivity)',
    ],
  },
  {
    icon: Bus,
    title: 'By Road / Bus',
    color: '#10B981',
    details: [
      'MSRTC buses from Pune (4 hrs), Mumbai (7 hrs)',
      'Solapur–Pandharpur highway well connected',
      'Shuttle service from Pandharpur bus stand to venue',
    ],
  },
];

export function Venue() {
  return (
    <div id="venue" className="bg-background pt-20">
      
      {/* Map placeholder + venue info */}
      <section className="py-24 bg-section-background border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-primary/10 text-primary">
                Venue Details
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
                SKN Sinhgad College of Engineering
              </h2>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mt-2">
                  Pandharpur – Solapur Road, Pandharpur, Solapur District, Maharashtra – 413304, India
                </p>
              </div>
              <div className="space-y-4 mb-10">
                {[
                  { label: 'Conference Hall', value: 'SKN Auditorium (Capacity: 1000)' },
                  { label: 'Technical Sessions', value: 'Engineering Blocks (8 seminar halls)' },
                  { label: 'Registration Desk', value: 'Main Entrance Lobby' },
                  { label: 'Exhibition Area', value: 'Central Courtyard' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <Navigation className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-1">{label}</span>
                      <span className="text-sm font-bold text-slate-800">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://maps.google.com/?q=Pandharpur+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-primary hover:bg-secondary transition-colors"
              >
                Open in Google Maps <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32">
              {/* Map embed placeholder */}
              <div
                className="w-full h-96 sm:h-[500px] rounded-3xl overflow-hidden relative shadow-lg border border-slate-200 bg-slate-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&auto=format"
                  alt="Campus aerial view"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-primary border-4 border-white shadow-xl"
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-white">
                    <p className="text-slate-900 font-extrabold text-lg" style={{ fontFamily: 'var(--font-manrope)' }}>Pandharpur, Maharashtra</p>
                    <p className="text-primary font-medium text-sm">17.6833° N, 75.3333° E</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel guide */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-accent/10 text-accent">
              Getting There
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground" style={{ fontFamily: 'var(--font-manrope)' }}>Travel Information</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {travel.map(({ icon: Icon, title, color, details }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white border border-slate-100 shadow-sm">
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <h3 className="text-slate-900 font-extrabold mb-5 text-xl" style={{ fontFamily: 'var(--font-manrope)' }}>{title}</h3>
                <ul className="space-y-4">
                  {details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="py-24 bg-section-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-primary/10 text-primary">
              Accommodation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground" style={{ fontFamily: 'var(--font-manrope)' }}>Nearby Hotels</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {hotels.map(({ name, dist, price, stars }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-primary/5 border border-primary/10">
                    <Hotel className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: 'var(--font-manrope)' }}>{name}</div>
                    <div className="text-xs font-semibold text-slate-500 flex items-center gap-2">
                      <span>{dist} from venue</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-warning">{'⭐'.repeat(stars)}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-lg text-primary">{price}</div>
                  <a href="#" className="text-sm font-bold text-accent hover:text-primary transition-colors">Book now</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
