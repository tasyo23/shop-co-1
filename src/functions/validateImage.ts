export function validateImage(image: string): string | false {
  const img = image.replace(/\*|\[|\]|\"|\$/g, "");
  const ext = img.match(/^(?:.*\.(?=(jpeg|jpg|png|svg|webp)$))?[^.]*$/i);

  return ext === null ? false : img;
}
