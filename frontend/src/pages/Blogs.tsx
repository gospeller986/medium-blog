import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"


export const Blogs = () => {
  return (<>
     <Appbar/>
    <div className="flex justify-center" >
        <div className="">
        <BlogCard 
        authorName="Satyajit Pal" 
        title="How an Ugly Single Page Website Makes $5,000 a month with Affiliate  Marketing"
        content = "I just had my first (small) win as an indie hacker, selling my project blocs.me for $4,000. Blocs is a suite of Notion widgets for habit building .It's not a life changing amount but I've learned a lot from the process of going from 30,000 signups and $100 MRR this past year. I have a few ideas about how I would advance my new ideas to scale apps to a larger MRR. I'll share them in this post."    
        publishedDate="26th August , 2024"
        />
        <BlogCard 
        authorName="Satyajit Pal" 
        title="Embracing Docker for Node Js : To PM2 or not to PM2 "
        content = "I just had my first (small) win as an indie hacker, selling my project blocs.me for $4,000. Blocs is a suite of Notion widgets for habit building .It's not a life changing amount but I've learned a lot from the process of going from 30,000 signups and $100 MRR this past year. I have a few ideas about how I would advance my new ideas to scale apps to a larger MRR. I'll share them in this post."    
        publishedDate="26th August , 2024"
        />
        <BlogCard 
        authorName="Satyajit Pal" 
        title="How to Make your first $100k as a Indie Hacker"
        content = "I just had my first (small) win as an indie hacker, selling my project blocs.me for $4,000. Blocs is a suite of Notion widgets for habit building .It's not a life changing amount but I've learned a lot from the process of going from 30,000 signups and $100 MRR this past year.."    
        publishedDate="26th August , 2024"
        />
        
        <BlogCard 
        authorName="Satyajit Pal" 
        title="Embracing Docker for Node Js : To PM2 or not to PM2 "
        content = "I just had my first (small) win as an indie hacker, selling my project blocs.me for $4,000. Blocs is a suite of Notion widgets for habit building .It's not a life changing amount but I've learned a lot from the process of going from 30,000 signups and $100 MRR this past year. I have a few ideas about how I would advance my new ideas to scale apps to a larger MRR. I'll share them in this post."    
        publishedDate="26th August , 2024"
        />
        </div>
    </div>

    </>
  )
}
