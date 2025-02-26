import { Card, CardContent, CardHeader } from "@/Card.jsx";
import { Avatar, AvatarImage } from "@/Avatar.jsx";
import "./Avatar.css";
import { Button } from "./components/ui/button";

function TeamMemberCard({ name, role, image, linkedinProfile }) {
	return (
		<Card className="border-none text-center overflow-hidden">
			<CardHeader>
				<Avatar className="avatar-image">
					<AvatarImage
						src={image}
						alt={name}
						className="object-cover w-full h-full"
					/>
				</Avatar>
			</CardHeader>
			<CardContent>
				<h3 className="p-2 font-semibold text-lg">{name}</h3>
				<p className="p-2 text-muted-foreground">{role}</p>
				<a href={linkedinProfile}>
					<Button className="mt-4 text-black bg-green-50 border-green-100 hover:bg-green-200 hover:border-green-200 transition-transform hover:scale-110 duration-200">
						Connect on LinkedIn
					</Button>
				</a>
			</CardContent>
		</Card>
	);
}
export default TeamMemberCard;
