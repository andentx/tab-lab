export default function Logo() {
  return (
    <div className="-mx-2 flex h-16 shrink-0 items-center self-start">
      <a
        href="/"
        id="headerLogo"
        className="group z-1000 flex min-w-16 cursor-pointer items-center justify-center rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring focus-visible:ring-lime-200"
      >
        <h1 className="text-2xl font-bold tracking-tight text-white hover:text-gray-200">
          tab
          <span className="ml-1 text-lime-300 group-hover:text-lime-400">
            lab
          </span>
        </h1>
      </a>
    </div>
  );
}
