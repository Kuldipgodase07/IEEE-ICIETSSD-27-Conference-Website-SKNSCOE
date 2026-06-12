import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="contact" className="bg-background pt-20">
      
      <section className="py-24 bg-section-background border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Conference Secretariat
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'icietss2027@skncoe.edu.in',
                      subvalue: 'papers@icietss2027.in',
                      color: 'var(--color-primary)',
                    },
                    {
                      icon: Phone,
                      label: 'Phone / WhatsApp',
                      value: '+91 98765 43210',
                      subvalue: '+91 87654 32109',
                      color: 'var(--color-accent)',
                    },
                    {
                      icon: MapPin,
                      label: 'Address',
                      value: 'SKN Sinhgad College of Engineering',
                      subvalue: 'Pandharpur, Maharashtra 413304, India',
                      color: 'var(--color-success)',
                    },
                    {
                      icon: MessageCircle,
                      label: 'WhatsApp Group',
                      value: 'Join ICIETSS-2027 Updates',
                      subvalue: 'Click to join the announcement group',
                      color: 'var(--color-secondary)',
                    },
                  ].map(({ icon: Icon, label, value, subvalue, color }) => (
                    <div
                      key={label}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <div className="pt-0.5">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{label}</div>
                        <div className="font-bold text-slate-900 text-sm leading-snug" style={{ fontFamily: 'var(--font-manrope)' }}>{value}</div>
                        <div className="text-sm font-medium text-slate-500 mt-0.5">{subvalue}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-10">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Follow Us</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: Twitter, label: '@ICIETSS2027', color: 'var(--color-accent)' },
                      { icon: Linkedin, label: 'ICIETSS-2027', color: 'var(--color-primary)' },
                      { icon: Youtube, label: 'ICIETSS Channel', color: '#EF4444' },
                    ].map(({ icon: Icon, label, color }) => (
                      <a
                        key={label}
                        href="#"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 shadow-sm bg-white border"
                        style={{ borderColor: `${color}30`, color }}
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contacts by topic */}
                <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10 shadow-sm">
                  <p className="text-lg font-extrabold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>Contact by Topic</p>
                  <div className="space-y-3">
                    {[
                      { topic: 'Paper Submission', email: 'papers@icietss2027.in' },
                      { topic: 'Registration', email: 'registration@icietss2027.in' },
                      { topic: 'Sponsorship', email: 'sponsors@icietss2027.in' },
                      { topic: 'General Enquiry', email: 'info@icietss2027.in' },
                    ].map(({ topic, email }) => (
                      <div key={topic} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1 sm:gap-3">
                        <span className="font-bold text-slate-600">{topic}</span>
                        <span className="font-semibold text-primary">{email}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-success/10"
                    >
                      <CheckCircle className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-manrope)' }}>
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 font-medium max-w-sm">Thank you for reaching out. We'll respond to your inquiry within 24 hours.</p>
                    <button
                      className="mt-8 px-8 py-3 rounded-xl font-bold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-8" style={{ fontFamily: 'var(--font-manrope)' }}>
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Full Name <span className="text-warning">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Dr. Jane Doe"
                            className="w-full px-5 py-3.5 rounded-xl text-sm font-medium bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Email Address <span className="text-warning">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="jane@university.edu"
                            className="w-full px-5 py-3.5 rounded-xl text-sm font-medium bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-slate-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Subject <span className="text-warning">*</span>
                        </label>
                        <select
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className={`w-full px-5 py-3.5 rounded-xl text-sm font-medium bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${form.subject ? 'text-slate-900' : 'text-slate-400'}`}
                        >
                          <option value="" disabled>Select a topic...</option>
                          <option value="submission">Paper Submission</option>
                          <option value="review">Review Process</option>
                          <option value="registration">Registration</option>
                          <option value="sponsorship">Sponsorship</option>
                          <option value="venue">Venue & Travel</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Message <span className="text-warning">*</span>
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="How can we help you?"
                          className="w-full px-5 py-3.5 rounded-xl text-sm font-medium bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none placeholder-slate-400"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-primary hover:bg-secondary transition-colors"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
