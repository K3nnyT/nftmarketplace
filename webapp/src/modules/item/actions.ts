import { action } from 'typesafe-actions'
import { ChainId, ItemFilters, Order } from '@dcl/schemas'
import { NFTPurchase } from 'decentraland-dapps/dist/modules/gateway/types'
import {
  buildCrossChainTransactionFromPayload,
  buildTransactionWithFromPayload,
  buildTransactionWithReceiptPayload
} from 'decentraland-dapps/dist/modules/transaction/utils'
import type { Route } from 'decentraland-transactions/crossChain'
import { formatWeiMANA } from '../../lib/mana'
import { getAssetName } from '../asset/utils'
import { ItemBrowseOptions, Item } from './types'

// Fetch Items

export const FETCH_ITEMS_REQUEST = '[Request] Fetch Items'
export const FETCH_ITEMS_SUCCESS = '[Success] Fetch Items'
export const FETCH_ITEMS_FAILURE = '[Failure] Fetch Items'
export const FETCH_ITEMS_CANCELLED_ERROR_MESSAGE = '[Cancelled] Fetch Items'

export const fetchItemsRequest = (options: ItemBrowseOptions) => action(FETCH_ITEMS_REQUEST, options)

export const fetchItemsSuccess = (items: Item[], total: number, options: ItemBrowseOptions, timestamp: number) =>
  action(FETCH_ITEMS_SUCCESS, { items, total, options, timestamp })

export const fetchItemsFailure = (error: string, options: ItemBrowseOptions) => action(FETCH_ITEMS_FAILURE, { error, options })

export type FetchItemsRequestAction = ReturnType<typeof fetchItemsRequest>
export type FetchItemsSuccessAction = ReturnType<typeof fetchItemsSuccess>
export type FetchItemsFailureAction = ReturnType<typeof fetchItemsFailure>

// Fetch trending Items

export const FETCH_TRENDING_ITEMS_REQUEST = '[Request] Fetch Trending Items'
export const FETCH_TRENDING_ITEMS_SUCCESS = '[Success] Fetch Trending Items'
export const FETCH_TRENDING_ITEMS_FAILURE = '[Failure] Fetch Trending Items'

export const fetchTrendingItemsRequest = (size?: number) => action(FETCH_TRENDING_ITEMS_REQUEST, { size })

export const fetchTrendingItemsSuccess = (items: Item[]) => action(FETCH_TRENDING_ITEMS_SUCCESS, { items })

export const fetchTrendingItemsFailure = (error: string) => action(FETCH_TRENDING_ITEMS_FAILURE, { error })

export type FetchTrendingItemsRequestAction = ReturnType<typeof fetchTrendingItemsRequest>
export type FetchTrendingItemsSuccessAction = ReturnType<typeof fetchTrendingItemsSuccess>
export type FetchTrendingItemsFailureAction = ReturnType<typeof fetchTrendingItemsFailure>

// Fetch Collection Items

export const FETCH_COLLECTION_ITEMS_REQUEST = '[Request] Fetch Collection Items'
export const FETCH_COLLECTION_ITEMS_SUCCESS = '[Success] Fetch Collection Items'
export const FETCH_COLLECTION_ITEMS_FAILURE = '[Failure] Fetch Collection Items'

export const fetchCollectionItemsRequest = (options: Pick<ItemFilters, 'first' | 'contractAddresses'>) =>
  action(FETCH_COLLECTION_ITEMS_REQUEST, options)

export const fetchCollectionItemsSuccess = (items: Item[]) => action(FETCH_COLLECTION_ITEMS_SUCCESS, { items })

export const fetchCollectionItemsFailure = (error: string) => action(FETCH_COLLECTION_ITEMS_FAILURE, { error })

export type FetchCollectionItemsRequestAction = ReturnType<typeof fetchCollectionItemsRequest>
export type FetchCollectionItemsSuccessAction = ReturnType<typeof fetchCollectionItemsSuccess>
export type FetchCollectionItemsFailureAction = ReturnType<typeof fetchCollectionItemsFailure>

// Buy Item
export const BUY_ITEM_REQUEST = '[Request] Buy item'
export const BUY_ITEM_SUCCESS = '[Success] Buy item'
export const BUY_ITEM_FAILURE = '[Failure] Buy item'

export const buyItemRequest = (item: Item, useCredits: boolean = false) => action(BUY_ITEM_REQUEST, { item, useCredits })

export const buyItemSuccess = (chainId: ChainId, txHash: string, item: Item) =>
  action(BUY_ITEM_SUCCESS, {
    chainId,
    item,
    txHash,
    ...buildTransactionWithReceiptPayload(item.chainId, txHash, {
      itemId: item.itemId,
      contractAddress: item.contractAddress,
      network: item.network,
      name: getAssetName(item),
      price: formatWeiMANA(item.price)
    })
  })

