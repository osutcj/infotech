import { Dictionary } from "@/i18n/getDictionary";

interface AboutProps {
  dictionary: Dictionary;
}

export default function About({ dictionary }: AboutProps) {
  const t = dictionary;

  return (
    <section id="about" className="py-10 px-4 md:px-8 relative z-10">
      <h2 className="text-4xl font-semibold text-center mb-12 bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
        {t.about.title}
      </h2>
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-md">
        <div className="space-y-8 text-gray-200 text-xl leading-relaxed text-justify">
          {t.about.paragraphs.map((paragraph: string, index: number) => (
            <p key={index} className="last:font-medium last:text-white">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
