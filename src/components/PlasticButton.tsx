export function PlasticButton({
  text,
  className,
  icon,
}: {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
        <button
          className="group p-[4px] rounded-[12px] 
            bg-gradient-to-b 
            from-white dark:from-black
            to-stone-200/40  dark:to-stone-950/50
            shadow-[0_1px_3px_rgba(0,0,0,0.5)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.7)]
            active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] dark:active:shadow-[0_0px_1px_rgba(0,0,0,0.1)] 
            active:scale-[0.995] dark:active:scale-[0.99]"
        >
          <div
            className="
            bg-gradient-to-b 
            dark:from-black dark:to-stone-200/20
            from-stone-200/40 to-white/80 rounded-[8px] px-2 py-2"
          >
            <div className="flex gap-2 items-center">
              {icon}
              <span className="font-semibold">{text}</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
