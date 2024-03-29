import {
  SiGooglecloud,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Icon } from "@/components/icon";

export const Intro = () => {
  return (
    <section className="mx-auto py-5 border-b border-gray-300">
      <h1 className={"font-medium font-sans pb-2 text-xl"}>
        Hey, I&apos;m Rafee 👋🏽
      </h1>
      <div className={"font-sans"}>
        <div className={"flex flex-col pb-2 gap-0.5"}>
          <p>
            I&apos;m currently forecasting chicken sales and developing
            frontends at <span className={"underline"}>Nando&apos;s UK&I</span>.
          </p>
          <p>Some of my favourite technologies at the moment are:</p>
        </div>
        <div className={"flex flex-col items-start gap-3 ml-2 font-mono"}>
          <Icon icon={<SiReact />} text={"React"} />
          <Icon icon={<SiTypescript />} text={"TypeScript"} />
          <Icon icon={<SiGooglecloud />} text={"GCP"} />
        </div>
      </div>
    </section>
  );
};

// place wave emoji here
