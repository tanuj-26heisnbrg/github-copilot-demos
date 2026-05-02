export const DEMO_ROUTES = [
  {
    path: "/board",
    name: "Board Demo",
    description: "Kanban board using Agent Mode",
    icon: "📋",
  },
  {
    path: "/calculator",
    name: "Calculator Demo",
    description: "Calculator using Copilot Edits",
    icon: "🧮",
  },
  {
    path: "/calendar",
    name: "Calendar Demo",
    description: "Calendar with stacked events",
    icon: "📅",
  },
  {
    path: "/work-item",
    name: "Form Demo",
    description: "Create a form with a reusable prompt",
    icon: "📝",
  },
  {
    path: "/weather",
    name: "Weather Demo",
    description: "Generate a weather report from an image",
    icon: "🌦️",
  },
] as const;

export const COPILOT_FEATURES = [
  {
    icon: "✨",
    title: "Ghost Text",
    description: "Code completion as you type",
  },
  {
    icon: "🔄",
    title: "Next Edit Suggestion",
    description: "Get suggestions anywhere in the file",
  },
  {
    icon: "💬",
    title: "Inline Chat",
    description: "Get context and suggestions",
  },
  {
    icon: "🔍",
    title: "Chat Context",
    description: "Attach context to your prompts",
  },
  {
    icon: "🔁",
    title: "Reusable Prompts",
    description: "Use defined prompts for common usecases",
  },
  {
    icon: "🛠️",
    title: "Custom Instructions",
    description: "Personalize Copilot's behavior",
  },
  {
    icon: "👁️",
    title: "Copilot Vision",
    description: "Analyze images and generate code",
  },
  {
    icon: "✏️",
    title: "Copilot Edits",
    description: "Let Copilot make changes across files",
  },
  {
    icon: "🤖",
    title: "Agent Mode",
    description: "Complete complex tasks autonomously",
  },
] as const;


