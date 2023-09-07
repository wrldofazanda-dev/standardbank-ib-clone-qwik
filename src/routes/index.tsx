import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
       <div class="landing-page__background-image"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Standard Bank",
  meta: [
    {
      name: "Standard Bank Internet Banking UI Clone",
      content: "For fun!",
    },
  ],
};
