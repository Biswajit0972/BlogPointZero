import Home from "@/app/_components/pages/Home";
import TopDestination from "@/app/_components/TopDestination";

export default function Container() {
  return (
      <>
          <section className="w-full relative overflow-x-hidden" id="home">
              <Home/>
          </section>
          <section className="w-full relative overflow-x-hidden" id="topdestination">
              <TopDestination/>
          </section>
      </>
  );
}
