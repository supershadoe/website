<script lang="ts">
    import "../app.css";
    import GitHubIcon from "$lib/fa_icons/GitHubIcon.svelte";
    import GitLabIcon from "$lib/fa_icons/GitLabIcon.svelte";
    import TwitterIcon from "$lib/fa_icons/TwitterIcon.svelte";
    import MailIcon from "$lib/fa_icons/MailIcon.svelte";
    import RedditIcon from "$lib/fa_icons/RedditIcon.svelte";
</script>
<div class="app font-sans">
    <a href="#main" class="link-base-content left-0 absolute p-3 m-3 mt-16
    -translate-y-28 focus:translate-y-0">Skip to main content</a>

    <header>
        <nav class="navbar">
            <div class="navbar-start">
                <a class="btn btn-ghost normal-case text-xl tracking-wider"
                    href="/">supershadoe
                </a>
            </div>
            <div class="navbar-end">
                <a class="btn btn-ghost rounded" href="https://github.com/supershadoe">
                    <GitHubIcon />
                </a>
                <a class="btn btn-ghost rounded" href="https://gitlab.com/supershadoe">
                    <GitLabIcon />
                </a>
                <a class="btn btn-ghost rounded" href="https://twitter.com/supershadoe">
                    <TwitterIcon />
                </a>
                <a class="btn btn-ghost rounded" href="https://reddit.com/u/supershadoe">
                    <RedditIcon />
                </a>
                <form method="POST">
                    <button type="submit" class="btn btn-ghost rounded">
                        <MailIcon />
                    </button>
                </form>
            </div>
          </nav>
    </header>

    <main id="main" class="justify-center flex flex-col min-h-[90vh]">
        <slot />
    </main>

</div>
