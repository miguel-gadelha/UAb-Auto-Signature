import { Button } from "./ui/button";
import { Loader } from "./ui/loader";
export function ButtonsRow(props: {
  loading: boolean;
  primaryText: string;
  secondaryText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}) {
  return (
    <div class="flex flex-row justify-end gap-2 mt-4 mb-4">
      <Button onClick={props.onSecondaryClick}>{props.secondaryText}</Button>
      <Button variant="primary" onClick={props.onPrimaryClick}>
        <div class="flex flex-row items-center justify-center gap-2">
          {props.primaryText}
          {props.loading && <Loader />}
        </div>
      </Button>
    </div>
  );
}
