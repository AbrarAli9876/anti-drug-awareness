import React, { useState, useEffect } from 'react';
import { 
  Heart, Shield, AlertTriangle, BookOpen, 
  Users, Phone, Activity, CheckCircle, 
  ChevronDown, ChevronUp, ArrowRight, Mail,
  Brain, Info
} from 'lucide-react';

// --- Reusable UI Components ---

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionHeader = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <h2 className="text-base text-red-500 font-bold tracking-wide uppercase mb-2">
      {subtitle}
    </h2>
    <p className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
      {title}
    </p>
    <div className={`mt-4 h-1 w-20 bg-red-500 rounded ${align === "center" ? "mx-auto" : ""}`}></div>
  </div>
);

const Button = ({ children, variant = 'primary', onClick, className = '', href }) => {
  const baseStyle = "inline-flex items-center px-6 py-3 border text-base font-medium rounded-full shadow-sm transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 focus:ring-red-500 hover:shadow-lg hover:shadow-red-500/30",
    secondary: "border-white text-white bg-transparent hover:bg-white/10 focus:ring-white"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Card = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
      <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {children}
    </p>
  </div>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full py-6 text-left focus:outline-none flex justify-between items-center group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors duration-200 ${isOpen ? 'text-red-600' : 'text-slate-800 group-hover:text-red-600'}`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-red-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-red-600" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Main Sections ---

const Hero = ({ setPage }) => (
  <div className="relative bg-slate-900 text-white overflow-hidden">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <FadeInSection>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Say No. Stay Safe. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              Get Help.
            </span>
          </h1>
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <p className="mt-4 text-xl md:text-2xl text-slate-300 font-light mb-8">
            Trusted information on drug risks, prevention, and recovery — for youth, families, and communities.
          </p>
        </FadeInSection>

        <FadeInSection delay={400}>
          <p className="text-base md:text-lg text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Drug misuse affects millions, harming health and futures. We provide evidence-based info on types of drugs, effects, and warning signs. 
            <br/><span className="text-red-400 font-semibold mt-2 block">If you suspect trafficking or need help, call 1933 immediately.</span>
          </p>
        </FadeInSection>

        <FadeInSection delay={600}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* UPDATED: Now redirects to the Signs page */}
            <Button onClick={() => setPage('signs')}>
              Read Signs of Addiction <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" href="tel:1933" className="justify-center">
              Report Abuse (1933)
            </Button>
          </div>
        </FadeInSection>
      </div>
    </div>
  </div>
);

const QuickLinks = () => (
  <div className="py-16 bg-slate-50 -mt-8 relative z-20 rounded-t-[3rem]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card icon={BookOpen} title="Learn">
          Explore commonly used drugs, how they work, and their short- and long-term health risks. Knowledge is your best defense.
        </Card>
        <Card icon={Activity} title="Recognize">
          Understand early warning signs of addiction and behavioral changes. Spotting the problem early saves lives.
        </Card>
        <Card icon={Heart} title="Help">
          Find out how to support a friend, when to seek professional advice, and where to get confidential help locally.
        </Card>
      </div>
    </div>
  </div>
);

const WhyMatters = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <FadeInSection>
          <div className="relative">
            {/* Decorator */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Community support group" 
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border-l-4 border-red-500 max-w-xs hidden md:block">
              <p className="text-sm text-gray-500 uppercase font-bold">Impact</p>
              <p className="text-lg font-semibold text-slate-900 mt-1">Education reduces youth drug misuse by up to 30%.</p>
            </div>
          </div>
        </FadeInSection>

        <div className="mt-12 lg:mt-0">
          <FadeInSection delay={200}>
            <SectionHeader align="left" title="Why This Matters" subtitle="The Reality" />
            
            <div className="space-y-8">
              {[
                { title: "Severe Health Complications", text: "Drug misuse can lead to organ failure, mental health disorders, and life-threatening overdoses." },
                { title: "Early Identification", text: "Recognizing risky behavior early greatly increases the chances of effective treatment and recovery." },
                { title: "Reducing Stigma", text: "Knowledge helps reduce stigma, encouraging open conversations that can save lives in our communities." }
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-600">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-base text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-slate-50 p-6 rounded-lg border border-slate-100 italic text-slate-700">
              "Our mission is to empower individuals with accurate, compassionate information to prevent harm and promote a healthier society."
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  </div>
);

const Statistics = () => {
  const stats = [
    { value: "35M+", label: "People suffer from drug use disorders globally" },
    { value: "1 in 8", label: "Young adults experiment before age 25" },
    { value: "90%", label: "Overdose deaths preventable with early intervention" },
    { value: "Silent", label: "Addictions often begin without obvious signs" },
  ];

  return (
    <div className="bg-slate-900 py-20 text-white relative overflow-hidden">
       {/* Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <FadeInSection key={idx} delay={idx * 100}>
              <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-red-500/50 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-red-500 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-slate-300 font-medium">{stat.label}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

const TargetAudience = () => (
  <div className="py-20 bg-slate-50" id="audience">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Who This Is For" subtitle="Target Audience" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[
          { title: "Students & Youth", icon: Users, text: "Learn how to identify risks and make informed choices." },
          { title: "Parents & Families", icon: Heart, text: "Understand signs of addiction and how to provide support." },
          { title: "Teachers & Schools", icon: BookOpen, text: "Access awareness material for community education." },
          { title: "Friends & Peers", icon: Users, text: "Know how to help someone struggling with drug misuse." },
          { title: "Public", icon: Info, text: "Clear, unbiased knowledge for the general public." },
        ].map((item, idx) => (
          <FadeInSection key={idx} delay={idx * 50}>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <item.icon className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 mt-1 text-sm">{item.text}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </div>
);

const Helplines = () => (
  <div className="py-12 bg-slate-900 min-h-screen text-white" id="help">
    <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Important Government Helplines</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1: De-addiction */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center text-center hover:border-green-500 transition-colors">
                <Heart className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-green-400">Drug De-addiction</h3>
                <p className="text-gray-400 mb-4 text-sm">National Toll-Free Helpline for counseling and recovery support.</p>
                <a href="tel:1800110031" className="text-xl font-mono font-bold text-white hover:text-green-300">1800-11-0031</a>
            </div>

            {/* Card 2: Reporting (MANAS) */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center text-center hover:border-blue-500 transition-colors">
                <Shield className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-blue-400">Report Trafficking</h3>
                <p className="text-gray-400 mb-4 text-sm">NCB/MANAS Helpline for reporting drug trafficking or abuse.</p>
                <a href="tel:1933" className="text-3xl font-mono font-bold text-white hover:text-blue-300">1933</a>
            </div>

            {/* Card 3: Serious Incidents */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center text-center hover:border-red-500 transition-colors">
                <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-red-400">Serious Incidents</h3>
                <p className="text-gray-400 mb-4 text-sm">Report accidents or major trafficking incidents.</p>
                <a href="tel:+911126761000" className="text-lg font-mono font-bold text-white hover:text-red-300">+91-11-26761000</a>
            </div>
        </div>

        {/* Email Support Block */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <Mail className="w-8 h-8 text-slate-400" />
            <div>
              <h4 className="text-lg font-semibold text-white">Email for Reporting Incidents:</h4>
              <p className="text-slate-300 font-mono text-sm mt-1">
                ddge-ncb@nic.in &bull; adenf-ncb@nic.in
              </p>
            </div>
        </div>
    </div>
  </div>
);

const CoveredTopics = () => (
  <div className="py-20 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-2">
          <div className="p-10 md:p-16 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">What This Website Covers</h3>
            <div className="space-y-6">
              {[
                { title: "Types of Drugs", desc: "Overviews of substances & health dangers." },
                { title: "Effects on Health", desc: "Physical, mental, and emotional consequences." },
                { title: "Signs of Addiction", desc: "Behavioral, social, and physical warning signals." },
                { title: "Prevention & Strategies", desc: "Practical ways to refuse drugs & manage pressure." },
                { title: "Helplines", desc: "Trusted global resources & emergency contacts." }
              ].map((topic, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="h-2 w-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{topic.title}</h4>
                    <p className="text-slate-400 text-sm">{topic.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              {/* UPDATED: Button can now just scroll to top since content is below, or we could redirect to Types */}
              <Button onClick={() => setPage('types')} variant="primary">Start Learning</Button>
            </div>
          </div>
          <div className="relative h-64 lg:h-auto bg-slate-800">
             {/* Abstract illustration placeholder */}
             <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="w-64 h-64 bg-red-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <Shield className="w-32 h-32 text-slate-700 opacity-50" />
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is addiction a disease or a choice?",
      a: "Addiction is a complex health condition influenced by genetics, environment, and mental health. While initial use may be a choice, addiction changes the brain and requires treatment and support."
    },
    {
      q: "Can someone recover fully from addiction?",
      a: "Yes. With professional help, support, and time, many people recover and live healthy, fulfilling lives. Recovery is a journey, but it is entirely possible."
    },
    {
      q: "What is the first step if I think someone is struggling?",
      a: "Talk to them calmly, express concern, listen without judging, and encourage them to speak to a counselor or doctor. Do not confront them when they are under the influence."
    }
  ];

  return (
    <div className="py-20 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Frequently Asked Questions" subtitle="Common Concerns" />
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6 py-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Export (No Navbar/Footer Here) ---

export default function HomePage({ setPage }) {
  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-red-100 selection:text-red-900">
      <Hero setPage={setPage} />
      <QuickLinks />
      <WhyMatters />
      <Statistics />
      <TargetAudience />
      <Helplines />
      <CoveredTopics />
      <FAQSection />
    </div>
  );
}