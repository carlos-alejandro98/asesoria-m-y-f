import rss from '@astrojs/rss';

export function GET(context) {
    return rss({
        // `<title>` field in output xml
        title: 'ASESORIAS M Y F',
        // `<description>` field in output xml
        description: 'ASESORIAS M Y F',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site,
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: [],
        // (optional) inject custom xml
        customData: `<language>es-es</language>`,
    });
}