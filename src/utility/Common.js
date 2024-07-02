
function processPath(path) {

    if (!path || typeof path !== 'string' || path.trim() === '') {
        return '';
    } else {
        const newPath = path.substring(1).replace(/-/g, ' ');
        return newPath;
    }
}


export const generateTitle = (pathName) => {

    const title = 'The Luxury Company';

    switch (pathName) {
        case '/':
            return `${title}`;
        case '/about':
            return `${title} : ${processPath(pathName)}`;
        case '/contact':
            return `${title} : ${processPath(pathName)}`;
        default:
            return `${title} : ${processPath(pathName)}`;
    }
};

export function getTextForTab(tabId) {
    switch (tabId) {
        case 'hair-service':
            return 'HAIR SERVICES';
        case 'hair-colour':
            return 'HAIR COLOUR';
        case 'hair-services-men':
            return 'HAIR SERVICES - MEN';
        case 'skin-care':
            return 'SKIN CARE';
        case 'bleach':
            return 'BLEACH';
        case 'regular-waxing':
            return 'REGULAR WAXING';
        case 'premium-waxing':
            return 'PREMIUM WAXING';
        case 'threading':
            return 'THREADING';
        case 'hands-feet':
            return 'HANDS & FEET';
        case 'nails-brows-lashes':
            return 'NAILS, BROWS & LASHES';
        case 'massage':
            return 'MASSAGE';
        case 'bridal-services':
            return 'BRIDAL SERVICES';
        case 'customised-programmes':
            return 'CUSTOMISED PROGRAMMES';
        default:
            return '';
    }
}
