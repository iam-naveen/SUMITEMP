import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div className="container">
      <div className="bloc-tabs flex gap-10 items-center justify-center">
        <button
          className="rounded-t-lg rounded-none hover:border-red-600 focus:bg-red-600"
          onClick={() => setToggleState(1)}
        >
          Visualization
        </button>
        <button
          className="rounded-t-lg rounded-none hover:border-blue-600 focus:bg-sky-600"
          onClick={() => setToggleState(2)}
        >
          DashBoard
        </button>
        <button
          className="rounded-t-lg rounded-none hover:border-green-600 focus:bg-green-600"
          onClick={() => setToggleState(3)}
        >
          Story
        </button>
        <button
          className="rounded-t-lg rounded-none hover:border-yellow-500 focus:bg-yellow-600"
          onClick={() => setToggleState(4)}
        >
          Report
        </button>
      </div>

      <div className="content-tabs w-full bg-zinc-900 rounded-lg flex items-center justify-start p-10 overflow-scroll">
        {toggleState === 1 ? (
          <div className="content active-content flex gap-10">
            <div className="frame flex items-start flex-col gap-5">
              <h2 className="font-bold text-2xl">
                1. COUNTRIES WITH MEDAL COUNT
              </h2>
              <iframe
                src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.public_folders%2Fproject%2Fno%2Bof%2Bmedals%2Bwon%2Bby%2Bcountries&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018822b0823f_00000001"
                width="800"
                height="600"
                className="border-none rounded-lg"
                allow="encrypted-media"
                allowFullScreen=""
              ></iframe>
            </div>
            <div className="frame flex items-start flex-col gap-5">
              <h2 className="font-bold text-2xl">
                2. TOP 3 FEMALE WON MOST NO OF MEDALS
              </h2>
              <iframe
                src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.public_folders%2Fproject%2Fno%2Bof%2Bmedals%2Bwon%2Bby%2Bcountries&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model000001882306e4cb_00000000"
                width="800"
                height="600"
                className="border-none rounded-lg"
                allow="encrypted-media"
                allowfullscreen=""
              ></iframe>
            </div>
            <div className="frame flex items-start flex-col gap-5">
              <h2 className="font-bold text-2xl">
                3. TOP 10 MALE AND FEMALE WITH MOST NO OF MEDALS
              </h2>
              <iframe
                src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.public_folders%2Fproject%2Fmale%2Band%2Bfemale%2Bwon%2Bmost%2Bno%2Bof%2Bmedals&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018826fdc55a_00000000"
                width="800"
                height="600"
                className="border-none rounded-lg"
                allow="encrypted-media"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        ) : toggleState === 2 ? (
          <div className="content  active-content flex gap-10">
            <div className="frame-content flex flex-col w-1/3 gap-10">
              <h3 className="text-xl font-bold">
                Data-Driven insights on Olympic Sports Participation and
                Performance
              </h3>
              <p>
                The dashboard for data-driven insights on Olympic sports
                participation and performance provides a comprehensive view of
                relevant data to uncover valuable information. It combines
                datasets on athletes, sports disciplines, event results, and
                medal counts to enable analysis and visualization. Through
                interactive charts, graphs, and maps, the dashboard highlights
                trends in sports participation over time, compares the
                performance of countries and athletes across different sports,
                and tracks the distribution of medals. With real-time or
                scheduled updates, the dashboard ensures that the insights are
                always based on the latest available data. It serves as a
                powerful tool for stakeholders and sports enthusiasts to make
                data-driven decisions, identify patterns, and gain a deeper
                understanding of the Olympic Games sports landscape.
              </p>
            </div>
            <iframe
              src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.public_folders%2Fproject%2FNew%2Bdashboard&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018823dd21c7_00000003"
              width="800"
              height="600"
              className="border-none rounded-lg"
              allow="encrypted-media"
              allowfullscreen=""
            ></iframe>
          </div>
        ) : toggleState === 3 ? (
          <div className="content  active-content flex flex-row-reverse gap-10">
            <div className="frame-content w-1/3 items-center flex">
              <p>
                Historical data analysis reveals dominant nations in Olympic
                performance, such as the US, Russia, China, and Great Britain.
                These countries consistently rank high in medal counts due to
                their investments in sports development, infrastructure, and
                athlete training. Olympic participation has witnessed increased
                diversity, with more nations participating and emerging
                countries making strides. Efforts to promote gender equality
                have led to a more balanced representation of athletes through
                the inclusion of more women events. However, political factors
                can affect participation, resulting in boycotts or reduced
                representation of certain nations in specific Olympic editions.
              </p>
            </div>
            <iframe
              src="https://us1.ca.analytics.ibm.com/bi/?perspective=story&amp;pathRef=.public_folders%2Fproject%2Folympic%2Bstory&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;sceneId=model00000188271707e6_00000000&amp;sceneTime=0"
              width="800"
              height="600"
              className="border-none rounded-lg"
              allow="encrypted-media"
              allowfullscreen=""
            ></iframe>
          </div>
        ) : (
          <div className="content  active-content">
            <p></p>
            <iframe
              src="https://us1.ca.analytics.ibm.com/bi/?pathRef=.public_folders%2Fproject%2Folympic%2Breport&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=run&amp;prompt=false"
              height="800"
              width="1150"
              className="border-none rounded-lg"
              allow="encrypted-media"
              allowfullscreen=""
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
