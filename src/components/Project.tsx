interface ProjectProps {
  name: string;
  image?: string;
  description: string;
  link?: string;
}

export function Project({ name, image, description, link }: ProjectProps) {
  if (image) {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          id="project"
          className="flex flex-col bg-zinc-800 rounded-lg overflow-hidden border-zinc-600 border"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-60 rounded-md rounded-b-none object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="mt-2 text-zinc-300">{description}</p>
          </div>
        </a>
      );
    } else {
      return (
        <div className="flex flex-col bg-zinc-800 rounded-lg overflow-hidden" id="project">
          <img
            src={image}
            alt={name}
            className="w-full h-60 object-cover rounded-md"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="mt-2 text-zinc-300">{description}</p>
          </div>
        </div>
      );
    }
  }

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        id="project"
        className="flex flex-col items-center bg-zinc-800 rounded-lg overflow-hidden border-zinc-600 border"
      >
        <p className="text-4xl h-60 flex items-center">{name}</p>
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-zinc-300">{description}</p>
        </div>
      </a>
    );
  } else {
    return (
      <div className="flex flex-col items-center bg-zinc-800 rounded-lg overflow-hidden" id="project">
        <p className="text-4xl text center h-60 flex items-center">{name}</p>
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-zinc-300">{description}</p>
        </div>
      </div>
    );
  }
}
