import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export default async function Home() {
  await redis.set("hello", "hello")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border">
    </main>
  )
}
