import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import dashboard1 from "@/assets/dashboard1.jpg";
import dashboard2 from "@/assets/dashboard2.jpg";
import dashboard3 from "@/assets/dashboard3.jpg";

const Compare = () => {
  const [leftDashboard, setLeftDashboard] = useState("1");
  const [rightDashboard, setRightDashboard] = useState("2");

  const dashboards = [
    { id: "1", title: "Global Income Distribution Overview", image: dashboard1 },
    { id: "2", title: "Inequality Trends Over Time", image: dashboard2 },
    { id: "3", title: "Country-Level Inequality Deep Dive", image: dashboard3 },
  ];

  const getDashboard = (id: string) => dashboards.find((d) => d.id === id);

  const leftDash = getDashboard(leftDashboard);
  const rightDash = getDashboard(rightDashboard);

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dashboard Comparison
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Compare two dashboards side by side
            </p>
          </div>

          {/* Selection Controls */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass rounded-xl p-6">
              <label className="block text-sm font-semibold mb-3">Left Dashboard</label>
              <Select value={leftDashboard} onValueChange={setLeftDashboard}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {dashboards.map((dash) => (
                    <SelectItem key={dash.id} value={dash.id}>
                      Dashboard {dash.id}: {dash.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="glass rounded-xl p-6">
              <label className="block text-sm font-semibold mb-3">Right Dashboard</label>
              <Select value={rightDashboard} onValueChange={setRightDashboard}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {dashboards.map((dash) => (
                    <SelectItem key={dash.id} value={dash.id}>
                      Dashboard {dash.id}: {dash.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Comparison View */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
            {/* Left Dashboard */}
            <div className="glass rounded-2xl p-6 card-shadow">
              <h3 className="text-xl font-bold mb-4 text-primary">
                {leftDash?.title}
              </h3>
              <img
                src={leftDash?.image}
                alt={leftDash?.title}
                className="w-full rounded-lg"
              />
            </div>

            {/* Right Dashboard */}
            <div className="glass rounded-2xl p-6 card-shadow">
              <h3 className="text-xl font-bold mb-4 text-secondary">
                {rightDash?.title}
              </h3>
              <img
                src={rightDash?.image}
                alt={rightDash?.title}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Comparison Insights */}
          <div className="glass rounded-2xl p-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">Key Differences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Dashboard {leftDashboard}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {leftDashboard === "1" && (
                    <>
                      <li>• Focuses on global distribution</li>
                      <li>• Includes geographic visualization</li>
                      <li>• Shows population by income group</li>
                      <li>• Displays Gini index trends</li>
                    </>
                  )}
                  {leftDashboard === "2" && (
                    <>
                      <li>• Emphasizes time-based trends</li>
                      <li>• Multiple country tracking</li>
                      <li>• Ribbon chart for rankings</li>
                      <li>• Correlation scatter plot</li>
                    </>
                  )}
                  {leftDashboard === "3" && (
                    <>
                      <li>• Country-level deep dive</li>
                      <li>• Treemap population view</li>
                      <li>• Detailed income group breakdown</li>
                      <li>• Comprehensive data table</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Dashboard {rightDashboard}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {rightDashboard === "1" && (
                    <>
                      <li>• Focuses on global distribution</li>
                      <li>• Includes geographic visualization</li>
                      <li>• Shows population by income group</li>
                      <li>• Displays Gini index trends</li>
                    </>
                  )}
                  {rightDashboard === "2" && (
                    <>
                      <li>• Emphasizes time-based trends</li>
                      <li>• Multiple country tracking</li>
                      <li>• Ribbon chart for rankings</li>
                      <li>• Correlation scatter plot</li>
                    </>
                  )}
                  {rightDashboard === "3" && (
                    <>
                      <li>• Country-level deep dive</li>
                      <li>• Treemap population view</li>
                      <li>• Detailed income group breakdown</li>
                      <li>• Comprehensive data table</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
