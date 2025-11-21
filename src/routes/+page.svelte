<script>
    import { page } from "$app/stores";
    import { browser } from "$app/environment";

    let query = "";
    let result = "";

    // Auto-run when someone shares a link like /plum-candy
    $: if (browser && $page.url.pathname !== "/" && $page.url.pathname !== "") {
        query = decodeURIComponent($page.url.pathname.slice(1));
        runCanon();
    }

    function runCanon() {
        if (!query.trim()) {
            result = "";
            if (browser) {
                history.replaceState({}, "", "/");
            }
            return;
        }

        // ←←← YOUR CANON LOGIC GOES HERE ONLY ←←←
        result = query.toUpperCase() + " CANON"; // placeholder
        // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←

        if (browser) {
            history.replaceState({}, "", `/${encodeURIComponent(query)}`);
        }
    }
</script>

<svelte:head>
    <title>Prenormous</title>
    <meta
        name="description"
        content="We’re building the venture firm for culture."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<main
    class="min-h-screen bg-beige-50 text-beige-900 font-sans selection:bg-beige-200 selection:text-beige-900"
>
    <div class="max-w-4xl mx-auto px-6 py-12 md:py-24">
        <!-- Result Display (Hidden unless active) -->
        {#if result}
            <div
                class="fixed top-6 right-6 text-xl md:text-2xl text-beige-900 font-medium animate-fade-in bg-beige-100 px-4 py-2 rounded shadow-sm z-50"
            >
                {result}
            </div>
        {/if}

        <!-- Main Content -->
        <header class="mb-16">
            <h1
                class="text-4xl md:text-6xl font-semibold tracking-tight mb-8 text-beige-950"
            >
                Prenormous
            </h1>
            <div
                class="text-xl md:text-3xl leading-relaxed space-y-4 text-beige-900"
            >
                <p>We’re building the venture firm for culture.</p>
                <p>We collect great people before anyone knows their name.</p>
                <p class="text-beige-800">
                    Artists. Builders. Operators. The prenormous.
                </p>
                <p class="pt-4">If you’re one of them, we want you.</p>
            </div>
        </header>

        <hr class="border-beige-300 my-16" />

        <section class="mb-16">
            <h2 class="text-2xl md:text-4xl font-medium mb-8 text-beige-950">
                The Thesis
            </h2>
            <div class="text-xl text-beige-900 leading-relaxed space-y-6">
                <p>
                    The most valuable collectible has never been the Hall of
                    Fame plaque.<br />It’s always been the rookie card—signed
                    before the first game.
                </p>
                <p>
                    That value was always there. In the before-time. When they
                    were prenormous.
                </p>
                <p>
                    Patronage died because there was no liquid market. You had
                    to lock capital for decades with no price signal and no
                    exit.
                </p>
                <p class="font-medium text-beige-950">Crypto fixes that.</p>
                <p>Now you can:</p>
                <ul class="list-disc pl-5 space-y-3 marker:text-beige-900">
                    <li>
                        Create real scarcity (limited artifacts from the
                        before-time)
                    </li>
                    <li>
                        Add tokenized liquidity (24/7 markets, fractional
                        ownership)
                    </li>
                    <li>
                        Tie funds to measurable cultural missions (classrooms,
                        exhibitions, penetration KPIs)
                    </li>
                    <li>
                        Keep most assets on-chain while real-world sales create
                        honest price discovery
                    </li>
                </ul>
                <p>
                    Money backed by meaning.<br />An asset class that tracks
                    cultural significance as it compounds.
                </p>
                <p class="text-2xl font-medium text-beige-950">
                    We call it <strong>Cultural Gold</strong>.
                </p>
            </div>
        </section>

        <hr class="border-beige-300 my-16" />

        <section class="mb-16">
            <h2 class="text-2xl md:text-4xl font-medium mb-8 text-beige-950">
                The Proof-of-Concept We’re Shipping Right Now
            </h2>
            <div class="text-xl text-beige-900 leading-relaxed space-y-6">
                <p>
                    A 17-year-old debut novelist (That's me). 10,000 signed,
                    serialized first editions created before anyone knew her
                    name. Each tokenized. Funds directed to a decades-long
                    mission: 100,000 classroom distributions, curriculum
                    development, systematic cultural penetration.
                </p>
                <p>
                    Tokenomics are fully designed. <a
                        href="https://plumcandy.org/tokenomics"
                        class="underline decoration-beige-400 hover:text-beige-950 transition-colors"
                        >plumcandy.org/tokenomics</a
                    >
                </p>
                <p>Manuscript is finished.</p>
                <p>
                    Teachers Pitch - You can see it here <a
                        href="https://itscanon.com/plum-candy"
                        class="underline decoration-beige-400 hover:text-beige-950 transition-colors"
                        >itscanon.com/plum-candy</a
                    >
                </p>
                <p>Launch: Q3–Q4 2026.</p>
                <p>
                    If it works—if we prove you can create liquid markets for
                    prenormous talent that track real cultural value.
                </p>
                <p>We're not just launching a book.</p>
                <p>We’re not a book launch company.</p>
                <p>We're validating an asset class.</p>
                <p class="font-medium text-beige-950">
                    We’re the first mover in a category that will be worth tens
                    (maybe hundreds) of billions: cultural gold.
                </p>
            </div>
        </section>

        <hr class="border-beige-300 my-16" />

        <section class="mb-16">
            <h2 class="text-2xl md:text-4xl font-medium mb-8 text-beige-950">
                The Company We’re Actually Building
            </h2>
            <div class="text-xl text-beige-900 leading-relaxed space-y-6">
                <p>Someone needs to:</p>
                <ul class="list-disc pl-5 space-y-3 marker:text-beige-900">
                    <li>Curate prenormous talent across every vertical</li>
                    <li>
                        Build the rails (provenance, physical↔crypto linkage,
                        settlement standards)
                    </li>
                    <li>
                        Create the markets (primary drops, secondary liquidity,
                        index products)
                    </li>
                    <li>Coordinate capital (portfolio of 50–500 shots)</li>
                    <li>
                        Own the brand that means “this is the legitimate
                        Cultural Gold play”
                    </li>
                </ul>
                <p>That someone is going to be a new venture firm.</p>
                <p class="font-medium text-beige-950">I’m starting it.</p>
                <p>
                    I have the first project fully architected.<br />I have the
                    thesis.<br />I have the name.
                </p>
                <p>
                    I don’t yet have the full team or the second rookie-card
                    artist.
                </p>
                <p class="font-medium text-beige-950">
                    That’s the point of this site.
                </p>
            </div>
        </section>

        <hr class="border-beige-300 my-16" />

        <section class="mb-16">
            <h2 class="text-2xl md:text-4xl font-medium mb-8 text-beige-950">
                Who I’m Looking For <span
                    class="text-xl text-beige-700 font-normal"
                    >(right now, pre-everything)</span
                >
            </h2>
            <div class="space-y-12">
                <div>
                    <h3 class="text-2xl font-semibold mb-4 text-beige-950">
                        1. The next prenormous artist
                    </h3>
                    <p class="text-xl text-beige-900 leading-relaxed">
                        If you’re 14–24, shipping something insane that the
                        world hasn’t priced yet, and you’re willing to create
                        the scarce artifact before anyone cares—I’ll back you
                        next.
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl font-semibold mb-4 text-beige-950">
                        2. Co-conspirators
                    </h3>
                    <p class="text-xl text-beige-900 mb-4 leading-relaxed">
                        People who see the Sequoia-level opportunity in cultural
                        gold and want to help build the firm from day zero.
                    </p>
                    <p class="text-beige-800 mb-4 text-xl font-medium">
                        Especially:
                    </p>
                    <ul class="list-none space-y-2 text-beige-900 text-xl">
                        <li>
                            Technical architects (smart contracts, provenance,
                            physical-crypto bridging)
                        </li>
                        <li>Curators / talent scouts with god-tier taste</li>
                        <li>
                            Operators who’ve already shipped hard things at 18
                        </li>
                        <li>Anyone smart, fast, and fun to be around</li>
                    </ul>
                </div>
            </div>
        </section>

        <hr class="border-beige-300 my-16" />

        <section class="mb-32">
            <h2 class="text-2xl md:text-4xl font-medium mb-8 text-beige-950">
                Want in?
            </h2>
            <div class="text-xl text-beige-900 leading-relaxed space-y-6">
                <ol class="list-decimal pl-5 space-y-6 marker:text-beige-900">
                    <li>
                        Pick any artifact you’ve made (song, repo, painting,
                        meme, 40-second TikTok—literally whatever).
                    </li>
                    <li>Host it somewhere I can see without a login.</li>
                    <li>
                        Email the link + a 50-word footnote that tells me <em
                            >why this moment was before time</em
                        >.
                    </li>
                </ol>
                <p>I reply to every single one.</p>
                <p>Average response time right now: 11 hours.</p>
                <p>If it’s a fit, we jump on a 15-min call.</p>
                <p class="text-2xl font-medium text-beige-950">
                    Send the artifact. Consensus comes later.
                </p>
            </div>
        </section>

        <footer class="border-t border-beige-300 pt-16 pb-32 text-beige-800">
            <p class="mb-3 text-lg">
                my personal page is <a
                    href="https://aaliyah.com.br"
                    class="underline decoration-beige-400 hover:text-beige-950 transition-colors font-medium"
                    >aaliyah.com.br</a
                >
            </p>
            <p class="text-lg">my email address is plumcandy@ that url.</p>
        </footer>
    </div>
</main>

<style>
    /* Custom fade-in animation */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-fade-in {
        animation: fadeIn 0.3s ease-out forwards;
    }
</style>
