import { useEffect, useState } from 'react';

export const useMinPlusListLogic = (
  currentItemIdentifier: number | string,
  fullItemIdentifierList: number[] | string[],
) => {
  const [showPlusButton, setShowPlusButton] = useState<boolean>();
  const [showMinusButton, setShowMinusButton] = useState<boolean>();

  useEffect(() => {
    const currentItemIndex = fullItemIdentifierList.findIndex((i: number | string) => i === currentItemIdentifier);

    if (currentItemIndex === fullItemIdentifierList.length - 1) setShowPlusButton(true);
    setShowMinusButton(fullItemIdentifierList.length > 1);
  }, [fullItemIdentifierList, currentItemIdentifier]);

  const minusButton = {
    show: showMinusButton,
    set: setShowMinusButton,
  };

  const plusButton = {
    show: showPlusButton,
    set: setShowPlusButton,
  };

  return [minusButton, plusButton];
};
