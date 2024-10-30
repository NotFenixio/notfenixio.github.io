export const App = () => {
  return (
    <div className="font-[Syne] p-4 flex flex-col">
      <div>
        <h1 className="text-2xl">Hello.</h1>
        <h1 className="text-2xl">I'm Fen.</h1>
        <p>You'd see a fancy 3d render here or something, but let's make this quick.</p>
        <br />
        <p>I'm a developer, engineer (sometimes, very bad at it) and a makeshift 3d artist.</p>
        <p>I code in <span className="text-[#306998]">Python</span>, <span className="text-[#f0db4f]">JavaScript</span>, <span className="text-[#29beb0]">Go</span> and a bit of <span className="text-[#f89820]">Java</span>, although I also have knowledge of <span className="text-[#61DBFB]">React</span>, NextJS, and some <span className="text-[#41B883]">Vue</span>.</p>
        <br />
        <p>I like languages, reading, writing and design.</p>
      </div>
      <div>
        <h1 className="text-2xl">Projects</h1>
        Honestly, I would put something here, but I don't think any project of mine is important enough to be mentioned here.
        <br />
        However, you can see my stupid half-baked and dead projects over <a href="https://github.com/NotFenixio?tab=repositories" target="_blank" className="font-semibold text-sky-500 hover:text-sky-600">my GitHub repos</a>.

      </div>
      <div className="mt-20">
        copyright Fen 2024-25
      </div>
    </div>
  )
}