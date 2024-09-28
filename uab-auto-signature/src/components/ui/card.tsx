export function Card(props: { children: any }) {
  return (
    <div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full p-4">
      {props.children}
    </div>
  );
}
