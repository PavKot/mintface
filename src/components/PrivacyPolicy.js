import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BorderRadius, Breakpoints, Colors, Spacing, Typography } from '../constants/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${Colors.background};
  padding: ${Spacing.xxl} 0;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${Spacing.lg};

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0 ${Spacing.md};
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: ${Typography.fontSize['4xl']};
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  text-align: center;
  margin-bottom: ${Spacing.xxl};
  background: linear-gradient(135deg, ${Colors.primary}, ${Colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: ${Typography.fontSize['3xl']};
  }
`;

const Section = styled.section`
  margin-bottom: ${Spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: ${Typography.fontSize['2xl']};
  font-weight: ${Typography.fontWeight.bold};
  color: ${Colors.text};
  margin-bottom: ${Spacing.lg};
  border-bottom: 2px solid ${Colors.primary};
  padding-bottom: ${Spacing.sm};
`;

const SectionContent = styled.div`
  color: ${Colors.textSecondary};
  line-height: ${Typography.lineHeight.relaxed};
  font-size: ${Typography.fontSize.base};

  p {
    margin-bottom: ${Spacing.lg};
  }

  ul, ol {
    margin-bottom: ${Spacing.lg};
    padding-left: ${Spacing.xl};

    li {
      margin-bottom: ${Spacing.sm};
    }
  }

  strong {
    color: ${Colors.text};
    font-weight: ${Typography.fontWeight.semibold};
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: ${Colors.textMuted};
  font-size: ${Typography.fontSize.sm};
  margin-top: ${Spacing.xxl};
  padding-top: ${Spacing.xl};
  border-top: 1px solid ${Colors.border};
`;

const BackButton = styled.button`
  position: fixed;
  top: ${Spacing.lg};
  left: ${Spacing.lg};
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
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
  }

  @media (max-width: ${Breakpoints.mobile}) {
    top: ${Spacing.md};
    left: ${Spacing.md};
  }
`;

const PrivacyPolicy = ({ onNavigate }) => {
  return (
    <PageContainer>
      <BackButton onClick={() => onNavigate && onNavigate('home')}>
        ←
      </BackButton>
      <Content>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Privacy Policy
        </PageTitle>

        <Section>
          <SectionTitle>1. Information We Collect</SectionTitle>
          <SectionContent>
            <p>
              <strong>Personal Information:</strong> When you create an account or use our NFT avatar marketplace,
              we may collect personal information such as your name, email address, wallet address, and profile information.
            </p>
            <p>
              <strong>Usage Data:</strong> We collect information about how you interact with our platform,
              including pages visited, features used, and transaction history.
            </p>
            <p>
              <strong>Blockchain Data:</strong> As an NFT marketplace, we interact with blockchain networks
              and may collect publicly available transaction data related to your NFT purchases and ownership.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <SectionContent>
            <ul>
              <li>To provide and maintain our NFT marketplace services</li>
              <li>To process transactions and manage your account</li>
              <li>To communicate with you about your account and our services</li>
              <li>To improve our platform and develop new features</li>
              <li>To ensure security and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>3. Information Sharing</SectionTitle>
          <SectionContent>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
              except as described in this policy:
            </p>
            <ul>
              <li>With service providers who assist in operating our platform</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>Blockchain data is publicly visible by nature</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>4. Data Security</SectionTitle>
          <SectionContent>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic
              storage is 100% secure.
            </p>
            <p>
              Your wallet private keys and cryptocurrency are never stored on our servers. You are responsible for
              maintaining the security of your wallet and private keys.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>5. Cookies and Tracking</SectionTitle>
          <SectionContent>
            <p>
              We use cookies and similar technologies to enhance your experience on our platform. You can control
              cookie settings through your browser preferences.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>6. Your Rights</SectionTitle>
          <SectionContent>
            <p>You have the right to:</p>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Data portability for information you&apos;ve provided</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>7. Children&apos;s Privacy</SectionTitle>
          <SectionContent>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect personal information
              from children under 13. If we become aware that we have collected such information, we will take steps
              to delete it.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>8. Changes to This Policy</SectionTitle>
          <SectionContent>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the
              new policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>9. Contact Us</SectionTitle>
          <SectionContent>
            <p>
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@mintface.com<br />
              <strong>Address:</strong> MintFace NFT Marketplace, Digital Asset Protection Division
            </p>
          </SectionContent>
        </Section>

        <LastUpdated>
          Last updated: November 17, 2025
        </LastUpdated>
      </Content>
    </PageContainer>
  );
};

export default PrivacyPolicy;