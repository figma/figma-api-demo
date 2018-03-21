declare module "spellchecker" {
  class ErrorRange {
    public start : number;
    public end : number;
  }
  function checkSpelling(corpus : string) : Array<ErrorRange>;
  function getCorrectionsForMisspelling(word : string) : Array<String>;
}
