import { Activity, Brain, Users, Clock, AlertTriangle, ShieldAlert, Frown, Zap } from 'lucide-react';

export const effectsIntro = {
  title: "How Drugs Affect the Body, Mind, and Life",
  subtitle: "The Hidden Cost of Substance Abuse",
  description: "Drug misuse affects every part of a person’s life — from physical health and mental well-being to relationships, school, career, and future goals. Understanding these effects helps people make safer, informed choices and recognize when someone may need help."
};

export const effectsSections = [
  {
    id: "physical",
    title: "Physical Effects",
    icon: Activity,
    intro: "Drug misuse disrupts normal body functioning. Different substances affect the body in different ways, but many share similar harmful effects.",
    columns: [
      {
        title: "Common Physical Impacts",
        items: ["Faster or irregular heart rate", "Breathing problems", "Damage to organs (heart, liver, kidneys)", "High/low blood pressure", "Dehydration & overheating", "Reduced coordination", "Weakened immune system", "Nausea & weight changes"]
      },
      {
        title: "Serious Physical Risks",
        items: ["Heart attack", "Stroke", "Seizures", "Organ failure", "Permanent nerve damage"],
        isRisk: true
      }
    ],
    note: "Some drugs also increase sensitivity to pain once the effect wears off, leading to repeated use."
  },
  {
    id: "mental",
    title: "Mental & Emotional Effects",
    icon: Brain,
    intro: "Drugs alter brain chemistry, affecting mood, thoughts, memory, and overall mental health.",
    columns: [
      {
        title: "Common Mental Effects",
        items: ["Anxiety & restlessness", "Depression", "Irritability & anger", "Difficulty concentrating", "Confusion", "Memory loss"]
      },
      {
        title: "Severe Symptoms",
        items: ["Paranoia", "Hallucinations", "Panic attacks", "Delusional thoughts", "Extreme mood swings"],
        isRisk: true
      }
    ],
    note: "Drugs interfere with the brain’s dopamine system, leading to unstable emotions and a constant desire to repeat the high."
  },
  {
    id: "social",
    title: "Behavioral & Social Effects",
    icon: Users,
    columns: [
      {
        title: "Behavioral Changes",
        items: ["Increased secrecy/lying", "Sudden routine changes", "Impulsive/risky behavior", "Aggression", "Loss of motivation"]
      },
      {
        title: "Social Impacts",
        items: ["Pulling away from friends", "Loss of interest in hobbies", "Drop in grades/performance", "Financial problems", "Legal troubles"]
      }
    ],
    note: "Behavioral changes often appear before physical symptoms — making them an important early warning sign."
  },
  {
    id: "longterm",
    title: "Long-Term Health Risks",
    icon: Clock,
    columns: [
      {
        title: "Physical Risks",
        items: ["Chronic heart disease", "Lung disease", "Liver cirrhosis", "Kidney failure", "Fertility issues"]
      },
      {
        title: "Brain & Lifestyle",
        items: ["Impaired learning ability", "Permanent mood disorders", "Increased accident risk", "Reduced life expectancy"],
        isRisk: true
      }
    ],
    note: "Repeated drug misuse changes how the brain works — recovery is possible but may take time."
  }
];

export const overdoseData = {
  title: "Overdose — What to Look For",
  signs: ["Unresponsiveness", "Slow/irregular breathing", "Blue lips or fingertips", "Extremely small/large pupils", "Seizures", "Gurgling sounds", "Cold, clammy skin"],
  actions: ["Call emergency services immediately", "Provide CPR if trained", "Do NOT make them vomit", "Stay with them until help arrives"]
};

export const impactData = [
  { title: "Educational", items: ["Declining grades", "Poor concentration", "Missing classes", "Dropout risk"] },
  { title: "Work", items: ["Absenteeism", "Reduced productivity", "Conflicts", "Job loss"] },
  { title: "Relationship", items: ["Broken trust", "Arguments", "Family stress", "Isolation"] }
];

export const emotionalData = ["Shame or guilt", "Hopelessness", "Feeling 'out of control'", "Low self-worth", "Emotional instability"];