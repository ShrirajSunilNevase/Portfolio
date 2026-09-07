import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
export const metadata: Metadata = { title:'Shriraj Nevase | Full-Stack Developer & AI/Data Science', description:'Portfolio of Shriraj Nevase — Full-Stack Developer focused on AI and Data Science.', metadataBase:new URL('https://example.com'), openGraph:{title:'Shriraj Nevase | Full-Stack Developer & AI/Data Science',description:'Modern portfolio of Shriraj Nevase.',type:'website'}, twitter:{card:'summary_large_image',title:'Shriraj Nevase | Full-Stack Developer & AI/Data Science',description:'Modern portfolio of Shriraj Nevase.'}, icons:{icon:'/favicon/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><Providers>{children}</Providers></body></html>}
