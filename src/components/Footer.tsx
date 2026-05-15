


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FF5949] text-black border-t border-black font-['Kanit'] relative z-50">
      <div className="w-full flex flex-col">
        
        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 w-full border-b border-black">
          
          {/* Block 1 */}
          <div className="flex flex-col border-r border-black p-6 md:p-8 min-h-[350px] justify-between group">
            <div className="flex justify-between items-start">
              <span className="font-bold text-sm tracking-tight uppercase">BLCK. 01</span>
              <div className="w-[6px] h-[6px] bg-black"></div>
            </div>
            <div className="flex flex-col gap-1 mt-20">
              {['Projects', 'Contact', 'FAQs'].map(link => (
                <a key={link} href="#" className="text-[15px] font-medium hover:underline decoration-2 underline-offset-4">{link}</a>
              ))}
            </div>
          </div>

          {/* Block 2 (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col border-r border-black p-6 md:p-8 min-h-[350px] justify-between group">
            <div className="flex justify-between items-start">
              <span className="font-bold text-sm tracking-tight uppercase">BLCK. 02</span>
              <div className="w-[6px] h-[6px] bg-black"></div>
            </div>
            <div className="flex flex-col gap-1 mt-20">
              {['FAQs'].map(link => (
                <a key={link} href="#" className="text-[15px] font-medium hover:underline decoration-2 underline-offset-4">{link}</a>
              ))}
            </div>
          </div>

          {/* Block 3 (Block 2 on Mobile) */}
          <div className="flex flex-col p-6 md:p-8 min-h-[350px] justify-between group">
            <div className="flex justify-between items-start">
              <span className="font-bold text-sm tracking-tight uppercase">
                BLCK. <span className="md:hidden">02</span><span className="hidden md:inline">03</span>
              </span>
              <div className="w-[6px] h-[6px] bg-black"></div>
            </div>
            <div className="flex flex-col gap-1 mt-20">
              <a href="https://www.linkedin.com/in/ahammed-anas-nihal-8772b1220/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium hover:underline decoration-2 underline-offset-4">LinkedIn</a>
              <a href="https://www.instagram.com/codelikeanss._/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium hover:underline decoration-2 underline-offset-4">Instagram</a>
              <a href="#" className="text-[15px] font-medium hover:underline decoration-2 underline-offset-4 mb-4">X</a>
              <div className="text-[15px] font-medium mt-auto pt-4">
                <span className="opacity-70">ES</span> <span className="mx-1">|</span> <strong>EN</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Massive Text Section */}
        <div className="w-full flex items-center justify-center py-10 md:py-16 border-b border-black overflow-hidden relative px-4">
          <h1 className="text-[clamp(5rem,20vw,400px)] font-black tracking-tighter leading-[0.8] text-black select-none flex items-baseline relative">
            ANA<span className="relative">S<span className="absolute w-[clamp(0.5rem,2vw,40px)] h-[clamp(0.5rem,2vw,40px)] rounded-full bg-[#00C2CB] -top-[clamp(1rem,4vw,80px)] left-1/2 -translate-x-1/2"></span></span>.
            <span className="text-[clamp(1rem,4vw,60px)] font-bold ml-2 -translate-y-[60%]">®</span>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 text-[11px] font-bold tracking-widest uppercase gap-8 md:gap-0">
          <div className="flex justify-start items-center">
            ©{currentYear} ANAS NIHAL
          </div>
          <div className="flex justify-center items-center">
            <a href="#" className="hover:underline underline-offset-4 decoration-2">TERMS AND CONDITIONS</a>
          </div>
          <div className="flex justify-between md:justify-end items-center gap-8 md:gap-16">
            <a href="#" className="hover:underline underline-offset-4 decoration-2">PRIVACY POLICY</a>
            <span className="hidden md:inline">WEBSITE BY ANAS®</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
