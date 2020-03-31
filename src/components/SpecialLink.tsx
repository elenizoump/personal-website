import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

interface SpecialLinkProps {
  href: string;
  className: string;
}

const SpecialLink: FunctionComponent<SpecialLinkProps> = ({
  children,
  href,
  className,
}) =>
  href.startsWith('/') ? (
    <Link
      className={`${className} link--internal`}
      to={href}
      activeClassName="active"
    >
      {children}
    </Link>
  ) : (
    <a
      className={`${className} link--external`}
      href={href}
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      {children}
    </a>
  );

export default SpecialLink;
