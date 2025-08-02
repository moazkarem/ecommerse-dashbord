export const imageClean = (image , end)=>{
  const newImg = image.slice(end.length + 23 , image.length)
  return newImg
}