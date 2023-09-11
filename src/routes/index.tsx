import { component$, useStyles$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import styles from './styles.scss?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="container">
      <div class="sb__banner"></div>
      <div class="sb__content">
        <h3>Sign in to online banking</h3>
        <p>If you don't have an online profile, please register</p>

        <button class="sb__btn_fill">Sign In</button>
        <button class="sb__btn_outline">Register</button>

        <p> By signing in, I agree to the <Link href="#">T&Cs</Link><br />Last updated in December 2021</p>
        <p>Received an invitation for online banking?<br /><Link>START HERE</Link></p>
      </div>
      <div class="sb__page_footer">
        Standard Bank is a licensed financial services provider in terms of the Financial Advisory and Intermediary Services Act and a registered credit provider in terms of the National Credit Act. registration number NCRCP15.
      </div>
    </div>
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