import { Appbar_general } from "../components/Appbar_general";
import { Footer } from "../components/Footer";

export const Landing = () => {
  return (
    <div className="h-screen" >
      <Appbar_general />
      <div className="h-screen w-full mb-[10rem]">
        <div className="flex h-screen flex-col md:flex-row">
          <div className=" flex flex-col p-10  lg:pl-[10rem] justify-center z-10">
            <div className="text-4xl lg:text-7xl  mb-6 font-extrabold max-w-3xl  ">
              Tired of not being able to remember <br />
              the <span className=" text-green-500">Important</span> <br />
              stuff ???
            </div>
            <div className=" md:text-xl text-slate-400">
              Throw all your thoughts to your{" "}
              <span className=" text-pink-400 font-bold">Second Brain</span>{" "}
              <br />
              <a
                href="/signup"
                className="underline text-green-500 font-semibold"
              >
                Join In
              </a>{" "}
              , Adding Features real Soon !!!
            </div>
          </div>
          <div className="flex flex-col justify-center lg:pl-20 z-10 ">
            <img
              src="https://i.pinimg.com/originals/3a/d9/2f/3ad92f626f5fc50edfe4f22b78bafbb6.gif"
              alt="BrainImage"
            />
          </div>
        </div>
        <div className="flex h-screen mt-20 justify-center lg:mb-[10rem] ">
          <div className="grid  border border-gray-200 rounded-lg shadow-sm  md:grid-cols-2 bg-white m-3 mb-[20rem] ">
            <figure className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] lg:px-20 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Very easy to write
                </h3>
                <p className="my-4 max-w-lg">
                  I've tried several blogging platforms, but none compare to the
                  simplicity and functionality of this site. It's intuitive
                  interface and customizable features have made my blogging
                  experience a breeze!
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500  ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className=" bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] lg:px-20 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg ">
              <blockquote className="max-w-xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Solid Project by Satya
                </h3>
                <p className="my-4 max-w-lg ">
                  As a newbie blogger, I was intimidated by the idea of starting
                  my own website. Thanks to this platform's user-friendly design
                  and helpful support team, I was able to launch my blog in no
                  time! Highly recommend!"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                  <div>Roberta Casas</div>
                  <div className="text-sm text-gray-500 ">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className=" bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] lg:px-20 flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Mindblowing workflow
                </h3>
                <p className="my-4 max-w-lg">
                  I've been blogging for years, and I've finally found the
                  perfect platform for my content. The site's sleek design and
                  powerful tools have taken my blog to the next level,
                  attracting more readers and engagement than ever before."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className=" bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] lg:px-20 flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg ">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Efficient Collaborating
                </h3>
                <p className="my-4 max-w-lg ">
                  This blogging website has completely transformed the way I
                  share my thoughts and ideas online. With its seamless
                  integration of multimedia elements and SEO-friendly features,
                  I've been able to grow my audience and expand my reach in ways
                  I never thought possible.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                  <div>Joseph McFall</div>
                  <div className="text-sm text-gray-500 ">CTO at Google</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="bg-gradient-to-b from-pink-50 to-transparent  w-full h-full absolute top-[5rem] left-0 z-0"></div>
      </div>
      <div className="bottom-0 fixed mt-[15rem] w-full ">
      <Footer/>
      </div>
      
    </div>
    
  );
};
