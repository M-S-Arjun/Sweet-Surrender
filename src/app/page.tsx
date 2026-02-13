import { FloatingHearts } from "@/components/FloatingHearts";
import { ValentineQuestion } from "@/components/ValentineQuestion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative bg-background overflow-hidden">
      <FloatingHearts />
      
      <div className="max-w-4xl w-full text-center">
        <ValentineQuestion />
      </div>

      <footer className="absolute bottom-8 text-muted-foreground/50 text-sm font-medium">
        Sweet Surrender • Made with Love
      </footer>
    </main>
  );
}