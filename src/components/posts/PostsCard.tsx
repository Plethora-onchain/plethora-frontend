import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Component() {
  return (
    <Card className="w-full max-w-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src="/placeholder.svg"
        alt="Blog post cover image"
        width={400}
        height={200}
        className="rounded-t-md object-cover"
      />
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {/* <CalendarDaysIcon className="w-4 h-4" /> */}
          <span>June 29, 2024</span>
        </div>
        <h3 className="text-2xl font-bold">The Future of Web Development</h3>
        <p className="text-muted-foreground">
          Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to
          serverless architectures, dive into the innovations that will redefine how we build for the web.
        </p>
      </CardContent>
    </Card>
  )
}
