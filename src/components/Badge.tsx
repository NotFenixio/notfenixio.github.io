export function Badge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white p-1 pr-2 max-w-full">
      <img 
        height="24" 
        width="24" 
        src={`https://cdn.simpleicons.org/${icon}/_/ffffff`} 
        alt={`${name} icon`}
        className="flex-shrink-0"
      />
      <span className="badge-name text-sm whitespace-normal break-words text-white">{name}</span>
    </div>
  );
}