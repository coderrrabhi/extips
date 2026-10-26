import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Wallet, Rocket, ChevronDown, ArrowRight } from 'lucide-react';

const serif = "'Playfair Display', Georgia, serif";

export function ServiceMarquee() {
  const items = [
    'Instagram Reel Views', 'Instagram Likes', 'Instagram Followers', 'TikTok Views', 'TikTok Hearts',
    'YouTube Views', 'YouTube Subscribers', 'Telegram Members', 'Facebook Page Likes', 'Story Views', 'Comments', 'Shares',
  ];
  const row = [...items, ...items];
  return (
    <section aria-label="Popular services" className="relative py-6 overflow-hidden" style={{ borderTop: '1px solid #bae6fd' }}>
      <style>{`@keyframes ex-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.ex-marquee{animation:none!important}}`}</style>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(90deg,#e8f4fd,transparent)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(270deg,#e8f4fd,transparent)' }} />
      <div className="ex-marquee flex w-max gap-3" style={{ animation: 'ex-marquee 40s linear infinite' }}>
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium text-slate-600"
            style={{ background: 'rgba(255,255,255,0.8)', borderColor: '#bae6fd' }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: i % 3 === 0 ? '#2563eb' : i % 3 === 1 ? '#0ea5e9' : '#10b981' }} />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { Icon: UserPlus, n: '01', title: 'Create your account', body: 'Sign up free in seconds — no subscription, no credit card.' },
    { Icon: Wallet, n: '02', title: 'Add funds instantly', body: 'Top up your wallet by UPI or crypto. Credited automatically.' },
    { Icon: Rocket, n: '03', title: 'Launch & watch it grow', body: 'Paste a link, pick a service or bundle, and track every run live.' },
  ];
  return (
    <section id="how" className="relative py-24" style={{ borderTop: '1px solid #bae6fd' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-4" style={{ color: '#2563eb' }}>How it works</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
            Three steps to{' '}
            <span className="italic" style={{ fontFamily: serif, color: '#2563eb' }}>real reach.</span>
          </h2>
        </div>
        <div className="relative grid md:grid-cols-3 gap-5">
          <div aria-hidden className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px"
            style={{ background: 'repeating-linear-gradient(90deg,#93c5fd 0 8px,transparent 8px 16px)' }} />
          {steps.map(({ Icon, n, title, body }) => (
            <div key={n} className="relative rounded-3xl border p-7 text-center transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'rgba(255,255,255,0.85)', borderColor: '#bae6fd', backdropFilter: 'blur(8px)' }}>
              <div className="relative mx-auto h-24 w-24 mb-5">
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle,#dbeafe,transparent 70%)' }} />
                <div className="ex-ontint relative h-full w-full rounded-full flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 14px 30px rgba(37,99,235,0.3)' }}>
                  <Icon className="h-9 w-9" />
                </div>
                <span className="absolute -top-1 -right-1 h-8 w-8 rounded-full bg-white border text-xs font-bold flex items-center justify-center"
                  style={{ borderColor: '#93c5fd', color: '#2563eb' }}>{n}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: 'Do I need a subscription?', a: 'No. Just add funds to your wallet and pay only for what you order.' },
  { q: 'How do I add funds?', a: 'Use UPI or crypto from the Wallet page. Payments are credited to your balance automatically.' },
  { q: 'Is my account password ever needed?', a: 'Never. We only need the public link to your post or profile.' },
  { q: 'What is organic drip-feed delivery?', a: 'Your order is split into small runs spread over time, so growth looks natural instead of arriving all at once.' },
  { q: 'What if an order is not delivered?', a: 'Undelivered amounts are refunded to your wallet as described in our Refund Policy.' },
  { q: 'How can I get help?', a: 'Use the chat button at the bottom right, WhatsApp, email, or open a ticket in the Support Center.' },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24" style={{ borderTop: '1px solid #bae6fd' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-4" style={{ color: '#2563eb' }}>FAQ</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-5">
            Questions,{' '}
            <span className="italic" style={{ fontFamily: serif, color: '#2563eb' }}>answered.</span>
          </h2>
          <p className="text-slate-600 mb-6">Can't find what you need? Our team is a message away.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 font-semibold" style={{ color: '#2563eb' }}>
            Contact support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-3 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border transition-all"
                style={{ background: isOpen ? '#ffffff' : 'rgba(255,255,255,0.7)', borderColor: isOpen ? '#93c5fd' : '#bae6fd', boxShadow: isOpen ? '0 12px 30px rgba(37,99,235,0.10)' : 'none' }}>
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-semibold text-slate-800">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: '#2563eb' }} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
