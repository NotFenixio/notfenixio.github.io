interface LanguageProps {
  name: string;
  value: number;
  summary: string;
}

export function Language({name, value, summary}: LanguageProps) {
  return (
    <details>
      <summary>
        {name}{" "}
        <meter min={0} max={100} low={33} high={66} optimum={80} value={value} />
        <span className="">{" "}{value}%</span>
      </summary>
      <p>{summary}</p>
    </details>
  )
}
