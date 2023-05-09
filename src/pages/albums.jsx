import Link from 'next/link'

import NitishCool from '@/images/nitishCool.jpeg'
import NitishStage from '@/images/nitishVideosBanner.jpeg'
import nitishIcon from '@/images/nitishIcon.jpeg'

import clsx from 'clsx'
import FadeInSection from '@/components/FadeInSection'
import Image from 'next/image'
import { useState } from 'react'
import personOfColor from '@/images/personOfColor.jpeg'

import { quotes } from '@/lib/quotes.js'
export default function LandingGallery() {
  const [renderQuote, setRenderQuote] = useState('See Joke')
  const [renderAuthor, setRenderAuthor] = useState('')
  const [clikedIndex, setClikedIndex] = useState(null)
  const randomQuote = (idex) => {
    const authors = Object.keys(quotes)
    const author = authors[Math.floor(Math.random() * authors.length)]
    const quote = quotes[author]

    setRenderQuote(quote)
    setRenderAuthor(author)
    setClikedIndex(idex)
  }

  return (
    <div className="relative mx-auto -mt-0   mb-44 bg-gray-50 px-4 sm:px-6 lg:py-14 lg:px-8 xl:px-24">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:mt-10 lg:py-24">
        <h2 className="color-theme  text-base font-semibold leading-7 dark:text-blue-400 lg:text-xl ">
          ALBUMS
        </h2>
        RELEASED & UPCOMING
      </h1>
      <div className="xl::grid-cols-2 relative space-y-24 xl:grid  ">
        {albums.map((album) => {
          return <AlbumUI key={album.title} album={album} />
        })}
      </div>
    </div>
  )
}

const albums = [
  {
    videourl: '/nittyAlbum2.mp4',
    poster: '/nittyCropped.png',
    title: 'Person  of Colour (FULL SPECIAL)',
    pg: 'PG-13',
    description:
      'Nitish Sakhuja whose mantra reigns Funny over Everything, talks about his colourful views and experiences through life.  Fresh off touring Australia and America Nitty touches those sensitive topics.  A comedy album for the people, by a Person Recorded live at the Corner Comedy Club in downtown Toronto.',
    releasedDate: 'Feb 2021',
    copyrights: 'Copyright Macaw Studios Inc 2023 ©',
    author: 'Nyttish Sakuja',
    hastags: [
      '#comedyspecial',
      '#comedy ',
      '#standupcomedy ',
      '#newstandupcomedy',
    ],
    length: ' 49:12m',
  },
  {
    videourl: '/nittiAlbum1.mp4',
    poster: '/nittyAlbum1Poster.png',
    pg: 'PG-18',
    title: 'Album 1 Bad Parenting (Live)',
    description:
      'Nitish Sakhuja takes a turn to make jokes about bad parenting. Parenting may appear to be a personal matter. It is a parent’s right to decide how to raise their child. Nonetheless, researchers consider it the most important public health issue facing our society​1​.',
    releasedDate: '2018-06-28',
    copyrights: 'Copyright Macaw Studios Inc 2023 ©',
    author: 'Nyttish Sakuja',
    hastags: [
      '#comedyspecial',
      '#comedy ',
      '#standupcomedy ',
      '#newstandupcomedy',
    ],
    length: ' 8:13m',
  },
  {
    // url: 'https://cdn.filestackcontent.com/exZnQWvmQzi3AcgXRJ7B?policy=eyJleHBpcnkiOjQxMDI0MDM0MDAsImNhbGwiOlsicGljayIsInJlYWQiLCJzdG9yZSIsImNvbnZlcnQiLCJydW5Xb3JrZmxvdyJdfQ%3D%3D&amp;signature=8929264d0a24edb4646dbb5fe2fd40444eff82e4e9b2b121fdbdf0d94bd4ca79',
    url: '/nitishVideosBanner.jpeg',
    title: 'To MY Unborn Baby',
    pg: 'PG-15',
    description:
      "Nitish unleshes the full power of stand-uop comedy in this Album titled, 'To MY Unborn Baby,Nyttish fgoes deeper as he understand the need to talk about unresolved family affairs and the intrinsic capacity in bad parrent to turn kids into toothless monster adult-like children.",
    releasedDate: 'Noit yet announces',
    copyrights: 'Nytty Boss Inc 2023 ©',
    author: 'Nyttish Sakuja',
    hastags: ['#unbornbabby', '#comedy ', '#standupcomedy '],
    length: 'unkwon',
  },
  {
    url: 'https://cdn.filestackcontent.com/exZnQWvmQzi3AcgXRJ7B?policy=eyJleHBpcnkiOjQxMDI0MDM0MDAsImNhbGwiOlsicGljayIsInJlYWQiLCJzdG9yZSIsImNvbnZlcnQiLCJydW5Xb3JrZmxvdyJdfQ%3D%3D&amp;signature=8929264d0a24edb4646dbb5fe2fd40444eff82e4e9b2b121fdbdf0d94bd4ca79',
    title: 'Started From the Bottom.',
    pg: 'PG-13',
    description:
      'Catch Nitish and Rafael flyig a Jet and dropping jokes on haters. This toime they took it to New York where they have a real obsseded fan base and they held nothing back This means really NOTHING!!!',
    releasedDate: 'Jully 14',
    copyrights: 'Nytty Boss Inc 2023 ©',
    author: 'Nyttish Sakuja',
    hastags: ['#unbornbabby', '#comedy ', '#standupcomedy '],
    length: '45m:30',
    cta: 'LIsten to my comedy',
  },
]

