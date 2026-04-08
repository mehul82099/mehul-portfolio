export default function Footer() {
    return (
      <section className="relative py-32 bg-[#121212] overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-600/10 blur-[100px] pointer-events-none rounded-full" />
  
        <div className="container mx-auto px-6 z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-12" style={{ fontFamily: 'Syne, sans-serif' }}>
            LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">BUILD.</span>
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto font-light">
            Looking to automate complex workflows or architect a robust full-stack system? Let&apos;s engineer the future together.
          </p>
  
          {/* Robust Web-based Mail Compose button */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Mehuljhabak10@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black uppercase tracking-widest bg-orange-500 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(230,81,0,0.4)]"
          >
            Get In Touch
          </a>
        </div>
  
        <div className="absolute bottom-6 left-0 w-full text-center">
          <p className="text-sm text-zinc-600 font-mono">
            © 2026 Mehul Jhabak. Self-Directed Engineering.
          </p>
        </div>
      </section>
    );
  }
