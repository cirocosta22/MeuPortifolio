import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { Projetos } from '../components/Projetos';
import { Conhecimentos } from '../components/Conhecimentos';
import { FormContato } from '../components/FormContato';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projetos />
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
  );
}