const AlbumUI = ({ album }) => {
  return (
    <div className="relative lg:grid lg:grid-cols-12 lg:space-x-4 xl:-space-x-[7rem]">
      <div className="flex lg:col-span-5 xl:col-span-6 ">
        <div className="e relative  max-h-[60vh]   overflow-hidden shadow-sm dark:bg-transparent dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur sm:h-[23rem] sm:max-h-[33rem] sm:rounded-xl min-[700px]:h-[31.625rem] ">
          <div className="relative flex w-full flex-col">
            {album.url ? (
              <img
                src={album.url}
                alt="App screenshot"
                width={1832}
                height={1242}
                className="object-cover object-center   md:mt-0 xl:rounded-xl"
              />
            ) : (
              <>
                <video
                  controls
                  src={'/nittyAlbum2.mp4'}
                  preload="metadata"
                  poster={album.poster}
                  className=""
                ></video>
                {/* <video
                  controls
                  src={album.videourl}
                  poster={album.videourl.mp4}
                  preload="metadata"
                  // width={1832}
                  // height={1242}
                  className=" mt-10 object-cover object-center max-[600px]:aspect-[2102/1640] min-[600px]:aspect-[2160/1640]  md:mt-0 xl:rounded-xl"
                ></video> */}
                {/* <video
                  controls
                  src={album.videourl}
                  alt="App screenshot"
                  width={1832}
                  height={1242}
                  // className="about-banner mt-10 object-cover object-center max-[600px]:aspect-[2102/1640] min-[600px]:aspect-[2160/1640]  md:mt-0 xl:rounded-xl"
                /> */}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex sm:mx-0 lg:col-span-7 lg:-mx-4 lg:mt-0 xl:col-span-6  ">
        <div className=" relative flex h-[38.625rem] max-h-[74vh] overflow-hidden bg-slate-900  px-6 py-6 py-10 shadow-xl dark:bg-black dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] lg:px-10 xl:h-[31.625rem] xl:px-14">
          <div className="relative flex w-full flex-col">
            <div id="METADATA" className="relative min-w-0 flex-auto">
              <div className="header inline-flex ">
                <div
                  id="title"
                  className="min-[1700px]:max-w-[38rem] min-[1800px]:max-w-[42rem]  min-[1950px]:max-w-[44rem] "
                >
                  <h2 className="!overflow-truncate truncate text-lg font-semibold text-slate-900 dark:text-slate-100 sm:pr-20 lg:text-2xl xl:text-3xl">
                    {album.title}
                  </h2>
                </div>

                <div className=" tems-center space-x-1 dark:text-slate-100 max-[700px]:hidden sm:flex">
                  <div className="dark:highlight-white/20  absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-full p-[0.1875rem] shadow ring-2 ring-slate-900/10 dark:ring-sky-500 lg:h-24 lg:w-24 xl:h-36 xl:w-36 ">
                    <div className=" bg-[length:100%]">
                      <img
                        className="h-[11rem] w-[11rem]  rounded-full lg:h-24 lg:w-24 xl:h-36 xl:w-36"
                        src={`${nitishIcon.src}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <dl className="mt-2 flex flex-wrap text-lg font-medium leading-6 dark:text-slate-200 lg:text-xl xl:text-2xl">
                <div className="dark:text-slate-200">
                  <dt className="sr-only">Rating</dt>
                  <dd className="rounded px-1.5 ring-1 ring-slate-200 dark:ring-slate-600">
                    {album.pg}
                  </dd>
                </div>
                <div className="ml-2">
                  <dt className="sr-only">Year</dt>
                  <dd>2021</dd>
                </div>
                <div>
                  <dt className="sr-only">Genre</dt>
                  <dd className="flex items-center">
                    <svg
                      width="2"
                      height="2"
                      fill="currentColor"
                      className="mx-2 text-slate-300"
                      aria-hidden="true"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    Comedy
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Runtime</dt>
                  <dd className="flex items-center">
                    <svg
                      width="2"
                      height="2"
                      fill="currentColor"
                      className="mx-2 text-slate-300"
                      aria-hidden="true"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    {album.length}
                  </dd>
                </div>
                <div className="mt-2 inline-flex w-full flex-none  font-normal ">
                  <dt className="pr-4">Release(d)</dt>
                  <dd className="text-slate-400">{album.releasedDate}</dd>
                </div>
                <div className="mt-2 inline-flex w-full flex-none  font-normal ">
                  <dt className="pr-4">Author</dt>
                  <dd className="text-slate-400">{album.author}</dd>
                </div>
              </dl>
            </div>
            {/* bg-[length:100%] */}
            <div className="">
              <div className="aspect-w-1 aspect-h-1">
                <h2 className="mt-8 font-semibold text-sky-500">
                  Album description
                </h2>
                <p className="mt-4 max-w-3xl space-y-6 text-xl  dark:text-white ">
                  {album.description}
                </p>
              </div>
            </div>
            <div className="-6 inline-flex gap-x-12  py-6 md:pt-4  lg:pt-14 ">
              <Link
                href="https://found.ee/Person-1"
                type="button"
                class="pointer-events-auto relative flex h-12 items-center rounded-lg bg-slate-900  px-6 text-sm font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-600 lg:text-lg"
              >
                Buy Now
              </Link>
              <Link
                href="https://linktr.ee/nittysak?fbclid=PAAaaDvOsl1aFxUuIBYErlol5Diube7s1Pd_dbYL9DxHJGWdStz9kg6YrozDA"
                type="button"
                class="pointer-events-auto relative flex h-12 items-center rounded-lg bg-slate-900 px-6 text-sm 
                font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
                dark:bg-white dark:text-black dark:hover:bg-slate-600 lg:text-lg"
              >
                {album.cta ? album.cta : 'Platforms'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
