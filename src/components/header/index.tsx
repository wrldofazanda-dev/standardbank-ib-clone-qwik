import './header.scss';
import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="landing-page__header-bar">
            <div class="logo"></div>
            <a
                class="contact-us-link"
            >
                <img
                src="./contact-us-tablet.svg"
                alt="SB Logo"
                class="icon--color"
                width="45"
                height="39"
                />
            </a>
        </div>
    )
})
