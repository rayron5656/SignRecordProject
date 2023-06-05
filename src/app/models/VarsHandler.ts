export function setVars(value: string[]): string[] {

    console.log(value);
  //remove empty strings and trim
  const vars = value
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
    console.log(vars);
    return vars;

  
}