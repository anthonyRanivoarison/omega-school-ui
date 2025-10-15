import { Label } from "./ui/label";

export function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="flex items-center gap-2 font-semibold text-gray-700">
        {icon}
        {label}
      </Label>
      <p className="text-gray-600 text-sm bg-gray-50 px-3 py-2 rounded-md border border-gray-100 shadow-sm">
        {value}
      </p>
    </div>
  );
}