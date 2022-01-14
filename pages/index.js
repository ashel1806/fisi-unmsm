import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>This site is for see details of courses and teachers of FISI from UNMSM</h1>
      <div>
        <Link href='/courses'>
          <a>See Courses</a>
        </Link>
      </div>
      <div>
        <Link href='/teachers'>
          <a>See Teachers</a>
        </Link>
      </div>
    </div>
  )
}
