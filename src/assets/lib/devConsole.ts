const MONO = "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace";

const styles = {
  title: `font-family:${MONO};font-size:20px;font-weight:700;color:#a78bfa;`,
  subtitle: `font-family:${MONO};font-size:13px;color:#94a3b8;`,
  divider: `font-family:${MONO};color:#475569;`,
  label: `font-family:${MONO};font-size:12px;font-weight:700;color:#38bdf8;`,
  value: `font-family:${MONO};font-size:12px;color:#e2e8f0;`,
};

export function printDevConsoleBanner() {
  const divider = '─'.repeat(42);

  console.log('%c👋 Suhail Subair %c— Senior Full Stack Developer', styles.title, styles.subtitle);
  console.log('%cLooking under the hood? Nice. Let\'s connect.', styles.subtitle);
  console.log(`%c${divider}`, styles.divider);
  console.log('%cGitHub   %chttps://github.com/Suhailsubair007', styles.label, styles.value);
  console.log('%cLinkedIn %chttps://www.linkedin.com/in/suhail-subair/', styles.label, styles.value);
  console.log('%cEmail    %csuhailsubair04@gmail.com', styles.label, styles.value);
  console.log('%cWebsite  %chttps://suhailsubair.online', styles.label, styles.value);
  console.log(`%c${divider}`, styles.divider);
  console.log('%cBuilt with Next.js, TypeScript & Framer Motion.', styles.subtitle);
}
