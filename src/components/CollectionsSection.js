import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { BorderRadius, Breakpoints, Colors, Spacing, Typography } from '../constants/theme';
import NFTModal from './NFTModal';

const CollectionsContainer = styled.section`
  padding: ${Spacing.xxl} 0;
  background: ${Colors.surface};
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
  margin-bottom: ${Spacing.lg};

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Typography.fontSize['3xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${Typography.fontSize.lg};
  color: ${Colors.textSecondary};
  text-align: center;
  margin-bottom: ${Spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CollectionsWrapper = styled.div`
  overflow-x: auto;
  padding-bottom: ${Spacing.md};

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${Colors.surface};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.accent};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${Colors.primary};
  }
`;

const CollectionsGrid = styled.div`
  display: flex;
  gap: ${Spacing.xl};
  min-width: max-content;
  padding: 0 ${Spacing.md};

  @media (max-width: ${Breakpoints.mobile}) {
    gap: ${Spacing.lg};
  }
`;

const CollectionCard = styled(motion.div)`
  width: 280px;
  background: ${Colors.background};
  border-radius: ${BorderRadius.xl};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;

  &:hover {
    border-color: ${Colors.primary};
    box-shadow: 0 8px 32px rgba(124, 58, 237, 0.2);
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.02), rgba(167, 139, 250, 0.02));
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 240px;
  }
`;

const CollectionImage = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
`;

const CollectionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(167, 139, 250, 0.15));
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CollectionCard}:hover & {
    opacity: 1;
  }
`;

const CollectionContent = styled.div`
  padding: ${Spacing.lg};
  background: ${Colors.background};
`;

const CollectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${Spacing.sm};
`;

const CollectionName = styled.h3`
  font-size: ${Typography.fontSize.lg};
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  margin: 0;
`;

const VerifiedBadge = styled.div`
  background: linear-gradient(135deg, ${Colors.primary}, ${Colors.secondary});
  color: white;
  font-size: ${Typography.fontSize.xs};
  padding: 6px 12px;
  border-radius: ${BorderRadius.large};
  font-weight: ${Typography.fontWeight.bold};
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &::before {
    content: '✓';
    font-size: 10px;
    font-weight: bold;
  }
`;

const CollectionDescription = styled.p`
  font-size: ${Typography.fontSize.sm};
  color: ${Colors.textSecondary};
  line-height: ${Typography.lineHeight.relaxed};
  margin: 0;
`;

const CollectionsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const collections = [
    {
      id: 'purple-ape',
      name: 'Purple Ape Syndicate',
      description: 'Exclusive collection of unique Purple Apes with legendary traits and streetwear aesthetics.',
      verified: true,
      image: '/images/collection-1-header.png',
      nfts: [
        {
          id: 'purple-ape-1',
          name: 'Cyber Punk Ape',
          image: '/images/collection1/collection-nft1.png',
          attributes: ['Rare', 'Cyber', 'Legendary'],
          description: 'A futuristic ape with glowing cybernetic enhancements and streetwear style.'
        },
        {
          id: 'purple-ape-2',
          name: 'Neon Street Ape',
          image: '/images/collection1/collection-nft2.png',
          attributes: ['Epic', 'Neon', 'Urban'],
          description: 'Vibrant neon colors meet street culture in this stunning purple ape design.'
        },
        {
          id: 'purple-ape-3',
          name: 'Mystic Ape Warrior',
          image: '/images/collection1/collection-nft3.png',
          attributes: ['Mythic', 'Warrior', 'Mystic'],
          description: 'Ancient warrior spirit embodied in a modern purple ape avatar.'
        }
      ]
    },
    {
      id: 'cyber-kittens',
      name: 'Cyber Kittens Club',
      description: 'Adorable gamer kittens with cutting-edge cyberpunk designs and gaming accessories.',
      verified: true,
      image: '/images/collection-2-header.png',
      nfts: [
        {
          id: 'cyber-kitten-1',
          name: 'Pixel Punk Kitten',
          image: '/images/collection2/collection-nft1.png',
          attributes: ['Pixel', 'Punk', 'Gamer'],
          description: 'Retro pixel art meets cyberpunk in this adorable gaming kitten.'
        },
        {
          id: 'cyber-kitten-2',
          name: 'Neon Hacker Cat',
          image: '/images/collection2/collection-nft2.png',
          attributes: ['Hacker', 'Neon', 'Tech'],
          description: 'A sleek black cat with neon green accents and hacker aesthetic.'
        },
        {
          id: 'cyber-kitten-3',
          name: 'Cosmic Space Cat',
          image: '/images/collection2/collection-nft3.png',
          attributes: ['Cosmic', 'Space', 'Future'],
          description: 'Starry-eyed kitten ready for intergalactic adventures.'
        }
      ]
    },
    {
      id: 'space-pandas-crew',
      name: 'Space Pandas Crew',
      description: 'Exclusive collection of cosmic explorers featuring retro astronaut pandas with legendary traits and sci-fi aesthetics.',
      verified: true,
      image: '/images/collection3/collection-nft1-header.png',
      nfts: [
        {
          id: 'space-panda-1',
          name: 'Retro Astronaut Panda',
          image: '/images/collection3/collection-nft1.png',
          attributes: ['Retro', 'Astronaut', 'Cosmic'],
          description: 'A vintage space panda with retro astronaut gear and cosmic energy.'
        },
        {
          id: 'space-panda-2',
          name: 'Neon Space Explorer',
          image: '/images/collection3/collection-nft2.png',
          attributes: ['Neon', 'Explorer', 'Sci-fi'],
          description: 'Glowing neon panda ready for intergalactic adventures and discoveries.'
        },
        {
          id: 'space-panda-3',
          name: 'Legendary Star Panda',
          image: '/images/collection3/collection-nft3.png',
          attributes: ['Legendary', 'Star', 'Heroic'],
          description: 'Mythical space panda with legendary traits and heroic sci-fi aesthetics.'
        }
      ]
    },
  ];

  const openModal = (collection) => {
    setSelectedCollection(collection);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCollection(null);
  };

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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <CollectionsContainer id="collections" ref={ref}>
      <Content>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Featured Collections
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Discover unique NFT avatar collections created by talented artists
        </SectionSubtitle>

        <CollectionsWrapper>
          <CollectionsGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.id}
                variants={cardVariants}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(collection)}
              >
                <CollectionImage>
                  <img
                    src={collection.image}
                    alt={collection.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <CollectionOverlay />
                </CollectionImage>

                <CollectionContent>
                  <CollectionHeader>
                    <CollectionName>{collection.name}</CollectionName>
                    {collection.verified && (
                      <VerifiedBadge>Verified</VerifiedBadge>
                    )}
                  </CollectionHeader>

                  <CollectionDescription>
                    {collection.description}
                  </CollectionDescription>
                </CollectionContent>
              </CollectionCard>
            ))}
          </CollectionsGrid>
        </CollectionsWrapper>
      </Content>

      <NFTModal
        collection={selectedCollection}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </CollectionsContainer>
  );
};

export default CollectionsSection;