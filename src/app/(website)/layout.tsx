import { CallToAction } from "@/components/CallToAction";

export default function WesbsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <CallToAction />
    </div>
  );
}
