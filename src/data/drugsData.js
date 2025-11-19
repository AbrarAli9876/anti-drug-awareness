import { Wind, Wine, Leaf, Pill, Syringe, Zap, Gem, Smile, SprayCan, Eye } from 'lucide-react';

export const drugsData = [
  {
    id: "tobacco",
    name: "Tobacco & Nicotine",
    desc: "Found in cigarettes and vapes. Nicotine is a highly addictive stimulant that affects the brain's reward system.",
    shortTerm: ["Increased heart rate", "Reduced appetite", "Mild euphoria"],
    longTerm: ["Lung cancer & heart disease", "Premature aging", "Reduced lung capacity"],
    note: "Vaping is marketed as safer but still contains chemicals that harm lungs.",
    icon: Wind,
    color: "text-gray-500",
    bg: "bg-gray-100"
  },
  {
    id: "alcohol",
    name: "Alcohol",
    desc: "A depressant that slows brain activity, affecting judgment, coordination, and reaction time.",
    shortTerm: ["Impaired judgment", "Drowsiness", "Slurred speech & balance loss"],
    longTerm: ["Liver damage", "Heart disease", "Dependency & addiction"],
    note: "Mixing alcohol with medicines increases danger significantly.",
    icon: Wine,
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    id: "cannabis",
    name: "Cannabis (Marijuana)",
    desc: "A psychoactive drug from the cannabis plant. It contains THC, which alters mood and perception.",
    shortTerm: ["Altered senses", "Impaired memory", "Increased appetite"],
    longTerm: ["Reduced motivation", "Memory problems", "Risk of dependency"],
    note: "Strong edibles can cause anxiety or panic attacks.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    id: "prescription",
    name: "Prescription Medicines",
    desc: "Medicines prescribed for pain, anxiety, or ADHD. They interact with the nervous system to treat conditions but can be addictive.",
    shortTerm: ["Pain relief", "Increased alertness (stimulants)", "Drowsiness (sedatives)"],
    longTerm: ["Physical dependence", "Overdose risk", "Dangerous interactions"],
    note: "Misusing prescriptions can be just as harmful as illegal drugs.",
    icon: Pill,
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  {
    id: "opioids",
    name: "Opioids (Heroin, Fentanyl)",
    desc: "A class of strong pain-relieving drugs that interact with opioid receptors to block pain signals and induce relaxation.",
    shortTerm: ["Pain relief", "Slowed breathing", "Extreme drowsiness"],
    longTerm: ["High addiction risk", "Fatal overdose", "Severe withdrawal"],
    note: "Fentanyl is extremely potent and often mixed into street drugs secretly.",
    icon: Syringe,
    color: "text-red-600",
    bg: "bg-red-100"
  },
  {
    id: "cocaine",
    name: "Cocaine",
    desc: "A powerful stimulant made from the coca plant. It speeds up the brain's messages, creating a short, intense high.",
    shortTerm: ["Increased energy", "Euphoria", "Fast heartbeat"],
    longTerm: ["Heart attack/stroke", "Paranoia & aggression", "Nose damage"],
    note: "High overdose risk due to unpredictable purity.",
    icon: Zap,
    color: "text-yellow-600",
    bg: "bg-yellow-100"
  },
  {
    id: "meth",
    name: "Methamphetamine",
    desc: "A highly addictive synthetic stimulant that affects the central nervous system, causing a surge in energy and dopamine.",
    shortTerm: ["Intense energy", "Rapid breathing", "Talkativeness"],
    longTerm: ["Severe tooth decay", "Skin sores", "Violent behavior"],
    note: "Extremely addictive — causes major brain and body damage quickly.",
    icon: Gem,
    color: "text-cyan-600",
    bg: "bg-cyan-100"
  },
  {
    id: "mdma",
    name: "MDMA / Ecstasy",
    desc: "A synthetic drug that acts as both a stimulant and hallucinogen, altering mood and perception.",
    shortTerm: ["Increased empathy", "Heightened senses", "Dehydration"],
    longTerm: ["Memory issues", "Sleep problems", "Organ failure (overheating)"],
    note: "Pills often contain other dangerous chemicals mixed in.",
    icon: Smile,
    color: "text-pink-500",
    bg: "bg-pink-100"
  },
  {
    id: "inhalants",
    name: "Inhalants",
    desc: "Household or industrial chemicals that produce chemical vapors, which are inhaled to induce a psychoactive effect.",
    shortTerm: ["Light-headedness", "Euphoria", "Slurred speech"],
    longTerm: ["Brain damage", "Heart failure", "Sudden Sniffing Death"],
    note: "Can be fatal even if used just once.",
    icon: SprayCan,
    color: "text-orange-600",
    bg: "bg-orange-100"
  },
  {
    id: "psychedelics",
    name: "Psychedelics (LSD, Shrooms)",
    desc: "Substances that powerfully alter perception, mood, and cognitive processes, often causing visual hallucinations.",
    shortTerm: ["Intense sensory changes", "Altered thinking", "Emotional shifts"],
    longTerm: ["Persistent anxiety", "Flashbacks", "Risky behavior"],
    note: "“Bad trips” can be traumatic and cause lasting distress.",
    icon: Eye,
    color: "text-indigo-600",
    bg: "bg-indigo-100"
  }
];