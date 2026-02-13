"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function ValentineQuestion() {
  const router = useRouter();
  const [noPosition, setNoPosition] = useState({ top: "0px", left: "0px" });
  const [hasMoved, setHasMoved] = useState(false);

  const moveButton = useCallback(() => {
    // Generate random position within safe bounds
    const randomTop = Math.floor(Math.random() * 300 - 150) + "px";
    const randomLeft = Math.floor(Math.random() * 400 - 200) + "px";
    setNoPosition({ top: randomTop, left: randomLeft });
    setHasMoved(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 relative z-10">
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-6">
          <Heart className="text-primary w-20 h-20 heart-beat fill-primary" />
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-foreground">
          Will you be my Valentine?
        </h1>
        <p className="text-xl text-muted-foreground italic">
          Please say yes, I put a lot of heart into this...
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 min-h-[100px] w-full relative">
        <Button
          size="lg"
          className="px-12 py-8 text-2xl rounded-full bg-primary hover:bg-primary/80 text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95 border-none font-bold"
          onClick={() => router.push("/valentine")}
        >
          Yes!
        </Button>

        <div
          className="transition-all duration-200 ease-out"
          style={{
            position: hasMoved ? "absolute" : "relative",
            top: noPosition.top,
            left: noPosition.left,
          }}
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-12 py-8 text-2xl rounded-full bg-white/50 backdrop-blur-sm border-2 border-primary/20 hover:bg-white text-muted-foreground shadow-md pointer-events-auto"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}