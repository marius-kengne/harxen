import { Status } from "./data";

export function statusLabel(s: Status) {
  if (s === "done") return "🟢 Terminé";
  if (s === "in_progress") return "🟡 En cours";
  return "⏳ Prévu";
}
