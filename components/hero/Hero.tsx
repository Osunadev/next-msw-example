import React from 'react';
import clsx from 'clsx';

import Button from '../button/Button';

import styles from './Hero.module.scss';

type CtaType = {
  text: string;
  onClick: () => void;
};

interface HeroProps {
  title: string;
  paragraph: string;
  imageUrl: string;
  imageAltText: string;
  imagePosition?: 'Left' | 'Right';
  primaryCta?: CtaType;
  secondaryCta?: CtaType;
}

const Hero: React.FC<HeroProps> = ({
  title,
  paragraph,
  imageUrl,
  imageAltText,
  primaryCta,
  secondaryCta,
  imagePosition = 'Right',
}) => {
  const ImageCol = (
    <div className={clsx(styles.heroCol, styles.imageCol)}>
      <div
        className={clsx(styles.heroImgRectangle, {
          [styles.leftHeroImgRectangle]: imagePosition === 'Left',
        })}
      ></div>
      <img className={styles.heroImg} src={imageUrl} alt={imageAltText} />
    </div>
  );

  const ContentCol = (
    <div className={clsx(styles.heroCol, styles.contentCol)}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroParagraph}>{paragraph}</p>
      <div>
        {secondaryCta && (
          <Button onClick={secondaryCta.onClick} secondary>
            {secondaryCta.text}
          </Button>
        )}
        {primaryCta && (
          <Button onClick={primaryCta.onClick}>{primaryCta.text}</Button>
        )}
      </div>
    </div>
  );

  return (
    <section className={styles.heroContainer}>
      {imagePosition === 'Right' ? (
        <>
          {ContentCol}
          {ImageCol}
        </>
      ) : (
        <>
          {ImageCol}
          {ContentCol}
        </>
      )}
    </section>
  );
};

export default Hero;
