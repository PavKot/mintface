import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { BorderRadius, Breakpoints, Colors, Shadows, Spacing, Typography } from '../constants/theme';

const PlatformsContainer = styled.section`
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

const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${Spacing.xl};
  margin-top: ${Spacing.xl};

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: ${Spacing.xl} auto 0;
  }
`;

const PlatformCard = styled(motion.div)`
  background: ${Colors.surface};
  border: 1px solid ${Colors.border};
  border-radius: ${BorderRadius.xl};
  padding: ${Spacing.xl};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${Shadows.large};
    border-color: ${Colors.accent};

    &::before {
      opacity: 0.05;
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const PlatformIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${Colors.primary}, ${Colors.secondary});
  border-radius: ${BorderRadius.large};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${Spacing.lg};
  position: relative;
  font-size: 40px;

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

const PlatformTitle = styled.h3`
  font-size: ${Typography.fontSize.xl};
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  margin-bottom: ${Spacing.md};
`;

const PlatformDescription = styled.p`
  font-size: ${Typography.fontSize.base};
  color: ${Colors.textSecondary};
  line-height: ${Typography.lineHeight.relaxed};
  margin-bottom: ${Spacing.lg};
  flex-grow: 1;
`;

const ActionButton = styled.button`
  padding: ${Spacing.md} ${Spacing.xl};
  background: ${props => props.disabled
    ? Colors.surfaceLight
    : `linear-gradient(135deg, ${Colors.primary}, ${Colors.secondary})`};
  color: ${props => props.disabled ? Colors.textMuted : Colors.text};
  border: ${props => props.disabled ? `1px solid ${Colors.border}` : 'none'};
  border-radius: ${BorderRadius.medium};
  font-size: ${Typography.fontSize.base};
  font-weight: ${Typography.fontWeight.semibold};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${Spacing.sm};
  justify-content: center;
  width: 100%;
  box-shadow: ${props => props.disabled ? 'none' : Shadows.medium};

  &:hover {
    ${props => !props.disabled && `
      transform: translateY(-2px);
      box-shadow: ${Shadows.glow};
    `}
  }

  &:active {
    ${props => !props.disabled && `
      transform: translateY(0);
    `}
  }
`;

const VersionInfo = styled.div`
  font-size: ${Typography.fontSize.xs};
  color: ${Colors.textMuted};
  margin-top: ${Spacing.sm};
`;

const PlatformsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const platforms = [
    {
      id: 'android',
      icon: '📱',
      title: 'Android APK',
      description: 'Latest version available for direct APK installation.',
      buttonText: 'Download APK',
      buttonIcon: '⬇',
      available: true,
      version: 'v1.0.0 • Updated 2025-11-23',
      action: () => {
        const link = document.createElement('a');
        link.href = '/mintface.apk';
        link.download = 'mintface.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    {
      id: 'web',
      icon: '💻',
      title: 'Web Version',
      description: 'Access MintFace directly from your browser. No installation needed.',
      buttonText: 'Launch Web App',
      buttonIcon: '🚀',
      available: true,
      action: () => {
        window.open('https://mintface.vercel.app/', '_blank');
      }
    },
    {
      id: 'ios',
      icon: '🍎',
      title: 'iOS',
      description: 'iPhone version is under development and will be available soon.',
      buttonText: 'Coming Soon',
      available: false,
    }
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
    <PlatformsContainer ref={ref} id="platforms">
      <Content>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Download MintFace
        </SectionTitle>

        <PlatformsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.id}
              variants={cardVariants}
            >
              <PlatformIcon variants={iconVariants}>
                {platform.icon}
              </PlatformIcon>
              <PlatformTitle>{platform.title}</PlatformTitle>
              <PlatformDescription>{platform.description}</PlatformDescription>
              <ActionButton
                disabled={!platform.available}
                onClick={platform.available ? platform.action : undefined}
              >
                {platform.buttonIcon && <span>{platform.buttonIcon}</span>}
                {platform.buttonText}
              </ActionButton>
              {platform.version && (
                <VersionInfo>{platform.version}</VersionInfo>
              )}
            </PlatformCard>
          ))}
        </PlatformsGrid>
      </Content>
    </PlatformsContainer>
  );
};

export default PlatformsSection;
