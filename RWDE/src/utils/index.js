import parser from 'html-react-parser';

const showFormattedDate = (date, locale = 'en-US') => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(date).toLocaleDateString(locale, options);
};

const parsingtoHTML = (html) => {
    return parser(html);
};

export { showFormattedDate, parsingtoHTML };
