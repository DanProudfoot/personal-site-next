import { Section } from "components/Page";
import { Theme } from "components/Theme";
import { JaggedEdge } from "components/JaggedEdge";

export default function HomeItems() {
  return (
    <Theme name="pink">
      <JaggedEdge edge="top" shadow="dark" background>
        <Section></Section>
      </JaggedEdge>
    </Theme>
  );
}
