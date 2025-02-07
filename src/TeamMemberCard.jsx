import { Card, CardContent, CardHeader } from "@/Card.jsx";
import { Avatar, AvatarImage } from "@/Avatar.jsx";

function TeamMemberCard({ name, role, image }) {
  return (
    <Card className="border-none text-center">
      <CardHeader>
        <Avatar className="w-72 h-64 mx-auto ">
          <AvatarImage src={image} alt={name} className="object-cover w-full h-full"/>
        </Avatar>
      </CardHeader>
      <CardContent>
        <h3 className="p-2 font-semibold text-lg">{name}</h3>
        <p className="p-2 text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  );
}
export default TeamMemberCard;
