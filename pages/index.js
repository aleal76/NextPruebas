// This is the Link API
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about" >
      <a title="About Page"> About Page</a>
    </Link>
    <br/>
    <Link href="/services">
      <a title="Nuestros Servicios">Nuestros Servicios</a>
    </Link>
    <p>Hello Next.js </p>
    <p>by AA </p>

  </div>
);

export default Index;