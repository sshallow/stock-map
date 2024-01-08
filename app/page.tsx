
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" >
      {/* <NavBar /> */}
      <section className='py-24 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>穿透迷雾,洞悉股海</h1>
        <p className='text-2xl text-muted-foreground'>市场全景,一览无余</p>


        {/* 倒序 100 个数 */}
        {/* <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='flex flex-col gap-2'>
              <p className='text-2xl font-bold'>100</p>
              <p className='text-2xl text-muted-foreground'>股票</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-2xl font-bold'>100</p>
              <p className='text-2xl text-muted-foreground'>股票</p>
            </div>
          </div>
        </div> */}

      </section>
      <div className='flex gap-6 items-center' >
        {/* <Button variant={"secondary"}>
          开始使用
        </Button> */}

        <Link href='/map'>
          {/* <Button > */}
          开始探索
          {/* </Button> */}
        </Link>

      </div>
    </main >
  )
}
