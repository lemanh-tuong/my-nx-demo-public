import { FC, useEffect, useRef, useState } from 'react';
import { CopiedIcon } from './icons/CopiedIcon';
import { CopyIcon } from './icons/CopyIcon';
import { copyToClipboard } from './utils/copyToClipboard';
import './CopyButton.css';

export interface Props {
  /** Text content that will be copied to the clipboard when the button is clicked. */
  content?: string;
  /**
   * Text to display after the content has been successfully copied.
   * This could be a confirmation message like "Copied!".
   */
  copiedText?: string;
  /**
   * Text to be displayed on the copy button.
   * This can be used to customize the button label, such as "Copy" or "Copy to Clipboard".
   */
  copyText?: string;
}

/**
 * `CopyButton` is a React functional component that renders a button for copying text to the clipboard.
 *
 * When this button is clicked, the text provided in the `content` prop is copied to the clipboard.
 * This component is useful for providing a user-friendly way to copy text such as code snippets, links, or any textual content.
 *
 * @param {Props} props - The props for the component.
 * @param {string} props.content - The text content to be copied to the clipboard when the button is clicked.
 * @param {string} props.copiedText - Text to display after the content has been successfully copied. This could be a confirmation message like "Copied!".
 * @param {string} props.copyText - Text to be displayed on the copy button. This can be used to customize the button label, such as "Copy" or "Copy to Clipboard".
 *
 * @returns {ReactElement} A React Element representing the copy button.
 */
export const CopyButton: FC<Props> = ({ content = '', copiedText = 'Copied', copyText = 'Copy' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const timeoutRef = useRef<number | undefined>();

  useEffect(() => {
    if (isCopied) {
      timeoutRef.current = window.setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isCopied]);

  return (
    <button
      className="CopyButton__container"
      onClick={(): void => {
        setIsCopied(true);
        copyToClipboard(content);
      }}
    >
      {isCopied ? <CopiedIcon /> : <CopyIcon />}
      <span className="CopyButton__text">{isCopied ? copiedText : copyText}</span>
    </button>
  );
};
