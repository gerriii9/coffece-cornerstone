import { Mail, MapPin, Phone } from "lucide-react";
import coffeceLogo from "@/assets/coffece-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import coffeeBag from "@/assets/coffee-bag.jpg";
import plantation from "@/assets/plantation.jpg";
import officeDesk from "@/assets/office-desk.jpg";
import labelZlaty from "@/assets/label-zlaty-standard.png";
import labelOriginal from "@/assets/label-original.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Káva a notebook" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-coffee-dark/70" />
    </div>
    <div className="relative z-10 text-center px-6">
      <div className="flex items-center justify-center mb-0">
        <img src={coffeceLogo} alt="Coffece logo" className="w-[80vw] max-w-[500px] md:max-w-[600px] lg:max-w-[700px] brightness-0 invert" />
      </div>
      <p className="text-xl sm:text-2xl md:text-4xl font-heading text-primary-foreground/90 -mt-8 md:-mt-14 max-w-2xl mx-auto">
        Čerstvá káva pre váš office
      </p>
      <p className="text-sm sm:text-base md:text-lg font-body text-primary-foreground/70 mt-3 mb-8 md:mb-10 max-w-xl mx-auto">
        Zabezpečte si prísun čerstvej praženej kávy do vašej kancelárie každý mesiac. Bez starostí a s profesionálnym prístupom.
      </p>
      </p>
      <a
        href="#ponuka"
        className="inline-block border border-primary-foreground/50 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-body font-medium text-base md:text-lg px-10 md:px-12 py-3 md:py-4 rounded-full hover:bg-primary-foreground/20 transition-all"
      >
        Objednať
      </a>
    </div>
  </section>
);

