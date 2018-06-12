// function for determining whether something renders due to some condition
export function renderIf(condition, content) {
  if (condition) {
    return content;
  } else {
    return null;
  }
};

// function for checking if a field has been entered
export function checkNotEntered(element) {
  if (element === "not entered") {
    return true
  } else {
    return false
  }
};

// function to convert text into dots
export function secureText(p) {
  return '•'.repeat(p.length)
}

// function for matching
export function match(a, b) {
  if (a === b) {
    return true
  } else {
    return false
  }
}
