import React from 'react'
// import { Footer as BaseFooter } from 'decentraland-dapps/dist/containers'
import { Container, FooterProps, LanguageDropdown } from 'decentraland-ui'
import * as tranlsations from '../../modules/translation/locales'

const locales = Object.keys(tranlsations)

class BaseFooter extends React.PureComponent<FooterProps> {
    static defaultProps: Partial<FooterProps> = {
      i18n: {
        dropdown: {
          en: 'English',
          es: 'Spanish',
          fr: 'French',
          ja: 'Japanese',
          zh: 'Chinese',
          ko: 'Korean'
        },
        links: {
          home: 'Home',
          privacy: 'Privacy Policy',
          terms: 'Terms of Use',
          content: 'Content Policy',
          ethics: 'Code of Fun',
          feature: 'Feature Request'
        }
      }
    }
  
    render(): JSX.Element {
      const {
        locale,
        locales,
        onChange,
        i18n,
        isFullscreen,
        className,
        isFullWidth,
        hideSocialLinks
      } = this.props
  
      let classes = 'dcl footer'
      if (isFullscreen) {
        classes += ' fullscreen'
      }
      if (className) {
        classes += ' ' + className
      }
      if (isFullWidth) {
        classes += ' full-width'
      }
  
      return (
        <Container className={classes}>
          <div className="main-footer">
            <LanguageDropdown
              locale={locale}
              locales={locales}
              onChange={onChange}
              upward
              direction="right"
              i18n={i18n!.dropdown}
            />
            <div className="links">
              <a href="https://decentraland.org">{i18n!.links.home}</a>
              <a href="https://decentraland.org/privacy">{i18n!.links.privacy}</a>
              <a href="https://decentraland.org/terms">{i18n!.links.terms}</a>
              <a href="https://decentraland.org/content">{i18n!.links.content}</a>
              <a href="https://decentraland.org/ethics">{i18n!.links.ethics}</a>
              <a href="https://decentraland.canny.io">{i18n!.links.feature}</a>
            </div>
          </div>
          <div className="secondary-footer">
            {!hideSocialLinks ? (
              <div className="social-links">
                <a href="https://dcl.gg/discord">
                  <i className="social-icon discord" />
                </a>
                <a href="https://reddit.com/r/decentraland">
                  <i className="social-icon reddit" />
                </a>
                <a href="https://github.com/decentraland">
                  <i className="social-icon github" />
                </a>
                <a href="https://twitter.com/decentraland">
                  <i className="social-icon twitter" />
                </a>
              </div>
            ) : null}
            <div className="copyright">
              © {new Date().getFullYear()} Decentraland
            </div>
          </div>
        </Container>
      )
    }
  }
  

const Footer = (props: FooterProps) => <BaseFooter locales={locales} {...props} />

export default React.memo(Footer)
