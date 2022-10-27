import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <span className="text-gray-500 hover:text-gray-600 transition">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-500 hover:text-gray-600 transition">
              About
            </span>
          </Link>
          <Link href="/newsletter">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </span>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <span className="text-gray-500 hover:text-gray-600 transition">Uses</span>
          </Link>
          <Link href="/guestbook">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Guestbook
            </span>
          </Link>
          <Link href="/snippets">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </span>
          </Link>
          <Link href="/tweets">
            <span className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}