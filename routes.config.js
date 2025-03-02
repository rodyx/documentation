// Custom "not-docusaurus-related" config for routes setup
// @see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects

// FIXME: Clean up urls format (with new index-pages)
const SECTIONS = {
    INTRO: {
        shortPath: "/docs",
        fullPath: "/docs/intro",
    },
    GET_STARTED: {
        shortPath: "/docs/get-started",
        fullPath: "/docs/get-started",
    },
    CONCEPTS: {
        shortPath: "/docs/concepts",
        fullPath: "/docs/concepts",
    },
    GUIDES: {
        shortPath: "/docs/guides",
        fullPath: "/docs/guides",
    },
    REFERENCE: {
        shortPath: "/docs/reference",
        fullPath: "/docs/reference",
    },
    LAYERS: {
        shortPath: "/docs/reference/layers",
        fullPath: "/docs/reference/layers/overview",
    },
    ABOUT: {
        shortPath: "/docs/about",
        fullPath: "/docs/about",
    },
    COMMUNITY: {
        shortPath: "/docs/community",
        fullPath: "/community",
    },
    EXAMPLES: {
        shortPath: "/examples",
        fullPath: "/examples",
    },
    // FIXME: Temp, use later root "/" folders without "docs" redundant prefix
    BRANDING: {
        shortPath: "/branding",
        fullPath: "/docs/branding",
    },
};

/**
 * Redirections after restructuring docs
 * @remark For compatibility with legacy links
 */
const LEGACY_ROUTES = [
    {
        group: "🚀 Get Started",
        details: "Simplified and merged",
        children: [
            {
                title: "Overview",
                from: "/docs/get-started/overview",
                to: "/docs/intro",
            },
            {
                title: "QuickStart",
                from: "/docs/get-started/tutorial/quick-start",
                to: "/docs/get-started/quick-start",
            },
            {
                title: "Decompose Cheatsheet",
                from: [
                    "/docs/get-started/tutorial/decompose",
                    "/docs/get-started/tutorial/design-mockup",
                    "/docs/get-started/onboard/cheatsheet",
                ],
                to: "/docs/get-started/cheatsheet",
            },
        ],
    },
    {
        group: "🍰 Alternatives",
        details: "Moved to /about as advanced materials",
        children: [
            {
                title: "BBoM",
                from: "/docs/get-started/alternatives/big-ball-of-mud",
                to: "/docs/about/alternatives/big-ball-of-mud",
            },
            {
                title: "Design Principles",
                from: "/docs/get-started/alternatives/design-principles",
                to: "/docs/about/alternatives/design-principles",
            },
            {
                title: "DDD",
                from: "/docs/get-started/alternatives/ddd",
                to: "/docs/about/alternatives/ddd",
            },
            {
                title: "Clean Architecture",
                from: "/docs/get-started/alternatives/clean-architecture",
                to: "/docs/about/alternatives/clean-architecture",
            },
            {
                title: "Frameworks",
                from: "/docs/get-started/alternatives/frameworks",
                to: "/docs/about/alternatives/frameworks",
            },
            {
                title: "Atomic Design",
                from: "/docs/get-started/alternatives/atomic-design",
                to: "/docs/about/alternatives/atomic-design",
            },
            {
                title: "Smart & Dumb components",
                from: "/docs/get-started/alternatives/smart-dumb-components",
                to: "/docs/about/alternatives/smart-dumb-components",
            },
            {
                title: "Feature Driven",
                from: "/docs/get-started/alternatives/feature-driven",
                to: "/docs/about/alternatives/feature-driven",
            },
        ],
    },
    {
        group: "🍰 Promote",
        details: "Moved to /about as advanced materials",
        children: [
            {
                title: "Integration, Pros & Cons, Limitations",
                from: "/docs/get-started/onboard/pros-cons",
                to: "/docs/about/promote/integration",
            },
            {
                title: "Partial application",
                from: "/docs/get-started/onboard/partial-application",
                to: "/docs/about/promote/partial-application",
            },
            {
                title: "For team",
                from: "/docs/get-started/onboard/for-team",
                to: "/docs/about/promote/for-team",
            },
            {
                title: "For company",
                from: "/docs/get-started/onboard/promote",
                to: "/docs/about/promote/for-company",
            },
            {
                title: "Motivation",
                from: "/docs/get-started/motivation",
                to: "/docs/about/motivation",
            },
            {
                title: "Knowledge types",
                from: "/docs/reference/knowledge-types",
                to: "/docs/about/knowledge-types",
            },
        ],
    },
    {
        group: "🧩 Bad Practices handbook",
        details: "Moved to /concepts as theoretical materials",
        children: [
            {
                title: "Cross-imports",
                from: "/docs/guides/handbook/cross-imports",
                to: "/docs/concepts/issues/cross-imports",
            },
            {
                title: "Desegmented",
                from: "/docs/guides/handbook/desegmented",
                to: "/docs/concepts/issues/desegmented",
            },
            {
                title: "Routes",
                from: "/docs/guides/handbook/routes",
                to: "/docs/concepts/issues/routes",
            },
        ],
    },
    {
        group: "🧩 Concepts guidelines",
        details: "Moved to /concepts as theoretical materials",
        children: [
            {
                title: "Decouple of entities",
                from: "/docs/guides/decouple-entities",
                to: "/docs/concepts/decouple-entities",
            },
            {
                title: "Low Coupling & High Cohesion",
                from: "/docs/guides/low-coupling",
                to: "/docs/concepts/low-coupling",
            },
        ],
    },
    {
        group: "🎯 Examples",
        details: "Grouped and simplified into /guides/examples as practical examples",
        children: [
            {
                title: "Viewer logic",
                from: "/docs/guides/examples/viewer",
                to: "/docs/guides/examples/auth",
            },
            {
                title: "Monorepo",
                from: "/docs/guides/monorepo",
                to: "/docs/guides/examples/monorepo",
            },
            {
                title: "White Labels",
                from: "/docs/guides/white-labels",
                to: "/docs/guides/examples/white-labels",
            },
        ],
    },
    {
        group: "🎯 Migration",
        details: "Grouped and simplified into /guides/migration as migration guidelines",
        children: [
            {
                title: "Migration from V1",
                from: "/docs/guides/migration-from-v1",
                to: "/docs/guides/migration/from-v1",
            },
            {
                title: "Migration from Legacy",
                from: "/docs/guides/migration-from-legacy",
                to: "/docs/guides/migration/from-legacy",
            },
        ],
    },
    {
        group: "🎯 Tech",
        details: "Grouped into /guides/tech as tech-specific usage guidelines",
        children: [
            {
                title: "Usage with NextJS",
                from: "/docs/guides/usage-with-nextjs",
                to: "/docs/guides/tech/with-nextjs",
            },
        ],
    },
];

