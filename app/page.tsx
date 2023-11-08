import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Sessions from './components/Sessions/index';
import Accelerator from './components/Accelerator/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';


export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Courses />
      <Sessions />
      <Accelerator />
      <Mentor />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
