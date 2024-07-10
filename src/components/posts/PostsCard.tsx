import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import cardImage from "../../assets/images/card-image.png";
import Link from "next/link";
// import { useNavigate } from "next/navigation"

export default function PostCard() {
  // const navigate = useNavigate()
  return (
    <Link href={`/post/1`}>
    <Card className="w-full  md:max-w-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl cursor-pointer">
      <Image
        src={cardImage}
        alt="Blog post cover image"
        width={400}
        height={100}
        className="rounded-t-2xl object-cover w-full"
      />
      <CardContent className="p-6 pt-3 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {/* <CalendarDaysIcon className="w-4 h-4" /> */}
          <span>June 29, 2024</span>
        </div>
        <h3 className="text-xl font-bold">The Future of Web Development</h3>
        <p className="text-muted-foreground">
          Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to...
        </p>
      </CardContent>
    </Card>
    </Link>
  )
}
