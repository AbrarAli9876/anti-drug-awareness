NashaSeAzaadi - Anti-Drug Awareness Platform 🛡️

NashaSeAzaadi (Freedom from Intoxication) is a comprehensive, educational web application designed to raise awareness about drug abuse, provide prevention strategies, and connect individuals with vital support resources.

Built with React and Tailwind CSS, this platform serves as a digital handbook for students, parents, and communities to understand the risks of addiction and find the path to recovery.

🚀 Features

Comprehensive Education: Detailed information on common drugs, their physical/mental effects, and long-term risks.

Early Detection: Interactive checklists to recognize behavioral and physical signs of addiction.

Prevention Strategies: Practical "Say No" scripts and resilience-building tips for peer pressure.

Support Guide: Step-by-step advice on how to help a friend or family member struggling with substance use.

Emergency Resources: One-click access to official Indian government helplines (NCB, Manas, Ambulance) and global resources.

Responsive Design: Fully optimized for mobile, tablet, and desktop views.

🛠️ Tech Stack

Frontend Framework: React (powered by Vite)

Styling: Tailwind CSS

Icons: Lucide React

Deployment: Ready for Vercel/Netlify

📂 Project Structure

nasha-se-azaadi/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx   # Main navigation with mobile menu
│   │   └── Footer.jsx   # Footer with quick links & official contacts
│   │
│   ├── data/            # Content Data (Separated from logic)
│   │   ├── drugsData.js       # Drug types & details
│   │   ├── effectsData.js     # Physical/Mental effects content
│   │   ├── signsData.js       # Addiction signs & checklists
│   │   ├── sayNoData.js       # Prevention strategies
│   │   ├── helpFriendData.js  # Guide to helping others
│   │   ├── helplinesData.js   # Emergency numbers & resources
│   │   └── faqData.js         # Frequently Asked Questions
│   │
│   ├── pages/           # Page Views
│   │   ├── HomePage.jsx
│   │   ├── TypesOfDrugs.jsx
│   │   ├── Effects.jsx
│   │   ├── SignsOfAddiction.jsx
│   │   ├── SayNo.jsx
│   │   ├── HelpAFriend.jsx
│   │   ├── Helplines.jsx
│   │   └── FAQ.jsx
│   │
│   ├── App.jsx          # Main routing & layout logic
│   └── main.jsx         # Entry point
│
├── index.html           # HTML entry
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies & scripts


⚡ Getting Started

Follow these steps to run the project locally on your machine.

Prerequisites

Node.js (v14 or higher) installed.

Installation

Clone the repository (or download the source code):

git clone [https://github.com/AbrarAli9876/nasha-se-azaadi.git](https://github.com/AbrarAli9876/nasha-se-azaadi.git)


Install dependencies:

npm install


Run the development server:

npm run dev


Open in Browser:
Click the link shown in your terminal (usually http://localhost:5173).

🚑 Emergency Contacts (India)

This application prominently features official helplines:

1933: Report Drug Trafficking (NCB/MANAS)

1800-11-0031: National Drug De-addiction Helpline

14416: Tele-MANAS (Mental Health Support)

112: All-India Emergency Number

🤝 Contributing

Contributions are welcome! If you have accurate information to add or UI improvements:

Fork the repository.

Create a new branch (git checkout -b feature/improvement).

Commit your changes.

Push to the branch.

Open a Pull Request.

