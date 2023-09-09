import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Standard Bank</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Standard Bank",
  meta: [
    {
      name: "Standard Bank Internet Banking UI Clone",
      content: "A pretty convincing clone of the Standard Bank Internet Banking UI",
    },
  ],
};
