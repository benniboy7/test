export function toClassNames(...args) {
  return args.filter(name => !!name).join(' ');
}

export function toClassNameObj(...args) {
  const className = toClassNames(...args);
  return className ? { className } : {};
}

export function toSrcSet(...pictures) {
  if (Array.isArray(pictures[0])) pictures = pictures[0];
  const srcSet = pictures.map((picture, index) => `${picture} ${index + 2}x`).join(', ');
  return srcSet ? { srcSet } : {};
}

export function toImageSet(...pictures) {
  if (Array.isArray(pictures[0])) pictures = pictures[0];
  return pictures.map((picture, index) => `${picture} ${index + 1}x`).join(', ');
}
