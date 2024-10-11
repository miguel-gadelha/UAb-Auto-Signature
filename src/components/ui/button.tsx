export function Button(props: {
  children: any;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}) {
  return props.variant === "primary" ? (
    <button
      class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  ) : (
    <button
      class="rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
