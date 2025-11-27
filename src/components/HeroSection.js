import { motion } from 'framer-motion';
import TelegramButton from './TelegramButton';
import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Breakpoints, Colors, Gradients, Spacing, Typography } from '../constants/theme';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${Gradients.background};
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${Gradients.primary};
  opacity: 0.1;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 ${Spacing.lg};
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0 ${Spacing.md};
  }
`;

const Headline = styled(motion.h1)`
  font-size: clamp(${Typography.fontSize['4xl']}, 8vw, ${Typography.fontSize['6xl']});
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  margin-bottom: ${Spacing.md};
  line-height: ${Typography.lineHeight.tight};

  background: ${Gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subheadline = styled(motion.p)`
  font-size: ${Typography.fontSize.xl};
  color: ${Colors.textSecondary};
  margin-bottom: ${Spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${Typography.lineHeight.relaxed};

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Typography.fontSize.lg};
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: ${Spacing.md};
  justify-content: center;
  margin-bottom: ${Spacing.xxl};
  flex-wrap: wrap;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: ${Gradients.primary};
  color: ${Colors.text};
  border: none;
  padding: ${Spacing.md} ${Spacing.xl};
  border-radius: ${BorderRadius.large};
  font-size: ${Typography.fontSize.lg};
  font-weight: ${Typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
    max-width: 280px;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: ${Colors.text};
  border: 2px solid ${Colors.accent};
  padding: ${Spacing.md} ${Spacing.xl};
  border-radius: ${BorderRadius.large};
  font-size: ${Typography.fontSize.lg};
  font-weight: ${Typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${Colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(167, 139, 250, 0.3);
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
    max-width: 280px;
  }
`;

const FloatingNFTs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingNFT = styled(motion.div)`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: ${BorderRadius.large};
  background: ${Colors.surface};
  border: 2px solid ${Colors.border};
  overflow: hidden;

  @media (max-width: ${Breakpoints.mobile}) {
    width: 80px;
    height: 80px;
  }
`;

const NFTImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${Spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const ScrollMouse = styled.div`
  width: 24px;
  height: 36px;
  border: 2px solid ${Colors.textSecondary};
  border-radius: 12px;
  position: relative;
  margin: 0 auto ${Spacing.sm};
`;

const ScrollWheel = styled(motion.div)`
  width: 4px;
  height: 8px;
  background: ${Colors.accent};
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
`;

const ScrollText = styled.div`
  color: ${Colors.textSecondary};
  font-size: ${Typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;



const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingNFTs = [
    { src: '/images/collection-nft1.png', x: '10%', y: '20%', delay: 0 },
    { src: '/images/collection-nft2.png', x: '80%', y: '30%', delay: 0.5 },
    { src: '/images/collection-nft3.png', x: '20%', y: '70%', delay: 1 },
    { src: '/images/collection-nft1.png', x: '70%', y: '60%', delay: 1.5 },
  ];

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      <BackgroundGradient />
      <Content>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Headline variants={itemVariants}>
            MintFace
          </Headline>
          <Subheadline variants={itemVariants}>
            Discover, collect, and showcase unique NFT avatars
          </Subheadline>

          <CTAButtons variants={itemVariants}>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Collections
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Download
            </SecondaryButton>
          </CTAButtons>
        </motion.div>
      </Content>

      <FloatingNFTs>
        {floatingNFTs.map((nft, index) => (
          <FloatingNFT
            key={index}
            style={{
              left: nft.x,
              top: nft.y,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { delay: nft.delay, duration: 0.6 },
              scale: { delay: nft.delay, duration: 0.6 },
              y: {
                delay: nft.delay + 0.6,
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <NFTImage src={nft.src} alt={`NFT ${index + 1}`} />
          </FloatingNFT>
        ))}
      </FloatingNFTs>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={scrollToFeatures}
      >
        <ScrollMouse>
          <ScrollWheel
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </ScrollMouse>
        <ScrollText>Scroll Down</ScrollText>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;