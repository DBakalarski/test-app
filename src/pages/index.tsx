import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/movies'>Movie</Link>
        </li>
        <li>
          <Link href='/characters'>Characters</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
