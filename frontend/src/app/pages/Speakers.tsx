import { motion } from 'motion/react';
import { ExternalLink, Linkedin, BookOpen, Globe } from 'lucide-react';

const speakers = [
  {
    name: 'Prof. Rajesh Kumar',
    title: 'Professor of Electrical Engineering',
    affiliation: 'Indian Institute of Technology, Bombay',
    country: 'India 🇮🇳',
    expertise: ['Smart Grids', 'Renewable Energy', 'Power Systems'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&auto=format&face',
    bio: 'Distinguished researcher with 25+ years in power systems and smart grid technologies. Fellow of IEEE and recipient of multiple national awards.',
  },
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Associate Professor, AI & Robotics',
    affiliation: 'MIT, Cambridge, USA',
    country: 'USA 🇺🇸',
    expertise: ['Artificial Intelligence', 'Autonomous Systems', 'Machine Learning'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format',
    bio: 'Leading researcher in AI applications for autonomous systems and sustainable computing. Author of 100+ peer-reviewed publications.',
  },
  {
    name: 'Prof. Wei Chen',
    title: 'Chair, Department of Cybersecurity',
    affiliation: 'Tsinghua University, China',
    country: 'China 🇨🇳',
    expertise: ['Cybersecurity', 'IoT Security', 'Network Defense'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format',
    bio: 'Internationally recognized expert in cyber-physical systems security with extensive industry collaboration experience.',
  },
  {
    name: 'Dr. Amelia Johnson',
    title: 'Senior Research Scientist',
    affiliation: 'Stanford University, USA',
    country: 'USA 🇺🇸',
    expertise: ['Green Manufacturing', 'Industry 4.0', 'Sustainability'],
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&auto=format',
    bio: 'Pioneer in sustainable manufacturing methodologies, bridging the gap between academic research and industrial applications.',
  },
  {
    name: 'Prof. Mohammed Al-Rashid',
    title: 'Director, Smart City Research Center',
    affiliation: 'King Abdullah University, Saudi Arabia',
    country: 'Saudi Arabia 🇸🇦',
    expertise: ['Smart Cities', 'Urban IoT', 'Sustainable Infrastructure'],
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format',
    bio: 'Leading the development of smart city frameworks across the Middle East with focus on sustainable urban development.',
  },
  {
    name: 'Dr. Priya Sharma',
    title: 'Director, Advanced Materials Lab',
    affiliation: 'IISc Bangalore, India',
    country: 'India 🇮🇳',
    expertise: ['Nanomaterials', 'Energy Storage', 'Healthcare Technology'],
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&auto=format',
    bio: 'Innovator in nanomaterial synthesis for energy storage and biomedical applications with 50+ patents to her credit.',
  },
];

export function Speakers() {
  return (
    <div id="speakers" className="bg-background pt-20">
      
      <section className="py-24 bg-section-background border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-primary/10 text-primary">
              Distinguished Guests
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
              Keynote Speakers
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              World-renowned researchers and industry leaders sharing their expertise and vision at ICIETSS-2027.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, i) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-200 shadow-sm flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-72 overflow-hidden bg-slate-200">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-md bg-white/95 text-[#003366] shadow-md border border-slate-100 flex-shrink-0">
                    {speaker.country}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-extrabold text-[#003366] text-xl mb-1" style={{ fontFamily: 'var(--font-manrope)' }}>{speaker.name}</h3>
                  <p className="text-sm text-[#00629B] font-bold mb-4">{speaker.title}</p>
                  
                  <p className="text-sm font-medium text-slate-500 mb-4 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-1.5" />
                    <span className="leading-tight">{speaker.affiliation}</span>
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{speaker.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {speaker.expertise.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 font-medium border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-2 pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {[
                        { icon: Linkedin, label: 'LinkedIn' },
                        { icon: BookOpen, label: 'Scholar' },
                        { icon: Globe, label: 'Website' },
                      ].map(({ icon: Icon, label }) => (
                        <a
                          key={label}
                          href="#"
                          className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-primary transition-colors bg-slate-50 px-2 py-1.5 rounded-md border border-slate-100 hover:border-primary/20"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{label}</span>
                        </a>
                      ))}
                    </div>
                    <a href="#" className="text-sm font-bold flex items-center gap-1 text-[#00629B] hover:text-[#003366] transition-colors whitespace-nowrap ml-auto">
                      Profile <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-10 rounded-3xl bg-primary/5 border border-primary/20 shadow-sm relative overflow-hidden"
          >
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% -20%, var(--color-primary) 0%, transparent 70%)' }} />
            <h3 className="font-extrabold text-slate-900 text-2xl mb-3 relative z-10" style={{ fontFamily: 'var(--font-manrope)' }}>More Speakers to be Announced</h3>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto relative z-10">Stay tuned for additional keynote speakers and invited talk announcements. Our technical program committee is finalizing the roster of distinguished experts.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
