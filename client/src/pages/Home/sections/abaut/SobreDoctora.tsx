import { UnifiedSectionBlack } from "@/components/layout/UnifiedSectionBlack";
import { useLanguage } from "@/i18n";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import LuxuryLabel from "../../components/LuxuryLabel";
import { TestimonialsColumn } from "./TestimonialsColumn";
import { headerData } from "@/data/realTestimonials";

const testimonials = [
  {
    image: "/images/doctora/1.jpg",
    large: true,
  },
  {
    image: "/images/treatments/tratamiento3.jpg",
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
    image: "/images/treatments/tratamiento.jpg",
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

export function SobreDoctora() {
  const { t } = useLanguage();

  return (
    <UnifiedSectionBlack
      id="sobre-doctora"
      className="bg-[#fdfdfd] mb-0 pb-0 pt-0"
      withGrid={false}
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12  ">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]  ">
          {/* LEFT */}
          <motion.div initial="hidden" animate="show" className="max-w-lg ">
            {/* HEADER */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-start max-w-4xl mx-auto mb-10"
            >
              <motion.div variants={fadeUp} className="flex justify-start">
                <LuxuryLabel>{t.about.label}</LuxuryLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-heading  text-black leading-none tracking-tighter"
              >
                {t.about.title}
              </motion.h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-primary leading-relaxed mx-auto mb-6"
            >
              {t.about.specialty}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="
                space-y-6
                text-foreground/70
                text-lg 
                mb-6  
              "
            >
              <p> {t.about.bio_2}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
                border-t
                border-black/5
                pt-10
              "
            >
              {t.about.credentials.map((c: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2 flex-shrink-0" />

                  <span
                    className="
                      text-md 
                      opacity-80
                    "
                  >
                    {c}
                  </span>
                </div>
              ))}
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
    </UnifiedSectionBlack>
  );
}
