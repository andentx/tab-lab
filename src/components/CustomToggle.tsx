"use client";

type CustomToggleProps = {
  id: string;
  label: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
};

const CustomToggle: React.FC<CustomToggleProps> = ({
  id,
  label,
  enabled,
  onToggle,
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-row justify-between text-sm font-medium leading-6 text-gray-200">
        <span id={id}>{label}</span>
        <span className="ml-2 w-14 rounded-md bg-gray-800 px-2 text-right font-mono text-base text-lime-300">
          {enabled ? "Yes" : "No"}
        </span>
      </div>
      <div className="relative mt-2">
        <button
          id={id}
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-labelledby={id}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-600"
          onClick={() => onToggle(!enabled)}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-gray-300 transition-transform ${
              enabled ? "translate-x-6 bg-lime-300" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomToggle;
