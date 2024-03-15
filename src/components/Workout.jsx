function Workout({ wod }) {
  return (
    <article>
      {wod === "CROSSFIT" ? (
        <div>
          <pre className=" text-3xl text-[#eee] text-balance tracking-wide font-[Roboto]">
            {`

        OTM x 8'
        5 Sprawl + 5 Pushups + 5 Burpees

        Amrap x 18'
        30 CFT Swing
        20 Goblet Lunges
        10 F82H
        
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
