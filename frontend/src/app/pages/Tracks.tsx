import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Car, Radio, Brain, Shield, FlaskConical, Factory, Building2, ChevronDown, Users, Target } from 'lucide-react';

const tracks = [
  {
    id: 1,
    icon: Zap,
    color: '#FFC857',
    title: 'Sustainable Energy Systems and Smart Grids',
    description: 'Exploring renewable energy technologies, smart grid infrastructure, and energy management systems for a sustainable future.',
    topics: [
      'Solar and Wind Energy Systems',
      'Smart Grid Technologies',
      'Energy Storage Solutions',
      'Microgrids and Distributed Generation',
      'Energy Harvesting',
      'Power Electronics for Renewable Energy',
      'Demand Response Systems',
      'Grid Stability and Reliability',
    ],
  },
  {
    id: 2,
    icon: Car,
    color: '#00C2FF',
    title: 'Electric Mobility and Intelligent Automation',
    description: 'Advancing electric vehicles, autonomous systems, and intelligent transportation for sustainable mobility solutions.',
    topics: [
      'Electric Vehicle Technologies',
      'Autonomous Driving Systems',
      'Battery Management Systems',
      'EV Charging Infrastructure',
      'Vehicle-to-Grid (V2G) Integration',
      'Intelligent Transportation Systems',
      'Motor Drives and Control',
      'EV Power Electronics',
    ],
  },
  {
    id: 3,
    icon: Radio,
    color: '#10B981',
    title: 'Electronics, Communication and IoT Systems',
    description: 'Innovating in electronics, wireless communications, and IoT technologies to connect a sustainable world.',
    topics: [
      'Internet of Things (IoT) Applications',
      '5G and Beyond Communications',
      'VLSI Design and Embedded Systems',
      'Wireless Sensor Networks',
      'Signal Processing',
      'Antenna Design',
      'Smart Sensors and Actuators',
      'Edge Computing',
    ],
  },
  {
    id: 4,
    icon: Brain,
    color: '#A78BFA',
    title: 'Artificial Intelligence and Computing Technologies',
    description: 'Harnessing AI, machine learning, and advanced computing to solve complex engineering challenges.',
    topics: [
      'Machine Learning and Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Reinforcement Learning',
      'Federated Learning',
      'Cloud and Edge AI',
      'Explainable AI (XAI)',
      'AI for Sustainability',
    ],
  },
  {
    id: 5,
    icon: Shield,
    color: '#F87171',
    title: 'Cybersecurity and Cyber Physical Systems',
    description: 'Securing digital infrastructure and cyber-physical systems that underpin modern sustainable societies.',
    topics: [
      'Network Security',
      'Critical Infrastructure Protection',
      'IoT Security',
      'Blockchain Applications',
      'Cyber-Physical Systems Security',
      'Intrusion Detection Systems',
      'Privacy-Preserving Technologies',
      'Secure Embedded Systems',
    ],
  },
  {
    id: 6,
    icon: FlaskConical,
    color: '#34D399',
    title: 'Advanced Materials and Healthcare Technologies',
    description: 'Developing novel materials and biomedical technologies for improved health outcomes and sustainable applications.',
    topics: [
      'Nanomaterials and Nanotechnology',
      'Biomedical Engineering',
      'Wearable Health Devices',
      'Medical Imaging Technologies',
      'Smart Biomaterials',
      'Drug Delivery Systems',
      'Telemedicine and e-Health',
      'Point-of-Care Diagnostics',
    ],
  },
  {
    id: 7,
    icon: Factory,
    color: '#F59E0B',
    title: 'Smart Manufacturing and Industry 5.0',
    description: 'Transforming manufacturing through human-centric automation, digital twins, and sustainable production methods.',
    topics: [
      'Digital Twins',
      'Additive Manufacturing',
      'Industrial IoT (IIoT)',
      'Cobots and Human-Robot Collaboration',
      'Predictive Maintenance',
      'Supply Chain Optimization',
      'Circular Economy Manufacturing',
      'Quality Control Automation',
    ],
  },
  {
    id: 8,
    icon: Building2,
    color: '#60A5FA',
    title: 'Smart Cities, Environment and Sustainable Development',
    description: 'Building intelligent urban environments that optimize resources, reduce emissions, and enhance quality of life.',
    topics: [
      'Smart City Infrastructure',
      'Environmental Monitoring',
      'Water Resource Management',
      'Waste Management Technologies',
      'Green Building Technologies',
      'Urban Mobility Solutions',
      'Climate Change Mitigation',
      'Sustainable Agriculture',
    ],
  },
];

export function Tracks() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div id="tracks" className="bg-background pt-20">

      <section className="py-24 bg-section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
              Research Tracks & Sub-Themes
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Explore the diverse technical tracks and discover where your research fits best.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {tracks.map((track, i) => {
              const Icon = track.icon;
              const isOpen = expanded === track.id;
              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200"
                  style={{ borderColor: isOpen ? track.color : undefined }}
                >
                  <button
                    className="w-full text-left p-6 flex items-start gap-5"
                    onClick={() => setExpanded(isOpen ? null : track.id)}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${track.color}15`, border: `1px solid ${track.color}30` }}>
                      <Icon className="w-7 h-7" style={{ color: track.color }} />
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: track.color }}>
                            Track {track.id}
                          </span>
                          <h3 className="font-bold text-slate-900 mt-0.5 text-base sm:text-lg leading-snug" style={{ fontFamily: 'var(--font-manrope)' }}>
                            {track.title}
                          </h3>
                        </div>
                        <ChevronDown
                          className="w-6 h-6 flex-shrink-0 mt-1 transition-transform duration-300"
                          style={{ color: track.color, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      </div>
                      <p className="text-sm text-slate-500 mt-2 leading-relaxed">{track.description}</p>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                           <div className="h-px w-full bg-slate-100 mb-4" />
                          <p className="text-xs uppercase tracking-widest font-bold mb-3 text-slate-400">
                            Research Sub-Themes
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {track.topics.map((topic) => (
                              <span
                                key={topic}
                                className="text-xs px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:border-slate-300 transition-colors"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
