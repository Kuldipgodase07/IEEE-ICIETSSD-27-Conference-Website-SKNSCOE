import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Tracks } from './Tracks';
import { Speakers } from './Speakers';
import { Publication } from './Publication';
import { Submission } from './Submission';
import { Registration } from './Registration';
import { Contact } from './Contact';
import { ArrowRight, Download, Users, Globe, BookOpen, Award, CheckCircle, ChevronRight, Zap, Leaf, Cpu, Shield, Factory, Radio, HeartPulse, Building2 } from 'lucide-react';
import { Countdown } from '../components/Countdown';

const stats = [
  { value: '300+', label: 'Expected Participants', icon: Users },
  { value: '15+', label: 'Countries', icon: Globe },
  { value: '8', label: 'Technical Tracks', icon: BookOpen },
  { value: 'IEEE', label: 'Xplore Publication', icon: Award },
  { value: '100%', label: 'Double-Blind Review', icon: Users },
];

const topics = [
  'Artificial Intelligence',
  'Smart Cities',
  'Renewable Energy',
  'IoT',
  'Industry 5.0',
  'Sustainable Technologies'
];

const importantDates = [
  { event: 'Full Paper Submission', date: '1 March 2027' },
  { event: 'Notification of Acceptance', date: '15 March 2027' },
  { event: 'Camera Ready Paper Submission', date: '1 April 2027' },
  { event: 'Early Bird Registration', date: '15 April 2027' },
  { event: 'Conference Dates', date: '10-11 June 2027' },
];

const chiefPatrons = [
  { name: 'Prof. M. N. Navale', role: 'Founder, President', org: 'Sinhgad Institutes', image: '/images/Prof-M.N.Navale.jpg' },
  { name: 'Dr. Sunanda Navale', role: 'Vice President (HR)', org: 'Sinhgad Institutes', image: '/images/DR.(MRS.)S.M.NAVALE.jpg' },
  { name: 'Dr. Rohit M. Navale', role: 'Vice President (HR)', org: 'Sinhgad Institutes', image: '/images/Rohit-Sir.jpg' },
  { name: 'Dr. Rachana Navale', role: 'Vice President (Admin)', org: 'Sinhgad Institutes', image: '/images/Mrs_Rachana_Navale.jpg' }
];

const patrons = [
  { name: 'Dr. Kailash J. Karande', role: 'Principal, SKNSCOE\nCampus Director, Sinhgad Institute, Pandharpur', org: '', image: '/images/Kailash_Karande.png' }
];

const organizingCommittee = [
  { name: 'Dr. Kailash. J. Karande', designation: 'Principal, SKNSCOE and Director, Sinhgad Institutes, Pandharpur', role: 'General Chair' },
  { name: 'Dr. S. G. Kulkarni', designation: 'Vice Principal, SKNSCOE and Director, Sinhgad Institutes, Pandharpur', role: 'Member' },
  { name: 'Dr. Kondooru Shivashanker', designation: 'H.O.D, Electrical', role: 'Member' },
  { name: 'Dr. A. O. Mulani', designation: 'H.O.D, ENTC', role: 'Member' },
  { name: 'Dr. S. S. Kulkarni', designation: 'Dean (Academic), H.O.D. (MECH)', role: 'Member' },
  { name: 'Dr. S. V. Pingale', designation: 'H.O.D, CSE', role: 'Member' },
  { name: 'Prof. N. M. Sawant', designation: 'H.O.D, AIDS', role: 'Member' },
  { name: 'Dr. S. G. Deshmukh', designation: 'Dean (Publication)', role: 'Member' },
  { name: 'Dr. C. P. Pise', designation: 'Dean (Admin)', role: 'Member' },
  { name: 'Dr. B. B. Godbole', designation: 'Dean (Research)', role: 'Member' },
  { name: 'Dr. B. S. Gandhare', designation: 'Dean (PG) and EDP', role: 'Member' },
  { name: 'Dr. S. D. Katekar', designation: 'Dean (Training and Placement)', role: 'Member' },
  { name: 'Dr. A. I. Nikam', designation: 'Dean (Student Affair), H.O.D. (GSE)', role: 'Member' },
  { name: 'Dr. Y. P. Pawar', designation: 'H.O.D, Civil', role: 'Member' },
];

