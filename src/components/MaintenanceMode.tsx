import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, Cpu, ArrowRight, Lock, Sparkles } from 'lucide-react';
import logo from '@/assets/logo.jpg';
import { useAuth } from '@/hooks/useAuth';

export const MaintenanceMode = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-hidden antialiased"
      style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)' }}>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Card */}
      <div className="max-w-xl w-full text-center relative z-10 p-8 sm:p-12 rounded-3xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
        
        {/* Logo & Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={logo} alt="Extips Panel Pro" className="h-10 w-10 rounded-xl ring-2 ring-blue-500/40 shadow-lg" />
          <span className="text-xl font-bold text-white tracking-tight">Extips Panel Pro</span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
            Maintenance
          </span>
        </div>

        {/* Icon Animation */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping duration-1000" />
          <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center shadow-xl shadow-blue-500/20 ring-1 ring-white/20">
            <Wrench className="h-10 w-10 text-white animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          System Maintenance
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
            Underway
          </span>
        </h1>

        {/* Message */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          Extips Panel Pro is currently undergoing scheduled system upgrades to bring you enhanced performance and speed. All user features will resume automatically shortly.
        </p>

        {/* Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-800/40 flex items-center gap-3">
            <Cpu className="h-5 w-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">System Upgrade</div>
              <div className="text-[11px] text-slate-400">Server Optimization</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-800/40 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">Data Safe</div>
              <div className="text-[11px] text-slate-400">100% Secured</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-800/40 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-sky-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">Auto Resume</div>
              <div className="text-[11px] text-slate-400">Live Soon</div>
            </div>
          </div>
        </div>

        {/* Action Button for Admin */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            Status: <span className="text-emerald-400 font-medium">Upgrading Database</span>
          </span>

          {user?.role === 'admin' ? (
            <Link to="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
              Go to Admin Panel <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <Link to="/auth"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
              <Lock className="h-3.5 w-3.5" /> Admin Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
