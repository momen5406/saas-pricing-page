interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: () => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span
        className={`text-sm font-medium ${
          !isAnnual ? 'text-gray-900' : 'text-gray-500'
        }`}
      >
        Monthly
      </span>
      <button
        onClick={onToggle}
        className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors cursor-pointer ${
          isAnnual ? 'bg-blue-600' : 'bg-gray-300'
        }`}
        role="switch"
        aria-checked={isAnnual}
        aria-label={isAnnual ? 'Switch to monthly billing' : 'Switch to annual billing'}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            isAnnual ? 'translate-x-8' : 'translate-x-1'
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium ${
          isAnnual ? 'text-gray-900' : 'text-gray-500'
        }`}
      >
        Annual
        <span className="ml-2 text-xs text-green-600 font-semibold">
          Save 20%
        </span>
      </span>
    </div>
  );
}
