import Link from 'next/link';

const Custom404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Oops! Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for. Here are some helpful links to get you back on track:</p>
      
      <h2>Popular Courses</h2>
      <ul>
        <li><Link href="/courses/german-b2">B2 German Course for Nurses</Link></li>
        <li><Link href="/courses/nursing-english">Nursing English for Healthcare Professionals</Link></li>
        <li><Link href="/courses/german-a2">A2 German Course</Link></li>
      </ul>

      <h2>Recent Blog Posts</h2>
      <ul>
        <li><Link href="/blog/german-certification-guide">German Certification Guide</Link></li>
        <li><Link href="/blog/nursing-job-tips">Nursing Job Tips</Link></li>
      </ul>

      <h2>Success Stories</h2>
      <ul>
        <li><Link href="/testimonials/nursing-success-story">Nursing Success Story</Link></li>
        <li><Link href="/testimonials/german-language-achiever">German Language Achiever Story</Link></li>
      </ul>
    </div>
  );
};

export default Custom404;
