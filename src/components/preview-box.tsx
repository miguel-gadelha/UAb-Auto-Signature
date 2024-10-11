import { SignatureTemplate } from "../pages/signatureTemplate";

export function PreviewBox(props: Signature) {
  return (
    <div>
      <h4 class="text-lg font-medium text-slate-700 mb-2">Live Preview</h4>

      <div class="border border-slate-300 bg-slate-50 rounded-md p-4">
        <SignatureTemplate {...props} />
      </div>
    </div>
  );
}
