
import { Button } from '@/components/ui/button';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <section className='py-24 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>穿透迷雾,洞悉股海</h1>
        <p className='text-2xl text-muted-foreground'>市场全景,一览无余</p>


      </section>
      <div className='flex gap-6 items-center'>
        <Button variant={"secondary"}>
          开始使用
        </Button>
        <Button>
          开始使用
        </Button>
      </div>
    </main>
  )
}
