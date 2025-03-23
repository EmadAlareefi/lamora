import Image from "next/image";

async function getHomepageData() {
  console.log(process.env.STRAPI_API_URL);
  const res = await fetch(`${process.env.STRAPI_API_URL}/api/homepage?populate=*`, {
    cache: "no-store", // Disable caching for fresh data, or use "force-cache" for ISR
  });
  if (!res.ok) {
    throw new Error("Failed to fetch homepage data");
  }
  
  const { data } = await res.json();
  console.log(data);
  return data;
}

export default async function Home() {
  const homepage = await getHomepageData();
  return (
    <div className="w-full bg-cotton overflow-hidden">
      <main className="w-full h-full relative flex flex-col min-h-[100vh] justify-start items-center">
        <div className="relative">
          <a href="https://app.houseofcb.com/category?category_id=1" className="hidden lg:block relative w-full h-full overflow-hidden">
          
          <img alt="main-img-desktop" fetchPriority="high" width="1512" height="816" decoding="async" data-nimg="1" className="img-desktop w-full h-auto" srcSet="https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fhome%2Fimages%2Fslider%2F20250309_slider_hero_desktop_1.jpg&amp;w=3840&amp;q=100 1x" src="https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fhome%2Fimages%2Fslider%2F20250309_slider_hero_desktop_1.jpg&amp;w=3840&amp;q=100">
          </img>
          </a>
          <a className="block lg:hidden relative w-screen h-screen overflow-hidden" href="https://app.houseofcb.com/category?category_id=1"><img alt="main-img-mobile" fetchPriority="high" width="375" height="760" decoding="async" data-nimg="1" className="w-full h-full object-cover" srcSet="https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fhome%2Fimages%2Fslider%2F20250309_slider_hero_mobile_1.jpg&amp;w=384&amp;q=100 1x, https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fhome%2Fimages%2Fslider%2F20250309_slider_hero_mobile_1.jpg&amp;w=3840&amp;q=100 2x" src="https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fhome%2Fimages%2Fslider%2F20250309_slider_hero_mobile_1.jpg&amp;w=3840&amp;q=100" /><div className="absolute bottom-0 left-0 grid grid-cols-1 w-full h-full items-end"><div className="w-full flex justify-center pb-[196px] lg:pb-[210px]"><div className="flex flex-col items-center text-center gap-4 max-w-[300px] w-[300px] text-white "><p className="flex flex-col font-jjannon-italic italic font-normal text-lg leading-[27px] tracking-[0.4px]"><span></span><span></span></p><p className="font-gotham-bold uppercase text-[10px] leading-[9px] tracking-[0.4px]"></p></div></div></div></a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
