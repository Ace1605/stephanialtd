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
    <>
      {goals?.map(({ goal, solution }, index) => (
        <div
          key={index}
          className='grid 768:grid-cols-3 gap-3 768:gap-28 mt-7 768:mt-10'
        >
          <div className='col-span-1'>
            <p className='font-semibold text-[20px] leading-[30px] tracking-[-0.4px] 768:leading-[38px] 768:tracking-[-0.6px] 768:text-xl'>
              {goal}
            </p>
          </div>
          <div className='col-span-2'>
            {isSpaced ? (
              solution?.split('. ').map((x, index) => (
                <p
                  key={index}
                  className='my-2 font-normal text-neutral-700 leading-[24px] tracking-[-0.28px] 768:leading-[30px] text-base 768:text-[20px] tracking-[-0.4px]'
                >
                  {x}
                </p>
              ))
            ) : (
              <p
                key={index}
                className='my-2 font-normal text-neutral-700 leading-[24px] tracking-[-0.28px] 768:leading-[30px] text-base 768:text-[20px] tracking-[-0.4px]'
              >
                {solution}
              </p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
