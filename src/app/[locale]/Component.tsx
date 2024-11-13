'use client';

import {
  useParams,
  usePathname,
  useSelectedLayoutSegment
} from 'next/navigation';

export default function Component() {
  // All of these hooks fail during the build but
  // work without an issue during development
  console.log([
    usePathname(), // fails
    useParams(), // fails
    useSelectedLayoutSegment() // fails
  ]);
  return 'Component';
}
