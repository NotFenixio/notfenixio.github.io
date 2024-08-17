import { Badge } from "./Badge";
import { Spoiler } from "./Spoiler";
import { Language } from "./Language";
import { Project } from "./Project";

export function MainContent() {
  return (
    <main className="p-2 flex flex-col gap-y-2">
      <div className="flex justify-center">
        <img
          src="https://github.com/notfenixio.png"
          width={256}
          height={256}
          className="rounded-full"
        />
      </div>
      <p className="text-4xl text-center">Hi. I'm NotFenixio.</p>
      <div id="short-description">
        <p>
          I'm a full-stack developer based in Spain.{" "}
          <Spoiler className="text-sm">
            (if we start being overly meticulous, the Basque Country)
          </Spoiler>
        </p>
        <p>
          I uh, like making stuff, mostly related to programming, but I also
          enjoy things like PCB designing, 3D modeling, dismantling electronics
          and more things that I currently can't remember.
          <br />I also like dogs, music, and reasoning.
        </p>
      </div>
      <br />
      <div id="programming-languages-i-know">
        <p className="text-2xl font-semibold">Programming languages I know</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-2 gap-x-10">
          <Language
            name="HTML/CSS"
            value={100}
            summary="Come on, who actually likes web development anyways?"
          />
          <Language
            name="Python"
            value={95}
            summary="Python was my first language; it was awesome, although I've been recently moving from it..."
          />
          <Language
            name="JavaScript"
            value={80}
            summary="It's neccesary for web development, so yeah, I started learning it after I knew how to do a hello world in HTML."
          />
          <Language
            name="TypeScript"
            value={75}
            summary="The same as JavaScript but with types? I'm in."
          />
          <Language name="Go" value={60} summary="It's cool, and efficient!" />
          <Language
            name="PHP"
            value={25}
            summary="This was during my dark era."
          />
          <Language
            name="Java"
            value={20}
            summary="Maybe I should resume learning Java, for Spigot and stuff, but ughhh."
          />
          <Language
            name="C++"
            value={15}
            summary="The only reason I've touched it is because of Arduino 🤷‍♂️"
          />
          <Language
            name="Powershell"
            value={10}
            summary="Powerhell- I mean Powershell is a language?! Since I'm a Windows user, I guess I kind of know it?"
          />
          <Language
            name="Rust"
            value={5}
            summary="Couldn't pass from the hello world - it's overrated as hell!!"
          />
        </div>
      </div>
      <br />
      <div id="things-i-use">
        <p className="text-2xl font-semibold">Things I use</p>
        <div id="apps">
          <p className="text-xl font-semibold">Apps</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-2 *:flex *:flex-row *:gap-x-2 *:items-center">
            <div>
              <Badge name="Blender" icon="Blender"></Badge>
              <p>for 3D modeling</p>
            </div>
            <div>
              <Badge name="Fusion 360" icon="Autodesk"></Badge>
              <p>i don't use it very much but it's cool for blueprints</p>
            </div>
            <div>
              <Badge name="Figma" icon="Figma"></Badge>
              <p>for designing and prototyping UIs</p>
            </div>
            <div>
              <Badge name="Inkscape" icon="Inkscape"></Badge>
              <p>for creating and editing vector graphics</p>
            </div>
            <div>
              <Badge name="GIMP" icon="GIMP"></Badge>
              <p>for editing photos and images</p>
            </div>
            <div>
              <Badge name="Krita" icon="Krita"></Badge>
              <p>digital drawing</p>
            </div>
            <div>
              <Badge name="Notion" icon="Notion"></Badge>
              <p>for annotating things and planning</p>
            </div>
            <div>
              <Badge name="Obsidian" icon="Obsidian"></Badge>
              <p>taking notes and storing my thoughts</p>
            </div>
            <div>
              <Badge name="HTTPie" icon="HTTPie"></Badge>
              <p>for testing APIs</p>
            </div>
            <div>
              <Badge name="Trello" icon="Trello"></Badge>
              <p>because of the kanban boards</p>
            </div>
          </div>
        </div>
        <br />
        <div id="hosting">
          <p className="text-xl font-semibold">Hosting</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-2 *:flex *:flex-row *:gap-x-2 *:items-center">
            <div>
              <Badge name="Vercel" icon="Vercel"></Badge>
              <p>yes, yes, I LOVE Vercel!</p>
            </div>
            <div>
              <Badge name="CloudFlare" icon="CloudFlare"></Badge>
              <p>i use Workers, Workers AI and Pages</p>
            </div>
            <div>
              <Badge name="GitHub Pages" icon="GitHub"></Badge>
              <p>in fact, this is hosted on GitHub pages!</p>
            </div>
            <div>
              <Badge name="Firebase" icon="Firebase"></Badge>
              <p>one of my apps was powered by it</p>
            </div>
          </div>
        </div>
        <br />
        <div id="databases">
          <p className="text-xl font-semibold">Databases</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-2 *:flex *:flex-row *:gap-x-2 *:items-center">
            <div>
              <Badge name="SurrealDB" icon="SurrealDB"></Badge>
              <p>it's so cool and easy to setup and use</p>
            </div>
            <div>
              <Badge name="Supabase" icon="Supabase"></Badge>
              <p>personally, it's my go-to database</p>
            </div>
            <div>
              <Badge name="Redis" icon="Redis"></Badge>
              <p>how am I supposed to do rate-limiting then</p>
            </div>
            <div>
              <Badge name="SQLite" icon="SQLite"></Badge>
              <p>for some time, it was my go-to database</p>
            </div>
            <div>
              <Badge name="Prisma" icon="Prisma"></Badge>
              <p>used it for some time</p>
            </div>
            <div>
              <Badge name="Firebase" icon="Firebase"></Badge>
              <p>this time as a database</p>
            </div>
            <div>
              <Badge name="Mongo DB" icon="MongoDB"></Badge>
              <p>two of my apps were powered by it (Atlas)</p>
            </div>
            <div>
              <Badge name="Postgres" icon="PostgreSQL"></Badge>
              <p>i've tried it standalone and it was mid</p>
            </div>
          </div>
        </div>
        <br />
        <div id="platforms">
          <p className="text-xl font-semibold">Platforms</p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-2 *:flex *:flex-row *:gap-x-2 *:items-center">
            <div>
              <Badge name="Arduino" icon="Arduino"></Badge>
              <p>where do I even start 💖</p>
            </div>
            <div>
              <Badge name="GitHub" icon="GitHub"></Badge>
              <p>i mean</p>
            </div>
            <div>
              <Badge name="Git" icon="Git"></Badge>
              <p>uh</p>
            </div>
            <div>
              <Badge name="Docker" icon="Docker"></Badge>
              <p>it's neccesary for everything</p>
            </div>
            <div>
              <Badge name="Crowdin" icon="Crowdin"></Badge>
              <p>translations are fun!</p>
            </div>
            <div>
              <Badge name="Gradle" icon="Gradle"></Badge>
              <p>maven is bad 👎</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div id="projects">
        <p className="text-2xl font-semibold">Projects</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          <Project
            name="Voyager"
            image="./media/images/voyager.png"
            description="An indexer for the Scratch Forums written in Python, that was supposed to be a replacement for ScratchDB."
            link="https://github.com/SnarpleDev/Voyager/"
          />
          <Project
            name="GenIdea"
            image="./media/images/genidea.png"
            link="https://notfenixio.is-a.dev/GenIdea/"
            description="A visually pleasing ideas generator."
          />
          <Project
            name="OwOBot"
            description="A bot for the Meower social media, that resembles in some way the functioning of the original OwO Discord bot. Written in TS using RoarBot."
          />
          <Project
            name="BadBot"
            description="Another bot for the Meower social media. It was the biggest bot and first bot to have AI integrated. Was written in Python using MeowerBot.py and is semi deprecated."
          />
          <Project
            name="Meower Auth"
            link="https://github.com/NotFenixio/meowerauth"
            description="A service that lets developers confirm a user's identity through an easy-to-use API."
          />
        </div>
      </div>
    </main>
  );
}
