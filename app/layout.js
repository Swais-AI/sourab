import './globals.css';
import Providers from '../components/Providers';

export const metadata = {
  title: 'SWAIS – Saraf Worldsphere AI Services',
  description: 'Intelligent enterprise platforms that improve operational visibility, productivity, and decision-making.',
  keywords: 'AI, Analytics, Enterprise, Operations, Visibility',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
