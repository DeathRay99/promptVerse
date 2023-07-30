import "@styles/globals.css";
import Feed from "@components/Feed"
import Provider from "@components/Provider";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
      Welcome to promptVerse – an open-source AI prompting tool for modern creators. Discover, create, and share creative prompts effortlessly. Unleash your imagination with our AI-generated personalized prompts. Join a vibrant community, modify prompts, and collaborate worldwide. Privacy and inclusivity are our priorities. Welcome to boundless creativity!
      </p>
      
    </section>
  );
};

export default Home;
