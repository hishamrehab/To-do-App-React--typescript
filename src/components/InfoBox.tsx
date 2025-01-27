import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside>
      <h2 className="infobo infobox-warning warning--medium">
        Warning
      </h2>
      <p>{children}</p>
    </aside>
  );
}
