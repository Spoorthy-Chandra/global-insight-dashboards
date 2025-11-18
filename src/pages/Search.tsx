import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");

  const searchData = [
    {
      id: 1,
      title: "Gini Index Analysis",
      description: "Comprehensive Gini index trends showing income inequality fluctuations over time",
      keywords: ["gini", "index", "inequality"],
      link: "/dashboard1",
    },
    {
      id: 2,
      title: "Income Share Distribution",
      description: "Top 10% vs Bottom 10% income share comparison across countries",
      keywords: ["income", "share", "distribution", "top", "bottom"],
      link: "/dashboard1",
    },
    {
      id: 3,
      title: "Population by Income Group",
      description: "Global population distribution across different income categories",
      keywords: ["population", "income", "group"],
      link: "/dashboard1",
    },
    {
      id: 4,
      title: "Historical Trends",
      description: "Time-based analysis of inequality patterns from 2000-2023",
      keywords: ["trends", "time", "history", "years"],
      link: "/dashboard2",
    },
    {
      id: 5,
      title: "Country Rankings",
      description: "Ribbon chart showing how country rankings have evolved",
      keywords: ["country", "ranking", "ribbon"],
      link: "/dashboard2",
    },
    {
      id: 6,
      title: "Average Income Growth",
      description: "Analysis of average income increase over two decades",
      keywords: ["average", "income", "growth"],
      link: "/dashboard2",
    },
    {
      id: 7,
      title: "Country-Level Analysis",
      description: "Deep dive into individual country inequality metrics",
      keywords: ["country", "analysis", "deep", "dive"],
      link: "/dashboard3",
    },
    {
      id: 8,
      title: "Treemap Visualization",
      description: "Population distribution by country using treemap",
      keywords: ["treemap", "population", "visualization"],
      link: "/dashboard3",
    },
    {
      id: 9,
      title: "Income Group Breakdown",
      description: "Detailed breakdown of average income by income group and country",
      keywords: ["breakdown", "income", "group", "detailed"],
      link: "/dashboard3",
    },
  ];

  const filteredResults = query.trim()
    ? searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.keywords.some((keyword) =>
            keyword.toLowerCase().includes(query.toLowerCase())
          )
      )
    : searchData;

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Search Dashboards
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find specific insights and data across all dashboards
            </p>
          </div>

          {/* Search Bar */}
          <div className="glass rounded-2xl p-8 mb-8 animate-scale-in">
            <div className="relative">
              <SearchIcon
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                type="text"
                placeholder="Search for Gini Index, Income Share, Country analysis..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} found
            </p>
            {filteredResults.map((result, index) => (
              <Link
                key={result.id}
                to={result.link}
                className="block glass rounded-xl p-6 hover:bg-primary/5 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {result.title}
                </h3>
                <p className="text-muted-foreground">{result.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {result.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 rounded-full bg-primary/10 text-xs text-primary"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
