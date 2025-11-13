type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

const SocialLink = ({ href, children, className = '' }: Props) => {
  // Extract platform name from href or children for accessibility
  const platformName =
    typeof children === 'string'
      ? children
      : href.includes('github')
      ? 'GitHub'
      : href.includes('linkedin')
      ? 'LinkedIn'
      : href.includes('twitter')
      ? 'Twitter'
      : href.includes('email')
      ? 'Email'
      : 'Social media';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ${className}`}
      aria-label={`Visit ${platformName} profile`}
    >
      {children}
    </a>
  );
};

export default SocialLink;
