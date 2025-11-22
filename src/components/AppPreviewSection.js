import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { BorderRadius, Breakpoints, Colors, Spacing, Typography } from '../constants/theme';

const AppPreviewContainer = styled.section`
  padding: ${Spacing.xxl} 0;
  background: ${Colors.background};
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  background-image: radial-gradient(circle at 25% 25%, ${Colors.primary} 2px, transparent 2px),
                    radial-gradient(circle at 75% 75%, ${Colors.secondary} 2px, transparent 2px);
  background-size: 50px 50px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${Spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Spacing.xxl};
  align-items: center;

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${Spacing.xl};
    text-align: center;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0 ${Spacing.md};
  }
`;

const TextContent = styled.div`
  @media (max-width: ${Breakpoints.tablet}) {
    order: 2;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${Typography.fontSize['4xl']};
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  margin-bottom: ${Spacing.lg};
  line-height: ${Typography.lineHeight.tight};

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Typography.fontSize['3xl']};
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: ${Typography.fontSize.lg};
  color: ${Colors.textSecondary};
  margin-bottom: ${Spacing.xl};
  line-height: ${Typography.lineHeight.relaxed};
`;

const FeaturesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: ${Spacing.md};
  margin-bottom: ${Spacing.md};
  padding: ${Spacing.md};
  background: ${Colors.surface};
  border-radius: ${BorderRadius.large};
  border: 1px solid ${Colors.border};
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, ${Colors.primary}, ${Colors.secondary});
  border-radius: ${BorderRadius.small};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  font-size: ${Typography.fontSize.base};
  color: ${Colors.text};
  font-weight: ${Typography.fontWeight.medium};
`;

const PhoneMockup = styled.div`
  position: relative;
  max-width: 300px;
  margin: 0 auto;

  @media (max-width: ${Breakpoints.tablet}) {
    order: 1;
    margin-bottom: ${Spacing.xl};
  }
`;

const PhoneFrame = styled.div`
  width: 100%;
  padding-bottom: 200%;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border-radius: 36px;
  position: relative;
  border: 8px solid #000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const PhoneScreen = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  background: ${Colors.background};
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const PhoneHeader = styled.div`
  height: 40px;
  background: ${Colors.surface};
  border-bottom: 1px solid ${Colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${Spacing.md};
`;

const PhoneStatusBar = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StatusDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${Colors.textMuted};
`;

const PhoneTitle = styled.div`
  font-size: ${Typography.fontSize.sm};
  font-weight: ${Typography.fontWeight.semibold};
  color: ${Colors.text};
`;

const PhoneContent = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

const ScreenshotsContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%;
  display: flex;
`;

const Screenshot = styled.div`
  width: 33.333%;
  height: 100%;
  background: ${Colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${Colors.textMuted};
  border-right: 1px solid ${Colors.border};

  &:last-child {
    border-right: none;
  }
`;

const PhoneNavigation = styled.div`
  height: 60px;
  background: ${Colors.surface};
  border-top: 1px solid ${Colors.border};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 ${Spacing.md};
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const NavIcon = styled.div`
  width: 20px;
  height: 20px;
  background: ${Colors.textMuted};
  border-radius: 4px;
`;

const NavLabel = styled.div`
  font-size: 10px;
  color: ${Colors.textMuted};
`;

const AppPreviewSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const features = [
    'Browse NFT collections',
    'View detailed NFT info',
    'Set avatars instantly',
    'Track your portfolio',
  ];

  const screenshots = [
    { id: 1, title: 'Home Screen' },
    { id: 2, title: 'NFT Details' },
    { id: 3, title: 'Profile' },
  ];

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView, screenshots.length]);

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <AppPreviewContainer ref={ref}>
      <BackgroundPattern />
      <Content>
        <TextContent>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Experience MintFace
          </SectionTitle>

          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Discover how easy it is to collect and showcase NFT avatars with our intuitive mobile app.
          </SectionDescription>

          <FeaturesList
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                variants={itemVariants}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <FeatureIcon>✓</FeatureIcon>
                <FeatureText>{feature}</FeatureText>
              </FeatureItem>
            ))}
          </FeaturesList>
        </TextContent>

        <PhoneMockup>
          <PhoneFrame
            as={motion.div}
            variants={phoneVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <PhoneScreen>
              <PhoneHeader>
                <PhoneStatusBar>
                  <StatusDot />
                  <StatusDot />
                  <StatusDot />
                </PhoneStatusBar>
                <PhoneTitle>MintFace</PhoneTitle>
              </PhoneHeader>

              <PhoneContent>
                <ScreenshotsContainer
                  animate={{ x: `-${currentScreenshot * 33.333}%` }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {screenshots.map((screenshot) => (
                    <Screenshot key={screenshot.id}>
                      {screenshot.title}
                    </Screenshot>
                  ))}
                </ScreenshotsContainer>
              </PhoneContent>

              <PhoneNavigation>
                <NavItem>
                  <NavIcon />
                  <NavLabel>Home</NavLabel>
                </NavItem>
                <NavItem>
                  <NavIcon />
                  <NavLabel>Market</NavLabel>
                </NavItem>
                <NavItem>
                  <NavIcon />
                  <NavLabel>Add</NavLabel>
                </NavItem>
                <NavItem>
                  <NavIcon />
                  <NavLabel>Profile</NavLabel>
                </NavItem>
              </PhoneNavigation>
            </PhoneScreen>
          </PhoneFrame>
        </PhoneMockup>
      </Content>
    </AppPreviewContainer>
  );
};

export default AppPreviewSection;