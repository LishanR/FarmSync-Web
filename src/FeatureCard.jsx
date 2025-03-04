import { Card, CardContent, CardHeader, CardTitle } from "@/Card.jsx";

function FeatureCard({ title, description, Icon }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-60">
      <CardHeader>
        <Icon className="w-10 h-10 text-green-600 mb-2" />
        <CardTitle className="text-xl p-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="p-2 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default FeatureCard;
