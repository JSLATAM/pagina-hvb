"use client";

import { useEffect } from "react";
import { track, type ConversionEvent } from "@/lib/analytics";

export function ViewTracker({ event }: { event: ConversionEvent }) {
  useEffect(() => {
    track(event);
  }, [event]);

  return null;
}
