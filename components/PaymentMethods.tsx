
import React from 'react';

const PayPalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 21H4a1 1 0 0 1-1-1.1L5.5 3.6A1 1 0 0 1 6.5 3H13c2.5 0 4.5 1.5 4.5 4 0 3.5-3 5-5.5 5H9.5L8.5 18H7z"/>
    <path d="M10 3h4c2.5 0 4.5 1.5 4.5 4 0 3.5-2.5 5-5 5"/>
  </svg>
);

const VisaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <path d="M2 10h20"/>
    <path d="M7 15h2"/>
    <path d="M12 15h4"/>
  </svg>
);

const MastercardIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="12" r="6"/>
    <circle cx="15" cy="12" r="6"/>
  </svg>
);

const IdealIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <circle cx="12" cy="9" r="3"/>
    <path d="M9 14h6v4H9z"/>
  </svg>
);

const BankTransferIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/>
    <path d="M3 10h18"/>
    <path d="M12 3l9 7H3l9-7z"/>
    <path d="M5 10v8"/>
    <path d="M9 10v8"/>
    <path d="M15 10v8"/>
    <path d="M19 10v8"/>
  </svg>
);

const KlarnaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4v16"/>
    <path d="M14 4c0 3.5-1.5 6.8-4 9l5.5 7"/>
    <circle cx="18" cy="18" r="2"/>
  </svg>
);

const DEVICES = [
  {
    name: 'Smart TV',
    desc: 'Samsung · LG · Sony',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    name: 'Fire Stick',
    desc: 'Amazon Fire TV',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 4-2.5 7.5-6 9.3"/>
        <path d="M12 2a10 10 0 0 0-10 10c0 4 2.5 7.5 6 9.3"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    name: 'Apple TV',
    desc: 'tvOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3C8 3 5 6 5 9c0 2 1 3.5 2.5 4.5L6 21h12l-1.5-7.5C18 12.5 19 11 19 9c0-3-3-6-7-6z"/>
      </svg>
    ),
  },
  {
    name: 'Android TV',
    desc: 'Android Box',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18L4 6h16l-2 12H6z"/>
        <path d="M9 6V4M15 6V4"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'iPhone & iPad',
    desc: 'iOS · iPadOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Android',
    desc: 'Telefon & Tablet',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="4" width="10" height="16" rx="2"/>
        <path d="M5 8h-.5A1.5 1.5 0 0 0 3 9.5v3A1.5 1.5 0 0 0 4.5 14H5M19 8h.5A1.5 1.5 0 0 1 21 9.5v3a1.5 1.5 0 0 1-1.5 1.5H19"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'PC & Mac',
    desc: 'Windows · macOS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="13" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    name: 'MAG Box',
    desc: 'IPTV Set-top Box',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="10" rx="2"/>
        <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
        <circle cx="12" cy="13" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Formuler',
    desc: 'Z8 · Z10 · CC · GO',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="11" rx="2"/>
        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
        <path d="M8 12h2M12 12h2M8 15h2M12 15h2"/>
        <circle cx="18" cy="18" r="0" fill="currentColor"/>
      </svg>
    ),
  },
];

const PAYMENT_METHODS = [
  { name: 'PayPal', icon: <PayPalIcon /> },
  { name: 'Visa', icon: <VisaIcon /> },
  { name: 'Mastercard', icon: <MastercardIcon /> },
  { name: 'iDEAL', icon: <IdealIcon /> },
  { name: 'Banküberweisung', icon: <BankTransferIcon /> },
  { name: 'Klarna', icon: <KlarnaIcon /> },
];

