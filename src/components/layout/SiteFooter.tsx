import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUp, Mail, MessageCircle, Send, ShieldCheck, Zap, Clock,
  Instagram, Youtube, Sparkles, Globe, Lock, CreditCard, Bitcoin,
} from 'lucide-react';
import logo from '@/assets/logo.jpg';

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Services & Pricing', to: '/services' },
      { label: 'New Engagement Order', to: '/engagement-order' },
      { label: 'Mass Order', to: '/mass-order' },
      { label: 'Wallet & Add Funds', to: '/wallet' },
      { label: 'API Access', to: '/api-access' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Support Center', to: '/support' },
      { label: 'Telegram Bot', to: '/telegram-bot' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Refund Policy', to: '/refund' },
      { label: 'Cookie Policy', to: '/cookies' },
      { label: 'Delivery Policy', to: '/shipping' },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="ex-footer relative mt-0 overflow-hidden text-slate-300"
      style={{ background: 'radial-gradient(1200px 500px at 15% -10%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(900px 400px at 100% 0%, rgba(14,165,233,0.25), transparent 60%), #071226' }}>
      {/* Top glow line */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #38bdf8, #2563eb, transparent)' }} />

      {/* CTA card */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16">
        <div className="relative rounded-3xl p-[1px]"
          style={{ background: 'linear-gradient(120deg, rgba(56,189,248,0.7), rgba(37,99,235,0.3), rgba(56,189,248,0.7))' }}>
          <div className="rounded-3xl px-6 sm:px-10 py-8 sm:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, rgba(10,25,55,0.95), rgba(8,20,45,0.95))' }}>
            <div>
              <p className="text-[11px] tracking-[0.24em] uppercase font-semibold mb-2 text-sky-400">Start in 60 seconds</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Grow smarter with{' '}
                <span className="italic" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#7dd3fc' }}>Extips Panel Pro</span>
              </h3>
              <p className="text-sm text-slate-400 mt-2 max-w-lg">Create a free account, add funds by UPI or crypto, and launch your first organic campaign today.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/auth"
                className="ex-ontint inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-transform active:scale-[0.98] hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 10px 30px rgba(14,165,233,0.35)' }}>
                Create free account <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/13678288027" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/15 hover:bg-white/5 transition-colors">
                <MessageCircle className="h-4 w-4" /> Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-10 grid grid-cols-2 md:grid-cols-12 gap-10">
        <div className="col-span-2 md:col-span-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Extips Panel Pro" width={40} height={40} loading="lazy"
              className="h-10 w-10 rounded-xl object-cover ring-2 ring-sky-400/40" />
            <div>
              <div className="text-white font-semibold tracking-tight">Extips Panel Pro</div>
              <div className="text-[11px] text-slate-500">Software v3.0</div>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed mt-5 max-w-sm">
            Precision-engineered organic engagement for Instagram, TikTok, YouTube and more — with multi-provider failover, a smart wallet and a live dashboard.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-emerald-300">All systems operational</span>
          </div>

          <div className="mt-6 space-y-2.5 text-sm">
            <a href="mailto:support@extipspanel.com" className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors">
              <span className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"><Mail className="h-4 w-4 text-sky-400" /></span>
              support@extipspanel.com
            </a>
            <a href="https://wa.me/13678288027" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors">
              <span className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"><MessageCircle className="h-4 w-4 text-emerald-400" /></span>
              WhatsApp support
            </a>
            <Link to="/telegram-bot" className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors">
              <span className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"><Send className="h-4 w-4 text-sky-300" /></span>
              Telegram bot
            </Link>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="md:col-span-2 lg:col-span-2 md:[&:nth-child(4)]:col-span-2">
            <h4 className="text-[11px] tracking-[0.22em] uppercase font-semibold text-white mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                    <span className="h-px w-0 bg-sky-400 transition-all group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:col-span-2">
          <h4 className="text-[11px] tracking-[0.22em] uppercase font-semibold text-white mb-4">Why us</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-amber-300" /> Instant start</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Secure wallet</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-sky-400" /> 24/7 automation</li>
            <li className="flex items-center gap-2"><Lock className="h-4 w-4 text-violet-300" /> Private & safe</li>
          </ul>
        </div>
      </div>

      {/* Payment + platforms strip */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mr-1">We accept</span>
            {[
              { Icon: CreditCard, label: 'UPI' },
              { Icon: Bitcoin, label: 'Crypto' },
              { Icon: ShieldCheck, label: 'Secure checkout' },
            ].map(({ Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                <Icon className="h-3.5 w-3.5 text-sky-300" /> {label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {[Instagram, Sparkles, Youtube, Send, Globe].map((Icon, i) => (
              <span key={i} className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400/50 transition-colors">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {year} Extips Panel Pro. All rights reserved. Not affiliated with Instagram, TikTok, YouTube or Meta.</p>
        <div className="flex items-center gap-5">
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/refund" className="hover:text-white transition-colors">Refunds</Link>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:border-sky-400/50 transition-colors">
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
