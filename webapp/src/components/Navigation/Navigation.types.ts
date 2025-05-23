import { Dispatch } from 'redux'
import { openBuyManaWithFiatModalRequest, OpenBuyManaWithFiatModalRequestAction } from 'decentraland-dapps/dist/modules/gateway/actions'
import { clearFilters, ClearFiltersAction } from '../../modules/routing/actions'

export enum NavigationTab {
  OVERVIEW = 'Home',
  CAMPAIGN_BROWSER = 'campaign-browser',
  LANDS = 'lands',
  NAMES = 'names',
  BROWSE = 'browse',
  COLLECTIBLES = 'collectibles',
  MY_STORE = 'my_store',
  MY_LISTS = 'my_lists',
  ACTIVITY = 'activity'
}

export type Props = {
  isCampaignBrowserEnabled: boolean
  isFullScreen?: boolean
  activeTab?: NavigationTab
  isFullscreen?: boolean
  campaignTab?: string
  onOpenBuyManaWithFiatModal: () => ReturnType<typeof openBuyManaWithFiatModalRequest>
  onClearFilters: typeof clearFilters
}

export type MapDispatch = Dispatch<OpenBuyManaWithFiatModalRequestAction | ClearFiltersAction>

export type MapStateProps = Pick<Props, 'isCampaignBrowserEnabled' | 'isFullScreen' | 'campaignTab'>
export type MapDispatchProps = Pick<Props, 'onOpenBuyManaWithFiatModal' | 'onClearFilters'>
