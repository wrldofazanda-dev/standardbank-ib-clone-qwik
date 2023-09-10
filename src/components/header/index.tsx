import { component$, useStyles$ } from "@builder.io/qwik";
import imgLogo from '../../media/logo.png';
import imgContactUs from '../../media/contact-us-tablet.svg';
import styles from './Header.scss?inline';

export default component$(() => {
    useStyles$(styles);

    return (
        <nav>
            <div class="left">
                <img src={imgLogo} class="logo" alt="SB Logo" width="48" height="48" />
                
            </div>
            <div class="right">
                <img src={imgContactUs} width="25" height="25"/>
            </div>
        </nav>
    );
});
