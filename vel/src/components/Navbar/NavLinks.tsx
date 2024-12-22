import React from 'react';
import { NAV_LINKS } from '../../config/constants';

interface NavLinksProps {
  mobile?: boolean;
  onClickMobile?: () => void;
}

export function NavLinks({ mobile = false, onClickMobile }: NavLinksProps) {
  const baseClasses = mobile
    ? "block hover:text-purple-300 transition-colors"
    : "hover:text-purple-300 transition-colors relative group";

  return (
    <>
      {NAV_LINKS.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          className={baseClasses}
          onClick={mobile ? onClickMobile : undefined}
        >
          {label}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all group-hover:w-full" />
          )}
        </a>
      ))}
    </>
  );
}