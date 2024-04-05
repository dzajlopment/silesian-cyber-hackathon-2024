export const ReportsScreen = () => {
  return (
    <div className="grid grid-cols-[20%,1fr] grow border-t-[1px] border-separator">
      <nav>
        <ul>
          <li>Electricity, 18h ago</li>
        </ul>
      </nav>
      <main className="bg-blurry-white">
        <article className="mx-6 p-6 bg-white">
          <header className="flex items-baseline gap-2 mb-4">
            <h1 className="text-2xl">Electricity</h1>
            <time className="opacity-50 text-sm">18h ago</time>
          </header>
        </article>
      </main>
    </div>
  );
};
