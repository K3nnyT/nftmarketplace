import React, { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Navbar2 as BaseNavbar2 } from 'decentraland-dapps/dist/containers/Navbar'
import { NavbarPages } from 'decentraland-ui/dist/components/Navbar/Navbar.types'
import { config } from '../../config'
import { locations } from '../../modules/routing/locations'
import { Props } from './Navbar.types'
import './Navbar.css'

const Navbar = (props: Props) => {
  const { pathname, search } = useLocation()
  const history = useHistory()

  const handleOnSignIn = useCallback(() => {
    const searchParams = new URLSearchParams(search)
    const currentRedirectTo = searchParams.get('redirectTo')
    const basename = /^decentraland.(zone|org|today)$/.test(window.location.host) ? '/marketplace' : ''
    const redirectTo = !currentRedirectTo ? `${basename}${pathname}${search}` : `${basename}${currentRedirectTo}`

    window.location.replace(`${config.get('AUTH_URL')}/login?redirectTo=${redirectTo}`)
  }, [pathname, search])

  const handleOnClickAccount = useCallback(() => {
    history.push(locations.settings())
  }, [history])

  return (
    <BaseNavbar2
      {...props}
      withChainSelector
      withNotifications
      activePage={NavbarPages.MARKETPLACE}
      hasActivity={props.hasPendingTransactions}
      identity={props.identity}
      onSignIn={handleOnSignIn}
      onClickMarketplaceAuthorization={handleOnClickAccount}
    />
  )
}

export default React.memo(Navbar)
