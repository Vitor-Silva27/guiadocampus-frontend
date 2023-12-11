export const SectorDescription = ({ text }: { text: string }) => {
    const createMarkup = (html: string) => ({ __html: html });
  
    return <p className="subtitle-2" dangerouslySetInnerHTML={createMarkup(text)} />;
  };