import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Map, PieChart, BarChart2, Grid, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Chatbot } from "@/components/Chatbot";
import { generateDashboardPDF } from "@/utils/pdfGenerator";
import { toast } from "sonner";
import dashboard3 from "@/assets/dashboard3.jpg";

const Dashboard3 = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const insights = [
    "Population treemap visualization dramatically illustrates global demographic concentration - India and China dominate with the largest blocks, representing billions of people and highlighting Asia's demographic significance.",
    "Income group distribution analysis reveals a surprisingly balanced spread: High Income countries represent 31% (19bn people), while Lower Middle, Upper Middle, and Low Income groups each account for approximately 24%, demonstrating global economic diversity.",
    "Gini index comparison across countries shows Germany and the United Kingdom leading in inequality metrics (Gini ~11), while Brazil and Saudi Arabia display relatively lower inequality levels (Gini ~9).",
    "Top 10% income share analysis places China at the forefront with 1,044.89, followed closely by Mexico (1,021.37) and India (1,021.22), revealing which nations experience the most concentrated wealth accumulation.",
    "Cross-country scatter plot tracking Gini index changes demonstrates that population size does not directly correlate with inequality levels - large and small nations both exhibit varying degrees of income disparity.",
    "Saudi Arabia's income distribution shows the highest concentration of high-income population segments, while India presents a more balanced distribution across all income categories, suggesting different economic development patterns."
  ];

  const handleDownloadPDF = async () => {
    if (!imageRef.current) return;
    
    toast.loading("Generating PDF report...");
    
    try {
      await generateDashboardPDF({
        title: "Country-Level Inequality Deep Dive",
        description: "Detailed country-specific analysis exploring income distribution patterns and Gini index variations across 15 nations.",
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
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Country-Level Inequality Deep Dive
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
              Detailed country-specific analysis exploring income distribution and Gini index patterns
            </p>

            {/* KPI Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                <Map className="text-accent mb-2" size={24} />
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                <PieChart className="text-primary mb-2" size={24} />
                <div className="text-2xl font-bold">4 Groups</div>
                <div className="text-sm text-muted-foreground">Income Categories</div>
              </div>
              <div className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                <BarChart2 className="text-secondary mb-2" size={24} />
                <div className="text-2xl font-bold">14,472</div>
                <div className="text-sm text-muted-foreground">Total Top 10% Share</div>
              </div>
              <div className="glass rounded-xl p-4 hover:scale-105 transition-transform">
                <Grid className="text-accent mb-2" size={24} />
                <div className="text-2xl font-bold">6 Views</div>
                <div className="text-sm text-muted-foreground">Visualization Types</div>
              </div>
            </div>

            {/* Dashboard Image - Zoomable */}
            <ZoomableImage 
              src={dashboard3}
              alt="Country-Level Inequality Deep Dive Dashboard"
            />

            {/* Hidden image for PDF generation */}
            <img 
              ref={imageRef}
              src={dashboard3}
              alt="Country-Level Inequality Deep Dive Dashboard"
              className="hidden"
            />

            {/* Expanded Insights */}
            <div className="glass rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Key Insights & Analysis</h2>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="flex gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground flex-1">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Chart Explanations */}
            <div className="glass rounded-2xl p-8 mt-8">
              <h2 className="text-2xl font-bold mb-6">Country-Level Deep Dive</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="treemap">
                  <AccordionTrigger>Population Distribution by Country</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The treemap in the top-left shows relative population sizes, with India, China, Nigeria, and 
                      the United States appearing as the largest blocks. The color coding by country helps identify 
                      the global population distribution at a glance. China and India dominate due to their massive 
                      populations.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="income-groups">
                  <AccordionTrigger>Population by Income Group</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The horizontal bar chart shows that High Income countries represent 19bn people (around 31%), 
                      while Lower Middle Income, Upper Middle Income, and Low Income groups each contain 15bn people 
                      (approximately 24% each). This relatively even distribution across income groups highlights 
                      global economic diversity.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="scatter-multi">
                  <AccordionTrigger>Gini Index Trends Across Countries (2000-2001)</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The scatter plot with multiple colors tracks Gini index changes across countries over population 
                      size. Each colored dot represents a different country (Australia, Brazil, Canada, China, France). 
                      The positioning reveals that countries with larger populations don't necessarily have higher or 
                      lower inequality levels.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="stacked-bar">
                  <AccordionTrigger>Average Income by Country and Income Group</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The stacked horizontal bar chart breaks down average income by country, color-coded by income 
                      group (High Income in blue, Low Income in green, Lower Middle Income in orange, Upper Middle 
                      Income in teal). Saudi Arabia shows the highest concentration of high-income population, while 
                      India has a more balanced distribution across income groups.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="gini-bar">
                  <AccordionTrigger>Gini Index Comparison by Country</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The horizontal bar chart ranks countries by their Gini index values. Germany and the United 
                      Kingdom show the highest inequality (around 11), while Brazil and Saudi Arabia show lower 
                      values (around 9). This chart enables quick comparison of inequality levels across nations.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="table">
                  <AccordionTrigger>Detailed Country Rankings</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The table provides precise numerical data for top 10% income share by country. China leads with 
                      1,044.89, followed by Mexico (1,021.37) and India (1,021.22). The total across all listed 
                      countries is 14,472.24, providing exact values for deeper analysis.
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

export default Dashboard3;
