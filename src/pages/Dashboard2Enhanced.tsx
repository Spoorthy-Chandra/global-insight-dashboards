import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, TrendingUp, Activity, LineChart, Layers, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Chatbot } from "@/components/Chatbot";
import { generateDashboardPDF } from "@/utils/pdfGenerator";
import { toast } from "sonner";
import dashboard2 from "@/assets/dashboard2.jpg";

const Dashboard2 = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const insights = [
    "Total average income demonstrates consistent upward trajectory from 2000 to 2023, despite periodic economic downturns and global crisis events that temporarily slowed growth.",
    "The stacked area chart clearly delineates periods of income increase (green zones) versus decrease (red zones), revealing cyclical patterns that likely correspond to economic recessions and recoveries.",
    "Income share dynamics remain stubbornly persistent - the top 10% of earners consistently maintain significantly larger portions of total income compared to the bottom 10% across all tracked countries.",
    "Ribbon chart analysis tracking 8 countries over 23 years shows dynamic ranking shifts, with China and India exhibiting the most volatile positioning in inequality measurements.",
    "Australia demonstrates relative stability in inequality rankings throughout the entire observation period, suggesting more consistent policy approaches to income distribution.",
    "Scatter plot correlation analysis reveals a counterintuitive finding: higher average income in a country does not automatically translate to lower inequality levels, challenging common assumptions about wealth and equality."
  ];

  const handleDownloadPDF = async () => {
    if (!imageRef.current) return;
    
    toast.loading("Generating PDF report...");
    
    try {
      await generateDashboardPDF({
        title: "Inequality Trends Over Time",
        description: "Historical trends showing how income inequality has evolved across different nations and time periods from 2000 to 2023.",
        insights,
        imageElement: imageRef.current
      });
      toast.success("PDF report downloaded successfully!");
    } catch (error) {
      toast.error("Failed to generate PDF report");
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <Chatbot />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/home">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>

          <div className="animate-fade-in">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Inequality Trends Over Time
                </span>
              </h1>
              <Button 
                onClick={handleDownloadPDF}
                className="gradient-primary gap-2"
              >
                <Download size={18} />
                Download PDF Report
              </Button>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8">
              Historical trends showing how income inequality has evolved across different nations and time periods
            </p>

            {/* KPI Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                <TrendingUp className="text-secondary mb-2" size={24} />
                <div className="text-2xl font-bold">23 Years</div>
                <div className="text-sm text-muted-foreground">Time Period</div>
              </div>
              <div className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                <Activity className="text-primary mb-2" size={24} />
                <div className="text-2xl font-bold">8 Countries</div>
                <div className="text-sm text-muted-foreground">Tracked</div>
              </div>
              <div className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                <LineChart className="text-accent mb-2" size={24} />
                <div className="text-2xl font-bold">Upward</div>
                <div className="text-sm text-muted-foreground">Overall Trend</div>
              </div>
              <div className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                <Layers className="text-secondary mb-2" size={24} />
                <div className="text-2xl font-bold">4 Charts</div>
                <div className="text-sm text-muted-foreground">Visual Types</div>
              </div>
            </div>

            {/* Dashboard Image - Zoomable */}
            <ZoomableImage 
              src={dashboard2}
              alt="Inequality Trends Over Time Dashboard"
            />

            {/* Hidden image for PDF generation */}
            <img 
              ref={imageRef}
              src={dashboard2}
              alt="Inequality Trends Over Time Dashboard"
              className="hidden"
            />

            {/* Expanded Insights */}
            <div className="glass rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Key Insights & Analysis</h2>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="flex gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground flex-1">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Chart Explanations */}
            <div className="glass rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Detailed Trend Analysis</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="avg-income">
                  <AccordionTrigger>Average Income Growth (2000-2023)</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The stacked area chart shows a steady increase in total average income over time (green area), 
                      with distinct periods of increase (green) and decrease (red). The overall upward trajectory 
                      indicates global economic growth, though with periodic setbacks likely corresponding to 
                      economic crises.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="income-share-time">
                  <AccordionTrigger>Top 10% vs Bottom 10% Share by Year</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The dual-country area chart (2000-2001) shows the income share dynamics. The blue areas 
                      represent the top 10% income share, while orange represents the bottom 10%. The visualization 
                      reveals that in most countries, the top 10% consistently hold a significantly larger share, 
                      with minimal change year over year.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ribbon-chart">
                  <AccordionTrigger>Country Rankings Over Time</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The colorful ribbon chart tracks how top 10% income share rankings have shifted among 8 
                      countries from 2000 to 2023. Each colored stream represents a country, with position changes 
                      indicating shifts in inequality levels. Notable patterns include China and India's fluctuating 
                      positions and Australia's relatively stable ranking.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scatter">
                  <AccordionTrigger>Income vs Inequality Correlation</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The scatter plot reveals the relationship between average income (x-axis) and Gini index 
                      (y-axis) across countries. The positive correlation suggests that higher-income countries 
                      don't necessarily have lower inequality. The clustering of points indicates distinct groups 
                      of countries with similar economic profiles.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
