import React from 'react'
import './Footer.css'
import { Container } from './Container/Container.tsx' // Assuming this is your Container component

interface I18nProps {
  links: {
    home: string
    privacy: string
    terms: string
    content: string
    ethics: string
    feature: string
  }
}

interface FooterProps {
  locale?: string
  locales?: string[]
  onChange?: (e: any, data: { value: string }) => void
  i18n?: I18nProps
  isFullscreen?: boolean
  isFullWidth?: boolean
  className?: string
  hideSocialLinks?: boolean
}

const Footer: React.FC<FooterProps> = (props) => {
  const {
    i18n = {
      links: {
        home: 'Home',
        privacy: 'Privacy Policy2131',
        terms: 'Terms of Use',
        content: 'Content Policy',
        ethics: 'Code of Ethics',
        feature: 'Feature Request'
      }
    },
    isFullscreen,
    isFullWidth,
    className,
    hideSocialLinks
  } = props

  let classes = 'dcl footer'
  if (isFullscreen) classes += ' fullscreen'
  if (className) classes += ` ${className}`
  if (isFullWidth) classes += ' full-width'

  return (
    <Container className={classes}>
      <div className="main-footer">
        <div className="links">
          <a href="https://therelic.art">{i18n.links.home}</a>
          <a href="https://therelic.art/privacy">{i18n.links.privacy}</a>
          <a href="https://therelic.art/terms">{i18n.links.terms}</a>
          <a href="https://therelic.art/content">{i18n.links.content}</a>
          <a href="https://therelic.art/ethics">{i18n.links.ethics}</a>
          <a href="https://therelic.art/feature-request">{i18n.links.feature}</a>
        </div>
      </div>

      <div className="secondary-footer">
        {!hideSocialLinks && (
          <div className="social-links">
            <a href="https://therelic.art">
              <i className="social-icon discord" />
            </a>
            <a href="https://x.com/relic_market?s=11">
              <i className="social-icon twitter" />
            </a>
          </div>
        )}
        <div className="copyright">
          © {new Date().getFullYear()} Relic Marketplace
        </div>
      </div>
    </Container>
  )
}

export default Footer
