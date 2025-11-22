import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { BorderRadius, Breakpoints, Colors, Gradients, Spacing, Typography } from '../constants/theme';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(167, 139, 250, 0.9), rgba(0, 0, 0, 0.8));
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${Spacing.lg};

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0;
    align-items: stretch;
  }
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, ${Colors.background} 0%, ${Colors.surface} 100%);
  border-radius: ${BorderRadius.xl};
  max-width: 900px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4), 0 0 40px rgba(124, 58, 237, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${Colors.surface};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.primary};
    border-radius: 3px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    margin: 0;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
    max-width: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${Spacing.lg};
  right: ${Spacing.lg};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${BorderRadius.large};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
  }
`;

const ModalHeader = styled.div`
  padding: ${Spacing.xxl} ${Spacing.xxl} ${Spacing.lg};
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: ${Gradients.primary};
    border-radius: 1px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: ${Spacing.xl} ${Spacing.lg} ${Spacing.md};
  }
`;

const CollectionTitle = styled.h2`
  font-size: ${Typography.fontSize['3xl']};
  font-weight: ${Typography.fontWeight.bold};
  background: ${Gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${Spacing.md};
  line-height: ${Typography.lineHeight.tight};

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Typography.fontSize['2xl']};
  }
`;

const CollectionDescription = styled.p`
  font-size: ${Typography.fontSize.lg};
  color: ${Colors.textSecondary};
  line-height: ${Typography.lineHeight.relaxed};
  max-width: 600px;
  margin: 0 auto;
`;

const NFTsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${Spacing.xl};
  padding: ${Spacing.xl} ${Spacing.xxl} ${Spacing.xxl};

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${Spacing.lg};
    padding: ${Spacing.lg} ${Spacing.lg} ${Spacing.xl};
  }
`;

const NFTCard = styled(motion.div)`
  background: ${Colors.surface};
  border-radius: ${BorderRadius.xl};
  overflow: hidden;
  border: 1px solid ${Colors.border};
  transition: all 0.4s ease;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(167, 139, 250, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.2), 0 8px 32px rgba(0, 0, 0, 0.15);
    border-color: ${Colors.primary};

    &::before {
      opacity: 1;
    }
  }
`;

const NFTImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
`;

const NFTImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${NFTCard}:hover & {
    transform: scale(1.1);
  }
`;

const NFTInfo = styled.div`
  padding: ${Spacing.lg};
  position: relative;
  z-index: 2;
`;

const NFTName = styled.h3`
  font-size: ${Typography.fontSize.lg};
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  margin-bottom: ${Spacing.sm};
  line-height: ${Typography.lineHeight.tight};
`;

const NFTAttributes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Spacing.xs};
  margin-bottom: ${Spacing.md};
`;

const Attribute = styled.span`
  background: linear-gradient(135deg, ${Colors.primary}, ${Colors.secondary});
  color: white;
  font-size: ${Typography.fontSize.xs};
  padding: 4px 10px;
  border-radius: ${BorderRadius.large};
  font-weight: ${Typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2);
`;

const NFTDescription = styled.p`
  font-size: ${Typography.fontSize.sm};
  color: ${Colors.textMuted};
  line-height: ${Typography.lineHeight.relaxed};
  margin: 0;
`;

const DownloadCTA = styled.div`
  text-align: center;
  padding: 0 ${Spacing.xxl} ${Spacing.xl};
  border-top: 1px solid ${Colors.border};
  margin-top: ${Spacing.lg};

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0 ${Spacing.lg} ${Spacing.lg};
  }
`;

const DownloadText = styled.p`
  font-size: ${Typography.fontSize.base};
  color: ${Colors.textSecondary};
  margin-bottom: ${Spacing.md};
  line-height: ${Typography.lineHeight.relaxed};
`;

const DownloadButton = styled.button`
  background: ${Gradients.primary};
  color: white;
  border: none;
  padding: ${Spacing.md} ${Spacing.xl};
  border-radius: ${BorderRadius.large};
  font-size: ${Typography.fontSize.base};
  font-weight: ${Typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: ${Spacing.sm} ${Spacing.lg};
    font-size: ${Typography.fontSize.sm};
  }
`;

const NFTModal = ({ collection, isOpen, onClose }) => {
  if (!collection) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 }
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.1 }
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <ModalContent
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>×</CloseButton>

            <ModalHeader>
              <CollectionTitle>{collection.name}</CollectionTitle>
              <CollectionDescription>{collection.description}</CollectionDescription>
            </ModalHeader>

            <NFTsGrid>
              {collection.nfts.map((nft, index) => (
                <NFTCard
                  key={nft.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <NFTImageContainer>
                    <NFTImage src={nft.image} alt={nft.name} />
                  </NFTImageContainer>
                  <NFTInfo>
                    <NFTName>{nft.name}</NFTName>
                    <NFTAttributes>
                      {nft.attributes.map((attr, attrIndex) => (
                        <Attribute key={attrIndex}>{attr}</Attribute>
                      ))}
                    </NFTAttributes>
                    <NFTDescription>{nft.description}</NFTDescription>
                  </NFTInfo>
                </NFTCard>
              ))}
            </NFTsGrid>

            <DownloadCTA>
              <DownloadText>
                Download the MintFace app to get these NFT avatars with exclusive attributes and join the cosmic community!
              </DownloadText>
              <DownloadButton onClick={() => window.open('#download', '_self')}>
                Download App
              </DownloadButton>
            </DownloadCTA>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default NFTModal;