export const PaymentMethods: React.FC = () => {
  return (
    <section id="payment-methods" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Zahlungsmethoden
        </div>
        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-12" style={{ color: '#111111' }}>
          Bezahle wie du möchtest
        </h2>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method.name}
              className="glass-card rounded-[28px] py-6 flex flex-col items-center gap-4 hover:bg-white transition-all duration-500 group cursor-default aspect-square max-h-[160px]"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl flex-shrink-0" style={{ backgroundColor: '#1C1C1C' }}>
                {method.icon}
              </div>
              <span className="text-xs font-bold tracking-tight text-center" style={{ color: '#111111' }}>{method.name}</span>
            </div>
          ))}
        </div>

        {/* Compatible Devices */}
        <div className="mt-20">
          <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Kompatible Geräte
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-12" style={{ color: '#111111' }}>
            Funktioniert auf all deinen Geräten
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {DEVICES.map((device) => (
              <div
                key={device.name}
                className="glass-card rounded-[28px] p-5 flex flex-col items-center gap-3 hover:bg-white transition-all duration-500 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl flex-shrink-0" style={{ backgroundColor: '#111111' }}>
                  {device.icon}
                </div>
                <div className="text-center">
                  <div className="text-xs font-black tracking-tight" style={{ color: '#111111' }}>{device.name}</div>
                  <div className="text-[10px] font-medium mt-0.5" style={{ color: 'rgba(17,17,17,0.5)' }}>{device.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compatible Apps */}
        <div className="mt-20">
          <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Kompatible Apps
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-12" style={{ color: '#111111' }}>
            Nutze deine Lieblingsapp
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {([
              {
                name: 'IPTV Smarters Pro', desc: 'iOS · Android · Smart TV', bg: '#7C3AED',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5,3 19,12 5,21" fill="white" stroke="none"/><path d="M19 3l2 2-2 2M19 17l2 2-2 2" stroke="white" strokeWidth="1.5"/></svg>,
              },
              {
                name: 'IPTV Smarters', desc: 'iOS · Android · Smart TV', bg: '#2563EB',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="13" rx="2" stroke="white"/><polygon points="10,9 16,12 10,15" fill="white" stroke="none"/></svg>,
              },
              {
                name: 'TiviMate', desc: 'Android TV · Fire Stick', bg: '#059669',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2" stroke="white"/><path d="M8 21h8M12 17v4"/><path d="M8 11l3 3 5-5" stroke="white" strokeWidth="2.5"/></svg>,
              },
              {
                name: 'SE Smart IPTV', desc: 'iOS · Android · macOS', bg: '#D97706',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4.5 13H11L10 22l8.5-11H13L13 2z" fill="white" stroke="none"/></svg>,
              },
              {
                name: 'Smart IPTV', desc: 'Samsung · LG Smart TV', bg: '#DC2626',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="13" rx="2" stroke="white"/><path d="M8 21h8M12 17v4"/><path d="M8.5 10a5 5 0 0 1 7 0M6 7.5a9 9 0 0 1 12 0" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="13" r="1.5" fill="white" stroke="none"/></svg>,
              },
              {
                name: 'VLC', desc: 'Windows · Mac · Linux', bg: '#F97316',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><path d="M12 3L21 19H3L12 3z" fill="white"/><path d="M9 13h6M8 16.5h8" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 3L21 19H3L12 3z" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5"/></svg>,
              },
              {
                name: 'Kodi', desc: 'Alle Plattformen', bg: '#0EA5E9',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 5v14M6 12l6-7M6 12l6 7"/><circle cx="18" cy="18" r="2.5" fill="white" stroke="none"/></svg>,
              },
              {
                name: 'IBO Player Pro', desc: 'iOS · Android · Smart TV', bg: '#4F46E5',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" stroke="white"/><polygon points="10,8 17,12 10,16" fill="white" stroke="none"/></svg>,
              },
              {
                name: 'Hot Player', desc: 'Android · Smart TV', bg: '#EF4444',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none"><path d="M12 2C12 2 7 7 7 12.5a5 5 0 0 0 10 0C17 10 16 8 14.5 6.5 14 8.5 13 9.5 12 9.5 12 7 12 2 12 2z" fill="white"/><path d="M10 17.5a2 2 0 0 0 4 0" stroke="white" strokeWidth="1.5" fill="none"/></svg>,
              },
              {
                name: 'BOB Player', desc: 'Android · Smart TV', bg: '#0891B2',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h5.5a3.5 3.5 0 0 1 0 7H6zM6 11h6a3.5 3.5 0 0 1 0 7H6z" stroke="white" fill="none"/></svg>,
              },
              {
                name: 'TV Online', desc: 'Android · Smart TV', bg: '#7C3AED',
                icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="13" rx="2" stroke="white"/><path d="M8 22h8M12 19v3"/><path d="M8.5 3.5L12 7l3.5-3.5" stroke="white" strokeWidth="1.5"/></svg>,
              },
            ] as { name: string; desc: string; bg: string; icon: React.ReactNode }[]).map((app) => (
              <div
                key={app.name}
                className="glass-card rounded-3xl p-6 flex flex-col items-center gap-3 hover:bg-white transition-all duration-500 group cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl flex-shrink-0"
                  style={{ backgroundColor: app.bg }}
                >
                  {app.icon}
                </div>
                <div className="text-center">
                  <div className="text-xs font-black tracking-tight leading-tight" style={{ color: '#111111' }}>{app.name}</div>
                  <div className="text-[10px] font-medium mt-1" style={{ color: 'rgba(17,17,17,0.5)' }}>{app.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
