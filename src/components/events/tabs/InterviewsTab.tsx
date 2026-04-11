import EventCarousel from "@/components/events/EventCarousel";
import { Dictionary } from "@/i18n/getDictionary";

const interviewsImages = [
  "/images/carousel/Inter1.webp",
  "/images/carousel/Inter2.webp",
  "/images/carousel/Inter3.webp",
  "/images/carousel/Inter4.webp",
  "/images/carousel/Inter5.webp",
  "/images/carousel/Inter6.webp",
  "/images/carousel/Inter7.webp",
  "/images/carousel/Inter8.webp",
];

interface InterviewsTabProps {
  dictionary: Dictionary;
}

export default function InterviewsTab({ dictionary }: InterviewsTabProps) {
  const t = dictionary;

  return (
    <div className="max-w-6xl mx-auto text-gray-300 text-lg space-y-8">
      <h2 className="text-3xl font-semibold text-center bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
        {t.interviews.title}
      </h2>

      <p
        dangerouslySetInnerHTML={{ __html: t.interviews.summary }}
        className="text-justify"
      />

      <div className="space-y-4">
        {t.interviews.expandableContent.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
            className="text-justify"
          />
        ))}

        <EventCarousel images={interviewsImages} altPrefix="Interviews" />

        <h3 className="text-xl font-semibold bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display mt-6 mb-4">
          {t.interviews.expandableContent.benefits.title}
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.interviews.expandableContent.benefits.items.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
              className="text-justify"
            />
          ))}
        </ul>

        {t.interviews.expandableContent.conclusion.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === t.interviews.expandableContent.conclusion.length - 1
                ? "font-bold text-justify"
                : "text-justify"
            }
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </div>
  );
}
