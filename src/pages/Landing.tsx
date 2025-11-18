import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DashboardCard } from "@/components/DashboardCard";
import { TrendingDown, BarChart3, Globe } from "lucide-react";
import dashboard1 from "@/assets/dashboard1.jpg";
import dashboard2 from "@/assets/dashboard2.jpg";
import dashboard3 from "@/assets/dashboard3.jpg";

const Landing = () => {
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Global Income Inequality
              </span>
              <br />
              <span className="text-foreground">Data Analysis</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore comprehensive Power BI dashboards revealing patterns, trends, and insights into global income distribution and inequality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity text-lg px-8 glow">
                  <BarChart3 className="mr-2" />
                  Explore Dashboards
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="glass rounded-xl p-6 text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Globe className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
              <p className="text-muted-foreground">Data from countries worldwide</p>
            </div>
            <div className="glass rounded-xl p-6 text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <TrendingDown className="mx-auto mb-4 text-secondary" size={40} />
              <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
              <p className="text-muted-foreground">Historical patterns over decades</p>
            </div>
            <div className="glass rounded-xl p-6 text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <BarChart3 className="mx-auto mb-4 text-accent" size={40} />
              <h3 className="text-xl font-semibold mb-2">Interactive Visuals</h3>
              <p className="text-muted-foreground">Explore data dynamically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Featured Dashboards
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dashboards.map((dashboard, index) => (
              <DashboardCard key={dashboard.id} {...dashboard} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