// @returns { from, to }[]
const LEGACY_ROUTES_REDIRECTS = LEGACY_ROUTES.reduce((acc, group) => {
    const cleanItems = group.children.map(({ from, to }) => ({ from, to }));
    return acc.concat(cleanItems);
}, []);

// FIXME: temp, resolve later
// @returns { from, to }[]
const SECTIONS_REDIRECTS = Object.values(SECTIONS)
    // Custom filtering
    .filter(({ shortPath, fullPath }) => shortPath !== fullPath)
    .map(({ shortPath, fullPath }) => ({
        from: shortPath,
        to: fullPath,
    }));

// !!! FIXME: refactor later!
const _TOTAL_ROUTES = [
    "/docs/about",
    "/docs/about/alternatives/atomic-design",
    "/docs/about/alternatives/big-ball-of-mud",
    "/docs/about/alternatives/clean-architecture",
    "/docs/about/alternatives/ddd",
    "/docs/about/alternatives/design-principles",
    "/docs/about/alternatives/feature-driven",
    "/docs/about/alternatives/frameworks",
    "/docs/about/alternatives/smart-dumb-components",
    "/docs/about/history",
    "/docs/about/knowledge-types",
    "/docs/about/mission",
    "/docs/about/motivation",
    "/docs/about/promote/for-company",
    "/docs/about/promote/for-team",
    "/docs/about/promote/integration",
    "/docs/about/promote/partial-application",
    "/docs/branding",
    "/docs/concepts",
    "/docs/concepts/abstractions",
    "/docs/concepts/app-splitting",
    "/docs/concepts/architecture",
    "/docs/concepts/cross-communication",
    "/docs/concepts/decouple-entities",
    "/docs/concepts/issues/cross-imports",
    "/docs/concepts/issues/desegmented",
    "/docs/concepts/issues/routes",
    "/docs/concepts/low-coupling",
    "/docs/concepts/naming-adaptability",
    "/docs/concepts/needs-driven",
    "/docs/concepts/public-api",
    "/docs/concepts/signals",
    "/docs/get-started",
    "/docs/get-started/basics",
    "/docs/get-started/cheatsheet",
    "/docs/get-started/faq",
    "/docs/get-started/quick-start",
    "/docs/guides",
    "/docs/guides/examples",
    "/docs/guides/examples/auth",
    "/docs/guides/examples/autocompleted",
    "/docs/guides/examples/browser-api",
    "/docs/guides/examples/cms",
    "/docs/guides/examples/feedback",
    "/docs/guides/examples/i18n",
    "/docs/guides/examples/metric",
    "/docs/guides/examples/monorepo",
    "/docs/guides/examples/page-layout",
    "/docs/guides/examples/platforms",
    "/docs/guides/examples/ssr",
    "/docs/guides/examples/theme",
    "/docs/guides/examples/types",
    "/docs/guides/examples/white-labels",
    "/docs/guides/migration/from-legacy",
    "/docs/guides/migration/from-v1",
    "/docs/guides/tech/with-nextjs",
    "/docs/intro",
    "/docs/privacy",
    "/docs/reference",
    "/docs/reference/glossary",
    "/docs/reference/layers/app",
    "/docs/reference/layers/entities",
    "/docs/reference/layers/features",
    "/docs/reference/layers/overview",
    "/docs/reference/layers/pages",
    "/docs/reference/layers/processes",
    "/docs/reference/layers/shared",
    "/docs/reference/layers/widgets",
    "/docs/reference/segments",
];
// from: "/en/docs/*" to "/docs/*"
const I18N_REDIRECTS = _TOTAL_ROUTES.map((route) => ({
    from: route.replace("/docs", "/en/docs"),
    to: route,
}));
// NOTE: temp redirects, resolve later
// https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
const REDIRECTS = [...SECTIONS_REDIRECTS, ...LEGACY_ROUTES_REDIRECTS, ...I18N_REDIRECTS];

module.exports = {
    SECTIONS,
    LEGACY_ROUTES,
    REDIRECTS,
};
