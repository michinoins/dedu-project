import Image from 'next/image'
import Link from 'next/link'

export function DecentralizedEducationSection() {
  return (
    <div className="max-w-8xl relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <div className="relative mb-8 flex flex-col items-start lg:flex-row">
          <div className="relative flex flex-col items-end lg:w-1/2">
            <div className="absolute top-0 left-60 mb-4">
              <Image
                src="/assets/images/home/categories-dedu/top-section-logo-purple.svg"
                alt="dEdu Logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="mb-8 w-full pt-16 text-right text-6xl font-bold">
              Let's <span style={{ color: '#8B5CF6' }}>decentralize</span>{' '}
              <br />
              who decides what <br />
              is taught to whom
            </h2>
          </div>
          <div className="mb-8 text-xl lg:absolute lg:right-64 lg:bottom-0 lg:mt-0">
            <Link
              href="/about-dedu-token"
              className="text-blue-500 hover:underline"
            >
              → Read about the dEdu token
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[600px] lg:w-1/2">
            <Image
              src="/assets/images/home/categories-dedu/greekBuilding.svg"
              alt="Greek Building"
              layout="fill"
              objectFit="contain"
              className="z-0"
            />
          </div>
          <div className="absolute right-10 top-0 z-10 h-full lg:w-2/3 lg:pl-12">
            <div className="flex h-full flex-col justify-between py-8">
              <Card
                title="Uncensored curriculum"
                items={[
                  'Anybody with dEdu tokens can stage a campaign to teach at the school, about any subject.',
                  "You decide what's on the curriculum by crowdfunding the courses you want to see taught.",
                  'Nobody sets the curriculum: The School is governed by the dEdu community and each dEdu token holder can propose an onchain vote to veto a course.',
                ]}
              />
              <Card
                title="Meet your fellow students online and offline"
                items={[
                  "When a teacher gets funded, they commit to teach their course on the School's online platform via live webinar, where you'll get to meet and interact with your fellow students.",
                  'In addition, the School will help organise offline meetings in various locations.',
                  'As we grow, we plan to build a first physical school for residential education.',
                ]}
              />
              <Card
                title="Crypto credentials"
                items={[
                  "You'll get the teachers you deserve whose courses will gain the recognition they merit.",
                  "When you've completed all modules of a given course, you'll receive a soul-bound NFT as proof-of-learning.",
                  "Teachers too can build their onchain reputation by way of students' token-authenticated reviews.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-8 flex rounded-lg bg-gradient-to-l from-grape-300/60 to-white/80 p-6 shadow-lg backdrop-blur-sm last:mb-0">
      <div className="flex w-1/3 flex-col justify-end pr-4">
        <h3 className="text-2xl font-semibold text-black">{title}</h3>
      </div>
      <div className="w-2/3">
        <ul className="text-purple-900 list-disc space-y-2 pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
