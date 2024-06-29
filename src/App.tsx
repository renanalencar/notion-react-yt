function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16 prose prose-violet">
            <h1>As Vantagens do Tailwind CSS</h1>
            <ul>
              <li>Controle total sobre o estilo</li>
              <li>Processo de estilização rápido</li>
              <li>Responsividade e segurança</li>
              <li>Recursos adicionais</li>
            </ul>
            <blockquote>
              "O Tailwind CSS é uma ferramenta poderosa para desenvolvedores
              front-end. Sua abordagem pragmática e modular permite criar
              interfaces incríveis com rapidez."
            </blockquote>
            <p>Você pode aprender mais sobre Tailwindcss na <a href="https://rocketseat.com.br">rocketseat.com.br</a></p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
