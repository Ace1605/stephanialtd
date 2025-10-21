interface Goal {
  goal: string;
  solution: string;
}

interface Props {
  goals: Goal[];
  isSpaced?: boolean;
}

export const Description = ({ goals, isSpaced }: Props) => {
  return (
    <div className="space-y-8 768:space-y-12">
      {goals?.map(({ goal, solution }, index) => (
        <div
          key={index}
          className="relative bg-white rounded-2xl border border-neutral-100 p-6 768:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="absolute left-0 top-6 w-1 h-12 bg-gradient-to-b from-primary-main to-primary-dark rounded-r-lg"></div>
          <div className="grid 768:grid-cols-3 gap-4 768:gap-8 768:ml-6">
            <div className="768:col-span-1">
              <h3 className="font-bold text-[20px] 768:text-[24px] leading-[30px] 768:leading-[36px] tracking-[-0.4px] text-black 768:mb-2">
                {goal}
              </h3>
            </div>
            <div className="768:col-span-2">
              {isSpaced ? (
                solution?.split(". ").map((x, sentenceIndex) => (
                  <p
                    key={sentenceIndex}
                    className="mb-3 font-normal text-neutral-600 leading-[28px] 768:leading-[32px] text-base 768:text-[18px] tracking-[-0.2px]"
                  >
                    {x}
                    {sentenceIndex < solution.split(". ").length - 1 && "."}
                  </p>
                ))
              ) : (
                <p className="font-normal text-neutral-600 leading-[28px] 768:leading-[32px] text-base 768:text-[18px] tracking-[-0.2px]">
                  {solution}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
