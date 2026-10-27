import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Mail, Send, LifeBuoy, Headphones } from 'lucide-react';

/** Public-page floating support widget (WhatsApp / Email / Telegram / Help center). */
export function FloatingSupportWidget() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: 'https://wa.me/13678288027', label: 'WhatsApp', sub: 'Fastest reply', Icon: MessageCircle, color: '#10b981', external: true },
    { href: 'mailto:support@extipspanel.com', label: 'Email us', sub: 'support@extipspanel.com', Icon: Mail, color: '#2563eb', external: true },
    { href: '/telegram-bot', label: 'Telegram bot', sub: 'Order on the go', Icon: Send, color: '#0ea5e9', external: false },
    { href: '/support', label: 'Help center', sub: 'Tickets & live chat', Icon: LifeBuoy, color: '#6366f1', external: false },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <div className={`origin-bottom-right transition-all duration-300 ${open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-3 pointer-events-none invisible h-0 overflow-hidden'}`}>
        <div className="w-[290px] rounded-3xl overflow-hidden border shadow-2xl"
          style={{ background: 'rgba(255,255,255,0.96)', borderColor: '#bae6fd', backdropFilter: 'blur(14px)', boxShadow: '0 24px 60px rgba(15,40,90,0.25)' }}>
          <div className="ex-ontint px-5 py-4 text-white" style={{ background: 'linear-gradient(135deg,#1d4ed8,#0ea5e9)' }}>
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}><Headphones className="h-4.5 w-4.5" /></span>
              <div>
                <div className="font-semibold leading-tight">Need a hand?</div>
                <div className="text-[11px] text-white/80 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" /> We usually reply in minutes
                </div>
              </div>
            </div>
          </div>
          <div className="p-2.5">
            {items.map(({ href, label, sub, Icon, color, external }) => {
              const inner = (
                <>
                  <span className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15`, color }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-800">{label}</span>
                    <span className="block text-[11px] text-slate-500 truncate">{sub}</span>
                  </span>
                </>
              );
              const cls = 'flex items-center gap-3 rounded-2xl px-3 py-2.5 hover:bg-sky-50 transition-colors';
              return external ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>{inner}</a>
              ) : (
                <Link key={label} to={href} className={cls} onClick={() => setOpen(false)}>{inner}</Link>
              );
            })}
          </div>
        </div>
      </div>

      <button type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close support' : 'Open support'} aria-expanded={open}
        className="ex-ontint pointer-events-auto relative h-14 w-14 rounded-full text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 14px 34px rgba(37,99,235,0.45)' }}>
        {!open && <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: '#38bdf8' }} />}
        {open ? <X className="h-6 w-6 relative" /> : <MessageCircle className="h-6 w-6 relative" />}
      </button>
    </div>
  );
}

export default FloatingSupportWidget;
