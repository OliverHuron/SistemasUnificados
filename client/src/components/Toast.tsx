import { ShieldCheck } from "lucide-react";

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-institutional-navy px-4 py-3 text-sm text-white shadow-lg"
    >
      <ShieldCheck className="h-4 w-4 text-institutional-gold" />
      {message}
    </div>
  );
}
