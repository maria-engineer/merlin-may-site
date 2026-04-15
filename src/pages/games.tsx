import * as React from "react";
import { useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../common/layout";
import { Body } from "../common/commonStyles";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const GameSection = styled.div`
  @media (max-width: 600px) {
    padding: 0.75rem;
    flex-direction: column;
  }
  box-shadow: 0 2px 1px hsl(220, 7%, 83%);
  background-color: hsl(110, 5%, 99%);
  padding: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;
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
  "Fire elemental(demon)",
  "Basilisk",
  "Hippogryph",
  "Otter",
  "Sphinx",
  "Dryad",
  "Cat",
  "Gumiho",
  "Mari Lwyd",
  "Minotaur",
  "Vampire",
  "Centaur",
  "Turtle",
  "Crocodile",
  "Dokkaebi",
  "Duck",
  "Dragon",
];

// ── Fight Scene ───────────────────────────────────────────────

type Scenario = { text: string; isDuel: boolean };

const scenarios: Scenario[] = [
  { text: "A wants to take revenge on B, for a crime B committed", isDuel: false },
  { text: "A wants to take B's place as heir", isDuel: false },
  {
    text:
      "A needs to silence B lest they reveal they are a spy (or some other big secret)",
    isDuel: false,
  },
  { text: "A has broken into B's home to rob it", isDuel: false },
  {
    text: "A has challenged B to a duel to protect their honour",
    isDuel: true,
  },
  { text: "A is a bodyguard, trying to protect someone from B", isDuel: false },
  { text: "A and B are in a competition", isDuel: true },
  { text: "A is hunting B to eat them", isDuel: false },
  { text: "A has taken a bounty on B, and needs to capture them", isDuel: false },
  { text: "A wants B's life insurance", isDuel: false },
  { text: "A and B are soldiers on opposite sides in a war", isDuel: false },
  { text: "A is mugging B", isDuel: false },
  { text: "A and B are gladiators", isDuel: true },
  { text: "A and B fighting over a lover", isDuel: true },
];

const weapons = [
  "gun",
  "lightsaber",
  "rubber chicken",
  "fists",
  "frying pan",
  "fencing sabre",
  "greatsword",
  "bow and arrow",
  "knife",
  "rapier",
  "spear",
  "axe",
  "poison darts",
  "baseball bat",
  "candlestick",
  "pitchfork",
  "trident",
  "nunchucks",
  "scalpel",
  "broken bottle",
  "broom",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickTwoDifferent(arr: string[]): [string, string] {
  const first = Math.floor(Math.random() * arr.length);
  let second = Math.floor(Math.random() * arr.length);
  // if (second == first) second++;
  // if (second >= arr.length) second = 0;
  return [arr[first], (second==first)? ("bigger " + arr[first]):arr[second]];
}

type FightDraw = {
  scenario: Scenario;
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
    if (scenario.isDuel) {
      const weapon = pickRandom(weapons);
      setFightDraw({ scenario, weaponA: weapon, weaponB: null });
    } else {
      const [wA, wB] = pickTwoDifferent(weapons);
      setFightDraw({ scenario, weaponA: wA, weaponB: wB });
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
          <StaticImage
            style={{
              borderRadius: "10px",
              boxShadow: "0 2px 1px hsl(220, 7%, 83%)",
              flex: "none",
            }}
            width={150}
            height={150}
            alt={"A Santa hat."}
            src={"../images/solstice.jpeg"}
          />
          <div>
            <GameTitle>Winter Solstice Writing Game</GameTitle>
            <GameDescription>
              Write a short story, a carol, or just description or vibe of what
              would the Winter Solstice (Christmas) holiday look like if the
              Santa figure was the creature drawn as your prompt. Bonus points
              if they do wear the Santa hat.
            </GameDescription>
            <DrawButton onClick={drawSolstice}>Generate prompt</DrawButton>
            {solsticePrompt && <PromptResult>{solsticePrompt}</PromptResult>}
          </div>
        </GameSection>

        {/* ── Fight Scene ── */}
        <GameSection>
          <StaticImage
            style={{
              borderRadius: "10px",
              boxShadow: "0 2px 1px hsl(220, 7%, 83%)",
              flex: "none",
            }}
            width={150}
            height={150}
            alt={
              "Logo of the fight scene generator. It features a sword and a rubber chicken crossed in an X."
            }
            src={"../images/fight.jpeg"}
          />
          <div>
            <GameTitle>Fight Scene Writing Game</GameTitle>
            <GameDescription>
              Write a scene where two characters are in a fight. The prompt will give you some information for the reason of their fight. Their fight may be unbalanced, or one sided. Their weapons may be the same or differ. Consider if it would be appropriate for that weapon to be a weapon of convenience, or a hidden weapon. 
            </GameDescription>
            <DrawButton onClick={drawFight}>Generate Prompt</DrawButton>
            {fightDraw && (
              <PromptResult>
                <PromptLine>
                  <strong>{fightDraw.scenario.text}</strong>
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
          </div>
        </GameSection>
      </Body>
    </Layout>
  );
};

export default WritingGamesPage;

export const Head: HeadFC = () => <title>Writing Games</title>;
