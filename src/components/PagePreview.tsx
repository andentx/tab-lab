import GeneratedTabTemplate from "@/components/GeneratedTabTemplate";

const PagePreview = () => {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-gray-200 p-8 print:m-0 print:h-full print:min-h-0 print:w-auto print:p-0">
      <div className="aspect-85/110 w-full max-w-2xl bg-white print:aspect-none lg:h-screen-minus-4rem lg:max-h-[900px] lg:w-auto lg:max-w-none print:h-full print:max-w-none">
        <GeneratedTabTemplate />
      </div>
    </div>
  );
};

export default PagePreview;
