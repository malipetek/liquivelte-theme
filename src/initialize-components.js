window.addEventListener('DOMContentLoaded', () => {
    console.log("initializing modules");
    const initializations = Object.keys(window.theme.svelte_modules).map(moduleName => {
        const Module = window.theme.svelte_modules[moduleName];
        return Array.from(document.querySelectorAll(`.${moduleName.replace(/(^\w)/, w => w.toLowerCase()).replace(/[A-Z]/g, w => '-' + w.toLowerCase())}-wrapper`)).map(wrapper => {
            let svelteProps = wrapper.svelteProps;
            let rawIncludes = wrapper.rawIncludes;
            let mid = wrapper.getAttribute('data-mid');
            let included_from_svelte = wrapper.classList.contains('included_from_svelte') ? 'included_from_svelte' : '';
            svelteProps = { mid, included_from_svelte, ...svelteProps };
            if (!wrapper.classList.contains('included_from_svelte')) {
                return () => {
                    new Module({
                        target: wrapper,
                        hydrate: true,
                        props: {
                            ...svelteProps,
                            ...rawIncludes
                        }
                    });
                };
            } else {
                // some components will initialize from parent components onmount
                window.theme.svelteSubSnippets = window.theme.svelteSubSnippets || {};
                window.theme.svelteSubSnippets[moduleName] = window.theme.svelteSubSnippets[moduleName] || {};
                window.theme.svelteSubSnippets[moduleName][mid] = ({
                    wrapper,
                    props: {
                        ...svelteProps,
                        ...rawIncludes
                    }
                });
            }
        });
    });
    initializations.forEach(modules => { modules.forEach(callback => callback && callback.call && callback()) });
})