export function Home() {
  const [activeCommitteeTab, setActiveCommitteeTab] = useState('organizing');
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    '/slider/DSC_0577.JPG',
    '/slider/images.jpeg',
    '/slider/institute.jpg',
    '/slider/DSC_0549.JPG',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0 bg-black">
          {sliderImages.map((src, idx) => (
            <motion.img
              key={src}
              src={src}
              alt="Campus Background Slider"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentSlide ? 0.35 : 0 }}
              transition={{ duration: 1.5 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" /> {/* Dark gradient overlay */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-16 pb-12 w-full font-sans">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#facc15] font-bold text-[18px] sm:text-[20px] md:text-[22px] mb-2 tracking-wide drop-shadow-md"
          >
            10 - 11, June 2027
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-white mb-1 leading-tight drop-shadow-lg"
          >
            1<sup>st</sup> International Conference on
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-white mb-6 leading-tight drop-shadow-lg max-w-5xl"
          >
            Innovations in Engineering Technologies and Sciences for Sustainable Development
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#facc15] text-[13px] sm:text-[14px] md:text-[15px] font-medium mb-0 drop-shadow-md"
          >
            Venue : SKN Sinhgad College of Engineering, Pandharpur, Maharashtra, India
          </motion.div>

          {/* Image Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-2 -mt-2 flex flex-col items-center justify-center"
          >
             <img 
                src="/images/ICIETSSD27.png" 
                alt="ICIETSSD '27 Logo" 
                className="h-[120px] md:h-[160px] w-auto object-contain drop-shadow-2xl"
             />
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-1.5 text-white text-[12px] font-bold mb-8 drop-shadow-md"
          >
             Conference ID : 65952
          </motion.div>

          {/* Organizers and Sponsors Row */}
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 w-full"
          >
             {/* Organizer */}
             <div className="flex flex-col items-center">
                <span className="text-white text-[12px] sm:text-[13px] font-medium mb-3 opacity-90 drop-shadow-md">
                   Jointly Organized by
                </span>
                <div className="flex items-center gap-4">
                   <div className="bg-white rounded-lg p-2 shadow-xl hover:scale-105 transition-transform cursor-default h-16 w-auto flex items-center justify-center">
                      <img src="/images/Sinhgad-Logo-5-233x300.jpg" alt="Sinhgad Logo" className="h-full w-auto object-contain" />
                   </div>
                   <div className="bg-white rounded-lg p-2 shadow-xl hover:scale-105 transition-transform cursor-default h-16 w-auto flex items-center justify-center">
                      <img src="/images/SIlogo.png" alt="SI Logo" className="h-full w-auto object-contain" />
                   </div>
                </div>
             </div>

             {/* Divider for desktop */}
             <div className="hidden sm:block w-px h-16 bg-white/20"></div>

             {/* Sponsor */}
             <div className="flex flex-col items-center">
                <span className="text-white text-[12px] sm:text-[13px] font-medium mb-3 opacity-90 drop-shadow-md">
                   Technically co-sponsored by
                </span>
                <div className="bg-white rounded-lg p-2 shadow-xl hover:scale-105 transition-transform cursor-default h-16 w-auto flex items-center justify-center">
                   <img src="/images/ieee-logo.jpeg" alt="IEEE Logo" className="h-full w-auto object-contain" />
                </div>
             </div>
          </motion.div>

        </div>
      </section>



      {/* About preview */}
      <section id="about" className="py-24 bg-section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
                About the Conference
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The International Conference on Innovations in Engineering Technologies and Sciences for Sustainable Development serves as a premier global platform for researchers, academicians, industry professionals and policymakers.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The conference promotes innovation, sustainability, engineering research and interdisciplinary collaboration to address the most pressing challenges of our time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['Sustainable Development', 'Engineering Innovation', 'Research Excellence', 'Technology Advancement', 'Global Collaboration', 'IEEE Publication'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-success" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:gap-3"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative">
                <img
                  src="/images/ICICVT.jpeg"
                  alt="About Conference ICICVT"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block p-3 px-5 rounded-2xl bg-[#003366]/80 backdrop-blur-md border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-extrabold text-white text-sm tracking-wide" style={{ fontFamily: 'var(--font-manrope)' }}>IEEE Technically Sponsored</div>
                        <div className="text-[11px] text-white/90 font-medium tracking-wider uppercase mt-0.5">IEEE Xplore Digital Library Publication</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important dates Roadmap */}
      <section id="dates" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
              Important Dates
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Mark your calendars with these key milestones from submission to the conference dates.</p>
          </div>
          
          <div className="relative border-l-4 border-[#EBF4FB] ml-6 md:ml-0 md:border-l-0 py-4">
            {importantDates.map(({ event, date }, i) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="mb-14 ml-12 md:ml-0 md:flex items-center justify-center group relative"
              >
                {/* Mobile Blue Circle */}
                <div className="absolute w-12 h-12 rounded-full bg-[#00629B] border-[3px] border-white shadow-[0_0_15px_rgba(0,98,155,0.3)] -left-[60px] md:hidden mt-0 flex items-center justify-center z-10">
                   <span className="text-white font-extrabold text-sm">{`0${i + 1}`}</span>
                </div>
                
                {/* Left Side (Event Name) */}
                <div className="md:w-[40%] md:text-right md:pr-10">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{event}</h3>
                </div>
                
                {/* Center Roadmap Line & Circle (Desktop) */}
                <div className="hidden md:flex flex-col items-center w-[20%] relative z-10">
                  <div className="w-1.5 h-[150%] bg-[#EBF4FB] absolute -z-10" style={{ top: i === 0 ? '50%' : '-50%', bottom: i === importantDates.length - 1 ? '50%' : '-50%' }} />
                  <div className="w-16 h-16 rounded-full bg-[#00629B] border-[4px] border-white shadow-[0_0_20px_rgba(0,98,155,0.3)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                     <span className="text-white font-extrabold text-xl">{`0${i + 1}`}</span>
                  </div>
                </div>
                
                {/* Right Side (Date) */}
                <div className="md:w-[40%] md:pl-10 mt-3 md:mt-0">
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-[#F0F6FB] border border-[#C7DDEF] text-[#00629B] font-bold text-lg rounded-xl shadow-sm transition-all group-hover:shadow-md group-hover:border-[#00629B]/30 group-hover:-translate-y-1">
                    {date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Registration />

      {/* Patrons Section */}
      <section id="patrons" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-wide mb-12 uppercase" style={{ fontFamily: 'var(--font-manrope)' }}>
              Chief Patrons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
              {chiefPatrons.map((patron, i) => (
                <div key={i} className="bg-white overflow-hidden w-full max-w-[280px] mx-auto border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group">
                  <div className="h-1.5 w-full bg-[#00629B] absolute top-0 left-0 z-10 group-hover:bg-[#facc15] transition-colors"></div>
                  <div className="h-64 w-full bg-slate-100 overflow-hidden relative flex-shrink-0">
                    <img src={patron.image} alt={patron.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                         onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name='+encodeURIComponent(patron.name)+'&background=00629B&color=fff&size=256' }}/>
                  </div>
                  <div className="p-6 text-center flex flex-col flex-1 bg-white">
                    <div className="mb-4">
                        <h3 className="text-[#003366] font-bold text-[16px] mb-1.5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>{patron.name}</h3>
                        <p className="text-[#00629B] text-[12px] font-semibold leading-tight">{patron.role}</p>
                    </div>
                    {patron.org && <div className="mt-auto pt-4 border-t border-slate-100"><p className="text-slate-600 text-[11px] uppercase tracking-wider font-bold">{patron.org}</p></div>}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-wide mb-12 uppercase" style={{ fontFamily: 'var(--font-manrope)' }}>
              Patrons
            </h2>
            <div className="flex justify-center flex-wrap gap-6 lg:gap-8">
              {patrons.map((patron, i) => (
                <div key={i} className="bg-white overflow-hidden w-full max-w-[280px] mx-auto border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative group">
                  <div className="h-1.5 w-full bg-[#00629B] absolute top-0 left-0 z-10 group-hover:bg-[#facc15] transition-colors"></div>
                  <div className="h-64 w-full bg-slate-100 overflow-hidden relative flex-shrink-0">
                    <img src={patron.image} alt={patron.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                         onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name='+encodeURIComponent(patron.name)+'&background=00629B&color=fff&size=256' }}/>
                  </div>
                  <div className="p-6 text-center flex flex-col flex-1 bg-white">
                    <div className="mb-4">
                        <h3 className="text-[#003366] font-bold text-[16px] mb-1.5 leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>{patron.name}</h3>
                        <p className="text-[#00629B] text-[12px] font-semibold leading-tight whitespace-pre-line">{patron.role}</p>
                    </div>
                    {patron.org && <div className="mt-auto pt-4 border-t border-slate-100"><p className="text-slate-600 text-[11px] uppercase tracking-wider font-bold">{patron.org}</p></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Committees Section */}
      <section id="committee" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-wide mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
              Organizing Committees
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-6 md:p-10">
            {/* Tabs */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 border-b border-slate-200 pb-8">
              <button
                onClick={() => setActiveCommitteeTab('organizing')}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-2 border-transparent ${activeCommitteeTab === 'organizing' ? 'bg-gradient-to-r from-[#4481eb] to-[#04befe] text-white shadow-lg rounded-md border-[#4481eb]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#4481eb] hover:text-[#4481eb] rounded-md'}`}
              >
                Organizing Committee
              </button>
              <button
                onClick={() => setActiveCommitteeTab('technical')}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-2 border-transparent ${activeCommitteeTab === 'technical' ? 'bg-gradient-to-r from-[#4481eb] to-[#04befe] text-white shadow-lg rounded-md border-[#4481eb]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#4481eb] hover:text-[#4481eb] rounded-md'}`}
              >
                Technical Committee
              </button>
              <button
                onClick={() => setActiveCommitteeTab('advisory')}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-300 border-2 border-transparent ${activeCommitteeTab === 'advisory' ? 'bg-gradient-to-r from-[#4481eb] to-[#04befe] text-white shadow-lg rounded-md border-[#4481eb]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#4481eb] hover:text-[#4481eb] rounded-md'}`}
              >
                Advisory Committee
              </button>
            </div>

            {/* Table Area */}
            <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[800px] text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-[#EBF4FB] text-[#003366] border-b-2 border-[#00629B]/20">
                    <th className="px-6 py-4 font-extrabold text-sm w-16">#</th>
                    <th className="px-6 py-4 font-extrabold text-sm">Name of Committee Member</th>
                    <th className="px-6 py-4 font-extrabold text-sm">Designation</th>
                    <th className="px-6 py-4 font-extrabold text-sm">Role in Committee</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {activeCommitteeTab === 'organizing' && organizingCommittee.map((member, idx) => (
                    <tr key={idx} className={`text-slate-700 border-b border-slate-100 hover:bg-[#F0F6FB] transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      <td className="px-6 py-4 font-bold text-[#00629B]">{idx + 1}</td>
                      <td className="px-6 py-4 font-bold text-slate-900">{member.name}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-600">{member.designation}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#00629B]">{member.role}</td>
                    </tr>
                  ))}
                  {activeCommitteeTab === 'technical' && (
                    <tr>
                      <td colSpan={4} className="px-6 py-16 text-center text-slate-500 bg-slate-50 font-medium border-b border-slate-100">
                        Technical Committee details will be updated soon.
                      </td>
                    </tr>
                  )}
                  {activeCommitteeTab === 'advisory' && (
                    <tr>
                      <td colSpan={4} className="px-6 py-16 text-center text-slate-500 bg-slate-50 font-medium border-b border-slate-100">
                        Advisory Committee details will be updated soon.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Speakers />
      <Tracks />
      <Publication />
      <Submission />
      <Contact />
    </div>
  );
}
