import { MessageSquare, Shield, Clock, Heart, Phone, Users, AlertTriangle } from 'lucide-react';

export const helpFriendIntro = {
  headline: "How to Help Someone Who Might Be Using Drugs",
  description: "Helping a friend who may be using drugs requires patience, care, and understanding. Most people struggling with substance use feel scared, ashamed, or confused — and may not know how to ask for help. Your support can make a powerful difference.",
  approach: "Approach them calmly, avoid judging, and focus on listening. With the right approach, you can guide them toward safety and professional help."
};

export const stepGuide = [
  {
    step: 1,
    title: "Choose the Right Time & Place",
    icon: Clock,
    actions: ["Find a moment when your friend is calm, sober, and not distracted.", "Choose a private, quiet space where they feel safe."],
    avoid: ["Confronting them during parties or gatherings", "Discussing the issue when they are high or intoxicated", "Interrupting them in stressful moments"],
    summary: "A calm, comfortable environment increases the chance they’ll open up."
  },
  {
    step: 2,
    title: "Open With Concern Using 'I' Statements",
    icon: MessageSquare,
    actions: ["Start gently and avoid accusations, which create defensiveness.", "Use 'I' instead of 'you' to show compassion."],
    examples: [
      "“I’ve noticed you seem stressed lately, and I’m worried about you.”",
      "“I care about you and want to check in.”",
      "“I’ve seen some changes that concern me.”"
    ],
    summary: "Using 'I' instead of 'you' shows compassion rather than blame."
  },
  {
    step: 3,
    title: "Listen Actively",
    icon: Heart,
    actions: ["Give them space to share their feelings. DON’T interrupt or jump to conclusions.", "Nod, maintain eye contact, and use supportive phrases."],
    supportivePhrases: ["“I understand.”", "“Thanks for telling me.”", "“That sounds hard.”"],
    avoid: ["Judging or criticizing", "Lecturing", "Saying 'just stop using'"],
    summary: "Listening builds trust — trust leads to openness."
  },
  {
    step: 4,
    title: "Offer Help, Not Commands",
    icon: Shield,
    actions: ["Your goal is to support, not control. Encouragement works better than pressure."],
    supportivePhrases: [
      "“I can go with you to talk to a counselor if you want.”",
      "“Would you like me to help find support?”",
      "“I’m here for you if you need someone to talk to.”",
    ],
    summary: "Your goal is to support, not control. Encouragement works better than pressure."
  },
  {
    step: 5,
    title: "Set Healthy Boundaries",
    icon: AlertTriangle,
    actions: ["Helping someone does NOT mean sacrificing your well-being.", "Set limits on what you can and cannot do."],
    boundaries: ["Say no to giving money", "Avoid covering up their mistakes", "Don’t lie to others to protect them", "Don’t put yourself in unsafe situations"],
    summary: "Healthy boundaries = healthy support. You cannot pour from an empty cup."
  },
  {
    step: 6,
    title: "Encourage Professional Help",
    icon: Phone,
    actions: ["Professional support increases recovery success dramatically. Your presence can help remove fear or embarrassment."],
    professionals: ["A doctor", "A school/college counselor", "A therapist", "A local support group", "A helpline (anonymous options available)"],
    summary: "Getting support doesn’t mean you’re weak — it means you’re strong enough to make a change."
  },
];

export const whatNotToDo = [
  "Shame or insult them (avoid terms like 'addict' or 'junkie')",
  "Argue, yell, or threaten",
  "Promise to keep dangerous secrets",
  "Try to fix everything on your own",
  "Give them money",
  "Cover for them (lying or hiding their behavior)",
  "Join their behavior 'to understand them'"
];

export const supportPatterns = [
  "Check in regularly",
  "Encourage positive routines (sleep, nutrition, exercise)",
  "Celebrate small steps or efforts",
  "Be patient — change takes time",
  "Stay calm even if they get defensive",
  "Offer non-judgmental companionship"
];

export const interventionSigns = [
  "Rapid physical deterioration",
  "Isolation from everyone",
  "Losing interest in everything",
  "Aggression or paranoia",
  "Trouble with school/work",
  "Constant borrowing of money",
  "Legal issues or repeated risky situations",
  "Blackouts or memory gaps"
];

export const familySupport = [
  "Seek family counseling",
  "Join support groups (like Al-Anon)",
  "Learn communication strategies",
  "Avoid enabling",
  "Consult a medical or mental health professional"
];

export const refusalResponse = [
  "Stay patient and keep communication open",
  "Focus on safety",
  "Avoid arguments",
  "Give them space but don’t cut them off",
  "Continue encouraging healthy choices",
  "Inform them you’re available anytime they’re ready"
];

export const selfCare = [
  "Talk to someone you trust",
  "Join a support group for friends/family (like Nar-Anon)",
  "Protect your mental health",
  "Maintain your hobbies and routines",
  "Remember: You cannot pour from an empty cup."
];