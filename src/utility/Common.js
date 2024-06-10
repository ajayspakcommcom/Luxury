
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