export default function TimelineTreatment({
  name,
  treatmentPlan,
  stages,
}: {
  name: string;
  treatmentPlan: typeof any;
  stages: {
    id: string;
    stage: string;
    title: string;
    data: any;
  }[];
}) {
  return (
    <>
      {/* TIMELINE */}

      {treatmentPlan && stages && (
        <>
          <div className="bg-[#F9F7F4] rounded-[40px]">
            <div className="mb-10 mt-10 pl-10 md:pl-12 pr-10 md:pr-12 pt-10 md:pt-12 flex flex-col items-center">
              <br />
              <p className="text-primary uppercase tracking-[0.3em] text-xs">
                Tu plan personalizado
              </p>

              <h3 className="font-heading text-4xl mt-3 text-center">
                Antes, durante y después de <br /> tu tratamiento{" "}
                <span className="text-primary lowercase">{name}</span>
              </h3>
            </div>
            <div className="grid lg:grid-cols-4 gap-4 mb-10 mt-4 pl-6 pr-6 pb-6">
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className="relative rounded-[32px] border border-[#ECE8E2] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Número */}

                  <span className="absolute top-6 right-6 font-heading text-5xl text-black/5 select-none">
                    0{index + 1}
                  </span>

                  {/* Etapa */}

                  <p className="text-primary text-[10px] uppercase tracking-[0.35em] font-semibold mb-3">
                    {stage.stage}
                  </p>

                  {/* Título */}

                  <h3 className="font-heading text-2xl mb-6">{stage.title}</h3>

                  {/* Recomendaciones */}

                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
                      Recomendaciones
                    </p>

                    <ul className="space-y-2">
                      {stage.data.recommendations.map((rec) => (
                        <li
                          key={rec}
                          className="text-sm text-black/70 flex gap-2"
                        >
                          <span className="text-primary">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Productos */}

                  {stage.data.products.length > 0 && (
                    <div className="pt-6 border-t border-black/5">
                      <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">
                        Productos recomendados
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {stage.data.products.map((product) => (
                          <span
                            key={product}
                            className="px-3 py-2 rounded-full bg-primary/5 text-xs text-black/70"
                          >
                            {product
                              .replaceAll("-", " ")
                              .replace(/^./, (c) => c.toUpperCase())}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}
