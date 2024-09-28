export function Textarea(props: {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div class="w-full">
      <div class="relative w-full min-w-[200px]">
        <textarea
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none hover:border-slate-400 focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder={props.placeholder}
          value={props.value}
          rows={5}
          onChange={(e) =>
            props.onChange((e.target as HTMLTextAreaElement).value)
          }
        ></textarea>
      </div>
    </div>
  );
}
