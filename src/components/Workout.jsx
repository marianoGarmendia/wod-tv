// eslint-disable-next-line react/prop-types
function Workout({ wod }) {
  return (
    <article>
      {wod === "Crossfit" ? (
        <div>
          <pre className=" text-4xl text-[#eee] text-center tracking-wider  font-[Roboto] ">
            {`

"1) OTM X 6´:
1 snatch lift off+
1 tempo power snatch
+ 1 low hang power snatch
 +1 snatch balance

3) Completar:
 21-15-12-9
dead db snatch(totales)
burpee box jump over
entre rounds 
25 sit ups 

tc 16'
        
        `}
          </pre>
        </div>
      ) : wod === "Functional" ? (
        <div>
          <div
            contentEditable="true"
            className=" text-4xl text-[#eee] text-center tracking-wider  font-[Roboto] "
          >
            {`
 
        
        `}
          </div>
        </div>
      ) : wod === "High Intensity" ? (
        <div>
          <pre className=" text-4xl text-[#eee] text-center tracking-wider  font-[Roboto] ">
            {`

          Set Core
          otm x 12'
          40" X 20"
          1- Walkout
          2- Lateral drag
          3- vups alternado

          Otm x 24'
          40" x 20"
          - Mountain climbers
          - Drop squat
          - Sprawl
          - Mb crunch
          - Swing h2h
          - Crab toe touches
        
        `}
          </pre>
        </div>
      ) : wod === "Intense Functional" ? (
        <div>
          <pre className=" text-4xl text-[#eee] text-center tracking-wider  font-[Roboto] ">
            {`

"1) 3x:
6/6 lateral drag en cuadrupedia
20"" hollow hold con disco
12 oh sit ups con disco
30"" wall sit 

2) 
4x 
6 pull ups estrictas
8 remo con barra 
10 fondos triceps con db

3) WOD EN PAREJAS
2 ROUNDS 
50 DB SNATCH
50 BOX JUMP OVER 
50 WALL BALL 
50 SIT UPS 
200 MTS RUN SYNCHRO
* LIBRE DIVISIÓN DE REPS"
        
        `}
          </pre>
        </div>
      ) : wod === "Woman" ? (
        <div>
          <pre className=" text-4xl text-[#eee] text-center tracking-wider  font-[Roboto] ">
            {`

40x20 x3
Estocadas cruzadas atrás alternadas (kb front)
Abdominal Crunch 
Caminata lateral (peso + banda)
Abs pataditas en hollow 

Completar
In: 200 mts run 
3Rondas 
15 box jump over 
30 swing h2h
15 sit ups 
30 sentadillas (kb front)
Out: 200 mts run
        
        `}
          </pre>
        </div>
      ) : wod === "Power Woman" ? (
        <div>
          <pre className=" text-4xl text-[#eee] text-center tracking-wider  font-[Roboto] ">
            {`

No workout today
        
        `}
          </pre>
        </div>
      ) : (
        wod === "Full Body" && (
          <div>
            <pre className=" text-4xl text-[#eee] text-center tracking-wider  font-[Roboto] ">
              {`

4 Rounds
40” x 20”
Bíceps + press 
Gobierno Squat + lunges
Cossack squat 

Superserie 
4 Rounds
10 Back squat 
20 squat jump

4 rounds
10 Push press 
20 Push up diamond
        
        `}
            </pre>
          </div>
        )
      )}
    </article>
  );
}

export default Workout;
