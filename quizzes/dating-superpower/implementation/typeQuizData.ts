// Quiz title and subtitle
export const quizTitle = "What's Your Secret Dating Superpower? [QUIZ]";
export const quizSubtitle = "Discover your unique dating magic in just 3 minutes (and why it explains everything)";

// Questions array with type-specific options
export const typeQuestions: Question[] = [
  {
    id: 1,
    text: "[Name], you're at a party and notice someone you're interested in across the room. What's your FIRST instinct?",
    options: [
      {
        text: "I observe their body language and social interactions first",
        type: "Magnetic",
        icon: "😏",
      },
      {
        text: "I mentally review my conversation starters and approach strategy",
        type: "Strategic",
        icon: "🤔",
      },
      {
        text: "I find a fun way to naturally cross paths and start a playful conversation",
        type: "Playful",
        icon: "😊",
      },
      {
        text: "I think about what meaningful topics we could discuss",
        type: "Authentic",
        icon: "🧐",
      },
    ],
  },
  {
    id: 2,
    text: "Your date suggests meeting at a new restaurant. What's your immediate reaction?",
    options: [
      {
        text: "I look up the menu, reviews, and plan the perfect table",
        type: "Strategic",
        icon: "🤓",
      },
      {
        text: "I'm excited to try something new and make it an adventure!",
        type: "Playful",
        icon: "😄",
      },
      {
        text: "I focus on creating a comfortable atmosphere for connection",
        type: "Magnetic",
        icon: "😌",
      },
      {
        text: "I think about what deep conversations we could have there",
        type: "Authentic",
        icon: "🤗",
      },
    ],
  },
  {
    id: 3,
    text: "[Name], your friends are planning a double date. What's your role?",
    options: [
      {
        text: "I'm the one making everyone laugh and keeping the energy high",
        type: "Playful",
        icon: "😂",
      },
      {
        text: "I naturally help everyone feel comfortable and connected",
        type: "Magnetic",
        icon: "😊",
      },
      {
        text: "I research the venue and plan the perfect timing",
        type: "Strategic",
        icon: "🧐",
      },
      {
        text: "I suggest activities that will help us get to know each other better",
        type: "Authentic",
        icon: "🥰",
      },
    ],
  },
  {
    id: 4,
    text: "You're texting with someone new. What's your style?",
    options: [
      {
        text: "I keep it fun and playful with lots of emojis and jokes",
        type: "Playful",
        icon: "😜",
      },
      {
        text: "I match their energy and create natural conversation flow",
        type: "Magnetic",
        icon: "😎",
      },
      {
        text: "I have a clear texting schedule and response time strategy",
        type: "Strategic",
        icon: "🤨",
      },
      {
        text: "I ask thoughtful questions and share meaningful stories",
        type: "Authentic",
        icon: "🙂",
      },
    ],
  },
  {
    id: 5,
    text: "[Name], your date cancels last minute. What's your go-to move?",
    options: [
      {
        text: "I quickly pivot to a fun solo adventure or friend hangout",
        type: "Playful",
        icon: "😁",
      },
      {
        text: "I check in to make sure they're okay and suggest rescheduling",
        type: "Magnetic",
        icon: "🙁",
      },
      {
        text: "I review my dating notes and adjust my strategy",
        type: "Strategic",
        icon: "🤔",
      },
      {
        text: "I reflect on what this might mean and how to communicate better",
        type: "Authentic",
        icon: "😔",
      },
    ],
  },
  {
    id: 6,
    text: "You're planning a first date. What's your ideal scenario?",
    options: [
      {
        text: "Something exciting and unexpected that creates stories",
        type: "Playful",
        icon: "🤩",
      },
      {
        text: "A comfortable spot where we can really connect",
        type: "Magnetic",
        icon: "☺️",
      },
      {
        text: "A well-researched venue with perfect timing and backup plans",
        type: "Strategic",
        icon: "😌",
      },
      {
        text: "A quiet place where we can have meaningful conversations",
        type: "Authentic",
        icon: "🥰",
      },
    ],
  },
  {
    id: 7,
    text: "Your date shares something personal. How do you respond?",
    options: [
      {
        text: "I share a similar experience to create deeper connection",
        type: "Authentic",
        icon: "😊",
      },
      {
        text: "I listen intently and ask thoughtful follow-up questions",
        type: "Magnetic",
        icon: "🤗",
      },
      {
        text: "I note it in my dating journal for future reference",
        type: "Strategic",
        icon: "🧐",
      },
      {
        text: "I lighten the mood with humor while showing support",
        type: "Playful",
        icon: "😉",
      },
    ],
  },
  {
    id: 8,
    text: "[Name], you're feeling a connection with someone. What's your next step?",
    options: [
      {
        text: "I create opportunities for natural, meaningful interactions",
        type: "Magnetic",
        icon: "😌",
      },
      {
        text: "I evaluate compatibility based on my criteria",
        type: "Strategic",
        icon: "🤔",
      },
      {
        text: "I plan something fun and memorable to express interest",
        type: "Playful",
        icon: "😄",
      },
      {
        text: "I share my feelings openly and authentically",
        type: "Authentic",
        icon: "☺️",
      },
    ],
  },
  {
    id: 9,
    text: "Your friends ask for dating advice. What do you tell them?",
    options: [
      {
        text: "Focus on having fun and not taking it too seriously",
        type: "Playful",
        icon: "😁",
      },
      {
        text: "Pay attention to body language and social dynamics",
        type: "Magnetic",
        icon: "😏",
      },
      {
        text: "Create clear boundaries and stick to your standards",
        type: "Strategic",
        icon: "😎",
      },
      {
        text: "Be authentic and focus on deep connections",
        type: "Authentic",
        icon: "🥰",
      },
    ],
  },
];

