import { Globe, Phone, MapPin, Search, Building, HeartPulse, Truck } from 'lucide-react';

export const helplinesIntro = {
  headline: "Where to Get Help — Global Resources & Local Support",
  description: "Help is always available. Whether you are supporting someone or seeking help for yourself, knowing where to go makes a big difference. Below are trusted international organizations and official Indian government helplines.",
};

export const globalResources = [
  { title: "World Health Organization (WHO)", desc: "Mental health, substance use guidance, and global treatment frameworks.", icon: Globe },
  { title: "UNODC", desc: "United Nations Office on Drugs and Crime — prevention programs and international support.", icon: Globe },
  { title: "SAMHSA (USA)", desc: "National helpline and treatment locator for substance abuse.", icon: Globe },
  { title: "NHS (UK)", desc: "Local drug & alcohol recovery services and mental health referrals.", icon: Globe },
];

export const indianHelplines = [
  { 
    name: "National Drug De-addiction Helpline", 
    number: "1800-11-0031", 
    desc: "Run by Ministry of Social Justice & Empowerment with AIIMS. Support for addiction and treatment referrals.",
    tollFree: true,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  { 
    name: "Tele-MANAS (Mental Health)", 
    number: "14416", 
    altNumber: "1-800-891-4416",
    desc: "24×7 comprehensive mental health care. For stress, anxiety, and drug-related mental health concerns.",
    tollFree: true,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  { 
    name: "KIRAN Mental Health Helpline", 
    number: "1800-599-0019", 
    desc: "Support for mental distress, addiction-related stress, suicidality, and crises.",
    tollFree: true,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  { 
    name: "Childline India", 
    number: "1098", 
    desc: "24×7 emergency helpline for minors facing abuse, trauma, or addiction risk.",
    tollFree: true,
    color: "text-pink-600",
    bg: "bg-pink-50"
  }
];

export const emergencyNumbers = [
  { name: "Ambulance", number: "108", icon: Truck },
  { name: "All-India Emergency", number: "112", icon: HeartPulse },
  { name: "Health Helpline", number: "104", icon: Building },
];

export const localHelpSteps = [
  { title: "Search Online", icon: Search, text: "Try searching '[your city] drug de-addiction center' or 'substance abuse counselor near me'." },
  { title: "Check Gov Websites", icon: Globe, text: "Look for centers on State Health Department websites or AIIMS regional centers." },
  { title: "Contact Healthcare", icon: HeartPulse, text: "Ask your family doctor, college counselor, or local community health center." },
  { title: "Local NGOs", icon: Building, text: "Approach NGOs like Nasha Mukti Kendras registered under MSJE." },
];