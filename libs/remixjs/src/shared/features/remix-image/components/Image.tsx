import { Image as RemixImage, ImageProps as RemixImageProps } from 'remix-image';
import './remix-image.css';

export type Props = RemixImageProps;

export const Image = ({ loaderUrl = '/public/images', ...props }: Props): ReturnType<typeof RemixImage> => {
  return <RemixImage {...props} loaderUrl={loaderUrl} />;
};
