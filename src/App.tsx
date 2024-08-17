import { MainContent } from "./components/MainContent";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <div className="scroll-smooth">
      <MainContent />
      <Menu title="Menu" triggerName="☰">
        <div className="flex *:underline *:hover:font-semibold">
          <p>Main page (you're currently here)</p>
          <a href="/blog">Blog</a>
        </div>
      </Menu>
    </div>
  );
}
