import { createElement } from "react";
import {
  Activity,
  Apple,
  BedDouble,
  Bone,
  Brain,
  Bug,
  Cat,
  Eye,
  FlaskConical,
  Hand,
  HeartPulse,
  Images,
  Radiation,
  Ribbon,
  Scan,
  Scissors,
  ShieldPlus,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import type { ServiceIconName } from "@/types/content";

const serviceIcons = {
  stethoscope: Stethoscope,
  siren: Siren,
  "bed-double": BedDouble,
  scissors: Scissors,
  bone: Bone,
  "shield-plus": ShieldPlus,
  syringe: Syringe,
  bug: Bug,
  "flask-conical": FlaskConical,
  radiation: Radiation,
  scan: Scan,
  images: Images,
  smile: Smile,
  sparkles: Sparkles,
  cat: Cat,
  activity: Activity,
  "heart-pulse": HeartPulse,
  hand: Hand,
  brain: Brain,
  ribbon: Ribbon,
  eye: Eye,
  apple: Apple,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return createElement(serviceIcons[name], {
    className,
    "aria-hidden": true,
  });
}
