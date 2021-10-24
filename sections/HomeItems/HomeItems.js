import { Section } from "components/Layout/Layout";
import { Theme } from "components/Theme";
import { JaggedEdge } from "components/JaggedEdge/JaggedEdge";

export default function HomeItems() {
  return (
    <Theme name="pink">
      <JaggedEdge edge="top" shadow="dark" background>
        <Section></Section>
      </JaggedEdge>
    </Theme>
  );
}