// Type definitions
export const datingTypes: PersonalityType[] = [
  {
    type: "The Magnetic Connector",
    description: "You have the rare gift of creating instant connections that feel natural and effortless. Your superpower is reading social dynamics and making others feel truly seen and understood. You're the person everyone wants to be around because you have this magical ability to create emotional safety and authentic rapport.",
    strengths: [
      "Masterful at reading body language and social cues",
      "Creates memorable first impressions",
      "Naturally balances giving and receiving attention",
      "Skilled at maintaining healthy boundaries while being open",
    ],
    challenges: [
      "Learning to trust instincts about who deserves your energy",
      "Knowing when to step back and protect your heart",
      "Balancing emotional investment with self-care",
      "Setting boundaries while maintaining warmth",
    ],
    tips: [
      "Start conversations with open-ended questions",
      "Pay attention to your own energy levels",
      "Trust your gut about red flags",
      "Create space for others to share",
    ],
    image: "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    type: "The Strategic Planner",
    description: "Your dating superpower is your methodical approach to relationships. You're excellent at identifying patterns, setting clear boundaries, and creating effective dating strategies. Your analytical mind helps you avoid toxic relationships and find truly compatible partners.",
    strengths: [
      "Expert at identifying red flags early",
      "Strong boundaries and clear standards",
      "Systematic approach to relationship building",
      "Efficient at finding compatible partners",
    ],
    challenges: [
      "Learning to balance analysis with spontaneity",
      "Letting go of perfect planning",
      "Embracing uncertainty in dating",
      "Trusting intuition over logic",
    ],
    tips: [
      "Allow for some unplanned moments",
      "Trust your gut feelings",
      "Be open to unexpected connections",
      "Focus on the present moment",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    type: "The Playful Adventurer",
    description: "Your superpower is making dating feel like an exciting adventure! You bring natural enthusiasm, creativity, and a sense of fun to every interaction. Your positive energy and quick recovery from setbacks make you incredibly resilient in the dating world.",
    strengths: [
      "Natural ability to create excitement",
      "Quick recovery from dating setbacks",
      "Skilled at keeping things light and fun",
      "Expert at creating memorable experiences",
    ],
    challenges: [
      "Learning to balance fun with substance",
      "Developing more lasting connections",
      "Managing emotional investment",
      "Creating deeper intimacy",
    ],
    tips: [
      "Allow conversations to go deeper sometimes",
      "Share more personal stories",
      "Create space for emotional connection",
      "Balance adventure with stability",
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
  },
  {
    type: "The Authentic Explorer",
    description: "Your dating superpower is creating deep, meaningful connections through authentic communication and emotional awareness. You have a natural ability to be vulnerable and create safe spaces for others to do the same.",
    strengths: [
      "Natural ability to create intimacy",
      "Skilled at authentic communication",
      "Strong emotional intelligence",
      "Expert at building trust",
    ],
    challenges: [
      "Learning to balance emotional investment",
      "Setting healthy boundaries",
      "Managing vulnerability levels",
      "Creating space for light moments",
    ],
    tips: [
      "Allow for some surface-level fun",
      "Set clear emotional boundaries",
      "Balance depth with lightness",
      "Trust the process of connection",
    ],
    image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

// Type interfaces
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  type: string;
  icon: string;
}

export interface PersonalityType {
  type: string;
  description: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
  image: string;
} 