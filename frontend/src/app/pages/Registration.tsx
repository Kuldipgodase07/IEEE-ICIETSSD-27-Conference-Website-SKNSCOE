import { motion } from 'motion/react';
import { CheckCircle, CreditCard, Shield, Users, AlertCircle } from 'lucide-react';

const categories = [
  {
    category: 'Industry Professionals',
    ieee: false,
    inr: '₹12,000',
    usd: '$150',
    features: ['Conference kit', 'All sessions access', 'Lunch & refreshments', 'Certificate', 'Proceedings USB'],
  },
  {
    category: 'Faculty / Academicians',
    ieee: false,
    inr: '₹10,000',
    usd: '$120',
    features: ['Conference kit', 'All sessions access', 'Lunch & refreshments', 'Certificate', 'Proceedings USB'],
  },
  {
    category: 'Faculty / Academicians (IEEE)',
    ieee: true,
    inr: '₹8,000',
    usd: '$100',
    features: ['Conference kit', 'All sessions access', 'Lunch & refreshments', 'Certificate', 'Proceedings USB', 'IEEE member discount'],
  },
  {
    category: 'Research Scholars & Students',
    ieee: false,
    inr: '₹7,000',
    usd: '$80',
    features: ['Conference kit', 'All sessions access', 'Lunch & refreshments', 'Certificate', 'Proceedings USB'],
  },
  {
    category: 'Research Scholars & Students (IEEE)',
    ieee: true,
    inr: '₹6,000',
    usd: '$70',
    features: ['Conference kit', 'All sessions access', 'Lunch & refreshments', 'Certificate'],
  },
  {
    category: 'Co-Authors / Participants',
    ieee: false,
    inr: '₹3,000',
    usd: '$40',
    features: ['Conference kit', 'All sessions access', 'Lunch & refreshments', 'Certificate'],
  },
];

const included = [
  'Conference registration kit',
  'Access to all technical sessions',
  'Keynote & invited talk access',
  'Lunch and refreshments both days',
  'Participation certificate',
  'Conference proceedings',
  'Best paper award ceremony',
  'Cultural & social events',
];

export function Registration() {
  return (
    <div id="registration" className="bg-background pt-20">
      
      {/* No early bird banner needed as per flat pricing */}

      {/* Pricing */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-primary/10 text-primary">
              Registration Fees
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>Choose Your Category</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">GST applicable as per government norms. International delegates may pay in USD.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border-2 border-[#00629B] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Card Header */}
                <div className="bg-[#00629B] text-white p-6 text-center relative flex items-center justify-center min-h-[100px]">
                    {cat.ieee && <div className="absolute top-0 right-0 bg-[#facc15] text-[#003366] text-[10px] font-bold px-3 py-1.5 rounded-bl-lg uppercase tracking-wider shadow-sm">IEEE Member</div>}
                    <h3 className="text-xl font-bold leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>{cat.category}</h3>
                </div>
                
                {/* Pricing */}
                <div className="p-6 text-center bg-[#F0F6FB] border-b border-slate-200">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#003366] mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>{cat.inr}</div>
                    <div className="text-[13px] text-slate-500 font-medium tracking-wide uppercase">International: <span className="font-bold text-[#00629B]">{cat.usd}</span></div>
                </div>
                
                {/* Features */}
                <div className="p-8 flex flex-col flex-1 bg-white">
                    <ul className="space-y-4 mb-8 flex-1">
                        {cat.features.map(f => (
                            <li key={f} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00629B]" />
                                <span className="leading-tight">{f}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all uppercase mt-auto bg-[#00629B] text-white hover:bg-[#003366] shadow-md hover:shadow-lg">
                        Register Now
                    </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
