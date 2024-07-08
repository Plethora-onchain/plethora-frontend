/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xpT5ZPvhCl8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SeacrchBar() {
  return (
    <div className="flex items-center w-full max-w-xl rounded-3xl border bg-background shadow-sm">
      <Input
        type="search"
        placeholder="Search..."
        className="flex-1 px-4 py-6 text-sm rounded-l-3xl border-0 outline-none ring-0 focus:ring-0 focus:outline-none"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="rounded-r-3xl text-muted-foreground hover:bg-muted/50"
      >
        <SearchIcon className="w-5 h-5" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  )
}

function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}