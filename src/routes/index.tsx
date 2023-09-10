import { component$, useStyles$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import imgLogo from '../media/logo.png';
import imgContactUs from '../media/contact-us-tablet.svg';
import imgBanner from '../media/sb_banner.jpg';
import styles from './styles.scss?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
    <div class="container">
      <div class="header">
        <img src={imgLogo} alt="Logo" class="logo" />
        <img src={imgContactUs} alt="Contact Us" class="contact-us" />
      </div>
      <div class="body">
        <div class="sb__banner">
          <img src={imgBanner} alt="Banner" />
        </div>
        <div class="sb__content">
            <div class="sb__content_text">
              <h2 class="sb__title">Sign in to Online Banking</h2>
              <h4 class="sb__subtitle">If you don't have an online profile, please register</h4>

              <button class="button sign-in-button">Sign In</button>
              <button class="button register-button">Register</button>

              <p>
                By signing in, I agree to the <Link href="#" class="sb__link">T&Cs</Link><br />
                Last updated in December 2021
              </p>

              <p>
                Received an invitation for online banking? <br />
                <Link href="#" class="sb__link">START HERE</Link>
              </p>
            </div>
        </div>
      </div>
    </div>
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