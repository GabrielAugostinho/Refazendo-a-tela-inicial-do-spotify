import {Home as homeIcon, Search, Library, HomeIcon, ChevronLeft, ChevronRight, Shuffle, SkipBack, Play, SkipForward, Repeat} from 'lucide-react'
export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">

          <aside className="w-72 bg-zinc-950 p-6">
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>

            <nav className='space-y-5 mt-10'>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                <HomeIcon/>
                Home</a>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                <Search/>
                Search</a>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                <Library/>
                Your library</a>
            </nav>

            <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top musicas</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Piseiro</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Eletronica</a>
            </nav>

          </aside>

          <main className="flex-1 p-6">
            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft/>
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight/>
              </button>
            </div>
            <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>

            <div className='grid grid-cols-3 gap-4 mt-2'>
            <div className='bg-white/10 rounded'>
                  <img className='object-cover object-center w-full h-full' src="https://i.scdn.co/image/ab67706c0000da84b158de819d7ab763ea2b3573" alt="scsc"/>
                  </div>

                <div className='bg-white/10 rounded'>
                  <img className='object-cover object-center w-full h-full' src="https://i.scdn.co/image/ab67706c0000da84b158de819d7ab763ea2b3573" alt="scsc"/>
                  </div>

                <div className='bg-white/10 rounded'>
                  <img className='object-cover object-center w-full h-full' src="https://i.scdn.co/image/ab67706c0000da84b158de819d7ab763ea2b3573" alt="scsc"/>
                  </div>
                  
            </div>

          </main>

        </div>

        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
            <div className='flex items-center gap-2'>
            <img width={56} height={56} src="https://i.scdn.co/image/ab67706c0000da84b158de819d7ab763ea2b3573" alt="scsc"/>

            <div className='flex flex-col'>
              <strong>Cantor</strong>
              <span className='text-xs text-zinc-500'>Musica</span>
            </div>
            </div>

            <div className='flex flex-col items-center'>
              <div className='flex items-center gap-4'>
                <Shuffle/>
                <SkipBack/>
                <button className='w-10 h-10 flex items-center pl-2 rounded-full bg-white text-black'>
                  <Play/>
                </button>
                <SkipForward/>
                <Repeat/>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-xs text-zinc-400'>1:55</span>
                <div className='h-1 rounded-full w-96 bg-zinc-600'>
                  <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
                </div>
                <span className='text-xs text-zinc-400'>3':55</span>
              </div>
            </div>

            <div>

            </div>
        </footer>
      </div>
    </main>
  );
}
