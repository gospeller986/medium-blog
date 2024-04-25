interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="p-10 cursor-pointer " >
      <div className="flex">
        <div className="flex justify-center flex-col" ><Avatar name= {authorName} /></div>
        <div className=" flex justify-center  items-center" >
        <span className="font-bold text-slate-900 pl-2" >{authorName}</span> . <span className=" pl-2 font-thin text-slate-400 " >{publishedDate}</span>
        </div> 
      </div>
      <div className="text-3xl font-extrabold text-black mt-4 ml-4 ">{title}</div>

      <div className="text-md  text-slate-600 font-normal text-wrap max-w-4xl mt-4 ml-4" >{content.slice(0, 300) + "..."}</div>
      <div className=" flex mt-4 ml-4">
        <div>@{authorName}</div>
        <div className=" text-slate-400 ml-4 ">{`${Math.ceil(content.length / 100)} minutes Read `}</div>
      </div>
      <div className=" mt-2 bg-gradient-to-r from-transparent via-black to-transparent  h-[0.05rem] w-full"></div>
    </div>
  );
};

export default function Avatar({name} : {name : string}) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-300">{name[0]}</span>
    </div>
  );
}
