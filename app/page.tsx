import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(shared)/Other";
import Subscribe from "app/(shared)/Subscribe";
import Sidebar from "app/(shared)/Sidebar";
import { prisma } from "app/api/client";

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

export default async function Home() {
  const posts = await getPosts();
  console.log("posts:", posts);
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <Tech />
        <Travel />
        <Other />
        <div className="hidden md:block">
          <Subscribe />
        </div>
      </div>
      <div className="basic-1/4">
        <Sidebar />
      </div>
    </main>
  );
}
