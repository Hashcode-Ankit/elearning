import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'Saral School',
  description: 'Saral School - Empowering individuals with technical skills, industry knowledge, and confidence to excel in their careers. Join our comprehensive training programs to prepare for the job market and become independent.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description"
              content="Saral School - Empowering individuals with technical skills, industry knowledge, and confidence to excel in their careers. Join our comprehensive training programs to prepare for the job market and become independent."/>
        <meta name="keywords"
              content="Saral School, SaralTech, technical skills, industry knowledge, training programs, job market, independent, technology, simplified"/>
        <meta name="author" content="SaralTech"/>
        <meta property="og:title" content="Saral School - Empowering Individuals for Career Success"/>
        <meta property="og:description"
              content="Prepare for the job market and become independent with Saral School. Join our comprehensive training programs to acquire technical skills, industry knowledge, and confidence."/>
        <meta property="og:image" content="https://edu.saralgroups.com/_next/image?url=%2Fassets%2Fbanner%2Fmahila.png&w=2048&q=75"/>
        <meta property="og:url" content="https://edu.saralgroups.com/"/>
        <title>Saral School</title>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
