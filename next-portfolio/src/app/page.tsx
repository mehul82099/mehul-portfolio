import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Projects />
      <Footer />
    </main>
  );
}
