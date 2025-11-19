import { Heart, Activity, Brain, Users, AlarmClock, ShieldAlert, CheckSquare } from 'lucide-react';

export const signsIntro = {
  headline: "How to Recognize Early Signs of Addiction",
  subtitle: "Look for sustained changes in routine, mood, appearance, social circle, or responsibilities.",
  paragraph: "Addiction usually develops gradually, not suddenly. Early signs can be subtle — small shifts in behavior, personality, or physical health. The earlier these signs are noticed, the easier it is to help someone before the problem becomes severe."
};

export const signsSections = [
  {
    id: "physical",
    title: "Physical Signs",
    icon: Activity,
    whyMatters: "Physical signs often reflect changes in the brain, sleep patterns, and organ functioning — red flags that should not be ignored.",
    indicators: [
      "Bloodshot or glazed eyes",
      "Sudden weight loss or weight gain without explanation",
      "Unusual or strong smells on breath/clothes",
      "Slurred or slow speech",
      "Shakiness or tremors",
      "Nosebleeds (common with snorted substances)",
      "Track marks or bruises (from injections)",
      "Poor hygiene or neglected appearance",
      "Constant tiredness or low energy"
    ]
  },
  {
    id: "behavioral",
    title: "Behavioral Signs",
    icon: Users,
    whyMatters: "Addiction alters priorities — the substance becomes more important than routine or responsibilities.",
    indicators: [
      "Secretive or defensive behavior",
      "Lying or making excuses frequently",
      "Sudden mood swings or irritability",
      "Changes in sleep schedule (staying up late, sleeping too much)",
      "Loss of interest in hobbies or previously enjoyed activities",
      "Neglecting responsibilities (homework, job deadlines)",
      "Increased risky behaviors, such as driving under the influence",
      "Impulsive decisions or unplanned disappearances",
      "Isolation or spending excessive time alone"
    ]
  },
  {
    id: "psychological",
    title: "Psychological Signs",
    icon: Brain,
    note: "These psychological effects worsen over time if substance use continues.",
    indicators: [
      "Increased anxiety or constant worry",
      "Depression or sudden sadness",
      "Irritability or anger outbursts",
      "Memory problems",
      "Difficulty concentrating",
      "Lower motivation and lack of purpose",
      "Feeling guilty or ashamed",
      "Paranoia or hallucinations",
      "Extreme mood swings",
      "Feeling hopeless or empty"
    ]
  }
];

export const socialPracticalSigns = {
  title: "Social & Practical Signs",
  indicators: [
    "New friend group (often secretive or unfamiliar)",
    "Avoiding family gatherings or social events",
    "Conflict at home or school",
    "Tension with peers or coworkers",
    "Frequently borrowing money",
    "Missing school or work",
    "Sudden decline in grades or job performance",
    "Legal issues (possession, theft, altercations, DUI)",
    "Neglecting essential tasks (bills, hygiene, commitments)"
  ],
  whySerious: "Addiction disrupts routines and relationships, isolating the person and deepening dependency."
};

export const specificAudiences = [
  {
    title: "Teens & Young Adults",
    indicators: [
      "Hidden bottles, wrappers, vapes, or paraphernalia",
      "Decline in sports performance or attendance",
      "Sneaking out at night",
      "Drastic mood changes before/after outings",
      "Using perfume or air fresheners to hide smells",
      "Secret accounts or private phone activity"
    ]
  },
  {
    title: "Adults",
    indicators: [
      "Missing work or repeatedly calling in sick",
      "Drinking alone or in the morning",
      "Becoming irritable when asked about use",
      "Increasing dependence on prescription medicines",
      "Financial instability despite steady income"
    ]
  }
];

export const dependencySigns = [
  {
    title: "Signs of Withdrawal",
    note: "Withdrawal often means the body has become physically dependent.",
    symptoms: ["Sweating or chills", "Shaking", "Nausea", "Headache", "Anxiety or irritability", "Cravings", "Sleeplessness"]
  },
  {
    title: "Advanced Addiction (Urgent)",
    note: "These signs indicate urgent intervention is needed.",
    symptoms: ["Neglecting hygiene", "Severe weight loss", "Violent behavior", "Blackouts or memory gaps", "Complete isolation", "Suicidal thoughts", "Repeated overdose scares"]
  }
];