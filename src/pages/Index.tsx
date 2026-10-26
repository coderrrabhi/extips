import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Zap, Shield, BarChart3, Wallet as WalletIcon,
  Shuffle, Activity, Check, Instagram, Youtube, MessageCircle, Globe
} from 'lucide-react';
import { PageMeta } from '@/components/seo/PageMeta';
import logo from '@/assets/logo.jpg';
import { useAuth } from '@/hooks/useAuth';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FloatingSupportWidget } from '@/components/layout/FloatingSupportWidget';
import { LandingHeader, LandingHero } from '@/components/landing/LandingHero';
import { HowItWorks, FaqSection, ServiceMarquee } from '@/components/landing/LandingExtras';

/**
 * Extips Panel Pro — Light Sky Blue v3.0 landing.
 * Clean white/sky-blue canvas, fresh modern look, dark readable text.
 */

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen w-full overflow-x-hidden antialiased"
      style={{ background: 'linear-gradient(160deg, #e0f2fe 0%, #f0f9ff 40%, #e8f4fd 70%, #dbeafe 100%)' }}>
      <PageMeta
        title="Extips Panel Pro — The Growth Engine for Social Magic"
        description="Precision-engineered organic engagement for Instagram, TikTok and YouTube. Multi-provider failover, wallet, live dashboard."
        canonicalPath="/"
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />

      {/* Soft ambient blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(56,139,253,0.18) 0%, transparent 70%)' }} />
        <div className="absolute top-[35%] right-[-8%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(125,211,252,0.2) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(96,165,250,0.15) 0%, transparent 70%)' }} />
      </div>

      <LandingHeader />

      <main>
        <LandingHero />

        <ServiceMarquee />

        {/* Features */}
        <section id="features" className="relative py-24 sm:py-32" style={{ borderTop: '1px solid #bae6fd' }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-4" style={{ color: '#2563eb' }}>
                The Software
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900">
                Engineered like infrastructure,
                <br />
                <span className="italic" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#2563eb' }}>
                  used like a product.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  Icon: Activity,
                  title: 'Organic Drip-Feed',
                  body: 'Time-spread delivery with natural variance — engagement that looks human because the schedule is.',
                },
                {
                  Icon: Shuffle,
                  title: 'Multi-Provider Failover',
                  body: 'Auto-rotation across providers with live balance monitoring. Zero balance? Backup provider takes over.',
                },
                {
                  Icon: WalletIcon,
                  title: 'Wallet & UPI Deposits',
                  body: 'Fully automatic ZapUPI top-ups. No screenshots, no approvals. Credited the second payment clears.',
                },
                {
                  Icon: BarChart3,
                  title: 'Live Dashboard',
                  body: 'Real-time runs, status, charts. Watch every dispatch tick across providers as it happens.',
                },
                {
                  Icon: Shield,
                  title: 'No Subscription Needed',
                  body: 'Just add funds to your wallet and start ordering instantly — no plans, no gates, no waiting.',
                },
                {
                  Icon: Zap,
                  title: 'Bundles & Mass Order',
                  body: 'One click ships engagement combos across multiple posts — built for creators who scale fast.',
                },
              ].map(({ Icon, title, body }) => (
                <div key={title}
                  className="group relative rounded-2xl border p-6 transition-all hover:shadow-md"
                  style={{ background: 'rgba(255,255,255,0.75)', borderColor: '#bae6fd', backdropFilter: 'blur(8px)' }}>
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <Icon className="h-5 w-5" style={{ color: '#2563eb' }} />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-slate-800">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section id="platforms" className="relative py-24" style={{ borderTop: '1px solid #bae6fd' }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-4" style={{ color: '#2563eb' }}>
                Cross-platform
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-5 text-slate-900">
                One control room for{' '}
                <span className="italic" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#2563eb' }}>
                  every channel.
                </span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 max-w-lg">
                Plug in a URL, pick a bundle, hit launch. Extips Panel Pro handles the
                routing, the dispatch, and the retries — so you don't have to babysit any of it.
              </p>
              <ul className="space-y-3">
                {[
                  'Instagram followers, likes, views & reels',
                  'TikTok views, hearts & followers',
                  'YouTube views, subs & engagement',
                  'Telegram, Facebook, X — all routed',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="h-5 w-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                      <Check className="h-3 w-3" style={{ color: '#2563eb' }} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-full blur-2xl"
                style={{ background: 'rgba(37,99,235,0.10)' }} />
              <div className="relative rounded-2xl border p-6 shadow-md"
                style={{ background: 'rgba(255,255,255,0.85)', borderColor: '#bae6fd', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-1.5 mb-5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#fca5a5' }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#fde68a' }} />
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#86efac' }} />
                  <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-slate-400">extipspanel.com</span>
                </div>
                <div className="space-y-3">
                  {[
                    { p: 'Instagram', t: 'Reel views', q: '12,500', s: 'Running' },
                    { p: 'TikTok', t: 'Hearts', q: '4,200', s: 'Queued' },
                    { p: 'YouTube', t: 'Subscribers', q: '850', s: 'Complete' },
                    { p: 'Instagram', t: 'Followers', q: '2,000', s: 'Running' },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border px-3.5 py-3"
                      style={{ background: '#f0f9ff', borderColor: '#bae6fd' }}>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-0.5">{r.p}</div>
                        <div className="text-sm font-medium text-slate-700">{r.t}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-800">{r.q}</div>
                        <div className={`text-[10px] uppercase tracking-widest font-semibold ${
                          r.s === 'Complete' ? 'text-emerald-500' : r.s === 'Queued' ? 'text-amber-500' : 'text-blue-500'
                        }`}>{r.s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <FaqSection />

        {/* CTA band */}
        <section className="relative py-24" style={{ borderTop: '1px solid #bae6fd' }}>
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-5 text-slate-900">
              Ready to ship{' '}
              <span className="italic" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#2563eb' }}>
                real growth?
              </span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8">
              Skip the panel templates. Run growth like software.
            </p>
            <Link to="/auth"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold rounded-xl text-white transition-all active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 10px 28px rgba(37,99,235,0.28)' }}>
              Launch Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingSupportWidget />
    </div>
  );
};

export default Index;
