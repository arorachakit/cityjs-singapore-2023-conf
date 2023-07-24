import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {

  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", ""); // GETTING SLUG

  const story = useStoryblok(slug, { version: "draft" }); // FETCHING DATA
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />; // RENDERING DYNAMIC COMPONENTS
}
export default App;