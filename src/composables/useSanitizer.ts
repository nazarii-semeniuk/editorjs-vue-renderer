import DOMPurify, { Config } from 'dompurify';

export function useSanitizer(dompurifyConfig: Partial<Config> = {
    USE_PROFILES: { html: true },
    ADD_ATTR: ['target']
}) {
    const sanitize = (dirty: string) => {
        const clean = DOMPurify.sanitize(dirty, dompurifyConfig);
        return clean;
    };

    return {
        sanitize,
    };
}
