// function for determining whether something renders due to some condition
export function renderIf(condition, content) {
  if (condition) {
    return content;
  } else {
    return null;
  }
}; 
