import { Dictionary } from "@/i18n/getDictionary";

interface AboutProps {
  dictionary: Dictionary;
}

export default function About({ dictionary }: AboutProps) {
  const t = dictionary;

  return (
    <section id="about" className="py-10 px-4 md:px-8 relative z-10">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-blue-900/10 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg shadow-purple-500/10"></div>

        <div className="relative p-8 md:p-12">
          <h2 className="text-4xl font-semibold text-center mb-12 bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
            {t.about.title}
          </h2>

          <div className="space-y-8 text-gray-200 text-xl leading-relaxed text-justify">
            {t.about.paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="last:font-medium last:text-white">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
