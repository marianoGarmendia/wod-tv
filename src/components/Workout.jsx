function Workout({ wod }) {
  return (
    <article>
      {wod === "CROSSFIT" ? (
        <div>
          <pre className=" text-3xl text-[#eee] text-center tracking-wide font-[Roboto] ">
            {`

1) Amrap 20': libre división de reps 
40 box jumps 
50 wall balls
30 Burpees to plate
6 wall climb 
100 mts run synchro

2)Amrap 5':
10/10 Mb Russian twist
10 Mb crunch
10 rodillas a la panza en plancha ( pies en Mb)
10" Hollow hold con pelota en manos.
        
        `}
          </pre>
        </div>
      ) : (
        <div>Wod de: {wod}</div>
      )}
    </article>
  );
}

export default Workout;
