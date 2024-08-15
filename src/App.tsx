import { MainContent } from "./components/MainContent";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <div className="scroll-smooth">
      <MainContent />
      <Menu title="Menu" triggerName="☰">
        <div className="flex">
          <a href="/test" className="underline hover:font-semibold">Open test page</a>
        </div>
      </Menu>
    </div>
  );
}
