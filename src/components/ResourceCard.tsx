import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, MapPin, ExternalLink } from "lucide-react";

export interface ResourceProps {
  title: string;
  description: string;
  phone?: string;
  address?: string;
  website?: string;
  type: "shelter" | "food" | "legal" | "medical" | "hotline";
}

const ResourceCard: React.FC<ResourceProps> = ({
  title,
  description,
  phone,
  address,
  website,
  type
}) => {
  const getIconByType = () => {
    const iconClasses = "mr-2 h-5 w-5";
    
    switch (type) {
      case "shelter":
        return "🏠";
      case "food":
        return "🍲";
      case "legal":
        return "⚖️";
      case "medical":
        return "🏥";
      case "hotline":
        return "☎️";
      default:
        return "📌";
    }
  };

  return (
    <Card className="sos-shadow hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{getIconByType()}</span>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-sos-gray text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {phone && (
            <a href={`tel:${phone}`} className="flex items-center text-large text-sos-green hover:text-sos-darkGreen">
              <PhoneCall className="mr-2 h-5 w-5" />
              {phone}
            </a>
          )}
          {address && (
            <div className="flex items-center text-large text-sos-gray">
              <MapPin className="mr-2 h-5 w-5 text-sos-green" />
              {address}
            </div>
          )}
          {website && (
            <Button 
              variant="outline" 
              className="w-full mt-2 border-sos-green text-sos-green hover:bg-sos-green hover:text-white"
              onClick={() => window.open(website, "_blank")}
            >
              Перейти на сайт <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
