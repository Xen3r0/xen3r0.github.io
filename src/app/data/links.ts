export interface CvLink {
  id: string;
  label: string;
  value: string;
  href: string;
}

export const CV_LINKS: CvLink[] = [
  { id: 'mail', label: 'Email', value: 'xen3r0@gmail.com', href: 'mailto:xen3r0@gmail.com' },
  { id: 'github', label: 'GitHub', value: 'github.com/xen3r0', href: 'https://github.com/xen3r0' },
  { id: 'x', label: 'X', value: '@xen3r0', href: 'https://twitter.com/xen3r0' },
  { id: 'linkedin', label: 'LinkedIn', value: 'in/santisteban-manuel', href: 'https://www.linkedin.com/in/santisteban-manuel/' },
  { id: 'location', label: 'Location', value: 'Montélimar, FR', href: 'https://www.google.com/maps/place/Mont%C3%A9limar' },
  { id: 'cv', label: 'CV PDF', value: 'cv.pdf', href: '/cv.pdf' },
];
