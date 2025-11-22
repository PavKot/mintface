import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { BorderRadius, Breakpoints, Colors, Spacing, Typography } from '../constants/theme';
import TelegramButton from './TelegramButton';
import WaitlistForm from './WaitlistForm';

const DownloadContainer = styled.section`
  padding: ${Spacing.xxl} 0;
  background: linear-gradient(135deg, ${Colors.primary} 0%, ${Colors.secondary} 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(120deg); }
    66% { transform: translate(-20px, 20px) rotate(240deg); }
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${Spacing.lg};
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0 ${Spacing.md};
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${Typography.fontSize['4xl']};
  font-weight: ${Typography.fontWeight.bold};
  color: white;
  margin-bottom: ${Spacing.lg};
  line-height: ${Typography.lineHeight.tight};

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Typography.fontSize['3xl']};
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: ${Typography.fontSize.lg};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${Spacing.xl};
  line-height: ${Typography.lineHeight.relaxed};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${Spacing.xl};
  margin-bottom: ${Spacing.xxl};
  flex-wrap: wrap;

  @media (max-width: ${Breakpoints.mobile}) {
    gap: ${Spacing.lg};
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${Typography.fontSize['3xl']};
  font-weight: ${Typography.fontWeight.bold};
  color: white;
  margin-bottom: ${Spacing.xs};

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Typography.fontSize['2xl']};
  }
`;

const StatLabel = styled.div`
  font-size: ${Typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const DownloadButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${Spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const DownloadButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${Spacing.md};
  padding: ${Spacing.lg} ${Spacing.xl};
  background: white;
  color: ${Colors.primary};
  border: none;
  border-radius: ${BorderRadius.large};
  font-size: ${Typography.fontSize.base};
  font-weight: ${Typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
`;

const ButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background: ${Colors.primary};
  border-radius: ${BorderRadius.small};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
`;

const DownloadSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: '50K+', label: 'Downloads' },
    { number: '4.8', label: 'Rating' },
    { number: '10K+', label: 'NFTs Set' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <DownloadContainer ref={ref}>
      <BackgroundDecoration />
      <Content>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Join the NFT Revolution
        </SectionTitle>

        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Use MintFace today and start collecting unique NFT avatars that express your digital identity.
        </SectionDescription>


        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}
        >
          <TelegramButton />
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
        </motion.div>

      </Content>
    </DownloadContainer>
  );
};

export default DownloadSection;