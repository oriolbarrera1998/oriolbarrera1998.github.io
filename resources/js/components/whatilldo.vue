    <template>
     <section class="twitter">
        <div class="contentTitle">
            <h1 class="titleProject">
                FUTURE
            </h1>
        </div>
        <main class="page-content">
            <div id="buttonFlipboard" class="cardSkill" href="https://flipboard.com/@orioolbarrera/programming-o5fb74c7y" >
                <div class="contentCard">
                </div>
            </div>
        </main>
    </section>
</template>

<style>
    .contentTitle {
        max-width: 1024px;
        width: 100%;
        padding: 0 4%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    :root {
        --d: 700ms;
        --e: cubic-bezier(0.19, 1, 0.22, 1);
        --font-sans: 'Rubik', sans-serif;
        --font-serif: 'Cardo', serif;
    }
    * {
        box-sizing: border-box;
    }
    .page-content {
        position: relative;
        top: 30%;
        max-width: 19%;
        height: 40%;
        margin: 0 auto;
    }
    .cardSkill {
        cursor:pointer;
        text-decoration: none;
        position: relative;
        display: flex;
        align-items: flex-end;
        padding: 1rem;
        width: 100%;
        text-align: center;
        color: white;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
        border-radius: 2%;
    }
    @media (min-width: 600px) {
        .cardSkill {
            height: 350px;
        }
    }
    .cardSkill:before {
        
        cursor: pointer;
        background: url(https://www.enriquedans.com/wp-content/uploads/2013/07/Flipboard-logo.jpg);
        background-position: center;
        background-size: contain;
        height: 100%;
        background-repeat: no-repeat;
        text-decoration: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 110%;
        transition: transform calc(var(--d) * 1.5) var(--e);
        pointer-events: none;
    }
    .cardSkill:after {
        text-decoration: none;
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200%;
        pointer-events: none;
        transform: translateY(-50%);
        transition: transform calc(var(--d) * 2) var(--e);
    }
    .cardSkill:nth-child(1):before {
        background-color: #389992;
    }
    .cardSkill:nth-child(2):before {
        background-color: #389992;
    }
    .cardSkill:nth-child(3):before {
        background-color: #389992;
    }
    .cardSkill:nth-child(4):before {
        background-color: #389992;
    }
    .contentCard {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 1rem;
        transition: transform var(--d) var(--e);
        z-index: 1;
    }
    .contentCard > * + * {
        margin-top: 1rem;
    }
    .titleCard {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.2;
    }
    .copy {
        color: white !important;
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.35;
    }
    .btn {
        cursor: pointer;
        margin-top: 1.5rem;
        padding: 0.75rem 1.5rem;
        font-size: 0.65rem;
        font-weight: bold;
        letter-spacing: 0.025rem;
        text-transform: uppercase;
        color: white;
        background-color: black;
        border: none;
    }
    .btn:hover {
        background-color: #0d0d0d;
    }
    .btn:focus {
        outline: 1px dashed yellow;
        outline-offset: 3px;
    }
    @media (hover: hover) and (min-width: 600px) {
        .cardSkill:after {
            transform: translateY(0);
        }
        .contentCard {
            transform: translateY(calc(100% - 4.5rem));
        }
        .contentCard > *:not(.titleCard) {
            opacity: 0;
            transform: translateY(1rem);
            transition: transform var(--d) var(--e), opacity var(--d) var(--e);
        }
        .cardSkill:hover, .cardSkill:focus-within {
            align-items: center;
        }
        .cardSkill:hover:before, .cardSkill:focus-within:before {
            transform: translateY(-4%);
        }
        .cardSkill:hover:after, .cardSkill:focus-within:after {
            transform: translateY(-50%);
        }
        .cardSkill:hover .contentCard, .cardSkill:focus-within .contentCard {
            transform: translateY(0);
        }
        .cardSkill:hover .contentCard > *:not(.titleCard), .cardSkill:focus-within .contentCard > *:not(.titleCard) {
            opacity: 1;
            transform: translateY(0);
            transition-delay: calc(var(--d) / 8);
        }
        .cardSkill:focus-within:before, .cardSkill:focus-within:after, .cardSkill:focus-within .contentCard, .cardSkill:focus-within .contentCard > *:not(.titleCard) {
            transition-duration: 0s;
        }
    }
 
</style>

<script>
    export default {
        mounted() {
            $( document ).ready(function() {
                document.getElementById("buttonFlipboard").addEventListener("click", function(){
            window.open("https://flipboard.com/@orioolbarrera/programming-o5fb74c7y", "_blank");
            });
        });
        }

    }
</script>