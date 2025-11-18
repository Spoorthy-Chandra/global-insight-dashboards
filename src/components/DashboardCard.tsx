import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export const DashboardCard = ({ id, title, description, image, delay = 0 }: DashboardCardProps) => {
  return (
    <div
      className="glass rounded-2xl overflow-hidden card-shadow hover:scale-105 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative group overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Link to={`/dashboard${id}`}>
          <Button className="w-full gradient-primary hover:opacity-90 transition-opacity">
            Explore Dashboard
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};
