import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Instagram, Youtube, Sparkles, MessageCircle, Globe, Zap, ShieldCheck,
  TrendingUp, Eye, Heart, UserPlus, Wallet, CheckCircle2, Menu, X,
} from 'lucide-react';
import logo from '@/assets/logo.jpg';
import { Button } from '@/components/ui/button';

const serif = "'Playfair Display', Georgia, serif";
const grad = 'linear-gradient(135deg,#2563eb,#0ea5e9)';

export function LandingHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const links = [
    { href: '#features', label: 'Features' },
    { href: '#platforms', label: 'Platforms' },
    { href: '#how', label: 'How it works' },
    { href: '#faq', label: 'FAQ' },
  ];
  return (
    <header className="sticky top-0 z-40 transition-all"
      style={{ background: scrolled ? 'rgba(240,249,255,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(14px)' : 'none', borderBottom: scrolled ? '1px solid #bae6fd' : '1px solid transparent' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="relative">
            <img src={logo} alt="Extips Panel Pro" width={34} height={34} fetchPriority="high" className="h-9 w-9 rounded-xl object-cover ring-2 ring-blue-300" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white" />
          </span>
          <span className="text-[15px] font-bold tracking-tight text-slate-800">Extips Panel <span style={{ color: '#2563eb' }}>Pro</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 rounded-full border px-1.5 py-1"
          style={{ background: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-4 py-1.5 rounded-full text-sm text-slate-600 hover:text-slate-900 hover:bg-sky-50 transition-colors">{l.label}</a>
          ))}
          <Link to="/support" className="px-4 py-1.5 rounded-full text-sm text-slate-600 hover:text-slate-900 hover:bg-sky-50 transition-colors">Support</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/auth" className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2">Sign in</Link>
          <Link to="/auth" className="ex-ontint hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full text-white active:scale-[0.98]"
            style={{ background: grad, boxShadow: '0 8px 22px rgba(37,99,235,0.35)' }}>
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button type="button" aria-label="Menu" onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 rounded-xl border flex items-center justify-center text-slate-700" style={{ borderColor: '#bae6fd', background: '#fff' }}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t px-5 pb-5 pt-3 space-y-1" style={{ borderColor: '#bae6fd', background: 'rgba(240,249,255,0.97)' }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-sky-100">{l.label}</a>
          ))}
          <Link to="/support" className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-sky-100">Support</Link>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link to="/auth" className="text-center rounded-xl border py-2.5 font-medium text-slate-700" style={{ borderColor: '#93c5fd', background: '#fff' }}>Sign in</Link>
            <Link to="/auth" className="ex-ontint text-center rounded-xl py-2.5 font-semibold text-white" style={{ background: grad }}>Get started</Link>
          </div>
        </div>
      )}
    </header>
  );
}

const engagement = [
  { Icon: Eye, label: 'Views', value: '2,500', path: 'M0 130 C40 130 45 127 70 120 S105 96 135 89 S175 70 200 48 S245 30 280 22 S315 17 340 12' },
  { Icon: Heart, label: 'Likes', value: '640', path: 'M0 130 C40 129 50 124 75 115 S110 108 140 86 S175 81 205 63 S250 50 275 34 S310 25 340 18' },
  { Icon: MessageCircle, label: 'Shares', value: '180', path: 'M0 130 C40 130 55 120 80 117 S120 108 145 97 S180 75 210 69 S255 55 280 42 S315 30 340 24' },
];

