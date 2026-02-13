import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sweet Surrender | Be My Valentine?',
  description: 'A special invitation for a special someone.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}