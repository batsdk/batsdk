function App() {

  return (
    <div className="max-w-full overflow-x-hidden">
      <section className="bg-[#ededed] min-h-[60vh] md:min-h-screen min-w-[100vw]">
        <div className="flex min-h-screen flex-col justify-center items-center text-[#231f20]">
          <h1 className="text-7xl md:text-9xl" >Shemil</h1>
          <h5 className="text-lg md:text-2xl flex flex-wrap text-center" >Engineer Crafting innovative, scalable solutions</h5>
        </div>
      </section>
      <section className="bg-[#290628] min-h-screen w-full flex items-center justify-center " >
        <div className="max-w-[70vw] mx-auto">

          {/* About Title */}
          <>
            <h1 className="text-center text-2xl md:text-5xl " >Meet the Developer </h1>
            <h2 className="text-center text-xl md:text-3xl" >(No Coffee ☕ Required)</h2>
          </>

          {/* About Section */}
          <div className="mt-10" >
            <h4 className="text-base md:text-lg">
              Hey there! I’m <span className="font-bold">Shemil Kaweesha</span>, a code-wrangling, guitar-strumming Software Engineer. When I’m not deep into <span className="font-bold">TypeScript</span> or figuring out why my <span className="font-bold">React</span> app won’t render (again), you’ll find me unwinding with my guitar, enjoying the creative flow.
            </h4>
            <br />
            <h4 className="text-base md:text-lg" >
            I speak fluent <span className="font-bold">TypeScript</span>, dabble in cloud wizardry with <span className="font-bold">Azure ⚡</span>, and occasionally throw in some sarcasm (the third one is optional, but it makes debugging more fun). I love clean code, smart design, and making the internet a little better, one project at a time. And no, I don’t run on coffee like the stereotypical dev — I’m more of a “give me good vibes and snacks” kind of guy. Let’s build something awesome together — or at least laugh at my code.
            </h4>
          </div>

          {/* Socials */}
        </div>
      </section>
    </div>
  )
}

export default App
