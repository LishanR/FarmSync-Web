import { Card, CardContent, CardHeader } from "@/Card.jsx";
import { Avatar, AvatarImage } from "@/Avatar.jsx";
import "./Avatar.css";

function TeamMemberCard({ name, role, image }) {
  return (
    <Card className="border-none text-center overflow-hidden">
      <CardHeader>
        <Avatar className="avatar-image">
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
