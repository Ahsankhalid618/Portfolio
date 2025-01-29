import { Icon } from '@iconify/react';
import Image from 'next/image';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  const isMajorLeagueHacking = name === 'Major League Hacking';
  const isDevpost = name === 'Devpost';
  const isGSSOC = name === 'GSSoC';
  const iconColor =
    name === 'Major League Hacking' || name === 'Devpost' ? '#fff' : '';

  return (
    <div
      className={`relative grid text-2xl rounded-full shadow-md ${
        isMajorLeagueHacking || isDevpost || isGSSOC
          ? 'bg-white'
          : 'bg-bg-secondary'
      } dark:shadow-xl h-14 w-14 sm:h-16 sm:w-16 place-items-center group`}
    >
      {isMajorLeagueHacking ? (
        <Image
          src="/mlh.svg"
          alt="Major League Hacking"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      ) : isDevpost ? (
        <Image
          src="/devpost.svg"
          alt="Devpost"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      ) : isGSSOC ? (
        <Image
          src="/gssoc.png"
          alt="GSSOC"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      ) : (
        <Icon icon={src} width="32" height="32" style={{ color: iconColor }} />
      )}
      <div className="absolute invisible px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
        {name}
        <svg
          className="absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default SkillIcon;
