import React from "react";
import { Button } from "./ui/MovingBorders";

const codingProfiles = [
  {
    id: 1,
    name: "CodeForces",
    url: "https://codeforces.com/profile/Hardikgarg987",
    logo: "/codeforces.png",
    description: "Achieved a max contest rating of 1332",
  },
  {
    id: 2,
    name: "LeetCode",
    url: "https://leetcode.com/u/hardikgarg987/",
    logo: "/leetcode-logo.svg",
    description: "Achieved a contest rating of 1602.",
  },
];

const CodingProfiles = () => {
  return (
    <div className="py-20 w-full" id="code">
      <h1 className="heading text-center text-4xl font-semibold text-gray-900 dark:text-white mb-8">
        My <span className="text-purple">Coding Profiles</span>
      </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mx-auto max-w-5xl">
        {codingProfiles.map((profile) => (
          <Button
            key={profile.id}
            duration={Math.floor(Math.random() * 10000) + 10000} // Random animation duration
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="relative text-black dark:text-white border-neutral-200 dark:border-slate-800 flex flex-col items-center p-6 transition-transform transform hover:scale-105 shadow-lg rounded-xl overflow-hidden"
          >
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src={profile.logo}
                alt={`${profile.name} logo`}
                className="w-20 h-20 mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
              <p className="text-sm text-gray-300 text-center px-4">
                {profile.description}
              </p>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
