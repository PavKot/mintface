import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { BorderRadius, Breakpoints, Colors, Shadows, Spacing, Typography } from '../constants/theme';

const FeaturesContainer = styled.section`
  padding: ${Spacing.xxl} 0;
  background: ${Colors.background};
  position: relative;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${Spacing.lg};

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0 ${Spacing.md};
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${Typography.fontSize['4xl']};
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  text-align: center;
  margin-bottom: ${Spacing.xxl};

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Typography.fontSize['3xl']};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${Spacing.xl};
  margin-top: ${Spacing.xl};
`;

const FeatureCard = styled(motion.div)`
  background: ${Colors.surface};
  border: 1px solid ${Colors.border};
  border-radius: ${BorderRadius.xl};
  padding: ${Spacing.xl};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${Colors.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${Shadows.large};
    border-color: ${Colors.accent};

    &::before {
      opacity: 0.05;
    }
  }
`;

const FeatureIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${Colors.primary}, ${Colors.secondary});
  border-radius: ${BorderRadius.large};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${Spacing.lg};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, ${Colors.primary}, ${Colors.secondary});
    border-radius: ${BorderRadius.large};
    opacity: 0.3;
    z-index: -1;
  }
`;

const IconPlaceholder = styled.div`
  width: 32px;
  height: 32px;
  background: ${Colors.text};
  border-radius: 4px;
`;

const FeatureTitle = styled.h3`
  font-size: ${Typography.fontSize.xl};
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  margin-bottom: ${Spacing.md};
`;

const FeatureDescription = styled.p`
  font-size: ${Typography.fontSize.base};
  color: ${Colors.textSecondary};
  line-height: ${Typography.lineHeight.relaxed};
`;

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: '🔍',
      title: 'Browse Collections',
      description: 'Explore curated NFT avatar collections from top artists and communities worldwide.',
    },
    {
      icon: '👁️',
      title: 'View NFT Details',
      description: 'Get comprehensive information about each NFT including attributes, rarity, and ownership history.',
    },
    {
      icon: '📊',
      title: 'Track Ownership',
      description: 'Monitor your NFT portfolio with real-time updates on value and transaction history.',
    },
    {
      icon: '📤',
      title: 'Share Your Avatars',
      description: 'Showcase your unique NFT avatars across social media and digital platforms.',
    },
    {
      icon: '🎨',
      title: 'Unique Designs',
      description: 'Discover one-of-a-kind avatar designs created by talented digital artists and designers.',
    },
    {
      icon: '🔒',
      title: 'Secure Storage',
      description: 'Your NFT avatars are safely stored on the blockchain with cryptographic security.',
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <FeaturesContainer id="features" ref={ref}>
      <Content>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Why Choose MintFace?
        </SectionTitle>

        <FeaturesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} variants={cardVariants}>
              <FeatureIcon variants={iconVariants}>
                <IconPlaceholder>{feature.icon}</IconPlaceholder>
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Content>
    </FeaturesContainer>
  );
};

export default FeaturesSection;