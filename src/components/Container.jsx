import { FaInstagram, FaTiktok } from 'react-icons/fa';

const links = [
  {
    label: 'Order via WhatsApp',
    href: 'https://wa.me/yourNumber',
    primary: true,
  },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pricelist', href: '#pricelist' },
];

const Container = () => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-[#0c0c0c] caret-transparent font-['Jost',sans-serif]">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .link-btn::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255,255,255,0.6);
          transform: scaleY(0);
          transition: transform 0.3s ease;
          transform-origin: bottom;
        }

        .link-btn:hover::before {
          transform: scaleY(1);
        }

        .link-btn:hover .arrow {
          transform: translateX(3px);
          opacity: 1;
        }
      `}</style>

      {/* Container */}
      <div
        className="w-full max-w-[420px] min-h-screen flex flex-col items-center px-7 pt-14 pb-10 relative overflow-hidden"
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center w-full flex-1">
          {/* Logo */}
          <div className="mb-5">
            <div className="w-[88px] h-[88px] rounded-full border border-white/20 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.webp"
                alt="logo"
                onError={(e) => {
                  e.currentTarget.src = '/fallback.webp';
                }}
              />
            </div>
          </div>

          {/* Name */}
          <h1
            className="mb-1.5 text-white/90 text-center"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 22,
              fontWeight: 400,
            }}
          >
            @awalmenujuselamanya.
          </h1>

          {/* Tagline */}
          <p className="mb-9 text-center text-white/40 text-xs tracking-[3px] uppercase">
            Wedding Identity Studio
          </p>

          {/* Divider */}
          <div className="w-10 h-[1px] bg-white/20 mb-8" />

          {/* Links */}
          <div className="flex flex-col gap-3 w-full mb-9">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-btn w-full flex items-center justify-between relative overflow-hidden transition-all duration-300"
                style={{
                  padding: '16px 24px',
                  fontSize: 13,
                  letterSpacing: 1.5,
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  background: item.primary
                    ? 'rgba(255,255,255,0.06)'
                    : 'rgba(255,255,255,0.02)',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                <span>{item.label}</span>
                <span className="arrow transition-all opacity-40">→</span>
              </a>
            ))}
          </div>

          {/* Social Icons (FIXED like your original style) */}
          <div className="flex gap-5 mb-2 text-white/85">
            <a
              href="https://instagram.com/awalmenujuselamanya"
              className="text-lg hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://tiktok.com/@awalmenujuselamanya"
              className="text-lg hover:scale-110 transition-all duration-300"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Footer */}
          <footer className="mt-auto pt-10 text-center">
            <p className="text-[10px] text-white/25">
              © 2026 Awal Menuju Selamanya
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Container;
