import { useLanguage } from "@/i18n";
import { motion } from "framer-motion"; 
import { TestimonialsColumn } from "./TestimonialsColumn";
import LuxuryLabel from "../../components/LuxuryLabel";

const testimonials = [
  {
    image: "/images/doctora/1.jpg",
    large: true,
  },
  {
    image: "/images/doctora/tratamientos.png",
    small: true,
  },
  {
    image: "/images/doctora/2.jpg",
    small: true,
  },
  {
    image: "/images/doctora/4.png",
    small: true,
  },
  {
    image: "/images/doctora/hero.png",
    large: true,
  },
  {
    image: "/images/doctora/3.jpg",
    large: true,
  },
  {
    image: "/images/doctora/tratamientos.png",
    large: true,
  },
  {
    image: "/images/doctora/8.jpg",
    large: true,
  },
  {
    image: "/images/doctora/hero.png",
    small: true,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TESTIMONIALS = [
  {
    quoteEs:
      "Operar en Ópera cambió la percepción que mis pacientes tienen de mi práctica. La infraestructura comunica un nivel que pocos centros en Ecuador tienen.",
    quoteEn:
      "Operating at Ópera changed how my patients perceive my practice. The infrastructure communicates a level that few centers in Ecuador have.",
    nameEs: "Dr. Andrés M.",
    nameEn: "Dr. Andrés M.",
    roleEs: "Cirugía plástica",
    roleEn: "Plastic surgery",
    initials: "AM",
  },
  {
    quoteEs:
      "La coordinación es impecable. Llego y todo está listo. Menos fricción, más foco clínico. Así debe sentirse operar.",
    quoteEn:
      "The coordination is flawless. I arrive and everything is ready. Less friction, more clinical focus. That's what operating should feel like.",
    nameEs: "Dr. Carlos V.",
    nameEn: "Dr. Carlos V.",
    roleEs: "Traumatología",
    roleEn: "Orthopedic & trauma",
    initials: "CV",
  },
  {
    quoteEs:
      "Mis pacientes preguntan siempre dónde es la clínica. Ese reconocimiento vale más que cualquier campaña de marketing.",
    quoteEn:
      "My patients always ask where the facility is. That recognition is worth more than any marketing campaign.",
    nameEs: "Dra. Sofía L.",
    nameEn: "Dr. Sofía L.",
    roleEs: "Ginecología",
    roleEn: "Gynecology",
    initials: "SL",
  },
];

export function TestimonialsSection() {
  const { language } = useLanguage();

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--op-canvas)" }}
    >
      <div className="scene-glow-dark" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-32 md:py-2">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh] py-20">
          {/* LEFT */}
          <motion.div initial="hidden" animate="show">
            <motion.div>
              <LuxuryLabel dark>Medicina Estética Avanzada</LuxuryLabel>
            </motion.div>
          </motion.div>
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={40} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={30}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