function HeroMock() {
  const [selected, setSelected] = useState(0);
  const current = engagement[selected];
  return (
    <div className="ex-growth-chart-console">
      <div className="ex-growth-chart-heading">
        <span className="ex-growth-chart-brand"><TrendingUp aria-hidden="true" size={17} /> Engagement overview</span>
        <span className="ex-growth-chart-sample">Sample order</span>
      </div>
      <div className="ex-growth-chart-link"><Globe aria-hidden="true" size={15} /><span>instagram.com/p/your-post</span><ShieldCheck aria-hidden="true" size={15} /></div>
      <div className="ex-growth-chart-routing" aria-hidden="true"><span /><ArrowRight size={15} /><span /></div>
      <div className="ex-growth-chart-tabs" role="group" aria-label="Sample engagement metric">
        {engagement.map(({ Icon, label }, i) => (
          <Button key={label} type="button" variant="ghost" aria-pressed={selected === i} onClick={() => setSelected(i)} className={`ex-growth-chart-tab ${selected === i ? 'ex-growth-chart-selected' : ''}`}>
            <Icon aria-hidden="true" size={17} /><span>{label}</span>
          </Button>
        ))}
      </div>
      <div className="ex-growth-chart-summary">
        <div><span className="ex-growth-chart-label">Scheduled {current.label.toLowerCase()}</span><strong>{current.value}<small> total</small></strong></div>
        <span className="ex-growth-chart-period">24 hour timeline</span>
      </div>
      <div className="ex-growth-chart-plot" role="img" aria-label={`Illustrative ${current.label.toLowerCase()} delivery over 24 hours, rising gradually to ${current.value}. Sample data, not live results.`}>
        <div className="ex-growth-chart-axis"><span>100%</span><span>50%</span><span>0%</span></div>
        <svg viewBox="0 0 340 144" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="ex-growth-chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" className="ex-growth-chart-fill-top" /><stop offset="100%" className="ex-growth-chart-fill-bottom" /></linearGradient></defs>
          {[12, 72, 130].map(y => <line key={y} x1="0" y1={y} x2="340" y2={y} className="ex-growth-chart-gridline" />)}
          <path key={`fill-${selected}`} d={`${current.path} L340 144 L0 144 Z`} fill="url(#ex-growth-chart-fill)" />
          <path key={selected} d={current.path} className="ex-growth-chart-line" />
        </svg>
      </div>
      <div className="ex-growth-chart-hours"><span>0h</span><span>6h</span><span>12h</span><span>18h</span><span>24h</span></div>
      <div className="ex-growth-chart-stages">
        <span><CheckCircle2 aria-hidden="true" size={15} /> Link added</span><span><CheckCircle2 aria-hidden="true" size={15} /> Scheduled</span><span><TrendingUp aria-hidden="true" size={15} /> Time-spread</span>
      </div>
      <div className="ex-growth-chart-bottom"><span><ShieldCheck aria-hidden="true" size={15} /> No account password</span><span><Zap aria-hidden="true" size={15} /> Provider failover</span></div>
    </div>
  );
}

export function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      <style>{`@keyframes ex-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.ex-float{animation:ex-float 5s ease-in-out infinite}.ex-float-slow{animation:ex-float 7s ease-in-out infinite}@keyframes ex-shine{to{background-position:200% center}}.ex-shine{background-size:200% auto;animation:ex-shine 6s linear infinite}@media (prefers-reduced-motion:reduce){.ex-float,.ex-float-slow,.ex-shine{animation:none!important}}`}</style>
      <div aria-hidden className="absolute inset-0 -z-10 opacity-60"
        style={{ backgroundImage: 'linear-gradient(#bae6fd55 1px, transparent 1px), linear-gradient(90deg, #bae6fd55 1px, transparent 1px)', backgroundSize: '44px 44px', maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-20 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border pl-1 pr-3 py-1 mb-7" style={{ borderColor: '#93c5fd', background: 'rgba(255,255,255,0.8)' }}>
            <span className="ex-ontint rounded-full px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase" style={{ background: grad }}>New</span>
            <span className="text-xs font-semibold text-slate-600">Software v3.0 · multi-provider engine</span>
          </div>

          <h1 className="text-[44px] sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.02] text-slate-900 mb-6" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            The Growth Engine for Social{' '}
            <span className="ex-shine italic font-bold bg-clip-text text-transparent"
              style={{ fontFamily: serif, backgroundImage: 'linear-gradient(90deg,#1d4ed8,#0ea5e9,#6366f1,#1d4ed8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Magic
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Organic engagement for Instagram, TikTok and YouTube — time-spread delivery, automatic provider failover, an instant wallet and a live dashboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
            <Link to="/auth" className="ex-ontint w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-2xl text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ background: grad, boxShadow: '0 14px 34px rgba(37,99,235,0.35)' }}>
              Launch Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/wallet" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-2xl text-slate-700 border hover:border-blue-400 transition-colors"
              style={{ background: 'rgba(255,255,255,0.85)', borderColor: '#93c5fd' }}>
              <Wallet className="h-4 w-4" style={{ color: '#2563eb' }} /> Add funds
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-500" /> No password needed</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-amber-500" /> Instant start</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" style={{ color: '#2563eb' }} /> No subscription</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <HeroMock />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-14">
        <div className="rounded-3xl border px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{ background: 'rgba(255,255,255,0.7)', borderColor: '#bae6fd', backdropFilter: 'blur(8px)' }}>
          <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-slate-500">Built for the platforms that matter</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { Icon: Instagram, label: 'Instagram', c: '#e1306c' },
              { Icon: Sparkles, label: 'TikTok', c: '#0f172a' },
              { Icon: Youtube, label: 'YouTube', c: '#ef4444' },
              { Icon: MessageCircle, label: 'Telegram', c: '#0ea5e9' },
              { Icon: Globe, label: 'Facebook', c: '#2563eb' },
            ].map(({ Icon, label, c }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold text-slate-700 hover:-translate-y-0.5 transition-transform"
                style={{ background: '#fff', borderColor: '#e0f2fe' }}>
                <Icon className="h-4 w-4" style={{ color: c }} /> {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
