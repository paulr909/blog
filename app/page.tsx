import Posts from "./components/Posts";
import ProfilePic from "./components/ProfilePic";

// 3600 seconds = 1 hour
export const revalidate = 3600;

export default function Home() {
  return (
    <div className="mx-auto">
      <ProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Welcome to my blog! Here you will find my latest posts. Enjoy! 🚀
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
