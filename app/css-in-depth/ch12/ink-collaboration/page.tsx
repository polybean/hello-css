import Link from "next/link";
import "./ink.css";

const InkLink: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Link className="text-medium-green visited:text-brand-green " href="#">
      {content}
    </Link>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav>
      <InkLink content="Ink" />
      <ul>
        <li>
          <InkLink content="Features" />
        </li>
        <li>
          <InkLink content="Pricing" />
        </li>
        <li>
          <InkLink content="Support" />
        </li>
        <li>
          <InkLink content="Login" />
        </li>
      </ul>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <div>
      <h2 className="font-sans">Team collaboration done right</h2>
      <InkLink content="Get started" />
    </div>
  );
};

const Tiles: React.FC = () => {
  return (
    <div>
      <div>
        <h4 className="font-sans">Work together, even if you&apos;re apart</h4>
        <p>
          Organize your team conversations into threads. Collaborate together on
          documents in real-time. Use face-to-face{" "}
          <InkLink content="video calls" /> when typing just won&apos;t do.
        </p>
        <InkLink content="Read more" />
      </div>

      <div>
        <h4 className="font-sans">Take it with you</h4>
        <p>
          Ink is available on a wide array of devices, so you can work from
          anywhere:
        </p>
        <ul>
          <li>Web</li>
          <li>iOS</li>
          <li>Android</li>
          <li>Windows Phone</li>
        </ul>
        <InkLink content="Read more" />
      </div>

      <div>
        <h4 className="font-sans">Priced right</h4>
        <p>
          Whether you work on a team of three or a three hundred, you&apos;ll
          find our tiered pricing reasonable at every level.
        </p>
        <InkLink content="Read more" />
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <div>Copyright &copy; 2017 Ink, Inc.</div>
    </footer>
  );
};

const Home: React.FC = () => {
  return (
    <div className="m-0 leading-5 bg-extra-light-gray">
      <Navigation />
      <Hero />
      <Tiles />
      <Footer />
    </div>
  );
};

export default Home;
