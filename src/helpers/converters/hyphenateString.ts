import { StaticImageData } from "next/image";
import { useState } from "react";

export function hyphenateString(val: string) {
  return val.split(' ').join('-').toLowerCase();
}


export const startWordChanging = (
  elementId: string,
  imageId: string,
  words: string[],
  imgSrcs: StaticImageData[],
  duration: number,
  setCurrentImageIndex: (index: number) => void,
): (() => void) | undefined => {
  const changingWord = document.getElementById(elementId);
  const changingImages = document.getElementById(imageId) as HTMLImageElement;
  let currentWordIndex = 0;

  if (changingWord && changingImages) {
    changingWord.style.animation = `changeWord ${duration}s ease-in-out infinite`;
    changingImages.style.animation = `changeWord ${duration}s ease-in-out infinite`;
    const updateWord = () => {
      changingWord.textContent = words[currentWordIndex];
      if (changingImages) {
        changingImages.src = imgSrcs[currentWordIndex].src;
      }
            currentWordIndex = (currentWordIndex + 1) % words.length;
               setCurrentImageIndex(currentWordIndex)
    };
    const intervalId = setInterval(updateWord, duration * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }

  return undefined;
};
