import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";
import styled from "@emotion/styled";

const GameSection = styled.div`
  @media (max-width: 600px) {
    padding: 0.75rem;
  }
  box-shadow: 0 2px 1px hsl(220, 7%, 83%);
  background-color: hsl(110, 5%, 99%);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const GameTitle = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: rgba(0, 0, 0, 0.75);
`;

const GameDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.75);
`;

const DrawButton = styled.button`
  color: #95a7b0;
  border: 2px solid #95a7b0;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px 15px;
  font-family: Cormorant;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: hsl(200, 15%, 97%);
  }
`;

const PromptResult = styled.div`
  margin-top: 1rem;
  padding: 1rem 1.25rem;
  border-left: 3px solid #95a7b0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.75);
`;

const PromptLine = styled.p`
  margin: 0.2rem 0;
`;

// ── Winter Solstice ─────────────────────────────────────────────

const winterPrompts = [
  "Write about a character who is the last keeper of a dying winter tradition.",
  "The solstice fire goes out at midnight. Write what happens next.",
  "Write a scene where two characters share warmth on the longest night of the year.",
  "A gift is exchanged in the dark. Write about what it is and what it means.",
  "Write about a character who waits for the sun to return, afraid it won't.",
  "The snow speaks tonight. Write what it says.",
  "Write about a feast held in the deepest absence of light.",
  "Someone makes a promise at the turning of the year. What do they promise, and to whom?",
  "Write about a tradition that only happens once every generation.",
  "A stranger arrives on the longest night seeking shelter. Write what happens.",
  "Write about the feeling of standing outside at the exact moment of the solstice.",
  "The candles are lit \u2014 one for each year of loss. Write the story behind them.",
  "Write about something that can only be said in the dark.",
  "The sun stands still. Write about a character who refuses to move until it does too.",
  "Write about the moment between the last light fading and the first new light returning.",
];

// ── Fight Scene ───────────────────────────────────────────────

type Scenario = { text: string; isDuel: boolean };

const scenarios: Scenario[] = [
  { text: "B wants to kill A", isDuel: false },
  { text: "A wants to run away from B", isDuel: false },
  { text: "A and B are having a duel", isDuel: true },
  { text: "A is trying to protect someone from B", isDuel: false },
  { text: "B is hunting A", isDuel: false },
  { text: "A has challenged B to a contest of skill", isDuel: true },
  { text: "A and B are fighting over the same prize", isDuel: false },
  { text: "B has mistaken A for their enemy", isDuel: false },
  { text: "A and B are the last two left standing", isDuel: false },
  { text: "B must bring A back, dead or alive", isDuel: false },
];

const reasons = [
  "A has insulted B's mother",
  "B wants to eat A",
  "A has captured B's lover",
  "A stole something precious from B",
  "B is being paid to eliminate A",
  "A witnessed something they were never meant to see",
  "B has confused A for someone else entirely",
  "A and B both want the same throne",
  "B was ordered to retrieve what A is carrying",
  "A owes B a debt they cannot pay",
  "B believes A destroyed everything they held dear",
  "A publicly humiliated B",
  "B's people have hunted A's kind for centuries",
  "A broke a promise that cost B everything",
];

const weapons = [
  "guns",
  "lightsabers",
  "rubber chickens",
  "fists",
  "frying pans",
  "fencing sabres",
  "greatswords",
  "bows and arrows",
  "knives",
  "rapiers",
  "spears",
  "axes",
  "magic",
  "poison darts",
  "baseball bats",
  "candlesticks",
  "pitchforks",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickTwoDifferent<T>(arr: T[]): [T, T] {
  const first = Math.floor(Math.random() * arr.length);
  let second = Math.floor(Math.random() * (arr.length - 1));
  if (second >= first) second++;
  return [arr[first], arr[second]];
}

type FightDraw = {
  scenario: Scenario;
  reason: string;
  weaponA: string;
  weaponB: string | null;
};

// ── Page ────────────────────────────────────────────────────

const WritingGamesPage: React.FC<PageProps> = () => {
  const [solsticePrompt, setSolsticePrompt] = useState<string | null>(null);
  const [fightDraw, setFightDraw] = useState<FightDraw | null>(null);

  const drawSolstice = () => {
    setSolsticePrompt(pickRandom(winterPrompts));
  };

  const drawFight = () => {
    const scenario = pickRandom(scenarios);
    const reason = pickRandom(reasons);
    if (scenario.isDuel) {
      const weapon = pickRandom(weapons);
      setFightDraw({ scenario, reason, weaponA: weapon, weaponB: null });
    } else {
      const [wA, wB] = pickTwoDifferent(weapons);
      setFightDraw({ scenario, reason, weaponA: wA, weaponB: wB });
    }
  };

  return (
    <Layout
      page="Writing Games"
      title="Merlin May - Writing Games"
      SeoDescription="Writing prompt games to spark creativity. Draw a random prompt and let the story unfold."
      SeoKeywords={[
        "Merlin May",
        "writing games",
        "writing prompts",
        "creative writing",
        "fiction writing prompts",
        "fight scene generator",
        "winter solstice writing",
      ]}
      SeoImage="../images/merlin.png"
    >
      <Body>
        {/* ── Winter Solstice ── */}
        <GameSection>
          <GameTitle>Winter Solstice Writing Game</GameTitle>
          <GameDescription>
            {/* TODO: replace this text with your own game description */}
            The longest night of the year is a time of endings and beginnings —
            of darkness giving way to the slow return of light. Draw a prompt
            inspired by the winter solstice and write whatever it calls from you.
          </GameDescription>
          <DrawButton onClick={drawSolstice}>Draw a prompt</DrawButton>
          {solsticePrompt && (
            <PromptResult>{solsticePrompt}</PromptResult>
          )}
        </GameSection>

        {/* ── Fight Scene ── */}
        <GameSection>
          <GameTitle>Fight Scene Generator</GameTitle>
          <GameDescription>
            Every good fight needs a context, a reason, and the right weapons.
            Draw your scenario and write the scene — who fights, why they fight,
            and with what.
          </GameDescription>
          <DrawButton onClick={drawFight}>Draw a fight</DrawButton>
          {fightDraw && (
            <PromptResult>
              <PromptLine>
                <strong>{fightDraw.scenario.text}</strong>, because{" "}
                {fightDraw.reason}.
              </PromptLine>
              {fightDraw.weaponB === null ? (
                <PromptLine>
                  Both wield: <em>{fightDraw.weaponA}</em>
                </PromptLine>
              ) : (
                <>
                  <PromptLine>
                    A wields: <em>{fightDraw.weaponA}</em>
                  </PromptLine>
                  <PromptLine>
                    B wields: <em>{fightDraw.weaponB}</em>
                  </PromptLine>
                </>
              )}
            </PromptResult>
          )}
        </GameSection>
      </Body>
    </Layout>
  );
};

export default WritingGamesPage;

export const Head: HeadFC = () => <title>Writing Games</title>;
