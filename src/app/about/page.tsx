import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Lab - About",
  description:
    "Learn more about Tab Lab, a tool for creating custom guitar tab and scale chart templates.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-gray-200 pt-8 lg:pt-24">
      <header className="custom-prose px-8 mb-10">
        <h1>About</h1>
        <p>
          <strong>Tab Lab</strong> is a tool to create custom guitar tab and
          scale chart templates. Customize, preview, and print layouts that fit
          your specific needs.
        </p>
        <div className="w-full items-end flex flex-row mb-5">
          <span className="leading-none text-base text-gray-700">
            - built by{" "}
            <a
              className="font-semibold underline hover:text-black focus-visible:outline-none focus-visible:ring focus-visible:ring-lime-500 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-200 rounded"
              href="https://andrewdent.dev"
            >
              Andrew Dent
            </a>
            {" // "}
            <a
              className="font-semibold underline hover:text-black focus-visible:outline-none mr-2 focus-visible:ring focus-visible:ring-lime-500 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-200 rounded"
              href="https://grizzlyguitar.com"
            >
              Grizzly Guitar
            </a>
          </span>
        </div>
      </header>

      <section className="custom-prose px-8 mb-10">
        <h2>Why Tab Lab?</h2>
        <p>
          As a musician, I use tablature often. Whether I&apos;m transcribing a
          song I want to learn, taking quick notes at band practice, or bringing
          a catalog of songs to a performance, I use tablature as a quick and
          easy way to write and read music.
        </p>
        <p>
          <strong>
            Many musicians use tablature in a similar way, but finding a
            template can be surprisingly frustrating.
          </strong>
        </p>
        <p>
          In the past, whenever I needed a blank sheet of tab paper, I would
          search the internet. Sometimes I found something that would work, but
          I often couldn&apos;t. Attempts to create my own templates with
          programs like Photoshop took a lot of time to create and were
          difficult to quickly adjust.
        </p>
        <p>
          The issues most commonly found when searching for tab paper templates
          include:
        </p>
        <ul>
          <li>Difficult to navigate websites</li>
          <li>Deceptive file download buttons</li>
          <li>
            Bombarded with advertisements, watermarks, or other unwanted text
          </li>
          <li>No easy way to make adjustments</li>
          <li>
            Limited options for less common instruments like 5-string bass or
            7-string guitar
          </li>
        </ul>
        <p>
          I built this project to address those issues. This is a simple tool
          that allows musicians to quickly create the perfect template for their
          needs.
        </p>
      </section>

      <section className="custom-prose px-8 mb-10">
        <h2>Key Features</h2>
        <ul className="list-disc mb-4">
          <li>
            <strong>Customizable Layouts:</strong> Adjust string count, tab
            size, and more to match your instrument.
          </li>
          <li>
            <strong>Preview & Print:</strong> See your template in real-time and
            print or save it as a PDF.
          </li>
          <li>
            <strong>User-Friendly Design:</strong> Built for quick adjustments
            and ease of use, without distractions.
          </li>
        </ul>
      </section>

      <section className="custom-prose px-8 mb-16">
        <h2>Future Plans</h2>
        <p>
          I plan on improving Tab Lab over time. Upcoming features include
          preset templates, user accounts, and more customization options.
        </p>
      </section>

      <div className="px-8 mb-32 w-full max-w-[65ch]">
        <div className="leading-none text-base text-gray-700 flex flex-row items-end justify-center w-full">
          <span className="mr-2">Part of</span>
          <a
            className="font-semibold underline group hover:text-black focus-visible:outline-none mr-2 focus-visible:ring focus-visible:ring-lime-500 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-200 rounded flex items-end"
            href="https://grizzlyguitar.com"
          >
            Grizzly Guitar
            <div className="w-8 ml-2">
              <svg
                className="fill-gray-800 group-hover:fill-amber-500 transition-colors ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 67.5"
                version="1.0"
              >
                <defs>
                  <clipPath id="a">
                    <path d="M 0.441406 0.59375 L 119.558594 0.59375 L 119.558594 66.855469 L 0.441406 66.855469 Z M 0.441406 0.59375" />
                  </clipPath>
                </defs>
                <g clipPath="url(#a)">
                  <path
                    fill=""
                    d="M 113.132812 20.113281 C 112.9375 19.855469 112.816406 19.410156 112.894531 19.113281 C 113.121094 18.261719 112.863281 17.566406 112.375 16.921875 C 111.398438 15.648438 110.40625 14.390625 109.40625 13.132812 C 108.578125 12.09375 107.730469 11.070312 106.886719 10.042969 C 106.3125 9.34375 105.945312 8.570312 105.785156 7.667969 C 105.523438 6.1875 104.878906 5.910156 103.570312 6.695312 C 102.546875 7.304688 101.492188 7.757812 100.273438 7.523438 C 98.863281 7.257812 97.464844 6.945312 96.058594 6.652344 C 94.449219 6.316406 92.851562 5.929688 91.230469 5.660156 C 90.558594 5.550781 89.839844 5.648438 89.148438 5.710938 C 88.179688 5.792969 87.292969 5.585938 86.53125 4.992188 C 85.394531 4.113281 84.285156 3.207031 83.183594 2.28125 C 82.351562 1.582031 81.453125 1.015625 80.425781 0.644531 L 77.355469 0.644531 C 75.492188 1 73.777344 1.851562 71.980469 2.421875 C 71.769531 2.488281 71.460938 2.625 71.421875 2.785156 C 71.277344 3.347656 70.867188 3.308594 70.472656 3.28125 C 67.710938 3.097656 64.945312 2.953125 62.191406 2.695312 C 56.847656 2.195312 51.507812 1.636719 46.167969 1.082031 C 45.125 0.976562 44.09375 0.71875 43.046875 0.65625 C 42.484375 0.625 41.90625 0.902344 41.332031 0.972656 C 38.644531 1.308594 35.957031 1.652344 33.390625 2.558594 C 30.371094 3.628906 27.738281 5.398438 25.15625 7.246094 C 24.109375 7.996094 23.054688 8.757812 22.132812 9.644531 C 21.304688 10.4375 20.5 11.332031 19.957031 12.324219 C 18.945312 14.183594 17.6875 15.816406 16.222656 17.328125 C 15.214844 18.375 14.269531 19.488281 13.378906 20.640625 C 11.859375 22.597656 11.160156 24.914062 10.878906 27.316406 C 10.203125 33.136719 7.949219 38.410156 5.496094 43.636719 C 3.945312 46.9375 2.441406 50.261719 0.9375 53.585938 C 0.753906 53.996094 0.601562 54.425781 0.453125 54.863281 L 0.453125 58.621094 C 1.023438 60.382812 2.007812 61.949219 2.988281 63.515625 C 3.519531 64.367188 4.363281 64.675781 5.285156 64.804688 C 7.847656 65.15625 10.425781 65.21875 13.003906 64.964844 C 14.671875 64.796875 15.042969 63.941406 14.164062 62.503906 C 13.738281 61.804688 13.140625 61.464844 12.34375 61.433594 C 12.089844 61.425781 11.832031 61.449219 11.585938 61.402344 C 11.246094 61.339844 10.671875 61.285156 10.625 61.113281 C 10.484375 60.601562 10.003906 60.058594 10.539062 59.476562 C 11.179688 58.773438 11.738281 58 12.414062 57.335938 C 16.125 53.667969 19.875 50.039062 23.578125 46.367188 C 24.429688 45.523438 25.175781 44.574219 25.914062 43.625 C 26.523438 42.839844 27 42.582031 27.851562 43.117188 C 28.992188 43.824219 30.054688 44.667969 31.089844 45.527344 C 34.894531 48.675781 37.058594 52.945312 39.136719 57.285156 C 40.164062 59.429688 41.328125 61.515625 42.550781 63.554688 C 43.609375 65.324219 45.191406 66.191406 47.359375 66.15625 C 48.929688 66.128906 50.507812 66.484375 52.078125 66.675781 C 52.449219 66.71875 52.816406 66.792969 53.183594 66.855469 L 58.898438 66.855469 C 59.320312 66.671875 59.773438 66.539062 60.160156 66.300781 C 60.945312 65.816406 60.949219 65.023438 60.175781 64.523438 C 59.738281 64.238281 59.25 64.027344 58.773438 63.796875 C 57.902344 63.375 57.015625 62.980469 56.148438 62.539062 C 55.007812 61.957031 54.269531 60.988281 54.238281 59.738281 C 54.117188 55.191406 52.703125 50.914062 51.605469 46.570312 C 51.445312 45.9375 51.285156 45.300781 51.125 44.667969 C 50.933594 43.9375 51.078125 43.714844 51.859375 43.652344 C 52.449219 43.605469 53.039062 43.597656 53.632812 43.589844 C 54.417969 43.578125 55.125 43.351562 55.761719 42.886719 C 56.425781 42.398438 57.09375 41.917969 57.773438 41.449219 C 58.050781 41.261719 58.347656 41.085938 58.65625 40.957031 C 59.179688 40.742188 59.503906 40.917969 59.523438 41.488281 C 59.546875 42.222656 59.535156 42.96875 59.4375 43.699219 C 59.15625 45.785156 58.796875 47.863281 58.519531 49.949219 C 58.132812 52.863281 58.6875 55.710938 59.332031 58.527344 C 59.710938 60.183594 60.34375 61.792969 61.644531 62.949219 C 62.449219 63.664062 63.414062 64.269531 64.410156 64.683594 C 67.050781 65.792969 69.835938 66.410156 72.699219 66.632812 C 72.742188 66.632812 72.78125 66.644531 72.824219 66.644531 C 73.660156 66.671875 74.554688 66.734375 74.976562 65.816406 C 75.421875 64.84375 75.292969 63.84375 74.632812 63.011719 C 74.390625 62.707031 73.894531 62.550781 73.484375 62.433594 C 72.589844 62.179688 71.671875 62.03125 70.777344 61.777344 C 69.871094 61.519531 69.445312 60.851562 69.4375 59.929688 C 69.40625 57.132812 69.988281 54.445312 70.910156 51.824219 C 70.929688 51.761719 70.953125 51.703125 70.976562 51.644531 C 71.484375 50.570312 71.832031 50.460938 72.589844 51.378906 C 74.25 53.394531 76.566406 54.21875 78.894531 55.082031 C 81.1875 55.933594 83.457031 56.847656 85.722656 57.769531 C 86.164062 57.949219 86.566406 58.25 86.945312 58.546875 C 87.425781 58.929688 87.484375 59.425781 87.1875 59.960938 C 87.085938 60.144531 87 60.347656 86.863281 60.503906 C 85.40625 62.171875 85.914062 64.019531 86.414062 65.835938 C 86.628906 66.628906 87.125 66.808594 88.03125 66.574219 C 89.402344 66.222656 90.554688 65.480469 91.492188 64.445312 C 91.949219 63.933594 92.371094 63.347656 92.65625 62.726562 C 93.683594 60.484375 94.203125 58.109375 94.441406 55.652344 C 94.695312 52.996094 93.691406 50.9375 91.605469 49.328125 C 90.734375 48.660156 89.941406 47.894531 89.058594 47.238281 C 86.953125 45.667969 86.457031 43.546875 86.894531 41.105469 C 87.234375 39.199219 87.613281 37.296875 88.015625 35.402344 C 88.585938 32.703125 89.730469 31.660156 92.570312 31.277344 C 95.917969 30.832031 99.28125 30.890625 102.632812 31.21875 C 105.195312 31.464844 107.75 31.8125 110.308594 32.121094 C 112.628906 32.398438 114.746094 31.800781 116.753906 30.6875 C 117.695312 30.164062 118.628906 29.636719 119.570312 29.109375 L 119.570312 26.957031 C 117.023438 25.050781 115.039062 22.613281 113.132812 20.113281"
                  />
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
