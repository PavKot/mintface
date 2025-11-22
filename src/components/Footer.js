import styled from 'styled-components';
import { Breakpoints, Colors, Spacing, Typography } from '../constants/theme';


const FooterContainer = styled.footer`
  background: ${Colors.surface};
  border-top: 1px solid ${Colors.border};
  padding: ${Spacing.lg} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${Spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${Spacing.md};

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 0 ${Spacing.md};
  }
`;

const Copyright = styled.p`
  color: ${Colors.textMuted};
  font-size: ${Typography.fontSize.sm};
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${Spacing.lg};

  @media (max-width: ${Breakpoints.mobile}) {
    gap: ${Spacing.md};
  }
`;

const FooterLink = styled.button`
  background: none;
  border: none;
  color: ${Colors.textMuted};
  text-decoration: none;
  font-size: ${Typography.fontSize.sm};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${Colors.primary};
  }
`;

const Footer = ({ onNavigate }) => {
  const handleLinkClick = (page, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © 2025 MintFace. All rights reserved.
        </Copyright>
        <FooterLinks>
          <FooterLink onClick={(e) => handleLinkClick('privacy', e)}>Privacy</FooterLink>
          <FooterLink onClick={(e) => handleLinkClick('terms', e)}>Terms</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;