export const buyItemFailure = (error: string) => action(BUY_ITEM_FAILURE, { error })

export type BuyItemRequestAction = ReturnType<typeof buyItemRequest>
export type BuyItemSuccessAction = ReturnType<typeof buyItemSuccess>
export type BuyItemFailureAction = ReturnType<typeof buyItemFailure>

// Buy Item Cross Chain
export const BUY_ITEM_CROSS_CHAIN_REQUEST = '[Request] Buy item cross-chain'
export const BUY_ITEM_CROSS_CHAIN_SUCCESS = '[Success] Buy item cross-chain'
export const BUY_ITEM_CROSS_CHAIN_FAILURE = '[Failure] Buy item cross-chain'

export const buyItemCrossChainRequest = (item: Item, route: Route, order?: Order) =>
  action(BUY_ITEM_CROSS_CHAIN_REQUEST, { item, route, order })

export const buyItemCrossChainSuccess = (route: Route, chainId: ChainId, txHash: string, item: Item, order?: Order) =>
  action(BUY_ITEM_CROSS_CHAIN_SUCCESS, {
    route,
    item,
    txHash,
    order,
    ...buildCrossChainTransactionFromPayload(chainId, Number(route.route.params.toChain) as ChainId, txHash, route.requestId ?? 'Unknown', {
      itemId: item.itemId,
      contractAddress: item.contractAddress,
      network: item.network,
      name: getAssetName(item),
      price: formatWeiMANA(order?.price ?? item.price)
    })
  })

export const buyItemCrossChainFailure = (route: Route, item: Item, price: string, error: string) =>
  action(BUY_ITEM_CROSS_CHAIN_FAILURE, { route, item, price, error })

export type BuyItemCrossChainRequestAction = ReturnType<typeof buyItemCrossChainRequest>
export type BuyItemCrossChainSuccessAction = ReturnType<typeof buyItemCrossChainSuccess>
export type BuyItemCrossChainFailureAction = ReturnType<typeof buyItemCrossChainFailure>

// Buy Item With Card
export const BUY_ITEM_WITH_CARD_REQUEST = '[Request] Buy Item with Card'
export const BUY_ITEM_WITH_CARD_SUCCESS = '[Success] Buy Item with Card'
export const BUY_ITEM_WITH_CARD_FAILURE = '[Failure] Buy Item with Card'

export const buyItemWithCardRequest = (item: Item, useCredits: boolean = false) => action(BUY_ITEM_WITH_CARD_REQUEST, { item, useCredits })
export const buyItemWithCardSuccess = (chainId: ChainId, txHash: string, item: Item, purchase: NFTPurchase) =>
  action(BUY_ITEM_WITH_CARD_SUCCESS, {
    item,
    purchase,
    ...buildTransactionWithFromPayload(chainId, txHash, purchase.address, {
      itemId: item.itemId,
      contractAddress: item.contractAddress,
      network: item.network,
      name: getAssetName(item),
      price: purchase.nft.cryptoAmount.toString()
    })
  })
export const buyItemWithCardFailure = (error: string) => action(BUY_ITEM_WITH_CARD_FAILURE, { error })

export type BuyItemWithCardRequestAction = ReturnType<typeof buyItemWithCardRequest>
export type BuyItemWithCardSuccessAction = ReturnType<typeof buyItemWithCardSuccess>
export type BuyItemWithCardFailureAction = ReturnType<typeof buyItemWithCardFailure>

// Fetch Item

export const FETCH_ITEM_REQUEST = '[Request] Fetch Item'
export const FETCH_ITEM_SUCCESS = '[Success] Fetch Item'
export const FETCH_ITEM_FAILURE = '[Failure] Fetch Item'

export const fetchItemRequest = (contractAddress: string, tokenId: string) => action(FETCH_ITEM_REQUEST, { contractAddress, tokenId })
export const fetchItemSuccess = (item: Item) => action(FETCH_ITEM_SUCCESS, { item })
export const fetchItemFailure = (contractAddress: string, tokenId: string, error: string) =>
  action(FETCH_ITEM_FAILURE, { contractAddress, tokenId, error })

export type FetchItemRequestAction = ReturnType<typeof fetchItemRequest>
export type FetchItemSuccessAction = ReturnType<typeof fetchItemSuccess>
export type FetchItemFailureAction = ReturnType<typeof fetchItemFailure>

export const CLEAR_ITEM_ERRORS = 'Clear Item Errors'
export const clearItemErrors = () => action(CLEAR_ITEM_ERRORS)
export type ClearItemErrorsAction = ReturnType<typeof clearItemErrors>
