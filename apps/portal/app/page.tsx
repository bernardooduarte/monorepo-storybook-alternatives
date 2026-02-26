const tools = [
  { name: "Ladle (React)", path: "/tools/ladle/" },
  { name: "Histoire (Vue)", path: "/tools/histoire/" },
  { name: "Docusaurus (Docs)", path: "/tools/docs/" },
  { name: "Styleguidist (React)", path: "/tools/styleguidist/" },
  { name: "Playroom (React)", path: "/tools/playroom/" }
];

export default function Page() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>monorepo-storybook-alternatives</h1>
      <p>Portal de vitrines (alternativas ao Storybook)</p>
      <ul>
        {tools.map(t => (
          <li key={t.path}>
            <a href={t.path}>{t.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}