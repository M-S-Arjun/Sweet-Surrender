import { FloatingHearts } from "@/components/FloatingHearts";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Stars } from "lucide-react";

export default function ValentinePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 relative bg-background overflow-hidden">
      <FloatingHearts />

      <div className="max-w-3xl w-full space-y-12 relative z-10 animate-in fade-in zoom-in duration-1000">
        <section className="text-center space-y-6">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Stars className="text-primary w-8 h-8" />
            <Heart className="text-primary w-16 h-16 heart-beat fill-primary" />
            <Stars className="text-primary w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-foreground whitespace-nowrap">
            Happy Valentine's Day!
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground italic">
            "You make my heart skip a beat every single day."
          </p>
        </section>

        <Card className="bg-white/80 backdrop-blur-md shadow-2xl border-primary/20 rotate-1 transform-gpu hover:rotate-0 transition-transform duration-500">
          <CardContent className="p-8 md:p-12 space-y-8 font-body">
            <div className="flex justify-between items-center mb-6">
              <span className="text-foreground italic text-2xl font-bold">My Love...</span>
              <Heart className="text-primary/20 w-8 h-8 fill-primary/10" />
            </div>

            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-foreground/90">
              <p className="text-foreground">
                This is just a little note to let you know that every moment with you feels like a blessing.
              </p>
              <p>
                It feels special that we’re in the same college, even if we’re in different classes. In the middle of assignments, exams, stress, and busy days, you are my calm place. Just one smile from you makes everything feel lighter.
              </p>
              <p>
                We’ve grown together in these years — learning, falling, getting back up, and becoming better people. With you, even the ordinary days feel special. Whether we are talking for hours or just sitting quietly, I always feels like home whenever I’m with you.
              </p>
              <p>
                Our 4th anniversary is coming this year, and I’m so proud of how far we’ve come together. Thank you for staying, for believing in us, and for loving me even on my worst days. You’re the only one who've seen my flaws, my fears, my silly side — and still chose me. That means more to me than you’ll ever know.
              </p>
              <p className="pt-4 font-headline text-3xl text-foreground italic">
                “You are more than I ever wished for, and more than I deserve.”
              </p>
              <p>
                I promise to keep choosing you, to support your dreams, to stand by you in tough times, and to celebrate every small win with you. No matter where life takes us after college, I want you by my side — today, tomorrow, and always.
              </p>
              <div className="pt-4">
                <p>You are my best friend, my safe place, and my favorite person.</p>
                <p className="font-bold text-foreground">I love you more than words can ever describe.</p>
              </div>
            </div>

            <div className="pt-12 flex flex-col items-end">
              <span className="text-foreground italic text-2xl font-bold">Forever yours,</span>
              <span className="font-headline text-3xl font-bold text-foreground mt-2">Aju❤️</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
            <Heart className="text-primary w-4 h-4 fill-primary animate-pulse" />
            <Heart className="text-primary w-4 h-4 fill-primary animate-pulse delay-75" />
            <Heart className="text-primary w-4 h-4 fill-primary animate-pulse delay-150" />
        </div>
      </div>

      <footer className="mt-12 text-muted-foreground/40 text-sm">
        Sweet Surrender • Forever & Always
      </footer>
    </main>
  );
}
