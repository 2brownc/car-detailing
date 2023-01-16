import React from 'react';
import { useRouter } from 'next/router'

export type CallToActionButtonType = {
  text: string,
  link: string
};

function CallToActionButton({ text, link }: CallToActionButtonType) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
      className="
        w-fit
        text-center
        py-2
        px-2
        bg-orange-600
        border-2 border-orange-600
        transition-all
        font-semibold
        hover:cursor-pointer hover:scale-110
        duration-500
      "
    >
      {text}
    </div>
  );

}

export default CallToActionButton;