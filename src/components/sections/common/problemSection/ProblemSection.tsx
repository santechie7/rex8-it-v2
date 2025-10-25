import React from "react";

interface ProblemSectionProps {
  imageKey: string | { src: string };
  heading?: string;
  paragraphs?: string[];
  statement?: string;
}
const problem = {
  problemSection: "bg-white py-20 px-[4%]",
  problemContainer:
    "max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center",
  problemImage: "w-full rounded-[15px] shadow-[0_15px_50px_rgba(0,0,0,0.1)]",
  problemContentHeading:
    "text-[2.5rem] font-bold mb-6 leading-[1.2] text-primary",
  problemContentParagraph: "text-[1.1rem] text-text leading-[1.8] mb-6",
  statement:
    "text-[1.0rem] bg-background text-text leading-[1.8] p-10 bg-light rounded-[12px] border-l-6 border-secondary italic mb-12",
};

const ProblemSection: React.FC<ProblemSectionProps> = ({
  imageKey,
  heading,
  paragraphs,
  statement,
}) => {
  return (
    <section className={problem.problemSection}>
      <div className={problem.problemContainer}>
        <div>
          <svg className={problem.problemImage} viewBox="0 0 400 400">
            {imageKey && (
              <image
                href={typeof imageKey === "string" ? imageKey : imageKey.src}
                x="0"
                y="0"
                width="400"
                height="400"
              />
            )}
          </svg>
        </div>
        <div className="problem-content">
          <h2 className={problem.problemContentHeading}>{heading}</h2>
          {paragraphs?.map((paragraph, index) => (
            <p
              key={index}
              className={problem.problemContentParagraph}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
          {statement && (
            <p
              className={problem.statement}
              dangerouslySetInnerHTML={{ __html: statement }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
