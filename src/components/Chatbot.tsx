import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  role: "user" | "bot";
  content: string;
}

const dashboardKnowledge = {
  dashboard1: {
    title: "Global Income Distribution Overview",
    insights: [
      "The Gini coefficient fluctuates between 2000-2023, with sharp peaks indicating periods of increased inequality",
      "Lower Middle Income (26.94%) and Low Income (24.02%) categories contain the majority of global population",
      "High Income represents 22.22% and Upper Middle Income 23.88% of the population",
      "Geographic analysis shows North America and Europe with highest average incomes",
      "Africa and parts of Asia show lower average income concentrations",
      "China and Mexico show the largest income share disparities between top 10% and bottom 10%"
    ]
  },
  dashboard2: {
    title: "Inequality Trends Over Time",
    insights: [
      "Total average income shows steady increase from 2000-2023 despite periodic setbacks",
      "Top 10% consistently hold significantly larger income share compared to bottom 10%",
      "8 countries tracked over 23-year period show upward inequality trends",
      "Country rankings shift over time, with China and India showing fluctuating positions",
      "Positive correlation exists between average income and Gini index",
      "Higher-income countries don't necessarily have lower inequality levels"
    ]
  },
  dashboard3: {
    title: "Country-Level Inequality Deep Dive",
    insights: [
      "India and China dominate population distribution due to massive populations",
      "High Income countries represent 31% of tracked population (19bn people)",
      "Income groups are relatively evenly distributed at 24% each for other categories",
      "Germany and UK show highest inequality (Gini ~11), Brazil and Saudi Arabia lowest (~9)",
      "China leads in top 10% income share with 1,044.89",
      "Saudi Arabia shows highest concentration of high-income population"
    ]
  }
};

const generateResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Greeting responses
  if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
    return "Hello! I'm here to help you understand the income inequality dashboards. You can ask me about specific countries, trends, Gini index, income distribution, or request comparisons between dashboards.";
  }
  
  // Dashboard explanations
  if (lowerQuery.includes("dashboard 1") || lowerQuery.includes("first dashboard")) {
    return `**${dashboardKnowledge.dashboard1.title}**\n\n${dashboardKnowledge.dashboard1.insights.join("\n• ")}`;
  }
  
  if (lowerQuery.includes("dashboard 2") || lowerQuery.includes("second dashboard")) {
    return `**${dashboardKnowledge.dashboard2.title}**\n\n${dashboardKnowledge.dashboard2.insights.join("\n• ")}`;
  }
  
  if (lowerQuery.includes("dashboard 3") || lowerQuery.includes("third dashboard")) {
    return `**${dashboardKnowledge.dashboard3.title}**\n\n${dashboardKnowledge.dashboard3.insights.join("\n• ")}`;
  }
  
  // Country-specific queries
  if (lowerQuery.includes("china")) {
    return "China shows the largest income share disparity, with the top 10% holding 1,044.89 of income share. China's position in inequality rankings has fluctuated over the 2000-2023 period, and it dominates population distribution globally.";
  }
  
  if (lowerQuery.includes("highest inequality") || lowerQuery.includes("most unequal")) {
    return "Germany and the United Kingdom show the highest inequality levels with Gini index values around 11. China and Mexico also show significant income share disparities between their top 10% and bottom 10%.";
  }
  
  if (lowerQuery.includes("lowest inequality") || lowerQuery.includes("most equal")) {
    return "Brazil and Saudi Arabia show lower Gini index values (around 9), indicating relatively lower inequality compared to other tracked countries.";
  }
  
  // Gini index queries
  if (lowerQuery.includes("gini")) {
    return "The Gini index measures income inequality on a scale from 0 (perfect equality) to 1 (perfect inequality). Our dashboards show that the average Gini index is 0.43, with fluctuations between 2000-2023. Sharp peaks indicate periods of increased inequality, while dips suggest more equitable distribution.";
  }
  
  // Income distribution queries
  if (lowerQuery.includes("income distribution") || lowerQuery.includes("income group")) {
    return "Global income distribution shows: Lower Middle Income (26.94%), Low Income (24.02%), Upper Middle Income (23.88%), and High Income (22.22%). High Income countries represent about 31% of the tracked population (19bn people), while other categories are relatively evenly distributed at 24% each.";
  }
  
  // Trend queries
  if (lowerQuery.includes("trend") || lowerQuery.includes("over time")) {
    return "From 2000-2023, total average income shows steady growth despite periodic setbacks. The top 10% consistently hold larger income shares compared to the bottom 10%. Overall inequality trends are upward across the 8 tracked countries, though rankings shift over time.";
  }
  
  // Comparison queries
  if (lowerQuery.includes("compare") || lowerQuery.includes("difference")) {
    return "Dashboard 1 provides a global overview with geographic distribution. Dashboard 2 focuses on time-series trends and ranking changes. Dashboard 3 offers country-level deep dives with detailed breakdowns. Each dashboard reveals different aspects of global income inequality.";
  }
  
  // Report generation
  if (lowerQuery.includes("report") || lowerQuery.includes("download") || lowerQuery.includes("pdf")) {
    return "You can generate a downloadable PDF report for any dashboard by clicking the 'Download PDF Report' button on each dashboard page. The report includes the dashboard visualization and all key insights.";
  }
  
  // Default response
  return "I can help you understand income inequality data from our three dashboards. Try asking about:\n• Specific countries (e.g., 'Tell me about China')\n• Inequality metrics (e.g., 'What is the Gini index?')\n• Trends over time\n• Dashboard comparisons\n• Generating PDF reports\n\nWhat would you like to know?";
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hello! I'm your Income Inequality Dashboard assistant. Ask me anything about the dashboards, countries, trends, or data insights!"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const botResponse: Message = {
        role: "bot",
        content: generateResponse(input)
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
    
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg gradient-primary hover:scale-110 transition-transform z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] glass rounded-2xl card-shadow flex flex-col z-50 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Dashboard Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about dashboards..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="rounded-full">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
