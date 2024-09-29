import sidefolioAceternity from "public/images/quickscore-1.png";
import sidefolioAceternity2 from "public/images/quickscore-2.png";

export const products = [
  {
    href: "https://chromewebstore.google.com/detail/quick-score-live-score-an/igbedijjdbkpodndbnhdbhngogjdakni",
    title: "Quick Score",
    description:
      "A full fledged chrome plugin for live score updates",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Reactjs", "Tailwindcss", "aws - lamda, api gateway, event bridge, dynamodb", "serverless.yml"],
    slug: "quickscore",
    content: (
      <div>
    <p>
      This is a Live Score chrome extension built from react and manifest. Right now i.e. Sept&apos;24 . It sits at 20 + ratings of 4.9 ⭐️, 75+ installs
    </p>
    <p>
      The architecture of Quick Score showcases a robust and scalable design:
    </p>
    <p>
      On the frontend, we utilize React.js with TypeScript for a responsive and type-safe user interface, styled with Tailwind CSS for a modern look. The backend leverages AWS Lambda functions managed through the Serverless framework, with AWS EventBridge handling CRON job scheduling and AWS API Gateway managing API requests. Data persistence is achieved using Amazon DynamoDB, taking advantage of its free 25 GB storage and up to 1 million monthly read/write requests on the AWS Free Tier.
    </p>
    <p>
      The project is structured into three main components: &lt;API&gt; for Lambda functions and API flow management, &lt;SERVER&gt; for data pushing to DynamoDB and CRON job definitions, and &lt;FRONTEND&gt; for the Chrome extension codebase. This architecture ensures efficient data flow, real-time updates, and a seamless user experience for live score tracking. Besides it utlized S3 for Logo and small assets management
    </p>
  </div>
    ),
  },
  // {
  //   href: "https://algochurn.com",
  //   title: "Algochurn",
  //   description:
  //     "Practice for technical interviews with hands on coding challenges.",
  //   thumbnail: sidefolioAlgochurn,
  //   images: [sidefolioAlgochurn, sidefolioAlgochurn2],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "algochurn",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  // {
  //   href: "https://gomoonbeam.com",
  //   title: "Moonbeam",
  //   description:
  //     "Never write from scratch again with Moonbeam, your AI first writing tool",
  //   thumbnail: sidefolioMoonbeam,
  //   images: [sidefolioMoonbeam, sidefolioMoonbeam2],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "moonbeam",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  // {
  //   href: "https://tailwindmasterkit.com",
  //   title: "Tailwind Master Kit",
  //   description:
  //     "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
  //   thumbnail: sidefolioTailwindMasterKit,
  //   images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "tailwindmasterkit",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
];
