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

const TermsOfService = ({ onNavigate }) => {
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
          Terms of Service
        </PageTitle>

        <Section>
          <SectionTitle>1. Acceptance of Terms</SectionTitle>
          <SectionContent>
            <p>
              By accessing and using MintFace, an NFT avatar marketplace, you accept and agree to be bound by the
              terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>2. Description of Service</SectionTitle>
          <SectionContent>
            <p>
              MintFace is a decentralized marketplace for buying, selling, and trading NFT avatars and digital collectibles.
              Our platform facilitates transactions on various blockchain networks and provides tools for NFT management.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>3. User Accounts</SectionTitle>
          <SectionContent>
            <p>
              To use certain features of our service, you must register for an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>4. NFT Transactions</SectionTitle>
          <SectionContent>
            <p>
              <strong>Buying NFTs:</strong> When purchasing NFTs, you agree to pay the listed price plus any applicable fees.
              All sales are final unless otherwise specified.
            </p>
            <p>
              <strong>Selling NFTs:</strong> You must own the NFT and have the right to transfer it. You are responsible
              for ensuring the authenticity and ownership of any NFTs you list for sale.
            </p>
            <p>
              <strong>Platform Fees:</strong> MintFace may charge fees for transactions, listings, or other services.
              Current fees will be displayed at the time of transaction.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>5. Prohibited Activities</SectionTitle>
          <SectionContent>
            <p>You agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Upload or distribute harmful, offensive, or illegal content</li>
              <li>Attempt to hack, disrupt, or damage our platform</li>
              <li>Create fake accounts or impersonate others</li>
              <li>Use the platform for money laundering or fraudulent activities</li>
              <li>Infringe on intellectual property rights</li>
              <li>Manipulate prices or engage in wash trading</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>6. Intellectual Property</SectionTitle>
          <SectionContent>
            <p>
              The MintFace platform and its original content, features, and functionality are owned by MintFace
              and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              When you create or upload content to our platform, you retain ownership of your intellectual property
              rights. However, you grant us a license to use, display, and distribute your content as necessary
              to provide our services.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>7. Disclaimers and Limitations</SectionTitle>
          <SectionContent>
            <p>
              <strong>No Warranty:</strong> The service is provided &ldquo;as is&rdquo; without warranties of any kind.
              We do not guarantee uninterrupted service or error-free operation.
            </p>
            <p>
              <strong>Blockchain Risks:</strong> NFT transactions occur on blockchain networks. We are not responsible
              for blockchain network failures, high gas fees, or lost transactions.
            </p>
            <p>
              <strong>Market Risks:</strong> NFT values can be highly volatile. You assume all financial risks
              associated with NFT trading.
            </p>
            <p>
              <strong>Limitation of Liability:</strong> Our total liability shall not exceed the amount paid by you
              to us in the 12 months preceding the claim.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>8. Indemnification</SectionTitle>
          <SectionContent>
            <p>
              You agree to indemnify and hold harmless MintFace and its affiliates from any claims, damages,
              losses, or expenses arising from your use of the service or violation of these terms.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>9. Termination</SectionTitle>
          <SectionContent>
            <p>
              We may terminate or suspend your account and access to the service immediately, without prior notice,
              for any reason, including breach of these terms.
            </p>
            <p>
              Upon termination, your right to use the service will cease immediately. All provisions of these
              terms which by their nature should survive termination shall survive.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>10. Governing Law</SectionTitle>
          <SectionContent>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws.
              Any disputes shall be resolved through binding arbitration.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>11. Changes to Terms</SectionTitle>
          <SectionContent>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of material changes
              via email or platform notification. Continued use after changes constitutes acceptance.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>12. Contact Information</SectionTitle>
          <SectionContent>
            <p>
              For questions about these terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@mintface.com<br />
              <strong>Support:</strong> support@mintface.com
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

export default TermsOfService;