const WhySection = () => (
  <section className="py-14 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-10 md:mb-16">
        Prečo si vybrať Coffece?
      </h2>
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center max-w-5xl mx-auto">
        <div className="flex justify-center">
          <img
            src={coffeeBag}
            alt="Balenie kávy Coffece"
            className="rounded-xl shadow-2xl max-h-[300px] md:max-h-[450px] object-cover w-full max-w-[350px]"
          />
        </div>
        <div className="space-y-6 md:space-y-8">
          {[
            { title: "Maximálna čerstvosť", desc: "Kávu pražíme až po vašej objednávke, aby ste dostali ten najlepší zážitok." },
            { title: "Jednoduchá administratíva", desc: "Žiadne zložité zmluvy. Objednajte jednoducho a rýchlo online." },
            { title: "Spoľahlivé doručenie", desc: "Doručíme priamo do vašej kancelárie, presne keď potrebujete." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-2 bg-foreground rounded-full shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const OfferSection = () => (
  <section id="ponuka" className="py-14 md:py-28 bg-coffee-cream">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-10 md:mb-16">
        Naša ponuka kávy
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform">
          <img src={labelZlaty} alt="Zlatý štandard" className="w-full h-auto" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform">
          <img src={labelOriginal} alt="Originál" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
);

const ProductDetailSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(43 96% 56%) 50%, hsl(20 10% 12%) 50%)",
        }}
      />
    </div>
    <div className="relative z-10 container mx-auto px-6 py-14 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        <div className="bg-background/95 backdrop-blur rounded-2xl p-6 md:p-10 shadow-2xl">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Zlatý štandard</h3>
          <div className="space-y-3 text-sm md:text-base text-muted-foreground font-body">
            <p><span className="font-semibold text-foreground">Profil chuti:</span> Jemný, sladký, s tónmi orechov a karamelu</p>
            <p><span className="font-semibold text-foreground">Praženie:</span> Stredné</p>
            <p><span className="font-semibold text-foreground">Krajina pôvodu:</span> Brazília – Cerrado Mineiro</p>
            <p><span className="font-semibold text-foreground">Spracovanie:</span> Prírodné sušenie</p>
            <p className="pt-2">Ideálna voľba pre tých, ktorí uprednostňujú jemnú a vyváženú chuť kávy s dlhým dozvukom.</p>
          </div>
        </div>
        <div className="bg-background/95 backdrop-blur rounded-2xl p-6 md:p-10 shadow-2xl">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Originál</h3>
          <div className="space-y-3 text-sm md:text-base text-muted-foreground font-body">
            <p><span className="font-semibold text-foreground">Profil chuti:</span> Intenzívny, plný, s čokoládovými a korenitými tónmi</p>
            <p><span className="font-semibold text-foreground">Praženie:</span> Tmavé</p>
            <p><span className="font-semibold text-foreground">Krajina pôvodu:</span> Brazília – Cerrado Mineiro</p>
            <p><span className="font-semibold text-foreground">Spracovanie:</span> Mokré spracovanie</p>
            <p className="pt-2">Pre milovníkov silnej kávy s výrazným charakterom a bohatým telom.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="py-14 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-10 md:mb-16">
        Ako to funguje?
      </h2>
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center max-w-5xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          {[
            { num: "01", title: "Vyberte si kávu", desc: "Zvoľte si z našej ponuky ten správny blend." },
            { num: "02", title: "Nastavte množstvo", desc: "Určite koľko kávy potrebujete pre vašu kanceláriu." },
            { num: "03", title: "My sa postaráme", desc: "Čerstvo upraženú kávu zabalíme a pripravíme na doručenie." },
            { num: "04", title: "Jednoduchá platba", desc: "Platba faktúrou alebo online – ako vám vyhovuje." },
          ].map((step) => (
            <div key={step.num} className="flex gap-4 md:gap-5 items-start">
              <span className="text-2xl md:text-3xl font-heading font-bold text-coffee-gold">{step.num}</span>
              <div>
                <h3 className="text-base md:text-lg font-heading font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground font-body">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex justify-center">
          <svg viewBox="0 0 200 200" className="w-64 h-64 text-coffee-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M40 120 C40 120 40 160 60 170 C80 180 120 180 140 170 C160 160 160 120 160 120" />
            <line x1="40" y1="120" x2="160" y2="120" />
            <path d="M160 130 C175 130 185 140 185 150 C185 160 175 170 160 170" />
            <path d="M70 110 C70 100 75 90 70 80" />
            <path d="M100 110 C100 95 105 85 100 70" />
            <path d="M130 110 C130 100 135 90 130 80" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

const HeartSection = () => (
  <section className="relative h-[50vh] md:h-[60vh] min-h-[350px] flex items-center justify-center overflow-hidden">
    <img src={plantation} alt="Kávové plantáže v Brazílii" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-coffee-dark/60" />
    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
        Srdce našej kávy
      </h2>
      <p className="text-base md:text-xl text-primary-foreground/90 font-body">
        Región Cerrado Mineiro, Brazília – tam, kde slnko a pôda dávajú kávovým zrnám ich jedinečný charakter.
      </p>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="bg-muted py-12 md:py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src={officeDesk} alt="Kancelársky stôl" className="w-full h-48 md:h-64 object-cover" />
        </div>
        <div className="space-y-5 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">Kontaktujte nás</h3>
          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground font-body">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-coffee-gold shrink-0" />
              <span>Hlavná 123, 811 01 Bratislava</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-coffee-gold shrink-0" />
              <span>+421 900 123 456</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-coffee-gold shrink-0" />
              <span>info@coffece.sk</span>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            {["Facebook", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm font-body text-muted-foreground hover:text-coffee-gold transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-border">
            <img src={coffeceLogo} alt="Coffece logo" className="h-8 md:h-10" />
            <p className="text-sm text-muted-foreground mt-2">© 2026 Coffece. Všetky práva vyhradené.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <main>
    <HeroSection />
    <WhySection />
    <OfferSection />
    <ProductDetailSection />
    <HowItWorksSection />
    <HeartSection />
    <FooterSection />
  </main>
);

export default Index;
