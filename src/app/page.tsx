import { db } from "@/lib/db"
import Button from '@/components/ui/Button'


export default async function Home() {
  await db.set("hello", "hello")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Button >Button</Button>

    </main>
  )
}
