import { DashboardCard } from "@/components/DashboardCard";
import { Navbar } from "@/components/Navbar";
import { Sparkles } from "lucide-react";
import dashboard1 from "@/assets/dashboard1.jpg";
import dashboard2 from "@/assets/dashboard2.jpg";
import dashboard3 from "@/assets/dashboard3.jpg";

const Home = () => {
  const dashboards = [
    {
      id: 1,
      title: "Global Income Distribution Overview",
      description: "Comprehensive analysis of income distribution patterns across countries and populations worldwide.",
      image: dashboard1,
    },
    {
      id: 2,
      title: "Inequality Trends Over Time",
      description: "Historical trends showing how income inequality has evolved across different nations and time periods.",
      image: dashboard2,
    },
    {
      id: 3,
      title: "Country-Level Inequality Deep Dive",
      description: "Detailed country-specific analysis exploring income distribution and Gini index patterns.",
      image: dashboard3,
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Sparkles className="text-primary" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dashboard Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore three comprehensive Power BI dashboards analyzing global income inequality patterns
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dashboards.map((dashboard, index) => (
              <DashboardCard key={dashboard.id} {...dashboard} delay={index * 100} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="glass rounded-xl p-6 text-center animate-fade-in-up">
              <div className="text-3xl font-bold text-primary mb-2">62bn</div>
              <div className="text-sm text-muted-foreground">Total Population</div>
            </div>
            <div className="glass rounded-xl p-6 text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="text-3xl font-bold text-secondary mb-2">0.43</div>
              <div className="text-sm text-muted-foreground">Avg Gini Index</div>
            </div>
            <div className="glass rounded-xl p-6 text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Countries Analyzed</div>
            </div>
            <div className="glass rounded-xl p-6 text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Years of Data</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
