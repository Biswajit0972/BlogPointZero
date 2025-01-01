import Home from "@/app/_components/pages/Home";
import TopDestination from "@/app/_components/TopDestination";

export default async function Container({searchParams}:{searchParams: Promise<{[key: string]: string}> } ) {
    const searchParamsData = (await searchParams);
    const keys = Object.keys(searchParamsData);
    let topDestinationData: string = "";

    if (keys[0] === "category") {
        topDestinationData = searchParamsData.category;
    }

    return (
      <>
          <section className="w-full relative overflow-x-hidden" id="home">
              <Home/>
          </section>
          <section className="w-full relative overflow-x-hidden" id="topdestination">
            <TopDestination filter={topDestinationData}/>
          </section>
      </>
  );
}
