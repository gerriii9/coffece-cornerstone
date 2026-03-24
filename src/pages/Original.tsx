import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import coffeceLogo from "@/assets/coffece-logo.png";
import labelOriginal from "@/assets/label-original.png";

const Original = () => (
  <main className="min-h-screen bg-background">
    {/* Header */}
    <div className="bg-coffee-dark py-6 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-body text-sm">Späť</span>
        </Link>
        <Link to="/">
          <img src={coffeceLogo} alt="Coffece logo" className="h-8 md:h-10 brightness-0 invert" />
        </Link>
      </div>
    </div>

    {/* Hero */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img src={labelOriginal} alt="Originál" className="w-full max-w-[400px] rounded-2xl shadow-xl" />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Originál
            </h1>
            <p className="text-lg font-body text-foreground font-semibold mb-6">100% arabica</p>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground font-body">
              <p><span className="font-semibold text-foreground">Profil chuti:</span> Intenzívny, plný, s čokoládovými a korenitými tónmi</p>
              <p><span className="font-semibold text-foreground">Praženie:</span> Tmavé</p>
              <p><span className="font-semibold text-foreground">Krajina pôvodu:</span> Brazília – Cerrado Mineiro</p>
              <p><span className="font-semibold text-foreground">Spracovanie:</span> Mokré spracovanie</p>
              <p><span className="font-semibold text-foreground">Hmotnosť:</span> 250 g</p>
            </div>
            <p className="mt-6 text-muted-foreground font-body">
              Pre milovníkov silnej kávy s výrazným charakterom a bohatým telom. 100% organické.
            </p>
            <a
              href="/#kontakt"
              className="inline-block mt-8 border border-foreground/30 bg-foreground/5 text-foreground font-body font-medium text-base px-10 py-3 rounded-full hover:bg-foreground/10 transition-all"
            >
              Objednať
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Original;
