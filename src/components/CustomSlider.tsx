"use client";

type CustomSliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  id: string;
};

const CustomSlider: React.FC<CustomSliderProps> = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  id,
}) => {
  return (
    <div className="mb-6">
      <div className="flex flex-row justify-between text-sm font-medium leading-6 text-gray-200">
        <label htmlFor={id}>{label}</label>
        <span className="ml-2 w-14 rounded-md bg-gray-800 px-2 text-right font-mono text-base text-lime-300">
          {value}
        </span>
      </div>
      <div className="relative mt-2">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full cursor-pointer appearance-none rounded-md bg-gray-700 bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-600 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:h-[1rem] [&::-webkit-slider-thumb]:w-[1rem] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-lime-300"
        />
        <div className="mt-1 flex justify-between text-gray-200">
          <span className="w-6 text-left text-sm">{min}</span>
          <span className="flex w-6 items-center justify-center text-center text-xs">
            |
          </span>
          <span className="w-6 text-right text-sm">{max}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
