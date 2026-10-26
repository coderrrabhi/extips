import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import { SiteFooter } from './SiteFooter';
import { FloatingSupportWidget } from './FloatingSupportWidget';

/** Shared header + rich footer + support widget for public/legal pages. */
export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b"
      style={{ background: 'rgba(224,242,254,0.8)', borderColor: '#bae6fd' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Extips Panel Pro" width={32} height={32}
            className="h-8 w-8 rounded-md object-cover ring-1 ring-blue-300" />
          <span className="text-[15px] font-semibold tracking-tight text-slate-800">Extips Panel Pro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-500">
          <Link to="/services" className="hover:text-slate-800 transition-colors">Services</Link>
          <Link to="/about" className="hover:text-slate-800 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-slate-800 transition-colors">Contact</Link>
          <Link to="/support" className="hover:text-slate-800 transition-colors">Support</Link>
        </nav>
        <Link to="/auth"
          className="ex-ontint inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all active:scale-[0.98]"
          style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 6px 20px rgba(37,99,235,0.30)' }}>
          Get started <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}

export function PublicShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <div className="flex-1 [&>div]:!min-h-0 [&>div]:!bg-transparent">{children}</div>
      <SiteFooter />
      <FloatingSupportWidget />
    </div>
  );
}

export default PublicShell;
