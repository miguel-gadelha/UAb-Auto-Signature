export function InputText(props: {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div class="w-full min-w-[130px]">
      <div class="relative">
        <input
          class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow disabled:border-0 disabled:bg-blue-gray-50"
          value={props.value}
          onChange={(e) => props.onChange((e.target as HTMLInputElement).value)}
        />
        {!props.value && (
          <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
            {props.placeholder}
          </label>
        )}
      </div>
    </div>
  );
}
