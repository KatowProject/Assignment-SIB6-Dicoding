import HTMLReactParser from "html-react-parser";

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const parsingtoHTML = (string) => {
  return HTMLReactParser(string);
}

export { showFormattedDate, parsingtoHTML};
