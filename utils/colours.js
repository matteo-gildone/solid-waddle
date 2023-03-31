export function generateRandomHex() {
  return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}

function getsRGB(c) {
  c = parseInt(c, 16) / 255;
  c = (c <= 0.03928) ? c / 12.92 : Math.pow(((c + 0.055) / 1.055), 2.4);
  return c;
}

function getL(c) {
  return (0.2126 * getsRGB(c.substr(1, 2)) + 0.7152 * getsRGB(c.substr(3, 2)) + 0.0722 * getsRGB(c.substr(-2)));
}

export function contrast(foregroundColour, backgroundColour) {
  const L1 = getL(foregroundColour);
  const L2  = getL(backgroundColour);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
}