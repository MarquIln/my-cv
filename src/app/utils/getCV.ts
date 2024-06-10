export function getCV(idiom: string) {
  function cvLanguage(language: string) {
    if (language === 'pt-br') {
      return "https://drive.google.com/uc?export=download&id=1CxAtjrd-yrFqwakL5IJCJCS1tMjXlOAg"
    }
    return "https://drive.google.com/uc?export=download&id=17373OFiO1V5yOg0uytxjfHj5_Nhkz9C2"
}

  const link = document.createElement('a');
  const language = cvLanguage(idiom)
  link.href = language
  link.download = 'MarcosRaach_CV.pdf'
  document.body.appendChild(link)
  link.click();
  document.body.removeChild(link);
}
