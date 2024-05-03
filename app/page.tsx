import Image from "next/image";
import { Hero, SearchBar, CustomFilter, Solutions, Services } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {/* <div className="hosme__text-container"> */}
        <div>
          <h1 className="text-1xl font-extrabold text-center">Our Core Values</h1>
          <Solutions/>
          <Services/>
        </div>
      
      </div>
    </main>
  );
}