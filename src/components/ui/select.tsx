import { Label } from "./label";

export function Select(props: {
  value: string | number;
  options: { value: string | number; label?: string }[];
  label?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  size?: "sm" | "lg";
}) {
  const sizeClasses =
    props.size === "sm" ? "w-[78px]" : "w-full max-w-sm min-w-[130px]";

  const selectSizeClasses = props.size === "sm" ? "pr-2 pl-3" : "pl-3";

  return (
    <div class={sizeClasses}>
      {props.label && <Label>{props.label}</Label>}
      <div class="relative">
        <select
          value={props.value}
          class={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer  disabled:text-slate-400 disabled:bg-blue-gray-100 disabled:hover:border-slate-200 disabled:cursor-not-allowed ${selectSizeClasses}`}
          disabled={props.disabled}
          onChange={(e) =>
            props?.onChange((e.target as HTMLSelectElement).value)
          }
        >
          {props.options.map((option) => (
            <option value={option.value}>{option.label || option.value}</option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.2"
          stroke="currentColor"
          class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
}
