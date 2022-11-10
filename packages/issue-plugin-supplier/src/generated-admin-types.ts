export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AddFulfillmentToOrderResult =
  | CreateFulfillmentError
  | EmptyOrderLineSelectionError
  | Fulfillment
  | FulfillmentStateTransitionError
  | InsufficientStockOnHandError
  | InvalidFulfillmentHandlerError
  | ItemsAlreadyFulfilledError;

export type AddItemInput = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type AddItemToDraftOrderInput = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type AddManualPaymentToOrderResult = ManualPaymentStateError | Order;

export type AddNoteToCustomerInput = {
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  note: Scalars['String'];
};

export type AddNoteToOrderInput = {
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  note: Scalars['String'];
};

export type Address = Node & {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Country;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type AdjustDraftOrderLineInput = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type AdjustOrderLineInput = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type AdjustSupplierStockInput = {
  adjustType: SupplierStockAdjustType;
  quantity: Scalars['Int'];
  reason: Scalars['String'];
  stockId: Scalars['ID'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String'];
  amount: Scalars['Int'];
  description: Scalars['String'];
  type: AdjustmentType;
};

export enum AdjustmentType {
  DISTRIBUTED_ORDER_PROMOTION = 'DISTRIBUTED_ORDER_PROMOTION',
  OTHER = 'OTHER',
  PROMOTION = 'PROMOTION',
}

export type Administrator = Node & {
  __typename?: 'Administrator';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type AdministratorFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type AdministratorList = PaginatedList & {
  __typename?: 'AdministratorList';
  items: Array<Administrator>;
  totalItems: Scalars['Int'];
};

export type AdministratorListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<AdministratorFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<AdministratorSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type AdministratorPaymentInput = {
  metadata?: InputMaybe<Scalars['JSON']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
};

export type AdministratorRefundInput = {
  paymentId: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
};

export type AdministratorSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Allocation = Node &
  StockMovement & {
    __typename?: 'Allocation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderLine: OrderLine;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
  };

/** Returned if an attempting to refund an OrderItem which has already been refunded */
export type AlreadyRefundedError = ErrorResult & {
  __typename?: 'AlreadyRefundedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  refundId: Scalars['ID'];
};

export type ApplyCouponCodeResult =
  | CouponCodeExpiredError
  | CouponCodeInvalidError
  | CouponCodeLimitError
  | Order;

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  fileSize: Scalars['Int'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  preview: Scalars['String'];
  source: Scalars['String'];
  tags: Array<Tag>;
  type: AssetType;
  updatedAt: Scalars['DateTime'];
  width: Scalars['Int'];
};

export type AssetFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  fileSize?: InputMaybe<NumberOperators>;
  height?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  mimeType?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  preview?: InputMaybe<StringOperators>;
  source?: InputMaybe<StringOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  width?: InputMaybe<NumberOperators>;
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export type AssetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<AssetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<AssetSortParameter>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tagsOperator?: InputMaybe<LogicalOperator>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type AssetSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  fileSize?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  preview?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export enum AssetType {
  BINARY = 'BINARY',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export type AssignAssetsToChannelInput = {
  assetIds: Array<Scalars['ID']>;
  channelId: Scalars['ID'];
};

export type AssignCollectionsToChannelInput = {
  channelId: Scalars['ID'];
  collectionIds: Array<Scalars['ID']>;
};

export type AssignFacetsToChannelInput = {
  channelId: Scalars['ID'];
  facetIds: Array<Scalars['ID']>;
};

export type AssignProductVariantsToChannelInput = {
  channelId: Scalars['ID'];
  priceFactor?: InputMaybe<Scalars['Float']>;
  productVariantIds: Array<Scalars['ID']>;
};

export type AssignProductsToChannelInput = {
  channelId: Scalars['ID'];
  priceFactor?: InputMaybe<Scalars['Float']>;
  productIds: Array<Scalars['ID']>;
};

export type AssignPromotionsToChannelInput = {
  channelId: Scalars['ID'];
  promotionIds: Array<Scalars['ID']>;
};

export type AttachmentInput = {
  path?: InputMaybe<Scalars['String']>;
};

export type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  strategy: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError;

export type Banner = Node & {
  __typename?: 'Banner';
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  id: Scalars['ID'];
  key: Scalars['String'];
  languageCode: LanguageCode;
  lgImage: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
  position: BannerPosition;
  published: Scalars['Boolean'];
  shortDesc: Scalars['JSON'];
  translations: Array<BannerTranslation>;
  updatedAt: Scalars['DateTime'];
  xsImage: Scalars['String'];
};

export type BannerFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  key?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  lgImage?: InputMaybe<StringOperators>;
  link?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  position?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  xsImage?: InputMaybe<StringOperators>;
};

export type BannerList = PaginatedList & {
  __typename?: 'BannerList';
  items: Array<Banner>;
  totalItems: Scalars['Int'];
};

export type BannerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<BannerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<BannerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export enum BannerPosition {
  HomePage = 'HomePage',
}

export type BannerSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  lgImage?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  xsImage?: InputMaybe<SortOrder>;
};

export type BannerTranslation = Node & {
  __typename?: 'BannerTranslation';
  id: Scalars['ID'];
  /** 当前语言 */
  languageCode: LanguageCode;
  lgImage: Scalars['String'];
  link: Scalars['String'];
  /** 当前选项的名称 */
  name: Scalars['String'];
  shortDesc: Scalars['String'];
  xsImage: Scalars['String'];
};

export type BannerTranslationInput = {
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  lgImage: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
  shortDesc: Scalars['JSON'];
  xsImage: Scalars['String'];
};

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
  inList: Scalars['Boolean'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']>;
};

export type Campaign = Node & {
  __typename?: 'Campaign';
  applyForBeforeData: CampaignApplyForBeforeData;
  /** 针对不需要领券的活动, 可能无resut配置 */
  applyForResultData?: Maybe<CampaignApplyForResultData>;
  campaignType: CampaignType;
  /** 活动唯一标识 */
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  /** PC活动bannner */
  lgImage?: Maybe<Scalars['String']>;
  /** ADMIN-UI collection编辑应该有BUG 针对translation字段, 暂时遗留此字段为optional #issues/1338 */
  name?: Maybe<Scalars['String']>;
  needClaimCoupon?: Maybe<Scalars['Boolean']>;
  periodOfValidity?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Promotion>;
  shortDesc?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  /** Mobile活动bannner */
  xsImage?: Maybe<Scalars['String']>;
};

export type CampaignApplyForBeforeData = {
  __typename?: 'CampaignApplyForBeforeData';
  /** 按钮文字 */
  buttonText?: Maybe<Scalars['String']>;
  /** 政策小字 */
  policyText: Scalars['String'];
  /** 规则小字 */
  ruleText: Array<Scalars['String']>;
  /** 小字（标题下方） */
  subTitle: Array<Scalars['String']>;
  /** 文本框文字提示 */
  textBoxPlaceholder?: Maybe<Scalars['String']>;
  /** 标题（加粗文字） */
  title: Scalars['String'];
};

export type CampaignApplyForBeforeDataInput = {
  /** 按钮文字 */
  buttonText?: InputMaybe<Scalars['String']>;
  /** 政策小字 */
  policyText: Scalars['String'];
  /** 规则小字 */
  ruleText: Array<Scalars['String']>;
  /** 小字（标题下方） */
  subTitle: Array<Scalars['String']>;
  /** 文本框文字提示 */
  textBoxPlaceholder?: InputMaybe<Scalars['String']>;
  /** 标题（加粗文字） */
  title: Scalars['String'];
};

export type CampaignApplyForResultData = {
  __typename?: 'CampaignApplyForResultData';
  /** Expiry Date */
  expiryLabel: Scalars['String'];
  /** 规则小字 */
  ruleText: Array<Scalars['String']>;
  /** Terms条款label */
  termsCondition: Scalars['String'];
};

export type CampaignApplyForResultDataInput = {
  /** Expiry Date */
  expiryLabel: Scalars['String'];
  /** 规则小字 */
  ruleText: Array<Scalars['String']>;
  /** Terms条款label */
  termsCondition: Scalars['String'];
};

export type CampaignCoupon = Node & {
  __typename?: 'CampaignCoupon';
  campaign: Campaign;
  couponCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  emailAddress: Scalars['String'];
  endsAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type CampaignCouponFilterParameter = {
  couponCode?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  endsAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CampaignCouponList = PaginatedList & {
  __typename?: 'CampaignCouponList';
  items: Array<CampaignCoupon>;
  totalItems: Scalars['Int'];
};

export type CampaignCouponListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CampaignCouponFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CampaignCouponSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CampaignCouponSortParameter = {
  couponCode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CampaignFilterParameter = {
  campaignType?: InputMaybe<StringOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  lgImage?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  needClaimCoupon?: InputMaybe<BooleanOperators>;
  periodOfValidity?: InputMaybe<NumberOperators>;
  shortDesc?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  xsImage?: InputMaybe<StringOperators>;
};

export type CampaignList = PaginatedList & {
  __typename?: 'CampaignList';
  items: Array<Campaign>;
  totalItems: Scalars['Int'];
};

export type CampaignListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CampaignFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CampaignSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CampaignSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lgImage?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  periodOfValidity?: InputMaybe<SortOrder>;
  shortDesc?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  xsImage?: InputMaybe<SortOrder>;
};

export type CampaignTranslationInput = {
  applyForBeforeData: CampaignApplyForBeforeDataInput;
  applyForResultData?: InputMaybe<CampaignApplyForResultDataInput>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  lgImage?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortDesc?: InputMaybe<Scalars['String']>;
  xsImage?: InputMaybe<Scalars['String']>;
};

export enum CampaignType {
  /** 所有用户, 固定金额拉新, 直降模式 */
  AllUserFixedAmount = 'AllUserFixedAmount',
  /** 买一送一+镜片打折 */
  BuyXGetYFreeWithLensDiscount = 'BuyXGetYFreeWithLensDiscount',
  /** 节假日直活动 */
  DirectDiscount = 'DirectDiscount',
  /** 新用户首单镜架1USD */
  NewUserFirstPair = 'NewUserFirstPair',
  /** 新用户固定金额拉新, 领券模式 */
  NewUserFixedAmount = 'NewUserFixedAmount',
}

/** Returned if an attempting to cancel lines from an Order which is still active */
export type CancelActiveOrderError = ErrorResult & {
  __typename?: 'CancelActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  orderState: Scalars['String'];
};

export type CancelOrderInput = {
  /** Specify whether the shipping charges should also be cancelled. Defaults to false */
  cancelShipping?: InputMaybe<Scalars['Boolean']>;
  /** Optionally specify which OrderLines to cancel. If not provided, all OrderLines will be cancelled */
  lines?: InputMaybe<Array<OrderLineInput>>;
  /** The id of the order to be cancelled */
  orderId: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
};

export type CancelOrderResult =
  | CancelActiveOrderError
  | EmptyOrderLineSelectionError
  | MultipleOrderError
  | Order
  | OrderStateTransitionError
  | QuantityTooGreatError;

/** Returned if the Payment cancellation fails */
export type CancelPaymentError = ErrorResult & {
  __typename?: 'CancelPaymentError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

export type CancelPaymentResult =
  | CancelPaymentError
  | Payment
  | PaymentStateTransitionError;

export type Cancellation = Node &
  StockMovement & {
    __typename?: 'Cancellation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderLine: OrderLine;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
  };

export type Channel = Node & {
  __typename?: 'Channel';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']>;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID'];
  pricesIncludeTax: Scalars['Boolean'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/**
 * Returned when the default LanguageCode of a Channel is no longer found in the `availableLanguages`
 * of the GlobalSettings
 */
export type ChannelDefaultLanguageError = ErrorResult & {
  __typename?: 'ChannelDefaultLanguageError';
  channelCode: Scalars['String'];
  errorCode: ErrorCode;
  language: Scalars['String'];
  message: Scalars['String'];
};

export type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CollectionCustomFields>;
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  parent?: Maybe<Collection>;
  position: Scalars['Int'];
  productVariants: ProductVariantList;
  slug: Scalars['String'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CollectionCustomFields = {
  __typename?: 'CollectionCustomFields';
  campaign?: Maybe<Campaign>;
  collectionKeys?: Maybe<Scalars['String']>;
  collectionType?: Maybe<Scalars['String']>;
  invisible?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type CollectionFilterParameter = {
  collectionKeys?: InputMaybe<StringOperators>;
  collectionType?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  invisible?: InputMaybe<BooleanOperators>;
  isFeatured?: InputMaybe<BooleanOperators>;
  isPrivate?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  position?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CollectionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int'];
};

export type CollectionSortParameter = {
  campaign?: InputMaybe<SortOrder>;
  collectionKeys?: InputMaybe<SortOrder>;
  collectionType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invisible?: InputMaybe<SortOrder>;
  isFeatured?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CollectionTranslationCustomFields>;
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CollectionTranslationCustomFields = {
  __typename?: 'CollectionTranslationCustomFields';
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  defaultValue?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type ConfigArgInput = {
  name: Scalars['String'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  args: Array<ConfigArg>;
  code: Scalars['String'];
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String'];
  description: Scalars['String'];
};

export type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type CoordinateInput = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Country = Node & {
  __typename?: 'Country';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CountryCustomFields>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<CountryTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type CountryCustomFields = {
  __typename?: 'CountryCustomFields';
  displayOrder?: Maybe<Scalars['Int']>;
};

export type CountryFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export type CountryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CountryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CountrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CountrySortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CountryTranslation = {
  __typename?: 'CountryTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CountryTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  limit: Scalars['Int'];
  message: Scalars['String'];
};

export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: InputMaybe<Scalars['String']>;
};

export type CreateAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  roleIds: Array<Scalars['ID']>;
};

export type CreateAssetInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  file: Scalars['Upload'];
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateAssetResult = Asset | MimeTypeError;

export type CreateBannerInput = {
  displayOrder: Scalars['Int'];
  key: Scalars['String'];
  position: BannerPosition;
  published: Scalars['Boolean'];
  translations: Array<BannerTranslationInput>;
};

export type CreateCampaignCouponInput = {
  campaignId: Scalars['ID'];
  couponCode: Scalars['String'];
  emailAddress: Scalars['String'];
  endsAt?: InputMaybe<Scalars['DateTime']>;
};

export type CreateCampaignInput = {
  campaignType: CampaignType;
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  needClaimCoupon?: InputMaybe<Scalars['Boolean']>;
  periodOfValidity?: InputMaybe<Scalars['Int']>;
  promotionId?: InputMaybe<Scalars['Int']>;
  translations: Array<CampaignTranslationInput>;
};

export type CreateChannelInput = {
  code: Scalars['String'];
  currencyCode: CurrencyCode;
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultLanguageCode: LanguageCode;
  defaultShippingZoneId: Scalars['ID'];
  defaultTaxZoneId: Scalars['ID'];
  pricesIncludeTax: Scalars['Boolean'];
  token: Scalars['String'];
};

export type CreateChannelResult = Channel | LanguageNotAvailableError;

export type CreateCollectionCustomFieldsInput = {
  campaignId?: InputMaybe<Scalars['ID']>;
  collectionKeys?: InputMaybe<Scalars['String']>;
  collectionType?: InputMaybe<Scalars['String']>;
  invisible?: InputMaybe<Scalars['Boolean']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
};

export type CreateCollectionInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<CreateCollectionCustomFieldsInput>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  filters: Array<ConfigurableOperationInput>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  parentId?: InputMaybe<Scalars['ID']>;
  translations: Array<CreateCollectionTranslationInput>;
};

export type CreateCollectionTranslationInput = {
  customFields?: InputMaybe<CreateCollectionTranslationInputCustomFields>;
  description: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CreateCollectionTranslationInputCustomFields = {
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type CreateCountryCustomFieldsInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
};

export type CreateCountryInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<CreateCountryCustomFieldsInput>;
  enabled: Scalars['Boolean'];
  translations: Array<CountryTranslationInput>;
};

export type CreateCustomerCustomFieldsInput = {
  birthday?: InputMaybe<Scalars['String']>;
  faceshape?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerGroupInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  customerIds?: InputMaybe<Array<Scalars['ID']>>;
  name: Scalars['String'];
};

export type CreateCustomerInput = {
  customFields?: InputMaybe<CreateCustomerCustomFieldsInput>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerResult = Customer | EmailAddressConflictError;

export type CreateEdmEmailResolverJobLoggingInput = {
  level: LogLevel;
  log?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  resolverMethodId: Scalars['ID'];
};

export type CreateEdmEmailResolverMethodInput = {
  code: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  handler: ConfigurableOperationInput;
  languageCode: LanguageCode;
  name: Scalars['String'];
  schedule?: InputMaybe<EdmScheduleInput>;
};

export type CreateEdmEmailSenderInput = {
  attachments?: InputMaybe<Array<AttachmentInput>>;
  bcc?: InputMaybe<Scalars['String']>;
  cc?: InputMaybe<Scalars['String']>;
  from: Scalars['String'];
  recipients: Array<Scalars['String']>;
  replyTo?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  templateContent?: InputMaybe<Scalars['String']>;
  templateFile?: InputMaybe<Scalars['String']>;
  templateVars?: InputMaybe<Scalars['JSON']>;
};

export type CreateEdmEmailTemplateInput = {
  edmEmailTemplateTypeId: Scalars['ID'];
  enabled?: InputMaybe<Scalars['Boolean']>;
  generatorType: HandlebarsGeneratorType;
  translations: Array<EdmEmailTemplateTranslationInput>;
};

export type CreateEdmEmailTemplateTypeInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateEdmGroupEmailChunkInput = {
  addressChunk: Scalars['JSON'];
  edmGroupId: Scalars['ID'];
};

export type CreateEdmGroupInput = {
  creatorId: Scalars['ID'];
  description: Scalars['String'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type CreateEdmTaskPlanInput = {
  description?: InputMaybe<Scalars['String']>;
  edmEmailTemplateId: Scalars['ID'];
  edmGroupIds: Array<Scalars['ID']>;
  enabled: Scalars['Boolean'];
  executions: Scalars['Int'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  schedule?: InputMaybe<EdmScheduleInput>;
  state: EdmTaskPlanState;
};

export type CreateEdmTaskPlanJobLoggingInput = {
  edmTaskPlanId: Scalars['ID'];
  level: LogLevel;
  log?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
};

export type CreateFacetCustomFieldsInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  invisible?: InputMaybe<Scalars['Boolean']>;
};

export type CreateFacetInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<CreateFacetCustomFieldsInput>;
  isPrivate: Scalars['Boolean'];
  translations: Array<FacetTranslationInput>;
  values?: InputMaybe<Array<CreateFacetValueWithFacetInput>>;
};

export type CreateFacetValueCustomFieldsInput = {
  campaignConfigData?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
};

export type CreateFacetValueInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<CreateFacetValueCustomFieldsInput>;
  facetId: Scalars['ID'];
  translations: Array<FacetValueTranslationInput>;
};

export type CreateFacetValueWithFacetInput = {
  code: Scalars['String'];
  translations: Array<FacetValueTranslationInput>;
};

/** Returned if an error is thrown in a FulfillmentHandler's createFulfillment method */
export type CreateFulfillmentError = ErrorResult & {
  __typename?: 'CreateFulfillmentError';
  errorCode: ErrorCode;
  fulfillmentHandlerError: Scalars['String'];
  message: Scalars['String'];
};

export type CreateGroupOptionInput = {
  code: Scalars['String'];
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateHelpCenterCollectionInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['ID']>;
  published?: InputMaybe<Scalars['Boolean']>;
  showOnTop: Scalars['Boolean'];
  translations: Array<HelpCenterCollectionTranslationInput>;
};

export type CreateHelpCenterHotSearchInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  keyword: Scalars['String'];
  languageCode: LanguageCode;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type CreateHelpCenterInput = {
  collectionIds?: InputMaybe<Array<Scalars['ID']>>;
  displayOrder?: InputMaybe<Scalars['Int']>;
  helpfulNo?: InputMaybe<Scalars['Int']>;
  helpfulYes?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  showOnTop: Scalars['Boolean'];
  tagIds?: InputMaybe<Array<Scalars['ID']>>;
  translations: Array<HelpCenterTranslationInput>;
};

export type CreateHelpCenterTagInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  translations: Array<HelpCenterTagTranslationInput>;
};

export type CreateInvoiceInput = {
  orderCode: Scalars['String'];
};

export type CreateLensProcessConfigItemInput = {
  disabled: Scalars['Boolean'];
  displayOrder: Scalars['Int'];
  lensProcessOptionId: Scalars['ID'];
  lensProcessTemplateId: Scalars['ID'];
  overridePrice?: InputMaybe<Scalars['Int']>;
  overrideRecommendRuleConditions?: InputMaybe<Scalars['JSON']>;
  overrideRuleConditions?: InputMaybe<Scalars['JSON']>;
};

export type CreateLensProcessOptionInput = {
  adjustPrice: Scalars['Int'];
  /**
   * 针对购物车升级, 如果指定了依赖keys
   * 1. 先验证当前的升级包规则满足条件之后
   * 2. 我们从这个里面找到他T3的可能能够选择流程, 计算T3流程的价格.(从中选择最便宜并且价格比当前价格更高的一个选项)
   */
  dependentFromT3Key?: InputMaybe<LensProcessOptionKeys>;
  displayOrder?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<LensProcessOptionKeys>;
  parentId?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['JSON']>;
  recommendRuleConditions?: InputMaybe<Scalars['JSON']>;
  /** 可选值, 针对T4(变种条件可能有1000个), 考虑性能, 可以设置他依赖的T1,T3作为条件, 在查询T4的时候数据提取过滤掉不需要的item */
  requiredPreSelectedKeys?: InputMaybe<Array<LensProcessOptionKeys>>;
  ruleConditions?: InputMaybe<Scalars['JSON']>;
  stepGroupName: LensStepGroups;
  translations: Array<LensProcessOptionTranslationInput>;
  uiComponents?: InputMaybe<LensOptionUiComponentsInput>;
  upgradeToKeys?: InputMaybe<Array<LensProcessOptionKeys>>;
};

export type CreateLensProcessTemplateInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateModuleMenuAclInput = {
  aclTagName: Scalars['String'];
  aclTagRemark: Scalars['String'];
  moduleMenuId: Scalars['Int'];
  permissions: Array<Permission>;
};

export type CreateModuleMenuInput = {
  description?: InputMaybe<Scalars['String']>;
  iconImg?: InputMaybe<Scalars['String']>;
  iconImgActive?: InputMaybe<Scalars['String']>;
  invisible?: InputMaybe<Scalars['Boolean']>;
  link: MenuLinkTemplateInput;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['ID']>;
  path: Scalars['String'];
  pathMatch: Scalars['String'];
  permissions: Array<Permission>;
  routeBaseName?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  target?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<ModuleTemplateInput>;
};

export type CreateModuleNormalInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  pathMatch: Scalars['String'];
  permissions: Array<Permission>;
  routeBaseName?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<ModuleTemplateInput>;
};

export type CreatePaymentMethodCustomFieldsInput = {
  paypalClientConfig?: InputMaybe<Scalars['String']>;
};

export type CreatePaymentMethodInput = {
  checker?: InputMaybe<ConfigurableOperationInput>;
  code: Scalars['String'];
  customFields?: InputMaybe<CreatePaymentMethodCustomFieldsInput>;
  description?: InputMaybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  handler: ConfigurableOperationInput;
  name: Scalars['String'];
};

export type CreateProductCustomFieldsInput = {
  bridge?: InputMaybe<Scalars['Int']>;
  dimensionModelConfig?: InputMaybe<Scalars['String']>;
  isFinishProduct?: InputMaybe<Scalars['Boolean']>;
  lensDiagonalSize?: InputMaybe<Scalars['Int']>;
  lensHeight?: InputMaybe<Scalars['Int']>;
  lensProcessTemplateId?: InputMaybe<Scalars['ID']>;
  lensWidth?: InputMaybe<Scalars['Int']>;
  minLensDiam?: InputMaybe<Scalars['Int']>;
  productTypeCode?: InputMaybe<Scalars['String']>;
  reviewCount?: InputMaybe<Scalars['Int']>;
  reviewRating?: InputMaybe<Scalars['Float']>;
  templeLength?: InputMaybe<Scalars['Int']>;
  totalWidth?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type CreateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<CreateProductCustomFieldsInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  translations: Array<ProductTranslationInput>;
};

export type CreateProductOptionGroupInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  options: Array<CreateGroupOptionInput>;
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateProductOptionInput = {
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  productOptionGroupId: Scalars['ID'];
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateProductReviewImageInput = {
  crop: Scalars['String'];
  file?: InputMaybe<Array<Scalars['Upload']>>;
  id: Scalars['ID'];
};

export type CreateProductReviewInput = {
  adminCreatedCustomerName?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customerNameIsPublic: Scalars['Boolean'];
  downVotes?: InputMaybe<Scalars['Int']>;
  languageCode: LanguageCode;
  orderLineId?: InputMaybe<Scalars['ID']>;
  productVariantId: Scalars['ID'];
  rating: Scalars['Float'];
  showAsTestimonial?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  suggestions?: InputMaybe<Scalars['String']>;
  systemAutoCreated?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  upVotes?: InputMaybe<Scalars['Int']>;
};

export type CreateProductVariantCustomFieldsInput = {
  costPrice?: InputMaybe<Scalars['Int']>;
  dimensionFrameAssetId?: InputMaybe<Scalars['ID']>;
  dimensionTempleAssetId?: InputMaybe<Scalars['ID']>;
  internalSku?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  tryonFrameAssetId?: InputMaybe<Scalars['ID']>;
  tryonFrameModelConfig?: InputMaybe<Scalars['String']>;
  tryonTempleAssetId?: InputMaybe<Scalars['ID']>;
  visualFrameAssetId?: InputMaybe<Scalars['ID']>;
};

export type CreateProductVariantInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<CreateProductVariantCustomFieldsInput>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  optionIds?: InputMaybe<Array<Scalars['ID']>>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  productId: Scalars['ID'];
  sku: Scalars['String'];
  stockOnHand?: InputMaybe<Scalars['Int']>;
  taxCategoryId?: InputMaybe<Scalars['ID']>;
  trackInventory?: InputMaybe<GlobalFlag>;
  translations: Array<ProductVariantTranslationInput>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']>;
};

export type CreateProductVariantOptionInput = {
  code: Scalars['String'];
  optionGroupId: Scalars['ID'];
  translations: Array<ProductOptionTranslationInput>;
};

export type CreatePromotionInput = {
  actions: Array<ConfigurableOperationInput>;
  conditions: Array<ConfigurableOperationInput>;
  couponCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  endsAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  perCustomerUsageLimit?: InputMaybe<Scalars['Int']>;
  startsAt?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePromotionResult = MissingConditionsError | Promotion;

export type CreateRiskInput = {
  address?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  customerId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  riskScore: Scalars['Int'];
};

export type CreateRoleInput = {
  channelIds?: InputMaybe<Array<Scalars['ID']>>;
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Permission>;
};

export type CreateRxInput = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  customerId: Scalars['Int'];
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  /** 是否标记为默认处方 */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** 处方单名称 */
  name?: InputMaybe<Scalars['String']>;
  normalizedRx?: InputMaybe<NormalizedRxInput>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: InputMaybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: InputMaybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: InputMaybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: InputMaybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: InputMaybe<PrismItemInput>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  reading?: InputMaybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: InputMaybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};

export type CreateRxItemConfigInput = {
  adjustPrice: Scalars['Int'];
  rxDefaultValue: Scalars['String'];
  rxInputRules?: InputMaybe<Array<Scalars['JSON']>>;
  rxItemName: RxItemName;
  rxOptions?: InputMaybe<Scalars['JSON']>;
  /** 处方配置项目, 输入可选, 比如保存特殊的规则配置想 处方类型无意义(save联合校验规则) */
  rxType?: InputMaybe<RxType>;
  translations: Array<RxItemConfigTranslationInput>;
};

export type CreateSearchIndexRankingConfigInput = {
  channelId?: InputMaybe<Scalars['ID']>;
  languageCode?: InputMaybe<LanguageCode>;
  rankingRate: Scalars['Float'];
  rankingType: SearchIndexRankingType;
};

export type CreateSettingInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  translations: Array<SettingTranslationInput>;
};

export type CreateShippingMethodInput = {
  calculator: ConfigurableOperationInput;
  checker: ConfigurableOperationInput;
  code: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  fulfillmentHandler: Scalars['String'];
  translations: Array<ShippingMethodTranslationInput>;
};

export type CreateSubscriptionFacetInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  values?: InputMaybe<Array<CreateSubscriptionFacetValueWithFacetInput>>;
};

export type CreateSubscriptionFacetValueInput = {
  code: Scalars['String'];
  facetId: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateSubscriptionFacetValueWithFacetInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

export type CreateSubscriptionInput = {
  enabled: Scalars['Boolean'];
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  languageCode: LanguageCode;
  subscribeFrom: Scalars['String'];
  type: SubscriptionType;
  value: Scalars['String'];
};

export type CreateSupplierInput = {
  comment?: InputMaybe<Scalars['String']>;
  supplierName: Scalars['String'];
  supplierNo: Scalars['String'];
  supplierType?: InputMaybe<Scalars['String']>;
};

export type CreateSupplierStockHistoryInput = {
  data?: InputMaybe<Scalars['JSON']>;
  stockAdjustType: SupplierStockAdjustType;
  supplierStockId: Scalars['ID'];
  uniqueKey?: InputMaybe<Scalars['String']>;
};

export type CreateSupplierStockInTransitInput = {
  channelName?: InputMaybe<Scalars['String']>;
  channelOrderNo: Scalars['String'];
  quantity: Scalars['Int'];
  supplierStockId: Scalars['ID'];
};

export type CreateSupplierStockInput = {
  comment?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  inTransitsStock?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  productVariantId: Scalars['String'];
  stockArea?: InputMaybe<Scalars['String']>;
  stockOnHand: Scalars['Int'];
  supplierId?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  virtualStock: Scalars['Int'];
};

export type CreateTagInput = {
  value: Scalars['String'];
};

export type CreateTaxCategoryInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
};

export type CreateTaxRateInput = {
  categoryId: Scalars['ID'];
  customFields?: InputMaybe<Scalars['JSON']>;
  customerGroupId?: InputMaybe<Scalars['ID']>;
  enabled: Scalars['Boolean'];
  name: Scalars['String'];
  value: Scalars['Float'];
  zoneId: Scalars['ID'];
};

export type CreateTopicInput = {
  helpfulNo?: InputMaybe<Scalars['Int']>;
  helpfulYes?: InputMaybe<Scalars['Int']>;
  published?: InputMaybe<Scalars['Boolean']>;
  translations: Array<TopicTranslationInput>;
};

export type CreateTopicLinkInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  translations: Array<TopicLinkTranslationInput>;
};

export type CreateTryonFaceModelInput = {
  file: Array<Scalars['Upload']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  userPd?: InputMaybe<Scalars['Int']>;
};

export type CreateZoneInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  memberIds?: InputMaybe<Array<Scalars['ID']>>;
  name: Scalars['String'];
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  AED = 'AED',
  /** Afghan afghani */
  AFN = 'AFN',
  /** Albanian lek */
  ALL = 'ALL',
  /** Armenian dram */
  AMD = 'AMD',
  /** Netherlands Antillean guilder */
  ANG = 'ANG',
  /** Angolan kwanza */
  AOA = 'AOA',
  /** Argentine peso */
  ARS = 'ARS',
  /** Australian dollar */
  AUD = 'AUD',
  /** Aruban florin */
  AWG = 'AWG',
  /** Azerbaijani manat */
  AZN = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  BAM = 'BAM',
  /** Barbados dollar */
  BBD = 'BBD',
  /** Bangladeshi taka */
  BDT = 'BDT',
  /** Bulgarian lev */
  BGN = 'BGN',
  /** Bahraini dinar */
  BHD = 'BHD',
  /** Burundian franc */
  BIF = 'BIF',
  /** Bermudian dollar */
  BMD = 'BMD',
  /** Brunei dollar */
  BND = 'BND',
  /** Boliviano */
  BOB = 'BOB',
  /** Brazilian real */
  BRL = 'BRL',
  /** Bahamian dollar */
  BSD = 'BSD',
  /** Bhutanese ngultrum */
  BTN = 'BTN',
  /** Botswana pula */
  BWP = 'BWP',
  /** Belarusian ruble */
  BYN = 'BYN',
  /** Belize dollar */
  BZD = 'BZD',
  /** Canadian dollar */
  CAD = 'CAD',
  /** Congolese franc */
  CDF = 'CDF',
  /** Swiss franc */
  CHF = 'CHF',
  /** Chilean peso */
  CLP = 'CLP',
  /** Renminbi (Chinese) yuan */
  CNY = 'CNY',
  /** Colombian peso */
  COP = 'COP',
  /** Costa Rican colon */
  CRC = 'CRC',
  /** Cuban convertible peso */
  CUC = 'CUC',
  /** Cuban peso */
  CUP = 'CUP',
  /** Cape Verde escudo */
  CVE = 'CVE',
  /** Czech koruna */
  CZK = 'CZK',
  /** Djiboutian franc */
  DJF = 'DJF',
  /** Danish krone */
  DKK = 'DKK',
  /** Dominican peso */
  DOP = 'DOP',
  /** Algerian dinar */
  DZD = 'DZD',
  /** Egyptian pound */
  EGP = 'EGP',
  /** Eritrean nakfa */
  ERN = 'ERN',
  /** Ethiopian birr */
  ETB = 'ETB',
  /** Euro */
  EUR = 'EUR',
  /** Fiji dollar */
  FJD = 'FJD',
  /** Falkland Islands pound */
  FKP = 'FKP',
  /** Pound sterling */
  GBP = 'GBP',
  /** Georgian lari */
  GEL = 'GEL',
  /** Ghanaian cedi */
  GHS = 'GHS',
  /** Gibraltar pound */
  GIP = 'GIP',
  /** Gambian dalasi */
  GMD = 'GMD',
  /** Guinean franc */
  GNF = 'GNF',
  /** Guatemalan quetzal */
  GTQ = 'GTQ',
  /** Guyanese dollar */
  GYD = 'GYD',
  /** Hong Kong dollar */
  HKD = 'HKD',
  /** Honduran lempira */
  HNL = 'HNL',
  /** Croatian kuna */
  HRK = 'HRK',
  /** Haitian gourde */
  HTG = 'HTG',
  /** Hungarian forint */
  HUF = 'HUF',
  /** Indonesian rupiah */
  IDR = 'IDR',
  /** Israeli new shekel */
  ILS = 'ILS',
  /** Indian rupee */
  INR = 'INR',
  /** Iraqi dinar */
  IQD = 'IQD',
  /** Iranian rial */
  IRR = 'IRR',
  /** Icelandic króna */
  ISK = 'ISK',
  /** Jamaican dollar */
  JMD = 'JMD',
  /** Jordanian dinar */
  JOD = 'JOD',
  /** Japanese yen */
  JPY = 'JPY',
  /** Kenyan shilling */
  KES = 'KES',
  /** Kyrgyzstani som */
  KGS = 'KGS',
  /** Cambodian riel */
  KHR = 'KHR',
  /** Comoro franc */
  KMF = 'KMF',
  /** North Korean won */
  KPW = 'KPW',
  /** South Korean won */
  KRW = 'KRW',
  /** Kuwaiti dinar */
  KWD = 'KWD',
  /** Cayman Islands dollar */
  KYD = 'KYD',
  /** Kazakhstani tenge */
  KZT = 'KZT',
  /** Lao kip */
  LAK = 'LAK',
  /** Lebanese pound */
  LBP = 'LBP',
  /** Sri Lankan rupee */
  LKR = 'LKR',
  /** Liberian dollar */
  LRD = 'LRD',
  /** Lesotho loti */
  LSL = 'LSL',
  /** Libyan dinar */
  LYD = 'LYD',
  /** Moroccan dirham */
  MAD = 'MAD',
  /** Moldovan leu */
  MDL = 'MDL',
  /** Malagasy ariary */
  MGA = 'MGA',
  /** Macedonian denar */
  MKD = 'MKD',
  /** Myanmar kyat */
  MMK = 'MMK',
  /** Mongolian tögrög */
  MNT = 'MNT',
  /** Macanese pataca */
  MOP = 'MOP',
  /** Mauritanian ouguiya */
  MRU = 'MRU',
  /** Mauritian rupee */
  MUR = 'MUR',
  /** Maldivian rufiyaa */
  MVR = 'MVR',
  /** Malawian kwacha */
  MWK = 'MWK',
  /** Mexican peso */
  MXN = 'MXN',
  /** Malaysian ringgit */
  MYR = 'MYR',
  /** Mozambican metical */
  MZN = 'MZN',
  /** Namibian dollar */
  NAD = 'NAD',
  /** Nigerian naira */
  NGN = 'NGN',
  /** Nicaraguan córdoba */
  NIO = 'NIO',
  /** Norwegian krone */
  NOK = 'NOK',
  /** Nepalese rupee */
  NPR = 'NPR',
  /** New Zealand dollar */
  NZD = 'NZD',
  /** Omani rial */
  OMR = 'OMR',
  /** Panamanian balboa */
  PAB = 'PAB',
  /** Peruvian sol */
  PEN = 'PEN',
  /** Papua New Guinean kina */
  PGK = 'PGK',
  /** Philippine peso */
  PHP = 'PHP',
  /** Pakistani rupee */
  PKR = 'PKR',
  /** Polish złoty */
  PLN = 'PLN',
  /** Paraguayan guaraní */
  PYG = 'PYG',
  /** Qatari riyal */
  QAR = 'QAR',
  /** Romanian leu */
  RON = 'RON',
  /** Serbian dinar */
  RSD = 'RSD',
  /** Russian ruble */
  RUB = 'RUB',
  /** Rwandan franc */
  RWF = 'RWF',
  /** Saudi riyal */
  SAR = 'SAR',
  /** Solomon Islands dollar */
  SBD = 'SBD',
  /** Seychelles rupee */
  SCR = 'SCR',
  /** Sudanese pound */
  SDG = 'SDG',
  /** Swedish krona/kronor */
  SEK = 'SEK',
  /** Singapore dollar */
  SGD = 'SGD',
  /** Saint Helena pound */
  SHP = 'SHP',
  /** Sierra Leonean leone */
  SLL = 'SLL',
  /** Somali shilling */
  SOS = 'SOS',
  /** Surinamese dollar */
  SRD = 'SRD',
  /** South Sudanese pound */
  SSP = 'SSP',
  /** São Tomé and Príncipe dobra */
  STN = 'STN',
  /** Salvadoran colón */
  SVC = 'SVC',
  /** Syrian pound */
  SYP = 'SYP',
  /** Swazi lilangeni */
  SZL = 'SZL',
  /** Thai baht */
  THB = 'THB',
  /** Tajikistani somoni */
  TJS = 'TJS',
  /** Turkmenistan manat */
  TMT = 'TMT',
  /** Tunisian dinar */
  TND = 'TND',
  /** Tongan paʻanga */
  TOP = 'TOP',
  /** Turkish lira */
  TRY = 'TRY',
  /** Trinidad and Tobago dollar */
  TTD = 'TTD',
  /** New Taiwan dollar */
  TWD = 'TWD',
  /** Tanzanian shilling */
  TZS = 'TZS',
  /** Ukrainian hryvnia */
  UAH = 'UAH',
  /** Ugandan shilling */
  UGX = 'UGX',
  /** United States dollar */
  USD = 'USD',
  /** Uruguayan peso */
  UYU = 'UYU',
  /** Uzbekistan som */
  UZS = 'UZS',
  /** Venezuelan bolívar soberano */
  VES = 'VES',
  /** Vietnamese đồng */
  VND = 'VND',
  /** Vanuatu vatu */
  VUV = 'VUV',
  /** Samoan tala */
  WST = 'WST',
  /** CFA franc BEAC */
  XAF = 'XAF',
  /** East Caribbean dollar */
  XCD = 'XCD',
  /** CFA franc BCEAO */
  XOF = 'XOF',
  /** CFP franc (franc Pacifique) */
  XPF = 'XPF',
  /** Yemeni rial */
  YER = 'YER',
  /** South African rand */
  ZAR = 'ZAR',
  /** Zambian kwacha */
  ZMW = 'ZMW',
  /** Zimbabwean dollar */
  ZWL = 'ZWL',
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  code: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  token: Scalars['String'];
};

export type CustomField = {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type CustomFieldConfig =
  | BooleanCustomFieldConfig
  | DateTimeCustomFieldConfig
  | FloatCustomFieldConfig
  | IntCustomFieldConfig
  | LocaleStringCustomFieldConfig
  | RelationCustomFieldConfig
  | StringCustomFieldConfig
  | TextCustomFieldConfig;

export type CustomFields = {
  __typename?: 'CustomFields';
  Address: Array<CustomFieldConfig>;
  Administrator: Array<CustomFieldConfig>;
  Asset: Array<CustomFieldConfig>;
  Channel: Array<CustomFieldConfig>;
  Collection: Array<CustomFieldConfig>;
  Country: Array<CustomFieldConfig>;
  Customer: Array<CustomFieldConfig>;
  CustomerGroup: Array<CustomFieldConfig>;
  Facet: Array<CustomFieldConfig>;
  FacetValue: Array<CustomFieldConfig>;
  Fulfillment: Array<CustomFieldConfig>;
  GlobalSettings: Array<CustomFieldConfig>;
  Order: Array<CustomFieldConfig>;
  OrderLine: Array<CustomFieldConfig>;
  PaymentMethod: Array<CustomFieldConfig>;
  Product: Array<CustomFieldConfig>;
  ProductOption: Array<CustomFieldConfig>;
  ProductOptionGroup: Array<CustomFieldConfig>;
  ProductVariant: Array<CustomFieldConfig>;
  Promotion: Array<CustomFieldConfig>;
  ShippingMethod: Array<CustomFieldConfig>;
  TaxCategory: Array<CustomFieldConfig>;
  TaxRate: Array<CustomFieldConfig>;
  User: Array<CustomFieldConfig>;
  Zone: Array<CustomFieldConfig>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CustomerCustomFields>;
  emailAddress: Scalars['String'];
  favorites: FavoriteList;
  firstName: Scalars['String'];
  groups: Array<CustomerGroup>;
  history: HistoryEntryList;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']>;
  /** Query customer property field rxList */
  rxList: RxList;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type CustomerFavoritesArgs = {
  options?: InputMaybe<FavoriteListOptions>;
  productVariantNameFilter?: InputMaybe<Scalars['String']>;
};

export type CustomerHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerRxListArgs = {
  options?: InputMaybe<RxListOptions>;
  rxName?: InputMaybe<Scalars['String']>;
};

export type CustomerCustomFields = {
  __typename?: 'CustomerCustomFields';
  birthday?: Maybe<Scalars['String']>;
  faceshape?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
};

export type CustomerFilterParameter = {
  birthday?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  faceshape?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  lastName?: InputMaybe<StringOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  postalCode?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  customers: CustomerList;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerGroupFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroupList = PaginatedList & {
  __typename?: 'CustomerGroupList';
  items: Array<CustomerGroup>;
  totalItems: Scalars['Int'];
};

export type CustomerGroupListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerGroupFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerGroupSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CustomerGroupSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type CustomerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type CustomerReviewOrderLines = {
  __typename?: 'CustomerReviewOrderLines';
  customer: Customer;
  reviewOrderLines: Array<ReviewOrderLine>;
};

export type CustomerSortParameter = {
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  faceshape?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  languageCode?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
  inList: Scalars['DateTime'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
  between?: InputMaybe<DateRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
};

export type DateRange = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type DeleteAssetInput = {
  assetId: Scalars['ID'];
  deleteFromAllChannels?: InputMaybe<Scalars['Boolean']>;
  force?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteAssetsInput = {
  assetIds: Array<Scalars['ID']>;
  deleteFromAllChannels?: InputMaybe<Scalars['Boolean']>;
  force?: InputMaybe<Scalars['Boolean']>;
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message?: Maybe<Scalars['String']>;
  result: DeletionResult;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  DELETED = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NOT_DELETED = 'NOT_DELETED',
}

export type DimensionModelConfig = {
  __typename?: 'DimensionModelConfig';
  /** 中梁 */
  bridge: Array<Array<Scalars['String']>>;
  /** 框高 */
  lensHeight: Array<Array<Scalars['String']>>;
  /** 框宽 */
  lensWidth: Array<Array<Scalars['String']>>;
  /** 镜腿总长度 */
  templeLength: Array<Array<Scalars['String']>>;
  /** 整宽 */
  totalWidth: Array<Array<Scalars['String']>>;
};

export type DimensionModelData = {
  __typename?: 'DimensionModelData';
  /** 中梁 */
  bridge: DimensionModelDataItem;
  /** 框高 */
  lensHeight: DimensionModelDataItem;
  /** 框宽 */
  lensWidth: DimensionModelDataItem;
  /** 镜腿总长度 */
  templeLength: DimensionModelDataItem;
  /** 整宽 */
  totalWidth: DimensionModelDataItem;
};

export type DimensionModelDataItem = {
  __typename?: 'DimensionModelDataItem';
  /** 英寸单位下的值 */
  in: Scalars['String'];
  /** 毫米单位下的值 */
  mm: Scalars['String'];
};

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String'];
  amount: Scalars['Int'];
  amountWithTax: Scalars['Int'];
  description: Scalars['String'];
  type: AdjustmentType;
};

export type DownloadCustomerEmailItem = {
  __typename?: 'DownloadCustomerEmailItem';
  createdAt: Scalars['DateTime'];
  emailAddress: Scalars['String'];
  emailAddressFrom?: Maybe<Scalars['String']>;
  orderCode?: Maybe<Scalars['String']>;
  orderState?: Maybe<Scalars['String']>;
};

export type DownloadCustomerEmailsInput = {
  dateEndAt?: InputMaybe<Scalars['DateTime']>;
  dateStartAt?: InputMaybe<Scalars['DateTime']>;
};

export type EdmEmailResolverJobLogging = Node & {
  __typename?: 'EdmEmailResolverJobLogging';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  level: LogLevel;
  log?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  resolverMethod: EdmEmailResolverMethod;
  updatedAt: Scalars['DateTime'];
};

export type EdmEmailResolverJobLoggingFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  level?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EdmEmailResolverJobLoggingList = PaginatedList & {
  __typename?: 'EdmEmailResolverJobLoggingList';
  items: Array<EdmEmailResolverJobLogging>;
  totalItems: Scalars['Int'];
};

export type EdmEmailResolverJobLoggingListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<EdmEmailResolverJobLoggingFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<EdmEmailResolverJobLoggingSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type EdmEmailResolverJobLoggingSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EdmEmailResolverMethod = Node & {
  __typename?: 'EdmEmailResolverMethod';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  edmGroup: EdmGroup;
  edmGroupId: Scalars['ID'];
  enabled: Scalars['Boolean'];
  handler: ConfigurableOperation;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  schedule?: Maybe<EdmSchedule>;
  updatedAt: Scalars['DateTime'];
};

export type EdmEmailResolverMethodFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  edmGroupId?: InputMaybe<IdOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EdmEmailResolverMethodList = PaginatedList & {
  __typename?: 'EdmEmailResolverMethodList';
  items: Array<EdmEmailResolverMethod>;
  totalItems: Scalars['Int'];
};

export type EdmEmailResolverMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<EdmEmailResolverMethodFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<EdmEmailResolverMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type EdmEmailResolverMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  edmGroupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EdmEmailTemplate = Node & {
  __typename?: 'EdmEmailTemplate';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  edmEmailTemplateType?: Maybe<EdmEmailTemplateType>;
  edmEmailTemplateTypeId: Scalars['ID'];
  enabled?: Maybe<Scalars['Boolean']>;
  generatorType: HandlebarsGeneratorType;
  id: Scalars['ID'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  trackingCode?: Maybe<Array<EdmEmailTemplateTrackingCode>>;
  translations: Array<EdmEmailTemplateTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type EdmEmailTemplateFilterParameter = {
  content?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  edmEmailTemplateTypeId?: InputMaybe<IdOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  generatorType?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  subTitle?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EdmEmailTemplateList = PaginatedList & {
  __typename?: 'EdmEmailTemplateList';
  items: Array<EdmEmailTemplate>;
  totalItems: Scalars['Int'];
};

export type EdmEmailTemplateListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<EdmEmailTemplateFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<EdmEmailTemplateSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type EdmEmailTemplateSortParameter = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  edmEmailTemplateTypeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  subTitle?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EdmEmailTemplateTrackingCode = {
  __typename?: 'EdmEmailTemplateTrackingCode';
  scripts: Scalars['String'];
  type: Scalars['String'];
};

export type EdmEmailTemplateTrackingCodeInput = {
  scripts: Scalars['String'];
  type: Scalars['String'];
};

export type EdmEmailTemplateTranslation = Node & {
  __typename?: 'EdmEmailTemplateTranslation';
  content: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  /** 当前语言 */
  languageCode: LanguageCode;
  /** 当前选项的名称 */
  name: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  trackingCode?: Maybe<Array<EdmEmailTemplateTrackingCode>>;
};

export type EdmEmailTemplateTranslationInput = {
  content: Scalars['String'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  trackingCode?: InputMaybe<Array<EdmEmailTemplateTrackingCodeInput>>;
};

export type EdmEmailTemplateType = Node & {
  __typename?: 'EdmEmailTemplateType';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type EdmEmailTemplateTypeFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EdmEmailTemplateTypeList = PaginatedList & {
  __typename?: 'EdmEmailTemplateTypeList';
  items: Array<EdmEmailTemplateType>;
  totalItems: Scalars['Int'];
};

export type EdmEmailTemplateTypeListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<EdmEmailTemplateTypeFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<EdmEmailTemplateTypeSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type EdmEmailTemplateTypeSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EdmGroup = Node & {
  __typename?: 'EdmGroup';
  createdAt: Scalars['DateTime'];
  creatorId: Scalars['ID'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type EdmGroupEmailChunk = Node & {
  __typename?: 'EdmGroupEmailChunk';
  addressChunk: Scalars['JSON'];
  createdAt: Scalars['DateTime'];
  edmGroup: EdmGroup;
  edmGroupId: Scalars['ID'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type EdmGroupEmailChunkFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  edmGroupId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EdmGroupEmailChunkList = PaginatedList & {
  __typename?: 'EdmGroupEmailChunkList';
  items: Array<EdmGroupEmailChunk>;
  totalItems: Scalars['Int'];
};

export type EdmGroupEmailChunkListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<EdmGroupEmailChunkFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<EdmGroupEmailChunkSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type EdmGroupEmailChunkSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  edmGroupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EdmGroupFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  creatorId?: InputMaybe<IdOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EdmGroupList = PaginatedList & {
  __typename?: 'EdmGroupList';
  items: Array<EdmGroup>;
  totalItems: Scalars['Int'];
};

export type EdmGroupListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<EdmGroupFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<EdmGroupSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type EdmGroupSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EdmSchedule = {
  __typename?: 'EdmSchedule';
  cron: Scalars['String'];
  name: Scalars['String'];
};

export type EdmScheduleInput = {
  cron: Scalars['String'];
  name: Scalars['String'];
};

export type EdmTaskPlan = Node & {
  __typename?: 'EdmTaskPlan';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  edmEmailTemplate: EdmEmailTemplate;
  edmEmailTemplateId: Scalars['ID'];
  edmGroups: Array<EdmGroup>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  schedule?: Maybe<EdmSchedule>;
  state: EdmTaskPlanState;
  updatedAt: Scalars['DateTime'];
};

export type EdmTaskPlanFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  edmEmailTemplateId?: InputMaybe<IdOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  state?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EdmTaskPlanJobLogging = Node & {
  __typename?: 'EdmTaskPlanJobLogging';
  createdAt: Scalars['DateTime'];
  edmTaskPlan: EdmTaskPlan;
  id: Scalars['ID'];
  level: LogLevel;
  log?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type EdmTaskPlanJobLoggingFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  level?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EdmTaskPlanJobLoggingList = PaginatedList & {
  __typename?: 'EdmTaskPlanJobLoggingList';
  items: Array<EdmTaskPlanJobLogging>;
  totalItems: Scalars['Int'];
};

export type EdmTaskPlanJobLoggingListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<EdmTaskPlanJobLoggingFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<EdmTaskPlanJobLoggingSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type EdmTaskPlanJobLoggingSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EdmTaskPlanList = PaginatedList & {
  __typename?: 'EdmTaskPlanList';
  items: Array<EdmTaskPlan>;
  totalItems: Scalars['Int'];
};

export type EdmTaskPlanListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<EdmTaskPlanFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<EdmTaskPlanSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type EdmTaskPlanSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  edmEmailTemplateId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum EdmTaskPlanState {
  Completed = 'Completed',
  Initialized = 'Initialized',
  Stopped = 'Stopped',
  Suspended = 'Suspended',
}

export type EmailAddressChunkItem = {
  __typename?: 'EmailAddressChunkItem';
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type EmailTemplateCtx = {
  channelCode?: InputMaybe<Scalars['String']>;
  generatorType?: InputMaybe<HandlebarsGeneratorType>;
  languageCode?: InputMaybe<LanguageCode>;
  preferDomain?: InputMaybe<Scalars['String']>;
};

/** Returned if no OrderLines have been specified for the operation */
export type EmptyOrderLineSelectionError = ErrorResult & {
  __typename?: 'EmptyOrderLineSelectionError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export enum ErrorCode {
  ALREADY_REFUNDED_ERROR = 'ALREADY_REFUNDED_ERROR',
  CANCEL_ACTIVE_ORDER_ERROR = 'CANCEL_ACTIVE_ORDER_ERROR',
  CANCEL_PAYMENT_ERROR = 'CANCEL_PAYMENT_ERROR',
  CHANNEL_DEFAULT_LANGUAGE_ERROR = 'CHANNEL_DEFAULT_LANGUAGE_ERROR',
  COUPON_CODE_EXPIRED_ERROR = 'COUPON_CODE_EXPIRED_ERROR',
  COUPON_CODE_INVALID_ERROR = 'COUPON_CODE_INVALID_ERROR',
  COUPON_CODE_LIMIT_ERROR = 'COUPON_CODE_LIMIT_ERROR',
  CREATE_FULFILLMENT_ERROR = 'CREATE_FULFILLMENT_ERROR',
  EMAIL_ADDRESS_CONFLICT_ERROR = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  EMPTY_ORDER_LINE_SELECTION_ERROR = 'EMPTY_ORDER_LINE_SELECTION_ERROR',
  FACET_IN_USE_ERROR = 'FACET_IN_USE_ERROR',
  FULFILLMENT_STATE_TRANSITION_ERROR = 'FULFILLMENT_STATE_TRANSITION_ERROR',
  INELIGIBLE_SHIPPING_METHOD_ERROR = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  INSUFFICIENT_STOCK_ERROR = 'INSUFFICIENT_STOCK_ERROR',
  INSUFFICIENT_STOCK_ON_HAND_ERROR = 'INSUFFICIENT_STOCK_ON_HAND_ERROR',
  INVALID_CREDENTIALS_ERROR = 'INVALID_CREDENTIALS_ERROR',
  INVALID_FULFILLMENT_HANDLER_ERROR = 'INVALID_FULFILLMENT_HANDLER_ERROR',
  ITEMS_ALREADY_FULFILLED_ERROR = 'ITEMS_ALREADY_FULFILLED_ERROR',
  LANGUAGE_NOT_AVAILABLE_ERROR = 'LANGUAGE_NOT_AVAILABLE_ERROR',
  MANUAL_PAYMENT_STATE_ERROR = 'MANUAL_PAYMENT_STATE_ERROR',
  MIME_TYPE_ERROR = 'MIME_TYPE_ERROR',
  MISSING_CONDITIONS_ERROR = 'MISSING_CONDITIONS_ERROR',
  MULTIPLE_ORDER_ERROR = 'MULTIPLE_ORDER_ERROR',
  NATIVE_AUTH_STRATEGY_ERROR = 'NATIVE_AUTH_STRATEGY_ERROR',
  NEGATIVE_QUANTITY_ERROR = 'NEGATIVE_QUANTITY_ERROR',
  NOTHING_TO_REFUND_ERROR = 'NOTHING_TO_REFUND_ERROR',
  NO_ACTIVE_ORDER_ERROR = 'NO_ACTIVE_ORDER_ERROR',
  NO_CHANGES_SPECIFIED_ERROR = 'NO_CHANGES_SPECIFIED_ERROR',
  ORDER_LIMIT_ERROR = 'ORDER_LIMIT_ERROR',
  ORDER_MODIFICATION_ERROR = 'ORDER_MODIFICATION_ERROR',
  ORDER_MODIFICATION_STATE_ERROR = 'ORDER_MODIFICATION_STATE_ERROR',
  ORDER_STATE_TRANSITION_ERROR = 'ORDER_STATE_TRANSITION_ERROR',
  PAYMENT_METHOD_MISSING_ERROR = 'PAYMENT_METHOD_MISSING_ERROR',
  PAYMENT_ORDER_MISMATCH_ERROR = 'PAYMENT_ORDER_MISMATCH_ERROR',
  PAYMENT_STATE_TRANSITION_ERROR = 'PAYMENT_STATE_TRANSITION_ERROR',
  PRODUCT_OPTION_IN_USE_ERROR = 'PRODUCT_OPTION_IN_USE_ERROR',
  QUANTITY_TOO_GREAT_ERROR = 'QUANTITY_TOO_GREAT_ERROR',
  REFUND_ORDER_STATE_ERROR = 'REFUND_ORDER_STATE_ERROR',
  REFUND_PAYMENT_ID_MISSING_ERROR = 'REFUND_PAYMENT_ID_MISSING_ERROR',
  REFUND_STATE_TRANSITION_ERROR = 'REFUND_STATE_TRANSITION_ERROR',
  SETTLE_PAYMENT_ERROR = 'SETTLE_PAYMENT_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<FacetCustomFields>;
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime'];
  values: Array<FacetValue>;
};

export type FacetCustomFields = {
  __typename?: 'FacetCustomFields';
  displayOrder?: Maybe<Scalars['Int']>;
  invisible?: Maybe<Scalars['Boolean']>;
};

export type FacetFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  invisible?: InputMaybe<BooleanOperators>;
  isPrivate?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetInUseError = ErrorResult & {
  __typename?: 'FacetInUseError';
  errorCode: ErrorCode;
  facetCode: Scalars['String'];
  message: Scalars['String'];
  productCount: Scalars['Int'];
  variantCount: Scalars['Int'];
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};

export type FacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type FacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invisible?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacetTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<FacetValueCustomFields>;
  facet: Facet;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type FacetValueCustomFields = {
  __typename?: 'FacetValueCustomFields';
  campaignConfigData?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']>;
  or?: InputMaybe<Array<Scalars['ID']>>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  count: Scalars['Int'];
  facetValue: FacetValue;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FacetValueTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type Favorite = Node & {
  __typename?: 'Favorite';
  createdAt: Scalars['DateTime'];
  customer: Customer;
  id: Scalars['ID'];
  languageCode?: Maybe<LanguageCode>;
  productVariant?: Maybe<ProductVariant>;
  updatedAt: Scalars['DateTime'];
};

export type FavoriteFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FavoriteList = PaginatedList & {
  __typename?: 'FavoriteList';
  items: Array<Favorite>;
  totalItems: Scalars['Int'];
};

export type FavoriteListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FavoriteFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FavoriteSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type FavoriteSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FinishInTransitStocksInput = {
  inTransitIds: Array<Scalars['ID']>;
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type FulfillOrderInput = {
  handler: ConfigurableOperationInput;
  lines: Array<OrderLineInput>;
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  method: Scalars['String'];
  nextStates: Array<Scalars['String']>;
  orderItems: Array<OrderItem>;
  state: Scalars['String'];
  summary: Array<FulfillmentLineSummary>;
  trackingCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type FulfillmentLineSummary = {
  __typename?: 'FulfillmentLineSummary';
  orderLine: OrderLine;
  quantity: Scalars['Int'];
};

/** Returned when there is an error in transitioning the Fulfillment state */
export type FulfillmentStateTransitionError = ErrorResult & {
  __typename?: 'FulfillmentStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

export enum GlobalFlag {
  FALSE = 'FALSE',
  INHERIT = 'INHERIT',
  TRUE = 'TRUE',
}

export type GlobalSettings = {
  __typename?: 'GlobalSettings';
  availableLanguages: Array<LanguageCode>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  outOfStockThreshold: Scalars['Int'];
  serverConfig: ServerConfig;
  trackInventory: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export enum HandlebarsGeneratorType {
  html = 'html',
  mjml = 'mjml',
}

export type HelpCenter = Node & {
  __typename?: 'HelpCenter';
  body: Scalars['String'];
  collections: Array<HelpCenterCollection>;
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  helpfulNo: Scalars['Int'];
  helpfulYes: Scalars['Int'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  published: Scalars['Boolean'];
  /** 关联文章, 当前文章关联分类, 中的文章, 取上下文 */
  relatedArticles: Array<HelpCenter>;
  shortDesc?: Maybe<Scalars['String']>;
  showOnTop: Scalars['Boolean'];
  slug: Scalars['String'];
  tags: Array<HelpCenterTag>;
  title: Scalars['String'];
  translations: Array<HelpCenterTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type HelpCenterCollection = Node & {
  __typename?: 'HelpCenterCollection';
  breadcrumbs: Array<HelpCenterCollectionBreadcrumb>;
  children?: Maybe<Array<HelpCenterCollection>>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  /** 扩展文章分类, 查询指定页面articles */
  helpArticles: HelpCenterList;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  parent?: Maybe<HelpCenterCollection>;
  published: Scalars['Boolean'];
  shortDesc?: Maybe<Scalars['String']>;
  showOnTop: Scalars['Boolean'];
  slug: Scalars['String'];
  translations: Array<HelpCenterCollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type HelpCenterCollectionHelpArticlesArgs = {
  options?: InputMaybe<HelpCenterListOptions>;
};

export type HelpCenterCollectionBreadcrumb = {
  __typename?: 'HelpCenterCollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type HelpCenterCollectionFilterParameter = {
  coverImage?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  shortDesc?: InputMaybe<StringOperators>;
  showOnTop?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HelpCenterCollectionList = PaginatedList & {
  __typename?: 'HelpCenterCollectionList';
  items: Array<HelpCenterCollection>;
  totalItems: Scalars['Int'];
};

export type HelpCenterCollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HelpCenterCollectionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HelpCenterCollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type HelpCenterCollectionSortParameter = {
  coverImage?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  shortDesc?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HelpCenterCollectionTranslation = {
  __typename?: 'HelpCenterCollectionTranslation';
  coverImage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  redirectTo?: Maybe<Scalars['String']>;
  shortDesc?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
};

export type HelpCenterCollectionTranslationInput = {
  coverImage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  redirectTo?: InputMaybe<Scalars['String']>;
  shortDesc?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
};

export type HelpCenterFilterParameter = {
  body?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  helpfulNo?: InputMaybe<NumberOperators>;
  helpfulYes?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  shortDesc?: InputMaybe<StringOperators>;
  showOnTop?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HelpCenterHotSearch = Node & {
  __typename?: 'HelpCenterHotSearch';
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  id: Scalars['ID'];
  keyword: Scalars['String'];
  languageCode: LanguageCode;
  published: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type HelpCenterHotSearchFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  keyword?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HelpCenterHotSearchList = PaginatedList & {
  __typename?: 'HelpCenterHotSearchList';
  items: Array<HelpCenterHotSearch>;
  totalItems: Scalars['Int'];
};

export type HelpCenterHotSearchListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HelpCenterHotSearchFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HelpCenterHotSearchSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type HelpCenterHotSearchSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keyword?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HelpCenterList = PaginatedList & {
  __typename?: 'HelpCenterList';
  items: Array<HelpCenter>;
  totalItems: Scalars['Int'];
};

export type HelpCenterListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HelpCenterFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HelpCenterSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type HelpCenterSortParameter = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  helpfulNo?: InputMaybe<SortOrder>;
  helpfulYes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  shortDesc?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HelpCenterTag = Node & {
  __typename?: 'HelpCenterTag';
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  helpArticles: HelpCenterList;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  translations: Array<HelpCenterTagTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type HelpCenterTagHelpArticlesArgs = {
  options?: InputMaybe<HelpCenterListOptions>;
};

export type HelpCenterTagFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HelpCenterTagList = PaginatedList & {
  __typename?: 'HelpCenterTagList';
  items: Array<HelpCenterTag>;
  totalItems: Scalars['Int'];
};

export type HelpCenterTagListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HelpCenterTagFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HelpCenterTagSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type HelpCenterTagSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type HelpCenterTagTranslation = {
  __typename?: 'HelpCenterTagTranslation';
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type HelpCenterTagTranslationInput = {
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type HelpCenterTranslation = {
  __typename?: 'HelpCenterTranslation';
  body: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shortDesc?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type HelpCenterTranslationInput = {
  body: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shortDesc?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  administrator?: Maybe<Administrator>;
  createdAt: Scalars['DateTime'];
  data: Scalars['JSON'];
  id: Scalars['ID'];
  isPublic: Scalars['Boolean'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isPublic?: InputMaybe<BooleanOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HistoryEntrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type HistoryEntrySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HistoryEntryType {
  CUSTOMER_ADDED_TO_GROUP = 'CUSTOMER_ADDED_TO_GROUP',
  CUSTOMER_ADDRESS_CREATED = 'CUSTOMER_ADDRESS_CREATED',
  CUSTOMER_ADDRESS_DELETED = 'CUSTOMER_ADDRESS_DELETED',
  CUSTOMER_ADDRESS_UPDATED = 'CUSTOMER_ADDRESS_UPDATED',
  CUSTOMER_DETAIL_UPDATED = 'CUSTOMER_DETAIL_UPDATED',
  CUSTOMER_EMAIL_UPDATE_REQUESTED = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CUSTOMER_EMAIL_UPDATE_VERIFIED = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CUSTOMER_NOTE = 'CUSTOMER_NOTE',
  CUSTOMER_PASSWORD_RESET_REQUESTED = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CUSTOMER_PASSWORD_RESET_VERIFIED = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CUSTOMER_PASSWORD_UPDATED = 'CUSTOMER_PASSWORD_UPDATED',
  CUSTOMER_REGISTERED = 'CUSTOMER_REGISTERED',
  CUSTOMER_REMOVED_FROM_GROUP = 'CUSTOMER_REMOVED_FROM_GROUP',
  CUSTOMER_VERIFIED = 'CUSTOMER_VERIFIED',
  ORDER_CANCELLATION = 'ORDER_CANCELLATION',
  ORDER_COUPON_APPLIED = 'ORDER_COUPON_APPLIED',
  ORDER_COUPON_REMOVED = 'ORDER_COUPON_REMOVED',
  ORDER_FULFILLMENT = 'ORDER_FULFILLMENT',
  ORDER_FULFILLMENT_TRANSITION = 'ORDER_FULFILLMENT_TRANSITION',
  ORDER_MODIFIED = 'ORDER_MODIFIED',
  ORDER_NOTE = 'ORDER_NOTE',
  ORDER_PAYMENT_TRANSITION = 'ORDER_PAYMENT_TRANSITION',
  ORDER_REFUND_TRANSITION = 'ORDER_REFUND_TRANSITION',
  ORDER_STATE_TRANSITION = 'ORDER_STATE_TRANSITION',
}

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
  inList: Scalars['ID'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notEq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type ImportInfo = {
  __typename?: 'ImportInfo';
  errors?: Maybe<Array<Scalars['String']>>;
  imported: Scalars['Int'];
  processed: Scalars['Int'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type InsufficientOnSaleStockInput = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  order: Order;
  quantityAvailable: Scalars['Int'];
};

/**
 * Returned if attempting to create a Fulfillment when there is insufficient
 * stockOnHand of a ProductVariant to satisfy the requested quantity.
 */
export type InsufficientStockOnHandError = ErrorResult & {
  __typename?: 'InsufficientStockOnHandError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  stockOnHand: Scalars['Int'];
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  authenticationError: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned if the specified FulfillmentHandler code is not valid */
export type InvalidFulfillmentHandlerError = ErrorResult & {
  __typename?: 'InvalidFulfillmentHandlerError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Invoice = Node & {
  __typename?: 'Invoice';
  createdAt: Scalars['DateTime'];
  customerEmail: Scalars['String'];
  downloadUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invoiceNumber: Scalars['Int'];
  orderCode: Scalars['String'];
  orderId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type InvoiceConfig = Node & {
  __typename?: 'InvoiceConfig';
  channel: Channel;
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  templateOrderString?: Maybe<Scalars['String']>;
  templateString?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type InvoiceConfigFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  templateOrderString?: InputMaybe<StringOperators>;
  templateString?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type InvoiceConfigInput = {
  channelId?: InputMaybe<Scalars['Int']>;
  enabled: Scalars['Boolean'];
  templateOrderString?: InputMaybe<Scalars['String']>;
  templateString?: InputMaybe<Scalars['String']>;
};

export type InvoiceConfigList = PaginatedList & {
  __typename?: 'InvoiceConfigList';
  items: Array<InvoiceConfig>;
  totalItems: Scalars['Int'];
};

export type InvoiceConfigListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<InvoiceConfigFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<InvoiceConfigSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type InvoiceConfigSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  templateOrderString?: InputMaybe<SortOrder>;
  templateString?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type InvoiceFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  customerEmail?: InputMaybe<StringOperators>;
  downloadUrl?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  invoiceNumber?: InputMaybe<NumberOperators>;
  orderCode?: InputMaybe<StringOperators>;
  orderId?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type InvoiceList = PaginatedList & {
  __typename?: 'InvoiceList';
  items: Array<Invoice>;
  totalItems: Scalars['Int'];
};

export type InvoiceListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<InvoiceFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<InvoiceSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type InvoiceSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  customerEmail?: InputMaybe<SortOrder>;
  downloadUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invoiceNumber?: InputMaybe<SortOrder>;
  orderCode?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum InvoiceType {
  Invoice = 'Invoice',
  Order = 'Order',
}

/** Returned if the specified items are already part of a Fulfillment */
export type ItemsAlreadyFulfilledError = ErrorResult & {
  __typename?: 'ItemsAlreadyFulfilledError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Job = Node & {
  __typename?: 'Job';
  attempts: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['JSON']>;
  duration: Scalars['Int'];
  error?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isSettled: Scalars['Boolean'];
  progress: Scalars['Float'];
  queueName: Scalars['String'];
  result?: Maybe<Scalars['JSON']>;
  retries: Scalars['Int'];
  settledAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  state: JobState;
};

export type JobBufferSize = {
  __typename?: 'JobBufferSize';
  bufferId: Scalars['String'];
  size: Scalars['Int'];
};

export type JobFilterParameter = {
  attempts?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  duration?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  isSettled?: InputMaybe<BooleanOperators>;
  progress?: InputMaybe<NumberOperators>;
  queueName?: InputMaybe<StringOperators>;
  retries?: InputMaybe<NumberOperators>;
  settledAt?: InputMaybe<DateOperators>;
  startedAt?: InputMaybe<DateOperators>;
  state?: InputMaybe<StringOperators>;
};

export type JobList = PaginatedList & {
  __typename?: 'JobList';
  items: Array<Job>;
  totalItems: Scalars['Int'];
};

export type JobListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<JobFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<JobSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type JobQueue = {
  __typename?: 'JobQueue';
  name: Scalars['String'];
  running: Scalars['Boolean'];
};

export type JobSortParameter = {
  attempts?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  queueName?: InputMaybe<SortOrder>;
  retries?: InputMaybe<SortOrder>;
  settledAt?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
};

/**
 * @description
 * The state of a Job in the JobQueue
 *
 * @docsCategory common
 */
export enum JobState {
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  RETRYING = 'RETRYING',
  RUNNING = 'RUNNING',
}

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  af = 'af',
  /** Akan */
  ak = 'ak',
  /** Amharic */
  am = 'am',
  /** Arabic */
  ar = 'ar',
  /** Assamese */
  as = 'as',
  /** Azerbaijani */
  az = 'az',
  /** Belarusian */
  be = 'be',
  /** Bulgarian */
  bg = 'bg',
  /** Bambara */
  bm = 'bm',
  /** Bangla */
  bn = 'bn',
  /** Tibetan */
  bo = 'bo',
  /** Breton */
  br = 'br',
  /** Bosnian */
  bs = 'bs',
  /** Catalan */
  ca = 'ca',
  /** Chechen */
  ce = 'ce',
  /** Corsican */
  co = 'co',
  /** Czech */
  cs = 'cs',
  /** Church Slavic */
  cu = 'cu',
  /** Welsh */
  cy = 'cy',
  /** Danish */
  da = 'da',
  /** German */
  de = 'de',
  /** Austrian German */
  de_AT = 'de_AT',
  /** Swiss High German */
  de_CH = 'de_CH',
  /** Dzongkha */
  dz = 'dz',
  /** Ewe */
  ee = 'ee',
  /** Greek */
  el = 'el',
  /** English */
  en = 'en',
  /** Australian English */
  en_AU = 'en_AU',
  /** Canadian English */
  en_CA = 'en_CA',
  /** British English */
  en_GB = 'en_GB',
  /** American English */
  en_US = 'en_US',
  /** Esperanto */
  eo = 'eo',
  /** Spanish */
  es = 'es',
  /** European Spanish */
  es_ES = 'es_ES',
  /** Mexican Spanish */
  es_MX = 'es_MX',
  /** Estonian */
  et = 'et',
  /** Basque */
  eu = 'eu',
  /** Persian */
  fa = 'fa',
  /** Dari */
  fa_AF = 'fa_AF',
  /** Fulah */
  ff = 'ff',
  /** Finnish */
  fi = 'fi',
  /** Faroese */
  fo = 'fo',
  /** French */
  fr = 'fr',
  /** Canadian French */
  fr_CA = 'fr_CA',
  /** Swiss French */
  fr_CH = 'fr_CH',
  /** Western Frisian */
  fy = 'fy',
  /** Irish */
  ga = 'ga',
  /** Scottish Gaelic */
  gd = 'gd',
  /** Galician */
  gl = 'gl',
  /** Gujarati */
  gu = 'gu',
  /** Manx */
  gv = 'gv',
  /** Hausa */
  ha = 'ha',
  /** Hebrew */
  he = 'he',
  /** Hindi */
  hi = 'hi',
  /** Croatian */
  hr = 'hr',
  /** Haitian Creole */
  ht = 'ht',
  /** Hungarian */
  hu = 'hu',
  /** Armenian */
  hy = 'hy',
  /** Interlingua */
  ia = 'ia',
  /** Indonesian */
  id = 'id',
  /** Igbo */
  ig = 'ig',
  /** Sichuan Yi */
  ii = 'ii',
  /** Icelandic */
  is = 'is',
  /** Italian */
  it = 'it',
  /** Japanese */
  ja = 'ja',
  /** Javanese */
  jv = 'jv',
  /** Georgian */
  ka = 'ka',
  /** Kikuyu */
  ki = 'ki',
  /** Kazakh */
  kk = 'kk',
  /** Kalaallisut */
  kl = 'kl',
  /** Khmer */
  km = 'km',
  /** Kannada */
  kn = 'kn',
  /** Korean */
  ko = 'ko',
  /** Kashmiri */
  ks = 'ks',
  /** Kurdish */
  ku = 'ku',
  /** Cornish */
  kw = 'kw',
  /** Kyrgyz */
  ky = 'ky',
  /** Latin */
  la = 'la',
  /** Luxembourgish */
  lb = 'lb',
  /** Ganda */
  lg = 'lg',
  /** Lingala */
  ln = 'ln',
  /** Lao */
  lo = 'lo',
  /** Lithuanian */
  lt = 'lt',
  /** Luba-Katanga */
  lu = 'lu',
  /** Latvian */
  lv = 'lv',
  /** Malagasy */
  mg = 'mg',
  /** Maori */
  mi = 'mi',
  /** Macedonian */
  mk = 'mk',
  /** Malayalam */
  ml = 'ml',
  /** Mongolian */
  mn = 'mn',
  /** Marathi */
  mr = 'mr',
  /** Malay */
  ms = 'ms',
  /** Maltese */
  mt = 'mt',
  /** Burmese */
  my = 'my',
  /** Norwegian Bokmål */
  nb = 'nb',
  /** North Ndebele */
  nd = 'nd',
  /** Nepali */
  ne = 'ne',
  /** Dutch */
  nl = 'nl',
  /** Flemish */
  nl_BE = 'nl_BE',
  /** Norwegian Nynorsk */
  nn = 'nn',
  /** Nyanja */
  ny = 'ny',
  /** Oromo */
  om = 'om',
  /** Odia */
  or = 'or',
  /** Ossetic */
  os = 'os',
  /** Punjabi */
  pa = 'pa',
  /** Polish */
  pl = 'pl',
  /** Pashto */
  ps = 'ps',
  /** Portuguese */
  pt = 'pt',
  /** Brazilian Portuguese */
  pt_BR = 'pt_BR',
  /** European Portuguese */
  pt_PT = 'pt_PT',
  /** Quechua */
  qu = 'qu',
  /** Romansh */
  rm = 'rm',
  /** Rundi */
  rn = 'rn',
  /** Romanian */
  ro = 'ro',
  /** Moldavian */
  ro_MD = 'ro_MD',
  /** Russian */
  ru = 'ru',
  /** Kinyarwanda */
  rw = 'rw',
  /** Sanskrit */
  sa = 'sa',
  /** Sindhi */
  sd = 'sd',
  /** Northern Sami */
  se = 'se',
  /** Sango */
  sg = 'sg',
  /** Sinhala */
  si = 'si',
  /** Slovak */
  sk = 'sk',
  /** Slovenian */
  sl = 'sl',
  /** Samoan */
  sm = 'sm',
  /** Shona */
  sn = 'sn',
  /** Somali */
  so = 'so',
  /** Albanian */
  sq = 'sq',
  /** Serbian */
  sr = 'sr',
  /** Southern Sotho */
  st = 'st',
  /** Sundanese */
  su = 'su',
  /** Swedish */
  sv = 'sv',
  /** Swahili */
  sw = 'sw',
  /** Congo Swahili */
  sw_CD = 'sw_CD',
  /** Tamil */
  ta = 'ta',
  /** Telugu */
  te = 'te',
  /** Tajik */
  tg = 'tg',
  /** Thai */
  th = 'th',
  /** Tigrinya */
  ti = 'ti',
  /** Turkmen */
  tk = 'tk',
  /** Tongan */
  to = 'to',
  /** Turkish */
  tr = 'tr',
  /** Tatar */
  tt = 'tt',
  /** Uyghur */
  ug = 'ug',
  /** Ukrainian */
  uk = 'uk',
  /** Urdu */
  ur = 'ur',
  /** Uzbek */
  uz = 'uz',
  /** Vietnamese */
  vi = 'vi',
  /** Volapük */
  vo = 'vo',
  /** Wolof */
  wo = 'wo',
  /** Xhosa */
  xh = 'xh',
  /** Yiddish */
  yi = 'yi',
  /** Yoruba */
  yo = 'yo',
  /** Chinese */
  zh = 'zh',
  /** Simplified Chinese */
  zh_Hans = 'zh_Hans',
  /** Traditional Chinese */
  zh_Hant = 'zh_Hant',
  /** Zulu */
  zu = 'zu',
}

/** Returned if attempting to set a Channel's defaultLanguageCode to a language which is not enabled in GlobalSettings */
export type LanguageNotAvailableError = ErrorResult & {
  __typename?: 'LanguageNotAvailableError';
  errorCode: ErrorCode;
  languageCode: Scalars['String'];
  message: Scalars['String'];
};

export type LensOptionUiComponents = {
  __typename?: 'LensOptionUiComponents';
  /** 当前选项的孩子节点展示的UI控件,如color_box */
  childComponentType?: Maybe<LensOptionUiComponentsType>;
  /** UI显示空间类型 */
  uiType?: Maybe<LensOptionUiComponentsType>;
  /** UI显示空间类型对应的显示值 */
  uiValue?: Maybe<Scalars['String']>;
};

/** 针对镜片流程选项, 允许我们针对当前的item内容自定义显示UI界面效果 */
export type LensOptionUiComponentsInput = {
  /** 当前选项的孩子节点展示的UI控件,如color_box */
  childComponentType?: InputMaybe<LensOptionUiComponentsType>;
  /** UI显示空间类型 */
  uiType?: InputMaybe<LensOptionUiComponentsType>;
  /** UI显示空间类型对应的显示值 */
  uiValue?: InputMaybe<Scalars['String']>;
};

export enum LensOptionUiComponentsType {
  COLOR_BOX = 'COLOR_BOX',
  TEXT = 'TEXT',
}

export type LensProcessConfigItem = Node & {
  __typename?: 'LensProcessConfigItem';
  disabled: Scalars['Boolean'];
  displayOrder: Scalars['Int'];
  id: Scalars['ID'];
  lensProcessOption: LensProcessOption;
  lensProcessOptionId: Scalars['ID'];
  lensProcessTemplate: LensProcessTemplate;
  lensProcessTemplateId: Scalars['ID'];
  overridePrice?: Maybe<Scalars['Int']>;
  overrideRecommendRuleConditions?: Maybe<Scalars['JSON']>;
  overrideRuleConditions?: Maybe<Scalars['JSON']>;
};

export type LensProcessConfigItemFilterParameter = {
  disabled?: InputMaybe<BooleanOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  lensProcessOptionId?: InputMaybe<IdOperators>;
  lensProcessTemplateId?: InputMaybe<IdOperators>;
  overridePrice?: InputMaybe<NumberOperators>;
};

export type LensProcessConfigItemList = PaginatedList & {
  __typename?: 'LensProcessConfigItemList';
  items: Array<LensProcessConfigItem>;
  totalItems: Scalars['Int'];
};

export type LensProcessConfigItemListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<LensProcessConfigItemFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<LensProcessConfigItemSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type LensProcessConfigItemSortParameter = {
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lensProcessOptionId?: InputMaybe<SortOrder>;
  lensProcessTemplateId?: InputMaybe<SortOrder>;
  overridePrice?: InputMaybe<SortOrder>;
};

export type LensProcessOption = Node & {
  __typename?: 'LensProcessOption';
  /** 当前选项默认的需要调整的价格. +, - */
  adjustPrice: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  /**
   * 针对购物车升级, 如果指定了依赖keys
   * 1. 先验证当前的升级包规则满足条件之后
   * 2. 我们从这个里面找到他T3的可能能够选择流程, 计算T3流程的价格.(从中选择最便宜并且价格比当前价格更高的一个选项)
   */
  dependentFromT3Key?: Maybe<LensProcessOptionKeys>;
  /** 当前选项的默认在流程模板配置中的初始化排序值 */
  displayOrder: Scalars['Int'];
  /** 功能特点标识, Up to 20% thinner */
  feature?: Maybe<Scalars['String']>;
  /** 小图标地址, 可以是背景图, base64等. */
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: Maybe<Array<Scalars['String']>>;
  /** 用来标识当前镜片流程模块的唯一ID值, 不是所有模块选项都需要模块标识, 核心稳定并且参与流程规则的模块才需要 */
  key?: Maybe<LensProcessOptionKeys>;
  languageCode: LanguageCode;
  /** 当前选项的名称 */
  name: Scalars['String'];
  parent?: Maybe<LensProcessOptionParent>;
  parentId?: Maybe<Scalars['ID']>;
  /** 可视化数据, 图片资源地址存储, 选择当前项可能有对应图片展示. */
  preview?: Maybe<LensProcessOptionPreview>;
  /** 通过推荐规则, 动态计算,是否为推荐选项, 如果是, 可能需要高亮处理. */
  recommend: Scalars['Boolean'];
  /** 推荐规则引擎json-rules-engine的推荐规则条件默认配置, 如果满足条件,当前显示推荐,如果当前套餐包下面多个满足, 则取第一个, kzfoo-next前端不应该显示, 规则运算放后端 */
  recommendRuleConditions?: Maybe<Scalars['JSON']>;
  /** 可选值, 针对T4(变种条件可能有1000个), 考虑性能, 可以设置他依赖的T1,T3作为条件, 在查询T4的时候数据提取过滤掉不需要的item */
  requiredPreSelectedKeys?: Maybe<Array<LensProcessOptionKeys>>;
  /** 规则引擎json-rules-engine的规则条件(选项可用/不可用)默认配置, kzfoo-next前端不应该显示, 规则运算放后端 */
  ruleConditions?: Maybe<Scalars['JSON']>;
  /** 当前选项的短描述 */
  shortDesc: Scalars['String'];
  /** 当前流程模版的步骤标签, step1, step2, step3, step4 */
  stepGroupName: LensStepGroups;
  translations: Array<LensProcessOptionTranslation>;
  uiComponents?: Maybe<LensOptionUiComponents>;
  updatedAt: Scalars['DateTime'];
  /** 升级选项名字, 可以在name基础上进行额外包装 */
  upgradeText?: Maybe<Scalars['String']>;
  /** T4套餐包升级到新的套餐包的KEY, 展示优先级, 就按照依赖KEY先后顺序 */
  upgradeToKeys?: Maybe<Array<LensProcessOptionKeys>>;
};

export type LensProcessOptionFilterParameter = {
  adjustPrice?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  dependentFromT3Key?: InputMaybe<StringOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  feature?: InputMaybe<StringOperators>;
  icon?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  key?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  recommend?: InputMaybe<BooleanOperators>;
  shortDesc?: InputMaybe<StringOperators>;
  stepGroupName?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  upgradeText?: InputMaybe<StringOperators>;
};

/** 镜片流程原子选项的唯一标识符号,部分无须参与规则运算的选项模块为可选项. */
export enum LensProcessOptionKeys {
  /** T1用途: 看远 */
  T1_DISTANCE = 'T1_DISTANCE',
  /** T1用途: 多焦点 */
  T1_MULTIFOCAL = 'T1_MULTIFOCAL',
  /** T1用途: 多焦点/双光 */
  T1_MULTIFOCAL_BIFOCAL = 'T1_MULTIFOCAL_BIFOCAL',
  /** T1用途: 多焦点/高级渐进 */
  T1_MULTIFOCAL_PREMIUM_PROGRESSIVE = 'T1_MULTIFOCAL_PREMIUM_PROGRESSIVE',
  /** T1用途: 多焦点/渐进 */
  T1_MULTIFOCAL_PROGRESSIVE = 'T1_MULTIFOCAL_PROGRESSIVE',
  /** T1用途: 平光 */
  T1_NON_PRESCRIPTION = 'T1_NON_PRESCRIPTION',
  /** T1用途: 老花 */
  T1_READING = 'T1_READING',
  /** T1用途: 老花/看中 */
  T1_READING_INTERMEDIATE = 'T1_READING_INTERMEDIATE',
  /** T1用途: 老花/看近 */
  T1_READING_READERS = 'T1_READING_READERS',
  /** T2游泳镜, 项链镜等直接选度数的处方模块 */
  T2_RX_DEGREES = 'T2_RX_DEGREES',
  /** T2直接选度数-项链镜-仅仅用到'DIRECT_DEGREES'规则动态选项数据源匹配 */
  T2_RX_DEGREES_NECK = 'T2_RX_DEGREES_NECK',
  /** T2直接选度数-游泳镜-仅仅用到'DIRECT_DEGREES'规则动态选项数据源匹配 */
  T2_RX_DEGREES_SWIMMING = 'T2_RX_DEGREES_SWIMMING',
  /** T2用户标准处方模块 */
  T2_RX_STANDARD = 'T2_RX_STANDARD',
  /** T3防蓝光 */
  T3_BLUE = 'T3_BLUE',
  /** T3防蓝光-普通 */
  T3_BLUE_BASIC = 'T3_BLUE_BASIC',
  /** T3透明镜片 */
  T3_CLEAR = 'T3_CLEAR',
  /** T3透明镜片-普通 */
  T3_CLEAR_BASIC = 'T3_CLEAR_BASIC',
  /** T3变色镜片 */
  T3_LIGHT = 'T3_LIGHT',
  /** T3普通变色 */
  T3_LIGHT_PHOTOCHROMIC = 'T3_LIGHT_PHOTOCHROMIC',
  /** T3普通变色-棕色 */
  T3_LIGHT_PHOTOCHROMIC_BROWN = 'T3_LIGHT_PHOTOCHROMIC_BROWN',
  /** T3普通变色-灰色 */
  T3_LIGHT_PHOTOCHROMIC_GRAY = 'T3_LIGHT_PHOTOCHROMIC_GRAY',
  /** T3全视线变色 */
  T3_LIGHT_TRANSPHOTO = 'T3_LIGHT_TRANSPHOTO',
  /** T3全视线变色-棕色 */
  T3_LIGHT_TRANSPHOTO_BROWN = 'T3_LIGHT_TRANSPHOTO_BROWN',
  /** T3全视线变色-灰色 */
  T3_LIGHT_TRANSPHOTO_GRAY = 'T3_LIGHT_TRANSPHOTO_GRAY',
  /** T3太阳镜 */
  T3_SUN = 'T3_SUN',
  /** T3太阳镜-普通全染镜片 */
  T3_SUN_BASIC = 'T3_SUN_BASIC',
  /** T3太阳镜-普通全染镜片-蓝色 */
  T3_SUN_BASIC_BLUE = 'T3_SUN_BASIC_BLUE',
  /** T3太阳镜-普通全染镜片-棕色 */
  T3_SUN_BASIC_BROWN = 'T3_SUN_BASIC_BROWN',
  /** T3太阳镜-普通全染镜片-灰色 */
  T3_SUN_BASIC_GRAY = 'T3_SUN_BASIC_GRAY',
  /** T3太阳镜-普通全染镜片-绿色 */
  T3_SUN_BASIC_GREEN = 'T3_SUN_BASIC_GREEN',
  /** T3太阳镜-普通全染镜片-橘色 */
  T3_SUN_BASIC_ORANGE = 'T3_SUN_BASIC_ORANGE',
  /** T3太阳镜-普通全染镜片-粉红色 */
  T3_SUN_BASIC_PINK = 'T3_SUN_BASIC_PINK',
  /** T3太阳镜-普通全染镜片-黄色 */
  T3_SUN_BASIC_YELLOW = 'T3_SUN_BASIC_YELLOW',
  /** T3太阳镜-梯度渐染镜片 */
  T3_SUN_GRADIENT = 'T3_SUN_GRADIENT',
  /** T3太阳镜-梯度渐染镜片-蓝色 */
  T3_SUN_GRADIENT_BLUE = 'T3_SUN_GRADIENT_BLUE',
  /** T3太阳镜-梯度渐染镜片-棕色 */
  T3_SUN_GRADIENT_BROWN = 'T3_SUN_GRADIENT_BROWN',
  /** T3太阳镜-梯度渐染镜片-灰色 */
  T3_SUN_GRADIENT_GRAY = 'T3_SUN_GRADIENT_GRAY',
  /** T3太阳镜-梯度渐染镜片-绿色 */
  T3_SUN_GRADIENT_GREEN = 'T3_SUN_GRADIENT_GREEN',
  /** T3太阳镜-梯度渐染镜片-紫色 */
  T3_SUN_GRADIENT_PURPLE = 'T3_SUN_GRADIENT_PURPLE',
  /** T3太阳镜-镜面镜片 */
  T3_SUN_MIRRORED = 'T3_SUN_MIRRORED',
  /** T3太阳镜-镜面镜片-琥珀色的玫瑰 */
  T3_SUN_MIRRORED_AMBERROSE = 'T3_SUN_MIRRORED_AMBERROSE',
  /** T3太阳镜-镜面镜片-蓝色 */
  T3_SUN_MIRRORED_BLUE = 'T3_SUN_MIRRORED_BLUE',
  /** T3太阳镜-镜面镜片-银色 */
  T3_SUN_MIRRORED_SLIVER = 'T3_SUN_MIRRORED_SLIVER',
  /** T3太阳镜-偏光镜片 */
  T3_SUN_POLARIZED = 'T3_SUN_POLARIZED',
  /** T3太阳镜-偏光镜片-普通染色 */
  T3_SUN_POLARIZED_BASIC = 'T3_SUN_POLARIZED_BASIC',
  /** T3太阳镜-偏光镜片-普通染色-棕色 */
  T3_SUN_POLARIZED_BASIC_BROWN = 'T3_SUN_POLARIZED_BASIC_BROWN',
  /** T3太阳镜-偏光镜片-普通染色-灰色 */
  T3_SUN_POLARIZED_BASIC_GRAY = 'T3_SUN_POLARIZED_BASIC_GRAY',
  /** T3太阳镜-偏光镜片-普通染色-绿色 */
  T3_SUN_POLARIZED_BASIC_GREEN = 'T3_SUN_POLARIZED_BASIC_GREEN',
  /** T3太阳镜-偏光镜片-镜面染色 */
  T3_SUN_POLARIZED_MIRRORED = 'T3_SUN_POLARIZED_MIRRORED',
  /** T3太阳镜-偏光镜片-镜面染色-琥珀色的玫瑰 */
  T3_SUN_POLARIZED_MIRRORED_AMBERROSE = 'T3_SUN_POLARIZED_MIRRORED_AMBERROSE',
  /** T3太阳镜-偏光镜片-镜面染色-蓝色 */
  T3_SUN_POLARIZED_MIRRORED_BLUE = 'T3_SUN_POLARIZED_MIRRORED_BLUE',
  /** T3太阳镜-偏光镜片-镜面染色-银色 */
  T3_SUN_POLARIZED_MIRRORED_SLIVER = 'T3_SUN_POLARIZED_MIRRORED_SLIVER',
  /** T4折射率套餐-premium-progressive-blue-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56A = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56A',
  /** T4折射率套餐-premium-progressive-blue-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56S = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56S',
  /** T4折射率套餐-premium-progressive-blue-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60A = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60A',
  /** T4折射率套餐-premium-progressive-blue-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60S = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60S',
  /** T4折射率套餐-premium-progressive-blue-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67A = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67A',
  /** T4折射率套餐-premium-progressive-blue-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67S = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67S',
  /** T4折射率套餐-premium-progressive-clear-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56A = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56A',
  /** T4折射率套餐-premium-progressive-clear-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56S = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56S',
  /** T4折射率套餐-premium-progressive-clear-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60A = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60A',
  /** T4折射率套餐-premium-progressive-clear-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60S = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60S',
  /** T4折射率套餐-premium-progressive-clear-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67A = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67A',
  /** T4折射率套餐-premium-progressive-clear-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67S = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67S',
  /** T4折射率套餐-premium-progressive-photochromic-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56A = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56A',
  /** T4折射率套餐-premium-progressive-photochromic-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56S = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56S',
  /** T4折射率套餐-premium-progressive-photochromic-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60A = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60A',
  /** T4折射率套餐-premium-progressive-photochromic-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60S = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60S',
  /** T4折射率套餐-premium-progressive-photochromic-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67A = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67A',
  /** T4折射率套餐-premium-progressive-photochromic-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67S = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67S',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56A = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56A',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56S = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56S',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60A = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60A',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60S = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60S',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67A = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67A',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67S = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67S',
  /** T4折射率套餐-premium-progressive-tint-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_56A = 'T4_PREMIUM_PROGRESSIVE_TINT_1_56A',
  /** T4折射率套餐-premium-progressive-tint-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_56S = 'T4_PREMIUM_PROGRESSIVE_TINT_1_56S',
  /** T4折射率套餐-premium-progressive-tint-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_60A = 'T4_PREMIUM_PROGRESSIVE_TINT_1_60A',
  /** T4折射率套餐-premium-progressive-tint-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_60S = 'T4_PREMIUM_PROGRESSIVE_TINT_1_60S',
  /** T4折射率套餐-premium-progressive-tint-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_67A = 'T4_PREMIUM_PROGRESSIVE_TINT_1_67A',
  /** T4折射率套餐-premium-progressive-tint-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_67S = 'T4_PREMIUM_PROGRESSIVE_TINT_1_67S',
  /** T4折射率套餐-premium-progressive-transphoto-1.50高级 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50A = 'T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50A',
  /** T4折射率套餐-premium-progressive-transphoto-1.50标准 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50S = 'T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50S',
  /** T4折射率套餐-premium-progressive-transphoto-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60A = 'T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60A',
  /** T4折射率套餐-premium-progressive-transphoto-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60S = 'T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60S',
  /** T4折射率套餐-progressive-blue-1.56高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_56A = 'T4_PROGRESSIVE_BLUE_BASIC_1_56A',
  /** T4折射率套餐-progressive-blue-1.56标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_56S = 'T4_PROGRESSIVE_BLUE_BASIC_1_56S',
  /** T4折射率套餐-progressive-blue-1.60高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_60A = 'T4_PROGRESSIVE_BLUE_BASIC_1_60A',
  /** T4折射率套餐-progressive-blue-1.60标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_60S = 'T4_PROGRESSIVE_BLUE_BASIC_1_60S',
  /** T4折射率套餐-progressive-blue-1.67高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_67A = 'T4_PROGRESSIVE_BLUE_BASIC_1_67A',
  /** T4折射率套餐-progressive-blue-1.67标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_67S = 'T4_PROGRESSIVE_BLUE_BASIC_1_67S',
  /** T4折射率套餐-progressive-clear-1.56高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_56A = 'T4_PROGRESSIVE_CLEAR_BASIC_1_56A',
  /** T4折射率套餐-progressive-clear-1.56标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_56S = 'T4_PROGRESSIVE_CLEAR_BASIC_1_56S',
  /** T4折射率套餐-progressive-clear-1.60高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_60A = 'T4_PROGRESSIVE_CLEAR_BASIC_1_60A',
  /** T4折射率套餐-progressive-clear-1.60标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_60S = 'T4_PROGRESSIVE_CLEAR_BASIC_1_60S',
  /** T4折射率套餐-progressive-clear-1.67高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_67A = 'T4_PROGRESSIVE_CLEAR_BASIC_1_67A',
  /** T4折射率套餐-progressive-clear-1.67标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_67S = 'T4_PROGRESSIVE_CLEAR_BASIC_1_67S',
  /** T4折射率套餐-progressive-photochromic-1.56高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_56A = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_56A',
  /** T4折射率套餐-progressive-photochromic-1.56标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_56S = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_56S',
  /** T4折射率套餐-progressive-photochromic-1.60高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_60A = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_60A',
  /** T4折射率套餐-progressive-photochromic-1.60标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_60S = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_60S',
  /** T4折射率套餐-progressive-photochromic-1.67高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_67A = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_67A',
  /** T4折射率套餐-progressive-photochromic-1.67标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_67S = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_67S',
  /** T4折射率套餐-progressive-polarizedtint-1.56高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_56A = 'T4_PROGRESSIVE_POLARIZEDTINT_1_56A',
  /** T4折射率套餐-progressive-polarizedtint-1.56标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_56S = 'T4_PROGRESSIVE_POLARIZEDTINT_1_56S',
  /** T4折射率套餐-progressive-polarizedtint-1.60高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_60A = 'T4_PROGRESSIVE_POLARIZEDTINT_1_60A',
  /** T4折射率套餐-progressive-polarizedtint-1.60标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_60S = 'T4_PROGRESSIVE_POLARIZEDTINT_1_60S',
  /** T4折射率套餐-progressive-polarizedtint-1.67高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_67A = 'T4_PROGRESSIVE_POLARIZEDTINT_1_67A',
  /** T4折射率套餐-progressive-polarizedtint-1.67标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_67S = 'T4_PROGRESSIVE_POLARIZEDTINT_1_67S',
  /** T4折射率套餐-progressive-tint-1.56高级 */
  T4_PROGRESSIVE_TINT_1_56A = 'T4_PROGRESSIVE_TINT_1_56A',
  /** T4折射率套餐-progressive-tint-1.56标准 */
  T4_PROGRESSIVE_TINT_1_56S = 'T4_PROGRESSIVE_TINT_1_56S',
  /** T4折射率套餐-progressive-tint-1.60高级 */
  T4_PROGRESSIVE_TINT_1_60A = 'T4_PROGRESSIVE_TINT_1_60A',
  /** T4折射率套餐-progressive-tint-1.60标准 */
  T4_PROGRESSIVE_TINT_1_60S = 'T4_PROGRESSIVE_TINT_1_60S',
  /** T4折射率套餐-progressive-tint-1.67高级 */
  T4_PROGRESSIVE_TINT_1_67A = 'T4_PROGRESSIVE_TINT_1_67A',
  /** T4折射率套餐-progressive-tint-1.67标准 */
  T4_PROGRESSIVE_TINT_1_67S = 'T4_PROGRESSIVE_TINT_1_67S',
  /** T4折射率套餐-progressive-transphoto-1.50高级 */
  T4_PROGRESSIVE_TRANSPHOTO_1_50A = 'T4_PROGRESSIVE_TRANSPHOTO_1_50A',
  /** T4折射率套餐-progressive-transphoto-1.50标准 */
  T4_PROGRESSIVE_TRANSPHOTO_1_50S = 'T4_PROGRESSIVE_TRANSPHOTO_1_50S',
  /** T4折射率套餐-progressive-transphoto-1.60高级 */
  T4_PROGRESSIVE_TRANSPHOTO_1_60A = 'T4_PROGRESSIVE_TRANSPHOTO_1_60A',
  /** T4折射率套餐-progressive-transphoto-1.60标准 */
  T4_PROGRESSIVE_TRANSPHOTO_1_60S = 'T4_PROGRESSIVE_TRANSPHOTO_1_60S',
  /** T4折射率套餐-single-blue-1.56高级 */
  T4_SINGLE_BLUE_BASIC_1_56A = 'T4_SINGLE_BLUE_BASIC_1_56A',
  /** T4折射率套餐-single-blue-1.56标准 */
  T4_SINGLE_BLUE_BASIC_1_56S = 'T4_SINGLE_BLUE_BASIC_1_56S',
  /** T4折射率套餐-single-blue-1.60高级 */
  T4_SINGLE_BLUE_BASIC_1_60A = 'T4_SINGLE_BLUE_BASIC_1_60A',
  /** T4折射率套餐-single-blue-1.60标准 */
  T4_SINGLE_BLUE_BASIC_1_60S = 'T4_SINGLE_BLUE_BASIC_1_60S',
  /** T4折射率套餐-single-blue-1.67高级 */
  T4_SINGLE_BLUE_BASIC_1_67A = 'T4_SINGLE_BLUE_BASIC_1_67A',
  /** T4折射率套餐-single-blue-1.67标准 */
  T4_SINGLE_BLUE_BASIC_1_67S = 'T4_SINGLE_BLUE_BASIC_1_67S',
  /** T4折射率套餐-single-blue-1.71高级 */
  T4_SINGLE_BLUE_BASIC_1_71A = 'T4_SINGLE_BLUE_BASIC_1_71A',
  /** T4折射率套餐-single-blue-1.71标准 */
  T4_SINGLE_BLUE_BASIC_1_71S = 'T4_SINGLE_BLUE_BASIC_1_71S',
  /** T4折射率套餐-single-clear-1.56高级 */
  T4_SINGLE_CLEAR_BASIC_1_56A = 'T4_SINGLE_CLEAR_BASIC_1_56A',
  /** T4折射率套餐-single-clear-1.56标准 */
  T4_SINGLE_CLEAR_BASIC_1_56S = 'T4_SINGLE_CLEAR_BASIC_1_56S',
  /** T4折射率套餐-single-clear-1.59高级 */
  T4_SINGLE_CLEAR_BASIC_1_59A = 'T4_SINGLE_CLEAR_BASIC_1_59A',
  /** T4折射率套餐-single-clear-1.59标准 */
  T4_SINGLE_CLEAR_BASIC_1_59S = 'T4_SINGLE_CLEAR_BASIC_1_59S',
  /** T4折射率套餐-single-clear-1.60高级 */
  T4_SINGLE_CLEAR_BASIC_1_60A = 'T4_SINGLE_CLEAR_BASIC_1_60A',
  /** T4折射率套餐-single-clear-1.60标准 */
  T4_SINGLE_CLEAR_BASIC_1_60S = 'T4_SINGLE_CLEAR_BASIC_1_60S',
  /** T4折射率套餐-single-clear-1.67高级 */
  T4_SINGLE_CLEAR_BASIC_1_67A = 'T4_SINGLE_CLEAR_BASIC_1_67A',
  /** T4折射率套餐-single-clear-1.67标准 */
  T4_SINGLE_CLEAR_BASIC_1_67S = 'T4_SINGLE_CLEAR_BASIC_1_67S',
  /** T4折射率套餐-single-clear-1.71高级 */
  T4_SINGLE_CLEAR_BASIC_1_71A = 'T4_SINGLE_CLEAR_BASIC_1_71A',
  /** T4折射率套餐-single-clear-1.71标准 */
  T4_SINGLE_CLEAR_BASIC_1_71S = 'T4_SINGLE_CLEAR_BASIC_1_71S',
  /** T4折射率套餐-single-clear-1.71高级 */
  T4_SINGLE_CLEAR_BASIC_1_74A = 'T4_SINGLE_CLEAR_BASIC_1_74A',
  /** T4折射率套餐-single-clear-1.71标准 */
  T4_SINGLE_CLEAR_BASIC_1_74S = 'T4_SINGLE_CLEAR_BASIC_1_74S',
  /** T4折射率套餐-single-gradient-1.56高级 */
  T4_SINGLE_GRADIENT_1_56A = 'T4_SINGLE_GRADIENT_1_56A',
  /** T4折射率套餐-single-gradient-1.56标准 */
  T4_SINGLE_GRADIENT_1_56S = 'T4_SINGLE_GRADIENT_1_56S',
  /** T4折射率套餐-single-gradient-1.60高级 */
  T4_SINGLE_GRADIENT_1_60A = 'T4_SINGLE_GRADIENT_1_60A',
  /** T4折射率套餐-single-gradient-1.60标准 */
  T4_SINGLE_GRADIENT_1_60S = 'T4_SINGLE_GRADIENT_1_60S',
  /** T4折射率套餐-single-gradient-1.67高级 */
  T4_SINGLE_GRADIENT_1_67A = 'T4_SINGLE_GRADIENT_1_67A',
  /** T4折射率套餐-single-gradient-1.67标准 */
  T4_SINGLE_GRADIENT_1_67S = 'T4_SINGLE_GRADIENT_1_67S',
  /** T4折射率套餐-single-mirrored-1.56高级 */
  T4_SINGLE_MIRRORED_1_56A = 'T4_SINGLE_MIRRORED_1_56A',
  /** T4折射率套餐-single-mirrored-1.56标准 */
  T4_SINGLE_MIRRORED_1_56S = 'T4_SINGLE_MIRRORED_1_56S',
  /** T4折射率套餐-single-mirrored-1.60高级 */
  T4_SINGLE_MIRRORED_1_60A = 'T4_SINGLE_MIRRORED_1_60A',
  /** T4折射率套餐-single-mirrored-1.60标准 */
  T4_SINGLE_MIRRORED_1_60S = 'T4_SINGLE_MIRRORED_1_60S',
  /** T4折射率套餐-single-mirrored-1.67高级 */
  T4_SINGLE_MIRRORED_1_67A = 'T4_SINGLE_MIRRORED_1_67A',
  /** T4折射率套餐-single-mirrored-1.67标准 */
  T4_SINGLE_MIRRORED_1_67S = 'T4_SINGLE_MIRRORED_1_67S',
  /** T4折射率套餐-single-photochromic-1.56高级 */
  T4_SINGLE_PHOTOCHROMIC_1_56A = 'T4_SINGLE_PHOTOCHROMIC_1_56A',
  /** T4折射率套餐-single-photochromic-1.56标准 */
  T4_SINGLE_PHOTOCHROMIC_1_56S = 'T4_SINGLE_PHOTOCHROMIC_1_56S',
  /** T4折射率套餐-single-photochromic-1.60高级 */
  T4_SINGLE_PHOTOCHROMIC_1_60A = 'T4_SINGLE_PHOTOCHROMIC_1_60A',
  /** T4折射率套餐-single-photochromic-1.60标准 */
  T4_SINGLE_PHOTOCHROMIC_1_60S = 'T4_SINGLE_PHOTOCHROMIC_1_60S',
  /** T4折射率套餐-single-photochromic-1.67高级 */
  T4_SINGLE_PHOTOCHROMIC_1_67A = 'T4_SINGLE_PHOTOCHROMIC_1_67A',
  /** T4折射率套餐-single-photochromic-1.67标准 */
  T4_SINGLE_PHOTOCHROMIC_1_67S = 'T4_SINGLE_PHOTOCHROMIC_1_67S',
  /** T4折射率套餐-single-photochromic-1.71高级 */
  T4_SINGLE_PHOTOCHROMIC_1_71A = 'T4_SINGLE_PHOTOCHROMIC_1_71A',
  /** T4折射率套餐-single-photochromic-1.71标准 */
  T4_SINGLE_PHOTOCHROMIC_1_71S = 'T4_SINGLE_PHOTOCHROMIC_1_71S',
  /** T4折射率套餐-single-polarizedmirrored-1.56高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_56A = 'T4_SINGLE_POLARIZEDMIRRORED_1_56A',
  /** T4折射率套餐-single-polarizedmirrored-1.56标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_56S = 'T4_SINGLE_POLARIZEDMIRRORED_1_56S',
  /** T4折射率套餐-single-polarizedmirrored-1.60高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_60A = 'T4_SINGLE_POLARIZEDMIRRORED_1_60A',
  /** T4折射率套餐-single-polarizedmirrored-1.60标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_60S = 'T4_SINGLE_POLARIZEDMIRRORED_1_60S',
  /** T4折射率套餐-single-polarizedmirrored-1.67高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_67A = 'T4_SINGLE_POLARIZEDMIRRORED_1_67A',
  /** T4折射率套餐-single-polarizedmirrored-1.67标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_67S = 'T4_SINGLE_POLARIZEDMIRRORED_1_67S',
  /** T4折射率套餐-single-polarizedtint-1.56高级 */
  T4_SINGLE_POLARIZEDTINT_1_56A = 'T4_SINGLE_POLARIZEDTINT_1_56A',
  /** T4折射率套餐-single-polarizedtint-1.56标准 */
  T4_SINGLE_POLARIZEDTINT_1_56S = 'T4_SINGLE_POLARIZEDTINT_1_56S',
  /** T4折射率套餐-single-polarizedtint-1.60高级 */
  T4_SINGLE_POLARIZEDTINT_1_60A = 'T4_SINGLE_POLARIZEDTINT_1_60A',
  /** T4折射率套餐-single-polarizedtint-1.60标准 */
  T4_SINGLE_POLARIZEDTINT_1_60S = 'T4_SINGLE_POLARIZEDTINT_1_60S',
  /** T4折射率套餐-single-polarizedtint-1.67高级 */
  T4_SINGLE_POLARIZEDTINT_1_67A = 'T4_SINGLE_POLARIZEDTINT_1_67A',
  /** T4折射率套餐-single-polarizedtint-1.67标准 */
  T4_SINGLE_POLARIZEDTINT_1_67S = 'T4_SINGLE_POLARIZEDTINT_1_67S',
  /** T4折射率套餐-single-tint-1.56高级 */
  T4_SINGLE_TINT_1_56A = 'T4_SINGLE_TINT_1_56A',
  /** T4折射率套餐-single-tint-1.56标准 */
  T4_SINGLE_TINT_1_56S = 'T4_SINGLE_TINT_1_56S',
  /** T4折射率套餐-single-tint-1.60高级 */
  T4_SINGLE_TINT_1_60A = 'T4_SINGLE_TINT_1_60A',
  /** T4折射率套餐-single-tint-1.60标准 */
  T4_SINGLE_TINT_1_60S = 'T4_SINGLE_TINT_1_60S',
  /** T4折射率套餐-single-tint-1.67高级 */
  T4_SINGLE_TINT_1_67A = 'T4_SINGLE_TINT_1_67A',
  /** T4折射率套餐-single-tint-1.67标准 */
  T4_SINGLE_TINT_1_67S = 'T4_SINGLE_TINT_1_67S',
  /** T4折射率套餐-single-transphoto-1.50高级 */
  T4_SINGLE_TRANSPHOTO_1_50A = 'T4_SINGLE_TRANSPHOTO_1_50A',
  /** T4折射率套餐-single-transphoto-1.50标准 */
  T4_SINGLE_TRANSPHOTO_1_50S = 'T4_SINGLE_TRANSPHOTO_1_50S',
  /** T4折射率套餐-single-transphoto-1.60高级 */
  T4_SINGLE_TRANSPHOTO_1_60A = 'T4_SINGLE_TRANSPHOTO_1_60A',
  /** T4折射率套餐-single-transphoto-1.60标准 */
  T4_SINGLE_TRANSPHOTO_1_60S = 'T4_SINGLE_TRANSPHOTO_1_60S',
}

export type LensProcessOptionList = PaginatedList & {
  __typename?: 'LensProcessOptionList';
  items: Array<LensProcessOption>;
  totalItems: Scalars['Int'];
};

export type LensProcessOptionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<LensProcessOptionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<LensProcessOptionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type LensProcessOptionParent = {
  __typename?: 'LensProcessOptionParent';
  id: Scalars['ID'];
};

export type LensProcessOptionPreview = {
  __typename?: 'LensProcessOptionPreview';
  isPhotochromic?: Maybe<Scalars['Boolean']>;
  opacity?: Maybe<Scalars['Float']>;
  visualMask?: Maybe<Scalars['String']>;
};

export type LensProcessOptionSortParameter = {
  adjustPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  feature?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  shortDesc?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  upgradeText?: InputMaybe<SortOrder>;
};

export type LensProcessOptionTranslation = Node & {
  __typename?: 'LensProcessOptionTranslation';
  /** 功能特点标识, Up to 20% thinner */
  feature?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: Maybe<Array<Scalars['String']>>;
  /** 当前语言 */
  languageCode: LanguageCode;
  /** 当前选项的名称 */
  name: Scalars['String'];
  /** 当前选项的短描述 */
  shortDesc: Scalars['String'];
  /** 升级选项名字, 可以在name基础上进行额外包装 */
  upgradeText?: Maybe<Scalars['String']>;
};

export type LensProcessOptionTranslationInput = {
  /** 功能特点标识, Up to 20% thinner */
  feature?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: InputMaybe<Array<Scalars['String']>>;
  languageCode: LanguageCode;
  /** 当前选项的名称 */
  name: Scalars['String'];
  /** 当前选项的短描述 */
  shortDesc: Scalars['String'];
  /** 升级选项名字, 可以在name基础上进行额外包装 */
  upgradeText?: InputMaybe<Scalars['String']>;
};

/** 针对专题集合页: 镜片流程中标识专题集合页面的唯一KEY, 如果特定专题页需要高光规则, 需要指定如下的1个或者多个KEY */
export enum LensProcessProductCollectionKeys {
  /** 专题页: T3_BLUE作为默认高光选项 */
  TOPIC_PAGE_BLUE_LIGHT = 'TOPIC_PAGE_BLUE_LIGHT',
  /** 专题页: T1_NON_PRESCRIPTION作为默认高光选项 */
  TOPIC_PAGE_NON_PRESCRIPTION = 'TOPIC_PAGE_NON_PRESCRIPTION',
  /** 专题页: T3_LIGHT作为默认高光选项 */
  TOPIC_PAGE_PHOTOCHROMIC = 'TOPIC_PAGE_PHOTOCHROMIC',
  /** 专题页: T1_MULTIFOCAL作为默认高光选项 */
  TOPIC_PAGE_PROGRESSIVE = 'TOPIC_PAGE_PROGRESSIVE',
  /** 专题页: T1_READING作为默认高光选项 */
  TOPIC_PAGE_READING = 'TOPIC_PAGE_READING',
}

export type LensProcessStepInputs = {
  /** T0镜架的商品基础信息 */
  T0: LensProcessT0Inputs;
  /** T1用途大类/用途子类途, 用户的选择数据输入 */
  T1?: InputMaybe<LensProcessT1Inputs>;
  /** T2填处方, 用户的输入数据输入 */
  T2?: InputMaybe<LensProcessT2Inputs>;
  /** T3功能大类/功能二级子类/功能三级子类 */
  T3?: InputMaybe<LensProcessT3Inputs>;
  /** T4折射率及膜层/自定义 */
  T4?: InputMaybe<LensProcessT4Inputs>;
};

export type LensProcessT0Inputs = {
  /** 产品来源的那一个分类或者专题页的集合ID */
  collectionId?: InputMaybe<Scalars['ID']>;
  /** 当前用户的UA parser结果辅助判断用户群体 */
  deviceInfo?: InputMaybe<Scalars['JSON']>;
  /** 镜架产品ID */
  productId: Scalars['ID'];
  /** 镜架产品变量ID */
  productVariantId: Scalars['ID'];
};

export type LensProcessT1Inputs = {
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: InputMaybe<LensProcessOptionKeys>;
};

export type LensProcessT2Inputs = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: InputMaybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: InputMaybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: InputMaybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: InputMaybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: InputMaybe<PrismItemInput>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数 */
  reading?: InputMaybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: InputMaybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};

export type LensProcessT2UserActionData = {
  __typename?: 'LensProcessT2UserActionData';
  /** 当前action项的名称, 如加钱, 当成唯一KEY来使用 */
  actionItemKey: Scalars['String'];
  /** 选择当前action行为的价格调整 */
  adjustPrice: Scalars['Int'];
  /** 当前action项的名称, 如加钱项, 多国语言的翻译名称, 会显示到加价理由上. 有的选项不需要消息提示. */
  i18nName?: Maybe<Scalars['String']>;
  /** 当前action 配置项目配置变量, 比如专题页面URL */
  variables: UserActionOptionItemsVariablesData;
};

export type LensProcessT2UserActionInput = {
  /** 当前action项的名称, 如加钱, 当成唯一KEY来使用 */
  actionItemKey: Scalars['String'];
  /** 选择当前action行为的价格调整 */
  adjustPrice: Scalars['Int'];
  /** 当前action项的名称, 如加钱项, 多国语言的翻译名称, 会显示到加价理由上. 有的选项不需要消息提示. */
  i18nName?: InputMaybe<Scalars['String']>;
  /** 当前action 配置项目配置变量, 比如专题页面URL */
  variables: UserActionOptionItemsVariablesInput;
};

export type LensProcessT2UserInputtedRxData = {
  __typename?: 'LensProcessT2UserInputtedRxData';
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: Maybe<Scalars['String']>;
  /** 用户年龄 */
  age?: Maybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: Maybe<Scalars['String']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: Maybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: Maybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: Maybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: Maybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: Maybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: Maybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: Maybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: Maybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: Maybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: Maybe<PrismItem>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数 */
  reading?: Maybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: Maybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};

export type LensProcessT3Inputs = {
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: InputMaybe<LensProcessOptionKeys>;
};

export type LensProcessT4Inputs = {
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: InputMaybe<LensProcessOptionKeys>;
};

export type LensProcessTemplate = Node & {
  __typename?: 'LensProcessTemplate';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LensProcessTemplateFilterParameter = {
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
};

export type LensProcessTemplateList = PaginatedList & {
  __typename?: 'LensProcessTemplateList';
  items: Array<LensProcessTemplate>;
  totalItems: Scalars['Int'];
};

export type LensProcessTemplateListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<LensProcessTemplateFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<LensProcessTemplateSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type LensProcessTemplateSortParameter = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

/** 镜片流程步骤枚举T1...T4, PREVIEW */
export enum LensStepGroups {
  /** 最后一步, 预览, 确认页 */
  PREVIEW = 'PREVIEW',
  /** 上下文步骤, 当前镜片步骤, 前置信息 */
  T0 = 'T0',
  /** 用途大类/用途子类 */
  T1 = 'T1',
  /** 填处方模块 */
  T2 = 'T2',
  /** 功能大类/功能二级子类/功能三级子类 */
  T3 = 'T3',
  /** 折射率及膜层/自定义 */
  T4 = 'T4',
}

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String'];
};

export enum LogLevel {
  Debug = 'Debug',
  Error = 'Error',
  Info = 'Info',
  Verbose = 'Verbose',
  Warn = 'Warn',
}

export enum LogicalOperator {
  AND = 'AND',
  OR = 'OR',
}

export type MailgunDomainItem = {
  __typename?: 'MailgunDomainItem';
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_disabled?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  require_tls?: Maybe<Scalars['Boolean']>;
  skip_verification?: Maybe<Scalars['Boolean']>;
  smtp_login?: Maybe<Scalars['String']>;
  spam_action?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  web_prefix?: Maybe<Scalars['String']>;
  web_scheme?: Maybe<Scalars['String']>;
  wildcard?: Maybe<Scalars['Boolean']>;
};

export type MailgunDomainQueryInput = {
  authority?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
};

export type ManualPaymentInput = {
  metadata?: InputMaybe<Scalars['JSON']>;
  method: Scalars['String'];
  orderId: Scalars['ID'];
  transactionId?: InputMaybe<Scalars['String']>;
};

/**
 * Returned when a call to addManualPaymentToOrder is made but the Order
 * is not in the required state.
 */
export type ManualPaymentStateError = ErrorResult & {
  __typename?: 'ManualPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type MenuLinkTemplate = {
  __typename?: 'MenuLinkTemplate';
  dev?: Maybe<Scalars['String']>;
  inte?: Maybe<Scalars['String']>;
  me?: Maybe<Scalars['String']>;
  prod?: Maybe<Scalars['String']>;
  rc?: Maybe<Scalars['String']>;
  uat?: Maybe<Scalars['String']>;
};

export type MenuLinkTemplateInput = {
  dev?: InputMaybe<Scalars['String']>;
  inte?: InputMaybe<Scalars['String']>;
  me?: InputMaybe<Scalars['String']>;
  prod?: InputMaybe<Scalars['String']>;
  rc?: InputMaybe<Scalars['String']>;
  uat?: InputMaybe<Scalars['String']>;
};

export type MimeTypeError = ErrorResult & {
  __typename?: 'MimeTypeError';
  errorCode: ErrorCode;
  fileName: Scalars['String'];
  message: Scalars['String'];
  mimeType: Scalars['String'];
};

/** Returned if a PromotionCondition has neither a couponCode nor any conditions set */
export type MissingConditionsError = ErrorResult & {
  __typename?: 'MissingConditionsError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type ModifyOrderInput = {
  addItems?: InputMaybe<Array<AddItemInput>>;
  adjustOrderLines?: InputMaybe<Array<AdjustOrderLineInput>>;
  couponCodes?: InputMaybe<Array<Scalars['String']>>;
  customFields?: InputMaybe<UpdateOrderCustomFieldsInput>;
  dryRun: Scalars['Boolean'];
  note?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<ModifyOrderOptions>;
  orderId: Scalars['ID'];
  refund?: InputMaybe<AdministratorRefundInput>;
  surcharges?: InputMaybe<Array<SurchargeInput>>;
  updateBillingAddress?: InputMaybe<UpdateOrderAddressInput>;
  updateShippingAddress?: InputMaybe<UpdateOrderAddressInput>;
};

export type ModifyOrderOptions = {
  freezePromotions?: InputMaybe<Scalars['Boolean']>;
  recalculateShipping?: InputMaybe<Scalars['Boolean']>;
};

export type ModifyOrderResult =
  | CouponCodeExpiredError
  | CouponCodeInvalidError
  | CouponCodeLimitError
  | InsufficientStockError
  | NegativeQuantityError
  | NoChangesSpecifiedError
  | Order
  | OrderLimitError
  | OrderModificationStateError
  | PaymentMethodMissingError
  | RefundPaymentIdMissingError;

export type ModuleMenu = Node & {
  __typename?: 'ModuleMenu';
  children: Array<ModuleMenu>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  iconImg?: Maybe<Scalars['String']>;
  iconImgActive?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<MenuLinkTemplate>;
  menuAcls: Array<ModuleMenuAcl>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  path: Scalars['String'];
  pathMatch: Scalars['String'];
  permissions: Array<Permission>;
  routeBaseName?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['String']>;
  template?: Maybe<ModuleTemplate>;
  updatedAt: Scalars['DateTime'];
};

export type ModuleMenuAcl = Node & {
  __typename?: 'ModuleMenuAcl';
  aclTagName: Scalars['String'];
  aclTagRemark: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
};

export type ModuleMenuAclFilterParameter = {
  aclTagName?: InputMaybe<StringOperators>;
  aclTagRemark?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
};

export type ModuleMenuAclList = PaginatedList & {
  __typename?: 'ModuleMenuAclList';
  items: Array<ModuleMenuAcl>;
  totalItems: Scalars['Int'];
};

export type ModuleMenuAclListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ModuleMenuAclFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ModuleMenuAclSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ModuleMenuAclSortParameter = {
  aclTagName?: InputMaybe<SortOrder>;
  aclTagRemark?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ModuleMenuFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  iconImg?: InputMaybe<StringOperators>;
  iconImgActive?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  path?: InputMaybe<StringOperators>;
  pathMatch?: InputMaybe<StringOperators>;
  routeBaseName?: InputMaybe<StringOperators>;
  sort?: InputMaybe<NumberOperators>;
  target?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ModuleMenuList = PaginatedList & {
  __typename?: 'ModuleMenuList';
  items: Array<ModuleMenu>;
  totalItems: Scalars['Int'];
};

export type ModuleMenuListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ModuleMenuFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ModuleMenuSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ModuleMenuSortInput = {
  id: Scalars['ID'];
  sort?: InputMaybe<Scalars['Int']>;
};

export type ModuleMenuSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  iconImg?: InputMaybe<SortOrder>;
  iconImgActive?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  pathMatch?: InputMaybe<SortOrder>;
  routeBaseName?: InputMaybe<SortOrder>;
  sort?: InputMaybe<SortOrder>;
  target?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ModuleNormal = Node & {
  __typename?: 'ModuleNormal';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  pathMatch?: Maybe<Scalars['String']>;
  permissions: Array<Permission>;
  routeBaseName?: Maybe<Scalars['String']>;
  template?: Maybe<ModuleTemplate>;
  updatedAt: Scalars['DateTime'];
};

export type ModuleNormalFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  path?: InputMaybe<StringOperators>;
  pathMatch?: InputMaybe<StringOperators>;
  routeBaseName?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ModuleNormalList = PaginatedList & {
  __typename?: 'ModuleNormalList';
  items: Array<ModuleNormal>;
  totalItems: Scalars['Int'];
};

export type ModuleNormalListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ModuleNormalFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ModuleNormalSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ModuleNormalSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  pathMatch?: InputMaybe<SortOrder>;
  routeBaseName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ModuleTemplate = {
  __typename?: 'ModuleTemplate';
  dev?: Maybe<Scalars['String']>;
  inte?: Maybe<Scalars['String']>;
  me?: Maybe<Scalars['String']>;
  prod?: Maybe<Scalars['String']>;
  rc?: Maybe<Scalars['String']>;
  uat?: Maybe<Scalars['String']>;
};

export type ModuleTemplateInput = {
  dev?: InputMaybe<Scalars['String']>;
  inte?: InputMaybe<Scalars['String']>;
  me?: InputMaybe<Scalars['String']>;
  prod?: InputMaybe<Scalars['String']>;
  rc?: InputMaybe<Scalars['String']>;
  uat?: InputMaybe<Scalars['String']>;
};

export type MoveCollectionInput = {
  collectionId: Scalars['ID'];
  index: Scalars['Int'];
  parentId: Scalars['ID'];
};

/** Returned if an operation has specified OrderLines from multiple Orders */
export type MultipleOrderError = ErrorResult & {
  __typename?: 'MultipleOrderError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add Customers to a CustomerGroup */
  addCustomersToGroup: CustomerGroup;
  addFulfillmentToOrder: AddFulfillmentToOrderResult;
  /** Adds an item to the draft Order. */
  addItemToDraftOrder: UpdateOrderItemsResult;
  /**
   * Used to manually create a new Payment against an Order.
   * This can be used by an Administrator when an Order is in the ArrangingPayment state.
   *
   * It is also used when a completed Order
   * has been modified (using `modifyOrder`) and the price has increased. The extra payment
   * can then be manually arranged by the administrator, and the details used to create a new
   * Payment.
   */
  addManualPaymentToOrder: AddManualPaymentToOrderResult;
  /** Add members to a Zone */
  addMembersToZone: Zone;
  addNoteToCustomer: Customer;
  addNoteToOrder: Order;
  /** Add an OptionGroup to a Product */
  addOptionGroupToProduct: Product;
  /** Adjusts a draft OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustDraftOrderLine: UpdateOrderItemsResult;
  /** 调整库存, 真实库存、虚拟库存(+ / -) */
  adjustStock?: Maybe<Scalars['Boolean']>;
  /** Applies the given coupon code to the draft Order */
  applyCouponCodeToDraftOrder: ApplyCouponCodeResult;
  approveProductReview?: Maybe<ProductReview>;
  /** Assign assets to channel */
  assignAssetsToChannel: Array<Asset>;
  /** Assigns Collections to the specified Channel */
  assignCollectionsToChannel: Array<Collection>;
  /** Assigns Facets to the specified Channel */
  assignFacetsToChannel: Array<Facet>;
  /** Assigns ProductVariants to the specified Channel */
  assignProductVariantsToChannel: Array<ProductVariant>;
  /** Assigns all ProductVariants of Product to the specified Channel */
  assignProductsToChannel: Array<Product>;
  /** Assigns Promotions to the specified Channel */
  assignPromotionsToChannel: Array<Promotion>;
  /** Assign a Role to an Administrator */
  assignRoleToAdministrator: Administrator;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  /** 批量创建采购库存表单, 服务器短执行批量处理入库 */
  batchCreateStockForm: Scalars['Boolean'];
  cancelJob: Job;
  cancelOrder: CancelOrderResult;
  cancelPayment: CancelPaymentResult;
  /** Delete all EdmEmailResolverJobLogging records */
  cleanAllResolverJobLoggings?: Maybe<Scalars['Boolean']>;
  /** Delete all EdmTaskPlanJobLogging records */
  cleanAllTaskJobLoggings?: Maybe<Scalars['Boolean']>;
  /** clean expired campaign coupons */
  cleanExpiredCampaignCoupons: DeletionResponse;
  /** clean all union cache */
  cleanSessionCache: Scalars['Boolean'];
  /** clean all union cache fro next front end */
  cleanUnionCache: Scalars['Boolean'];
  /** Create a new Administrator */
  createAdministrator: Administrator;
  /** Create a new Asset */
  createAssets: Array<CreateAssetResult>;
  /** Create a new Setting */
  createBanner: Banner;
  /** Create a new Campaign */
  createCampaign: Campaign;
  /** Create a new CampaignCoupon */
  createCampaignCoupon: CampaignCoupon;
  /** Create a new Channel */
  createChannel: CreateChannelResult;
  /** Create a new Collection */
  createCollection: Collection;
  /** Create a new Country */
  createCountry: Country;
  /** Create a new Customer. If a password is provided, a new User will also be created an linked to the Customer. */
  createCustomer: CreateCustomerResult;
  /** Create a new Address and associate it with the Customer specified by customerId */
  createCustomerAddress: Address;
  /** Create a new CustomerGroup */
  createCustomerGroup: CustomerGroup;
  /** Creates a draft Order */
  createDraftOrder: Order;
  /** Create a new EdmEmailResolverJobLogging */
  createEdmEmailResolverJobLogging: EdmEmailResolverJobLogging;
  /** Create existing EdmEmailResolverMethod */
  createEdmEmailResolverMethod: EdmEmailResolverMethod;
  /** Create a new EmailTemplate */
  createEdmEmailTemplate: EdmEmailTemplate;
  /** Create a new EmailTemplateType */
  createEdmEmailTemplateType: EdmEmailTemplateType;
  /** Create a new EdmGroup */
  createEdmGroup: EdmGroup;
  /** Create a new EdmGroupEmailChunk */
  createEdmGroupEmailChunk: EdmGroupEmailChunk;
  /** Create existing EdmTaskPlan */
  createEdmTaskPlan: EdmTaskPlan;
  /** Create a new EdmTaskPlanJobLogging */
  createEdmTaskPlanJobLogging: EdmTaskPlanJobLogging;
  /** Create a new Facet */
  createFacet: Facet;
  /** Create one or more FacetValues */
  createFacetValues: Array<FacetValue>;
  /** Create a new HelpCenter */
  createHelpCenter: HelpCenter;
  /** Create a new HelpCenterCollection */
  createHelpCenterCollection: HelpCenterCollection;
  /** Create a new HelpCenterHotSearch */
  createHelpCenterHotSearch: HelpCenterHotSearch;
  /** Create a new HelpCenterTag */
  createHelpCenterTag: HelpCenterTag;
  /** Create a new invoice */
  createInvoice?: Maybe<Invoice>;
  /** Create a new LensProcessConfigItem */
  createLensProcessConfigItem: LensProcessConfigItem;
  /** Create a new LensProcessOption */
  createLensProcessOption: LensProcessOption;
  /** Create a new LensProcessTemplate */
  createLensProcessTemplate: LensProcessTemplate;
  /** 后端直接为用户, 申请特定活动的优惠码, 并推送邮箱, 用来支撑邮件营销, 比如: 每次推1000个用户邮箱. */
  createMailerCampaignForUsers?: Maybe<Scalars['Boolean']>;
  /** Create a new ModuleMenu */
  createModuleMenu: ModuleMenu;
  /** Create a new ModuleMenuAcl */
  createModuleMenuAcl: ModuleMenuAcl;
  /** Create a new ModuleNormal */
  createModuleNormal: ModuleNormal;
  /** Create existing PaymentMethod */
  createPaymentMethod: PaymentMethod;
  /** Create a new Product */
  createProduct: Product;
  /** Create a new ProductOption within a ProductOptionGroup */
  createProductOption: ProductOption;
  /** Create a new ProductOptionGroup */
  createProductOptionGroup: ProductOptionGroup;
  createProductReview: ProductReview;
  /** Create a set of ProductVariants based on the OptionGroups assigned to the given Product */
  createProductVariants: Array<Maybe<ProductVariant>>;
  createPromotion: CreatePromotionResult;
  /** Create User show image for specificed review */
  createReviewImage?: Maybe<ProductReview>;
  /** Create a new Risk */
  createRisk: Risk;
  /** Create a new Role */
  createRole: Role;
  /** Create a new Rx */
  createRx: Rx;
  /** Create a new RxItemConfig */
  createRxItemConfig: RxItemConfig;
  /** Create a new SearchIndexRankingConfig */
  createSearchIndexRankingConfig: SearchIndexRankingConfig;
  /** Create a new Setting */
  createSetting: Setting;
  /** Create a new ShippingMethod */
  createShippingMethod: ShippingMethod;
  /** Create a new Subscription */
  createSubscription: Subscription;
  /** Create a new Subscription Facet */
  createSubscriptionFacet: SubscriptionFacet;
  /** Create one or more Subscription FacetValues */
  createSubscriptionFacetValues: Array<SubscriptionFacetValue>;
  /** Create a new Supplier */
  createSupplier: Supplier;
  /** Create a new SupplierStock */
  createSupplierStock: SupplierStock;
  /** Create a new SupplierStockHistory */
  createSupplierStockHistory: SupplierStockHistory;
  /** Create a new SupplierStockInTransit */
  createSupplierStockInTransit: SupplierStockInTransit;
  /** Create a new Tag */
  createTag: Tag;
  /** Create a new TaxCategory */
  createTaxCategory: TaxCategory;
  /** Create a new TaxRate */
  createTaxRate: TaxRate;
  /** Create a new Topic */
  createTopic: Topic;
  /** Create a new TopicLink */
  createTopicLink: TopicLink;
  /** Create a new user tryon model */
  createTryonFaceModels: Array<TryonFaceModel>;
  /** Create a new Zone */
  createZone: Zone;
  /** Delete an Administrator */
  deleteAdministrator: DeletionResponse;
  /** Delete an Asset */
  deleteAsset: DeletionResponse;
  /** Delete multiple Assets */
  deleteAssets: DeletionResponse;
  /** Delete an existing Banner */
  deleteBanner: DeletionResponse;
  /** Delete an existing Campaign */
  deleteCampaign: DeletionResponse;
  /** Delete an existing CampaignCoupon */
  deleteCampaignCoupon: DeletionResponse;
  /** Delete a Channel */
  deleteChannel: DeletionResponse;
  /** Delete a Collection and all of its descendants */
  deleteCollection: DeletionResponse;
  /** Delete multiple Collections and all of their descendants */
  deleteCollections: Array<DeletionResponse>;
  /** Delete a Country */
  deleteCountry: DeletionResponse;
  /** Delete a Customer */
  deleteCustomer: DeletionResponse;
  /** Update an existing Address */
  deleteCustomerAddress: Success;
  /** Delete a CustomerGroup */
  deleteCustomerGroup: DeletionResponse;
  deleteCustomerNote: DeletionResponse;
  /** Deletes a draft Order */
  deleteDraftOrder: DeletionResponse;
  /** Delete a EdmEmailResolverJobLogging */
  deleteEdmEmailResolverJobLogging: DeletionResponse;
  /** Delete a EdmEmailResolverMethod */
  deleteEdmEmailResolverMethod: DeletionResponse;
  /** Delete an existing EmailTemplate */
  deleteEdmEmailTemplate: DeletionResponse;
  /** Delete an existing EmailTemplateType */
  deleteEdmEmailTemplateType: DeletionResponse;
  /** Delete a EdmTaskPlan */
  deleteEdmTaskPlan: DeletionResponse;
  /** Delete a EdmTaskPlanJobLogging */
  deleteEdmTaskPlanJobLogging: DeletionResponse;
  /** Delete an existing Facet */
  deleteFacet: DeletionResponse;
  /** Delete one or more FacetValues */
  deleteFacetValues: Array<DeletionResponse>;
  /** Delete multiple existing Facets */
  deleteFacets: Array<DeletionResponse>;
  /** Delete an existing HelpCenter */
  deleteHelpCenter: DeletionResponse;
  /** Delete an existing HelpCenterCollection */
  deleteHelpCenterCollection: DeletionResponse;
  /** Delete an existing HelpCenterHotSearch */
  deleteHelpCenterHotSearch: DeletionResponse;
  /** Delete an existing HelpCenterTag */
  deleteHelpCenterTag: DeletionResponse;
  /** Delete an existing invoice */
  deleteInvoice: DeletionResponse;
  /** Delete an existing LensProcessConfigItem */
  deleteLensProcessConfigItem: DeletionResponse;
  /** Delete an existing LensProcessOption */
  deleteLensProcessOption: DeletionResponse;
  /** Delete an existing LensProcessTemplate */
  deleteLensProcessTemplate: DeletionResponse;
  /** Delete an existing ModuleMenu */
  deleteModuleMenu: DeletionResponse;
  /** Delete an existing ModuleMenuAcl */
  deleteModuleMenuAcl: DeletionResponse;
  /** Delete an existing ModuleNormal */
  deleteModuleNormal: DeletionResponse;
  deleteOrderNote: DeletionResponse;
  /** Delete a PaymentMethod */
  deletePaymentMethod: DeletionResponse;
  /** Delete a Product */
  deleteProduct: DeletionResponse;
  /** Delete a ProductOption */
  deleteProductOption: DeletionResponse;
  /** Delete an existing ProductQa */
  deleteProductQa: DeletionResponse;
  /** Delete a ProductVariant */
  deleteProductVariant: DeletionResponse;
  /** Delete multiple ProductVariants */
  deleteProductVariants: Array<DeletionResponse>;
  /** Delete multiple Products */
  deleteProducts: Array<DeletionResponse>;
  deletePromotion: DeletionResponse;
  /** Delete an existing Risk */
  deleteRisk: DeletionResponse;
  /** Delete an existing Role */
  deleteRole: DeletionResponse;
  /** Delete an existing Rx */
  deleteRx: DeletionResponse;
  /** Delete an existing RxItemConfig */
  deleteRxItemConfig: DeletionResponse;
  /** Delete an existing SearchIndexRankingConfig */
  deleteSearchIndexRankingConfig: DeletionResponse;
  /** Delete an existing Setting */
  deleteSetting: DeletionResponse;
  /** Delete a ShippingMethod */
  deleteShippingMethod: DeletionResponse;
  /** Delete an existing Subscription */
  deleteSubscription: DeletionResponse;
  /** Delete an existing Subscription Facet */
  deleteSubscriptionFacet: DeletionResponse;
  /** Delete one or more Subscription FacetValues */
  deleteSubscriptionFacetValues: Array<DeletionResponse>;
  /** Delete an existing Supplier */
  deleteSupplier: DeletionResponse;
  /** Delete an existing SupplierStock */
  deleteSupplierStock: DeletionResponse;
  /** Delete an existing SupplierStockHistory */
  deleteSupplierStockHistory: DeletionResponse;
  /** Delete an existing SupplierStockInTransit */
  deleteSupplierStockInTransits: DeletionResponse;
  /** Delete an existing Tag */
  deleteTag: DeletionResponse;
  /** Deletes a TaxCategory */
  deleteTaxCategory: DeletionResponse;
  /** Delete a TaxRate */
  deleteTaxRate: DeletionResponse;
  /** Delete an existing Topic */
  deleteTopic: DeletionResponse;
  /** Delete an existing TopicLink */
  deleteTopicLink: DeletionResponse;
  /** Delete an existing user tryon model */
  deleteTryonFaceModel: DeletionResponse;
  /** Delete a Zone */
  deleteZone: DeletionResponse;
  /** Download customer emails */
  downloadCustomerEmails: Scalars['Boolean'];
  /** 在途库存的商品已经入库 */
  finishInTransitStocks: Scalars['Int'];
  flushBufferedJobs: Success;
  importProducts?: Maybe<ImportInfo>;
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  logout: Success;
  /**
   * Allows an Order to be modified after it has been completed by the Customer. The Order must first
   * be in the `Modifying` state.
   */
  modifyOrder: ModifyOrderResult;
  /** Move a Collection to a different parent or index */
  moveCollection: Collection;
  /** run task reIndexRanking */
  reIndexRanking: Scalars['Boolean'];
  /** create or update an sitemap */
  refreshSiteMap?: Maybe<Scalars['Int']>;
  refundOrder: RefundOrderResult;
  reindex: Job;
  rejectProductReview?: Maybe<ProductReview>;
  /** Removes Collections from the specified Channel */
  removeCollectionsFromChannel: Array<Collection>;
  /** Removes the given coupon code from the draft Order */
  removeCouponCodeFromDraftOrder?: Maybe<Order>;
  /** Remove Customers from a CustomerGroup */
  removeCustomersFromGroup: CustomerGroup;
  /** Remove an OrderLine from the draft Order */
  removeDraftOrderLine: RemoveOrderItemsResult;
  /** Removes Facets from the specified Channel */
  removeFacetsFromChannel: Array<RemoveFacetFromChannelResult>;
  /** Remove members from a Zone */
  removeMembersFromZone: Zone;
  /** Remove an OptionGroup from a Product */
  removeOptionGroupFromProduct: RemoveOptionGroupFromProductResult;
  /** Remove specificed review */
  removeProductReview?: Maybe<DeletionResponse>;
  /** Removes ProductVariants from the specified Channel */
  removeProductVariantsFromChannel: Array<ProductVariant>;
  /** Removes all ProductVariants of Product from the specified Channel */
  removeProductsFromChannel: Array<Product>;
  /** Removes Promotions from the specified Channel */
  removePromotionsFromChannel: Array<Promotion>;
  /** Remove User show image for specificed review */
  removeReviewImage?: Maybe<ProductReview>;
  /** Remove all settled jobs in the given queues older than the given date. Returns the number of jobs deleted. */
  removeSettledJobs: Scalars['Int'];
  /** Revalite slug for next ssg */
  revalidateSlug: Scalars['Boolean'];
  runPendingSearchIndexUpdates: Success;
  /** Create a task to sendEmail */
  sendEmail?: Maybe<Scalars['JSON']>;
  setCustomerForDraftOrder: SetCustomerForDraftOrderResult;
  /** Sets the billing address for a draft Order */
  setDraftOrderBillingAddress: Order;
  /** Allows any custom fields to be set for the active order */
  setDraftOrderCustomFields: Order;
  /** Sets the shipping address for a draft Order */
  setDraftOrderShippingAddress: Order;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethodsForDraftOrder` query */
  setDraftOrderShippingMethod: SetOrderShippingMethodResult;
  setOrderCustomFields?: Maybe<Order>;
  settlePayment: SettlePaymentResult;
  settleRefund: SettleRefundResult;
  /** Sync all order lines if have not default review. */
  syncAllOrderLineDefaultReview: Scalars['Int'];
  /** Sync product variants to stock */
  syncProductVariantsStock?: Maybe<Scalars['Boolean']>;
  /** Sync setting from html template */
  syncSettingsFromTemplates: Scalars['Boolean'];
  /** Sync topic from html template */
  syncTopicsFromTemplates: Scalars['Boolean'];
  transitionFulfillmentToState: TransitionFulfillmentToStateResult;
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  transitionPaymentToState: TransitionPaymentToStateResult;
  transitionProductReviewToState?: Maybe<ProductReview>;
  /** Update the active (currently logged-in) Administrator */
  updateActiveAdministrator: Administrator;
  /** Update an existing Administrator */
  updateAdministrator: Administrator;
  /** Update an existing Asset */
  updateAsset: Asset;
  /** Update an existing Banner */
  updateBanner: Banner;
  /** Update an existing Campaign */
  updateCampaign: Campaign;
  /** Update an existing CampaignCoupon */
  updateCampaignCoupon: CampaignCoupon;
  /** Update an existing Channel */
  updateChannel: UpdateChannelResult;
  /** Update an existing Collection */
  updateCollection: Collection;
  /** Update an existing Country */
  updateCountry: Country;
  updateCrossSellingProducts: Scalars['Boolean'];
  /** Update an existing Customer */
  updateCustomer: UpdateCustomerResult;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /** Update an existing CustomerGroup */
  updateCustomerGroup: CustomerGroup;
  updateCustomerNote: HistoryEntry;
  /** Update a new EdmEmailResolverJobLogging */
  updateEdmEmailResolverJobLogging: EdmEmailResolverJobLogging;
  /** Update an existing EdmEmailResolverMethod */
  updateEdmEmailResolverMethod: EdmEmailResolverMethod;
  /** update a EmailTemplate */
  updateEdmEmailTemplate: EdmEmailTemplate;
  /** update a EmailTemplateType */
  updateEdmEmailTemplateType: EdmEmailTemplateType;
  /** update a EdmGroup */
  updateEdmGroup: EdmGroup;
  /** update a EdmGroupEmailChunk */
  updateEdmGroupEmailChunk: EdmGroupEmailChunk;
  /** Update an existing EdmTaskPlan */
  updateEdmTaskPlan: EdmTaskPlan;
  /** Update a new EdmTaskPlanJobLogging */
  updateEdmTaskPlanJobLogging: EdmTaskPlanJobLogging;
  /** Update an existing Facet */
  updateFacet: Facet;
  /** Update one or more FacetValues */
  updateFacetValues: Array<FacetValue>;
  updateGlobalSettings: UpdateGlobalSettingsResult;
  /** Update an existing HelpCenter */
  updateHelpCenter: HelpCenter;
  /** Update an existing HelpCenterCollection */
  updateHelpCenterCollection: HelpCenterCollection;
  /** Update an existing HelpCenterHotSearch */
  updateHelpCenterHotSearch: HelpCenterHotSearch;
  /** Update an existing HelpCenterTag */
  updateHelpCenterTag: HelpCenterTag;
  /** Update an existing LensProcessConfigItem */
  updateLensProcessConfigItem: LensProcessConfigItem;
  /** Update an existing LensProcessOption */
  updateLensProcessOption: LensProcessOption;
  /** Update an existing LensProcessTemplate */
  updateLensProcessTemplate: LensProcessTemplate;
  /** Update an existing ModuleMenu */
  updateModuleMenu: ModuleMenu;
  /** Update an existing ModuleMenuAcl */
  updateModuleMenuAcl: ModuleMenuAcl;
  /** Update an existing ModuleMenu sorts */
  updateModuleMenuSorts: Scalars['Boolean'];
  /** Update an existing ModuleNormal */
  updateModuleNormal: ModuleNormal;
  updateOrderNote: HistoryEntry;
  /** Update an existing PaymentMethod */
  updatePaymentMethod: PaymentMethod;
  /** Update an existing Product */
  updateProduct: Product;
  /** Create a new ProductOption within a ProductOptionGroup */
  updateProductOption: ProductOption;
  /** Update an existing ProductOptionGroup */
  updateProductOptionGroup: ProductOptionGroup;
  /** Update an existing ProductQa */
  updateProductQa: ProductQa;
  /** run task updateProductRanking */
  updateProductRanking: Scalars['Boolean'];
  updateProductReview: ProductReview;
  /** Update existing ProductVariants */
  updateProductVariants: Array<Maybe<ProductVariant>>;
  /** Update multiple existing Products */
  updateProducts: Array<Product>;
  updatePromotion: UpdatePromotionResult;
  /** Update an existing Risk */
  updateRisk: Risk;
  /** Update an existing Role */
  updateRole: Role;
  /** Update an existing Rx */
  updateRx: Rx;
  /** Update an existing RxItemConfig */
  updateRxItemConfig: RxItemConfig;
  /** update a SearchIndexRankingConfig */
  updateSearchIndexRankingConfig: SearchIndexRankingConfig;
  /** Update an existing Setting */
  updateSetting: Setting;
  /** Update an existing ShippingMethod */
  updateShippingMethod: ShippingMethod;
  /** Update an existing Subscription */
  updateSubscription: Subscription;
  /** Update an existing Subscription Facet */
  updateSubscriptionFacet: SubscriptionFacet;
  /** Update one or more Subscription FacetValues */
  updateSubscriptionFacetValues: Array<SubscriptionFacetValue>;
  /** Update an existing Supplier */
  updateSupplier: Supplier;
  /** Update an existing SupplierStock */
  updateSupplierStock: SupplierStock;
  /** Update an existing SupplierStockHistory */
  updateSupplierStockHistory: SupplierStockHistory;
  /** Update an existing SupplierStockInTransit */
  updateSupplierStockInTransit: SupplierStockInTransit;
  /** Update an existing Tag */
  updateTag: Tag;
  /** Update an existing TaxCategory */
  updateTaxCategory: TaxCategory;
  /** Update an existing TaxRate */
  updateTaxRate: TaxRate;
  /** Update an existing Topic */
  updateTopic: Topic;
  /** Update an existing TopicLink */
  updateTopicLink: TopicLink;
  /** Update a new user tryon model */
  updateTryonFaceModels: TryonFaceModel;
  updateUpSellingProducts: Scalars['Boolean'];
  /** run task updateVariantsRankingById */
  updateVariantsRankingById: Scalars['Boolean'];
  /** Update an existing Zone */
  updateZone: Zone;
  upsertInvoiceConfig: InvoiceConfig;
};

export type MutationAddCustomersToGroupArgs = {
  customerGroupId: Scalars['ID'];
  customerIds: Array<Scalars['ID']>;
};

export type MutationAddFulfillmentToOrderArgs = {
  input: FulfillOrderInput;
};

export type MutationAddItemToDraftOrderArgs = {
  input: AddItemToDraftOrderInput;
  orderId: Scalars['ID'];
};

export type MutationAddManualPaymentToOrderArgs = {
  input: ManualPaymentInput;
};

export type MutationAddMembersToZoneArgs = {
  memberIds: Array<Scalars['ID']>;
  zoneId: Scalars['ID'];
};

export type MutationAddNoteToCustomerArgs = {
  input: AddNoteToCustomerInput;
};

export type MutationAddNoteToOrderArgs = {
  input: AddNoteToOrderInput;
};

export type MutationAddOptionGroupToProductArgs = {
  optionGroupId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type MutationAdjustDraftOrderLineArgs = {
  input: AdjustDraftOrderLineInput;
  orderId: Scalars['ID'];
};

export type MutationAdjustStockArgs = {
  input: AdjustSupplierStockInput;
};

export type MutationApplyCouponCodeToDraftOrderArgs = {
  couponCode: Scalars['String'];
  orderId: Scalars['ID'];
};

export type MutationApproveProductReviewArgs = {
  id: Scalars['ID'];
};

export type MutationAssignAssetsToChannelArgs = {
  input: AssignAssetsToChannelInput;
};

export type MutationAssignCollectionsToChannelArgs = {
  input: AssignCollectionsToChannelInput;
};

export type MutationAssignFacetsToChannelArgs = {
  input: AssignFacetsToChannelInput;
};

export type MutationAssignProductVariantsToChannelArgs = {
  input: AssignProductVariantsToChannelInput;
};

export type MutationAssignProductsToChannelArgs = {
  input: AssignProductsToChannelInput;
};

export type MutationAssignPromotionsToChannelArgs = {
  input: AssignPromotionsToChannelInput;
};

export type MutationAssignRoleToAdministratorArgs = {
  administratorId: Scalars['ID'];
  roleId: Scalars['ID'];
};

export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};

export type MutationBatchCreateStockFormArgs = {
  inputs: Array<CreateSupplierStockInTransitInput>;
};

export type MutationCancelJobArgs = {
  jobId: Scalars['ID'];
};

export type MutationCancelOrderArgs = {
  input: CancelOrderInput;
};

export type MutationCancelPaymentArgs = {
  id: Scalars['ID'];
};

export type MutationCreateAdministratorArgs = {
  input: CreateAdministratorInput;
};

export type MutationCreateAssetsArgs = {
  input: Array<CreateAssetInput>;
};

export type MutationCreateBannerArgs = {
  input: CreateBannerInput;
};

export type MutationCreateCampaignArgs = {
  input: CreateCampaignInput;
};

export type MutationCreateCampaignCouponArgs = {
  input: CreateCampaignCouponInput;
};

export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};

export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};

export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};

export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
  password?: InputMaybe<Scalars['String']>;
};

export type MutationCreateCustomerAddressArgs = {
  customerId: Scalars['ID'];
  input: CreateAddressInput;
};

export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};

export type MutationCreateEdmEmailResolverJobLoggingArgs = {
  input: CreateEdmEmailResolverJobLoggingInput;
};

export type MutationCreateEdmEmailResolverMethodArgs = {
  input: CreateEdmEmailResolverMethodInput;
};

export type MutationCreateEdmEmailTemplateArgs = {
  input: CreateEdmEmailTemplateInput;
};

export type MutationCreateEdmEmailTemplateTypeArgs = {
  input: CreateEdmEmailTemplateTypeInput;
};

export type MutationCreateEdmGroupArgs = {
  input: CreateEdmGroupInput;
};

export type MutationCreateEdmGroupEmailChunkArgs = {
  input: CreateEdmGroupEmailChunkInput;
};

export type MutationCreateEdmTaskPlanArgs = {
  input: CreateEdmTaskPlanInput;
};

export type MutationCreateEdmTaskPlanJobLoggingArgs = {
  input: CreateEdmTaskPlanJobLoggingInput;
};

export type MutationCreateFacetArgs = {
  input: CreateFacetInput;
};

export type MutationCreateFacetValuesArgs = {
  input: Array<CreateFacetValueInput>;
};

export type MutationCreateHelpCenterArgs = {
  input: CreateHelpCenterInput;
};

export type MutationCreateHelpCenterCollectionArgs = {
  input: CreateHelpCenterCollectionInput;
};

export type MutationCreateHelpCenterHotSearchArgs = {
  input: CreateHelpCenterHotSearchInput;
};

export type MutationCreateHelpCenterTagArgs = {
  input: CreateHelpCenterTagInput;
};

export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};

export type MutationCreateLensProcessConfigItemArgs = {
  input: CreateLensProcessConfigItemInput;
};

export type MutationCreateLensProcessOptionArgs = {
  input: CreateLensProcessOptionInput;
};

export type MutationCreateLensProcessTemplateArgs = {
  input: CreateLensProcessTemplateInput;
};

export type MutationCreateMailerCampaignForUsersArgs = {
  campaignId: Scalars['Int'];
  emails: Array<Scalars['String']>;
  languageCode: LanguageCode;
};

export type MutationCreateModuleMenuArgs = {
  input: CreateModuleMenuInput;
};

export type MutationCreateModuleMenuAclArgs = {
  input: CreateModuleMenuAclInput;
};

export type MutationCreateModuleNormalArgs = {
  input: CreateModuleNormalInput;
};

export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};

export type MutationCreateProductArgs = {
  input: CreateProductInput;
};

export type MutationCreateProductOptionArgs = {
  input: CreateProductOptionInput;
};

export type MutationCreateProductOptionGroupArgs = {
  input: CreateProductOptionGroupInput;
};

export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};

export type MutationCreateProductVariantsArgs = {
  input: Array<CreateProductVariantInput>;
};

export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput;
};

export type MutationCreateReviewImageArgs = {
  input: CreateProductReviewImageInput;
};

export type MutationCreateRiskArgs = {
  input: CreateRiskInput;
};

export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};

export type MutationCreateRxArgs = {
  input: CreateRxInput;
};

export type MutationCreateRxItemConfigArgs = {
  input: CreateRxItemConfigInput;
};

export type MutationCreateSearchIndexRankingConfigArgs = {
  input: CreateSearchIndexRankingConfigInput;
};

export type MutationCreateSettingArgs = {
  input: CreateSettingInput;
};

export type MutationCreateShippingMethodArgs = {
  input: CreateShippingMethodInput;
};

export type MutationCreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};

export type MutationCreateSubscriptionFacetArgs = {
  input: CreateSubscriptionFacetInput;
};

export type MutationCreateSubscriptionFacetValuesArgs = {
  input: Array<CreateSubscriptionFacetValueInput>;
};

export type MutationCreateSupplierArgs = {
  input: CreateSupplierInput;
};

export type MutationCreateSupplierStockArgs = {
  input: CreateSupplierStockInput;
};

export type MutationCreateSupplierStockHistoryArgs = {
  input: CreateSupplierStockHistoryInput;
};

export type MutationCreateSupplierStockInTransitArgs = {
  input: CreateSupplierStockInTransitInput;
};

export type MutationCreateTagArgs = {
  input: CreateTagInput;
};

export type MutationCreateTaxCategoryArgs = {
  input: CreateTaxCategoryInput;
};

export type MutationCreateTaxRateArgs = {
  input: CreateTaxRateInput;
};

export type MutationCreateTopicArgs = {
  input: CreateTopicInput;
};

export type MutationCreateTopicLinkArgs = {
  input: CreateTopicLinkInput;
};

export type MutationCreateTryonFaceModelsArgs = {
  input: Array<CreateTryonFaceModelInput>;
};

export type MutationCreateZoneArgs = {
  input: CreateZoneInput;
};

export type MutationDeleteAdministratorArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteAssetArgs = {
  input: DeleteAssetInput;
};

export type MutationDeleteAssetsArgs = {
  input: DeleteAssetsInput;
};

export type MutationDeleteBannerArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCampaignArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCampaignCouponArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteChannelArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCollectionsArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationDeleteCountryArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCustomerArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCustomerGroupArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteCustomerNoteArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteDraftOrderArgs = {
  orderId: Scalars['ID'];
};

export type MutationDeleteEdmEmailResolverJobLoggingArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type MutationDeleteEdmEmailResolverMethodArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type MutationDeleteEdmEmailTemplateArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteEdmEmailTemplateTypeArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type MutationDeleteEdmTaskPlanArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type MutationDeleteEdmTaskPlanJobLoggingArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type MutationDeleteFacetArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type MutationDeleteFacetValuesArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

export type MutationDeleteFacetsArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

export type MutationDeleteHelpCenterArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteHelpCenterCollectionArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteHelpCenterHotSearchArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteHelpCenterTagArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteInvoiceArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLensProcessConfigItemArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLensProcessOptionArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLensProcessTemplateArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteModuleMenuArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteModuleMenuAclArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteModuleNormalArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteOrderNoteArgs = {
  id: Scalars['ID'];
};

export type MutationDeletePaymentMethodArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteProductOptionArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteProductQaArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteProductVariantArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteProductVariantsArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationDeleteProductsArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationDeletePromotionArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteRiskArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteRxArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteRxItemConfigArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSearchIndexRankingConfigArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSettingArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteShippingMethodArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSubscriptionArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSubscriptionFacetArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type MutationDeleteSubscriptionFacetValuesArgs = {
  force?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

export type MutationDeleteSupplierArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSupplierStockArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSupplierStockHistoryArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSupplierStockInTransitsArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTaxCategoryArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTaxRateArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTopicArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTopicLinkArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTryonFaceModelArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteZoneArgs = {
  id: Scalars['ID'];
};

export type MutationDownloadCustomerEmailsArgs = {
  input: DownloadCustomerEmailsInput;
};

export type MutationFinishInTransitStocksArgs = {
  input: FinishInTransitStocksInput;
};

export type MutationFlushBufferedJobsArgs = {
  bufferIds?: InputMaybe<Array<Scalars['String']>>;
};

export type MutationImportProductsArgs = {
  csvFile: Scalars['Upload'];
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type MutationModifyOrderArgs = {
  input: ModifyOrderInput;
};

export type MutationMoveCollectionArgs = {
  input: MoveCollectionInput;
};

export type MutationRefreshSiteMapArgs = {
  input?: InputMaybe<RefreshSitemapInput>;
};

export type MutationRefundOrderArgs = {
  input: RefundOrderInput;
};

export type MutationRejectProductReviewArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveCollectionsFromChannelArgs = {
  input: RemoveCollectionsFromChannelInput;
};

export type MutationRemoveCouponCodeFromDraftOrderArgs = {
  couponCode: Scalars['String'];
  orderId: Scalars['ID'];
};

export type MutationRemoveCustomersFromGroupArgs = {
  customerGroupId: Scalars['ID'];
  customerIds: Array<Scalars['ID']>;
};

export type MutationRemoveDraftOrderLineArgs = {
  orderId: Scalars['ID'];
  orderLineId: Scalars['ID'];
};

export type MutationRemoveFacetsFromChannelArgs = {
  input: RemoveFacetsFromChannelInput;
};

export type MutationRemoveMembersFromZoneArgs = {
  memberIds: Array<Scalars['ID']>;
  zoneId: Scalars['ID'];
};

export type MutationRemoveOptionGroupFromProductArgs = {
  optionGroupId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type MutationRemoveProductReviewArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveProductVariantsFromChannelArgs = {
  input: RemoveProductVariantsFromChannelInput;
};

export type MutationRemoveProductsFromChannelArgs = {
  input: RemoveProductsFromChannelInput;
};

export type MutationRemovePromotionsFromChannelArgs = {
  input: RemovePromotionsFromChannelInput;
};

export type MutationRemoveReviewImageArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveSettledJobsArgs = {
  olderThan?: InputMaybe<Scalars['DateTime']>;
  queueNames?: InputMaybe<Array<Scalars['String']>>;
};

export type MutationRevalidateSlugArgs = {
  slug: Scalars['String'];
};

export type MutationSendEmailArgs = {
  ctx?: InputMaybe<EmailTemplateCtx>;
  input: CreateEdmEmailSenderInput;
};

export type MutationSetCustomerForDraftOrderArgs = {
  customerId?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<CreateCustomerInput>;
  orderId: Scalars['ID'];
};

export type MutationSetDraftOrderBillingAddressArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID'];
};

export type MutationSetDraftOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
  orderId: Scalars['ID'];
};

export type MutationSetDraftOrderShippingAddressArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID'];
};

export type MutationSetDraftOrderShippingMethodArgs = {
  orderId: Scalars['ID'];
  shippingMethodId: Scalars['ID'];
};

export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};

export type MutationSettlePaymentArgs = {
  id: Scalars['ID'];
};

export type MutationSettleRefundArgs = {
  input: SettleRefundInput;
};

export type MutationSyncProductVariantsStockArgs = {
  productVariantIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type MutationTransitionFulfillmentToStateArgs = {
  id: Scalars['ID'];
  state: Scalars['String'];
};

export type MutationTransitionOrderToStateArgs = {
  id: Scalars['ID'];
  state: Scalars['String'];
};

export type MutationTransitionPaymentToStateArgs = {
  id: Scalars['ID'];
  state: Scalars['String'];
};

export type MutationTransitionProductReviewToStateArgs = {
  id: Scalars['ID'];
  state: Scalars['String'];
};

export type MutationUpdateActiveAdministratorArgs = {
  input: UpdateActiveAdministratorInput;
};

export type MutationUpdateAdministratorArgs = {
  input: UpdateAdministratorInput;
};

export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};

export type MutationUpdateBannerArgs = {
  input: UpdateBannerInput;
};

export type MutationUpdateCampaignArgs = {
  input: UpdateCampaignInput;
};

export type MutationUpdateCampaignCouponArgs = {
  input: UpdateCampaignCouponInput;
};

export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};

export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};

export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};

export type MutationUpdateCrossSellingProductsArgs = {
  productId: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};

export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};

export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};

export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput;
};

export type MutationUpdateCustomerNoteArgs = {
  input: UpdateCustomerNoteInput;
};

export type MutationUpdateEdmEmailResolverJobLoggingArgs = {
  input: UpdateEdmEmailResolverJobLoggingInput;
};

export type MutationUpdateEdmEmailResolverMethodArgs = {
  input: UpdateEdmEmailResolverMethodInput;
};

export type MutationUpdateEdmEmailTemplateArgs = {
  input: UpdateEdmEmailTemplateInput;
};

export type MutationUpdateEdmEmailTemplateTypeArgs = {
  input: UpdateEdmEmailTemplateTypeInput;
};

export type MutationUpdateEdmGroupArgs = {
  input: UpdateEdmGroupInput;
};

export type MutationUpdateEdmGroupEmailChunkArgs = {
  input: UpdateEdmGroupEmailChunkInput;
};

export type MutationUpdateEdmTaskPlanArgs = {
  input: UpdateEdmTaskPlanInput;
};

export type MutationUpdateEdmTaskPlanJobLoggingArgs = {
  input: UpdateEdmTaskPlanJobLoggingInput;
};

export type MutationUpdateFacetArgs = {
  input: UpdateFacetInput;
};

export type MutationUpdateFacetValuesArgs = {
  input: Array<UpdateFacetValueInput>;
};

export type MutationUpdateGlobalSettingsArgs = {
  input: UpdateGlobalSettingsInput;
};

export type MutationUpdateHelpCenterArgs = {
  input: UpdateHelpCenterInput;
};

export type MutationUpdateHelpCenterCollectionArgs = {
  input: UpdateHelpCenterCollectionInput;
};

export type MutationUpdateHelpCenterHotSearchArgs = {
  input: UpdateHelpCenterHotSearchInput;
};

export type MutationUpdateHelpCenterTagArgs = {
  input: UpdateHelpCenterTagInput;
};

export type MutationUpdateLensProcessConfigItemArgs = {
  input: UpdateLensProcessConfigItemInput;
};

export type MutationUpdateLensProcessOptionArgs = {
  input: UpdateLensProcessOptionInput;
};

export type MutationUpdateLensProcessTemplateArgs = {
  input: UpdateLensProcessTemplateInput;
};

export type MutationUpdateModuleMenuArgs = {
  input: UpdateModuleMenuInput;
};

export type MutationUpdateModuleMenuAclArgs = {
  input: UpdateModuleMenuAclInput;
};

export type MutationUpdateModuleMenuSortsArgs = {
  input: UpdateModuleMenuSortsInput;
};

export type MutationUpdateModuleNormalArgs = {
  input: UpdateModuleNormalInput;
};

export type MutationUpdateOrderNoteArgs = {
  input: UpdateOrderNoteInput;
};

export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput;
};

export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};

export type MutationUpdateProductOptionArgs = {
  input: UpdateProductOptionInput;
};

export type MutationUpdateProductOptionGroupArgs = {
  input: UpdateProductOptionGroupInput;
};

export type MutationUpdateProductQaArgs = {
  input: UpdateProductQaInput;
};

export type MutationUpdateProductRankingArgs = {
  productId: Scalars['ID'];
};

export type MutationUpdateProductReviewArgs = {
  input: UpdateProductReviewInput;
};

export type MutationUpdateProductVariantsArgs = {
  input: Array<UpdateProductVariantInput>;
};

export type MutationUpdateProductsArgs = {
  input: Array<UpdateProductInput>;
};

export type MutationUpdatePromotionArgs = {
  input: UpdatePromotionInput;
};

export type MutationUpdateRiskArgs = {
  input: UpdateRiskInput;
};

export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};

export type MutationUpdateRxArgs = {
  input: UpdateRxInput;
};

export type MutationUpdateRxItemConfigArgs = {
  input: UpdateRxItemConfigInput;
};

export type MutationUpdateSearchIndexRankingConfigArgs = {
  input: UpdateSearchIndexRankingConfigInput;
};

export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};

export type MutationUpdateShippingMethodArgs = {
  input: UpdateShippingMethodInput;
};

export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};

export type MutationUpdateSubscriptionFacetArgs = {
  input: UpdateSubscriptionFacetInput;
};

export type MutationUpdateSubscriptionFacetValuesArgs = {
  input: Array<UpdateSubscriptionFacetValueInput>;
};

export type MutationUpdateSupplierArgs = {
  input: UpdateSupplierInput;
};

export type MutationUpdateSupplierStockArgs = {
  input: UpdateSupplierStockInput;
};

export type MutationUpdateSupplierStockHistoryArgs = {
  input: UpdateSupplierStockHistoryInput;
};

export type MutationUpdateSupplierStockInTransitArgs = {
  input: UpdateSupplierStockInTransitInput;
};

export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};

export type MutationUpdateTaxCategoryArgs = {
  input: UpdateTaxCategoryInput;
};

export type MutationUpdateTaxRateArgs = {
  input: UpdateTaxRateInput;
};

export type MutationUpdateTopicArgs = {
  input: UpdateTopicInput;
};

export type MutationUpdateTopicLinkArgs = {
  input: UpdateTopicLinkInput;
};

export type MutationUpdateTryonFaceModelsArgs = {
  input: UpdateTryonFaceModelInput;
};

export type MutationUpdateUpSellingProductsArgs = {
  productId: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};

export type MutationUpdateVariantsRankingByIdArgs = {
  variantIds: Array<Scalars['ID']>;
};

export type MutationUpdateZoneArgs = {
  input: UpdateZoneInput;
};

export type MutationUpsertInvoiceConfigArgs = {
  input?: InputMaybe<InvoiceConfigInput>;
};

export type NativeAuthInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type NativeAuthenticationResult =
  | CurrentUser
  | InvalidCredentialsError
  | NativeAuthStrategyError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when a call to modifyOrder fails to specify any changes */
export type NoChangesSpecifiedError = ErrorResult & {
  __typename?: 'NoChangesSpecifiedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type NormalizedRx = {
  __typename?: 'NormalizedRx';
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: Maybe<Scalars['String']>;
  /** 用户年龄 */
  age?: Maybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: Maybe<Scalars['String']>;
  /** 是否为默认处方 */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: Maybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: Maybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: Maybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: Maybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: Maybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: Maybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: Maybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: Maybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: Maybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: Maybe<PrismItem>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数 */
  reading?: Maybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: Maybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};

export type NormalizedRxInput = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  /** 是否标记为默认处方 */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: InputMaybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: InputMaybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: InputMaybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: InputMaybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: InputMaybe<PrismItemInput>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  reading?: InputMaybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};

/** Returned if an attempting to refund an Order but neither items nor shipping refund was specified */
export type NothingToRefundError = ErrorResult & {
  __typename?: 'NothingToRefundError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
  inList: Scalars['Float'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
  between?: InputMaybe<NumberRange>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
};

export type NumberRange = {
  end: Scalars['Float'];
  start: Scalars['Float'];
};

export type OnSaleStockedSkusInput = {
  skip: Scalars['Int'];
  /** 允许查询标签为:库存款的自定义标签查询 */
  tags?: InputMaybe<Array<Scalars['String']>>;
  take: Scalars['Int'];
};

export type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean'];
  billingAddress?: Maybe<OrderAddress>;
  /** A unique code for the Order */
  code: Scalars['String'];
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<OrderCustomFields>;
  customer?: Maybe<Customer>;
  discounts: Array<Discount>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID'];
  lines: Array<OrderLine>;
  modifications: Array<OrderModification>;
  nextStates: Array<Scalars['String']>;
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  shipping: Scalars['Int'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines: Array<ShippingLine>;
  shippingWithTax: Scalars['Int'];
  state: Scalars['String'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the OrderItems.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Int'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Int'];
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  /** Equal to subTotal plus shipping */
  total: Scalars['Int'];
  totalQuantity: Scalars['Int'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
};

export type OrderCustomFields = {
  __typename?: 'OrderCustomFields';
  languageCode?: Maybe<Scalars['String']>;
};

export type OrderFilterParameter = {
  active?: InputMaybe<BooleanOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  customerLastName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  state?: InputMaybe<StringOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
  transactionId?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  adjustments: Array<Adjustment>;
  cancelled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Int'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Int'];
  fulfillment?: Maybe<Fulfillment>;
  id: Scalars['ID'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Int'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Int'];
  refundId?: Maybe<Scalars['ID']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Int'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Int'];
  unitTax: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  maxItems: Scalars['Int'];
  message: Scalars['String'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<OrderLineCustomFields>;
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Int'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Int'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Int'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
  featuredAsset?: Maybe<Asset>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  id: Scalars['ID'];
  items: Array<OrderItem>;
  /** 扩展的订单镜片流程配置流程, 可能为null */
  lensConfigs?: Maybe<OrderLineLensConfigs>;
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Int'];
  /** The total price of the line including tax but excluding discounts. */
  linePriceWithTax: Scalars['Int'];
  /** The total tax on this line */
  lineTax: Scalars['Int'];
  order: Order;
  productVariant: ProductVariant;
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Int'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Int'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Int'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Int'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Int'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Int'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type OrderLineCustomFields = {
  __typename?: 'OrderLineCustomFields';
  lensConfigs?: Maybe<Scalars['String']>;
};

export type OrderLineCustomFieldsInput = {
  lensConfigs?: InputMaybe<Scalars['String']>;
};

export type OrderLineInput = {
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type OrderLineLensCampaignView = {
  __typename?: 'OrderLineLensCampaignView';
  endsAt?: Maybe<Scalars['DateTime']>;
  framePromotionText?: Maybe<Scalars['String']>;
  lensPrice?: Maybe<Scalars['String']>;
  lensPromotionText?: Maybe<Scalars['String']>;
};

export type OrderLineLensConfigRxStep = {
  __typename?: 'OrderLineLensConfigRxStep';
  /** 当前STEP选项下的选中的ID列表 */
  lensOptionInputs: Array<UserProcessConfigStepLensOptionItem>;
  /** 当前STEP存储的用户选择的选项列表数据(价格override之后),显示在购物车, 包含prism加价, 以及偏心加价. */
  lensUserConfigItems: Array<OrderLineLensUserConfigItem>;
  /** 当前步骤 */
  step?: Maybe<LensStepGroups>;
  /** T2处方用户输入的数据 */
  t2LensRxInput?: Maybe<LensProcessT2UserInputtedRxData>;
  /** T2用户特殊的ACTION自定义选项, 如加偏心等行为的集合 */
  t2UserActionInputs?: Maybe<Array<LensProcessT2UserActionData>>;
};

export type OrderLineLensConfigStep = {
  __typename?: 'OrderLineLensConfigStep';
  /** 当前STEP选项下的选中的ID列表 */
  lensOptionInputs: Array<UserProcessConfigStepLensOptionItem>;
  /** 当前STEP存储的用户选择的选项列表数据(价格override之后), 显示在购物车 */
  lensUserConfigItems: Array<OrderLineLensUserConfigItem>;
  /** 当前步骤 */
  step?: Maybe<LensStepGroups>;
};

export type OrderLineLensConfigT0Context = {
  __typename?: 'OrderLineLensConfigT0Context';
  /** 产品来源的那一个分类或者专题页的集合ID */
  collectionId?: Maybe<Scalars['ID']>;
  /** 镜架产品ID */
  productId: Scalars['ID'];
  /** 镜架产品变量ID */
  productVariantId: Scalars['ID'];
  /** 当前步骤 */
  step?: Maybe<LensStepGroups>;
};

/** 镜片流程保存到OrderLine下的数据 */
export type OrderLineLensConfigs = {
  __typename?: 'OrderLineLensConfigs';
  T0?: Maybe<OrderLineLensConfigT0Context>;
  T1?: Maybe<OrderLineLensConfigStep>;
  T2?: Maybe<OrderLineLensConfigRxStep>;
  T3?: Maybe<OrderLineLensConfigStep>;
  T4?: Maybe<OrderLineLensConfigStep>;
  /** 当前配置了直降活动, 在镜片上的折扣, 显示信息 */
  campaignView?: Maybe<OrderLineLensCampaignView>;
  /** 当前镜片是否已经是配置完成状态. */
  lensStepsDone?: Maybe<Scalars['Boolean']>;
  /** 当前orderLine 镜片部分的单价 */
  lensUnitPrice?: Maybe<Scalars['Int']>;
};

export type OrderLineLensUserConfigItem = {
  __typename?: 'OrderLineLensUserConfigItem';
  adjustPrice: Scalars['Int'];
  i18nName: Scalars['String'];
  introduction?: Maybe<Array<Scalars['String']>>;
  preview?: Maybe<LensProcessOptionPreview>;
  shortDesc?: Maybe<Scalars['String']>;
  /** T3如果有颜色值, 则放此处 */
  uiComponents?: Maybe<LensOptionUiComponents>;
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export type OrderListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OrderFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OrderSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type OrderModification = Node & {
  __typename?: 'OrderModification';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isSettled: Scalars['Boolean'];
  note: Scalars['String'];
  orderItems?: Maybe<Array<OrderItem>>;
  payment?: Maybe<Payment>;
  priceChange: Scalars['Int'];
  refund?: Maybe<Refund>;
  surcharges?: Maybe<Array<Surcharge>>;
  updatedAt: Scalars['DateTime'];
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to modify the contents of an Order that is not in the `Modifying` state. */
export type OrderModificationStateError = ErrorResult & {
  __typename?: 'OrderModificationStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderProcessState = {
  __typename?: 'OrderProcessState';
  name: Scalars['String'];
  to: Array<Scalars['String']>;
};

export type OrderSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerLastName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  languageCode?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  /** A description of this tax */
  description: Scalars['String'];
  /** The total net price or OrderItems to which this taxRate applies */
  taxBase: Scalars['Int'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Int'];
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  method: Scalars['String'];
  nextStates: Array<Scalars['String']>;
  refunds: Array<Refund>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  checker?: Maybe<ConfigurableOperation>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<PaymentMethodCustomFields>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  handler: ConfigurableOperation;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethodCustomFields = {
  __typename?: 'PaymentMethodCustomFields';
  paypalClientConfig?: Maybe<Scalars['String']>;
};

export type PaymentMethodFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  paypalClientConfig?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type PaymentMethodList = PaginatedList & {
  __typename?: 'PaymentMethodList';
  items: Array<PaymentMethod>;
  totalItems: Scalars['Int'];
};

export type PaymentMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PaymentMethodFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PaymentMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

/**
 * Returned when a call to modifyOrder fails to include a paymentMethod even
 * though the price has increased as a result of the changes.
 */
export type PaymentMethodMissingError = ErrorResult & {
  __typename?: 'PaymentMethodMissingError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  code: Scalars['String'];
  customFields?: Maybe<PaymentMethodCustomFields>;
  description: Scalars['String'];
  eligibilityMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isEligible: Scalars['Boolean'];
  name: Scalars['String'];
};

export type PaymentMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  paypalClientConfig?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if an attempting to refund a Payment against OrderLines from a different Order */
export type PaymentOrderMismatchError = ErrorResult & {
  __typename?: 'PaymentOrderMismatchError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when there is an error in transitioning the Payment state */
export type PaymentStateTransitionError = ErrorResult & {
  __typename?: 'PaymentStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
  /** Allow this user to enable invoice generation */
  AllowInvoicesPermission = 'AllowInvoicesPermission',
  /** Allow this user to enable reporting */
  AllowReportingPermission = 'AllowReportingPermission',
  /** Allow this user to enable sitemap generation */
  AllowSitemapPermission = 'AllowSitemapPermission',
  /** Authenticated means simply that the user is logged in */
  Authenticated = 'Authenticated',
  /** Grants permission to create Administrator */
  CreateAdministrator = 'CreateAdministrator',
  /** Grants permission to create Asset */
  CreateAsset = 'CreateAsset',
  /** Grants permission to create Banner */
  CreateBanner = 'CreateBanner',
  /** Grants permission to create Campaign */
  CreateCampaign = 'CreateCampaign',
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = 'CreateCatalog',
  /** Grants permission to create Channel */
  CreateChannel = 'CreateChannel',
  /** Grants permission to create Collection */
  CreateCollection = 'CreateCollection',
  /** Grants permission to create Country */
  CreateCountry = 'CreateCountry',
  /** Grants permission to create Customer */
  CreateCustomer = 'CreateCustomer',
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = 'CreateCustomerGroup',
  /** Grants permission to create EDM */
  CreateEDM = 'CreateEDM',
  /** Grants permission to create Facet */
  CreateFacet = 'CreateFacet',
  /** Grants permission to create HelpCenter */
  CreateHelpCenter = 'CreateHelpCenter',
  /** Grants permission to create LensProcess */
  CreateLensProcess = 'CreateLensProcess',
  /** Grants permission to create Order */
  CreateOrder = 'CreateOrder',
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = 'CreatePaymentMethod',
  /** Grants permission to create ProdcutQA */
  CreateProdcutQA = 'CreateProdcutQA',
  /** Grants permission to create Product */
  CreateProduct = 'CreateProduct',
  /** Grants permission to create Promotion */
  CreatePromotion = 'CreatePromotion',
  /** Grants permission to create ReviewsPermission */
  CreateReviewsPermission = 'CreateReviewsPermission',
  /** Grants permission to create Risk */
  CreateRisk = 'CreateRisk',
  /** Grants permission to create Setting */
  CreateSetting = 'CreateSetting',
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = 'CreateSettings',
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = 'CreateShippingMethod',
  /** Grants permission to create Subscription */
  CreateSubscription = 'CreateSubscription',
  /** Grants permission to create Supplier */
  CreateSupplier = 'CreateSupplier',
  /** Grants permission to create System */
  CreateSystem = 'CreateSystem',
  /** Grants permission to create Tag */
  CreateTag = 'CreateTag',
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = 'CreateTaxCategory',
  /** Grants permission to create TaxRate */
  CreateTaxRate = 'CreateTaxRate',
  /** Grants permission to create Topic */
  CreateTopic = 'CreateTopic',
  /** Grants permission to create Zone */
  CreateZone = 'CreateZone',
  /** Grants permission to delete Administrator */
  DeleteAdministrator = 'DeleteAdministrator',
  /** Grants permission to delete Asset */
  DeleteAsset = 'DeleteAsset',
  /** Grants permission to delete Banner */
  DeleteBanner = 'DeleteBanner',
  /** Grants permission to delete Campaign */
  DeleteCampaign = 'DeleteCampaign',
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = 'DeleteCatalog',
  /** Grants permission to delete Channel */
  DeleteChannel = 'DeleteChannel',
  /** Grants permission to delete Collection */
  DeleteCollection = 'DeleteCollection',
  /** Grants permission to delete Country */
  DeleteCountry = 'DeleteCountry',
  /** Grants permission to delete Customer */
  DeleteCustomer = 'DeleteCustomer',
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  /** Grants permission to delete EDM */
  DeleteEDM = 'DeleteEDM',
  /** Grants permission to delete Facet */
  DeleteFacet = 'DeleteFacet',
  /** Grants permission to delete HelpCenter */
  DeleteHelpCenter = 'DeleteHelpCenter',
  /** Grants permission to delete LensProcess */
  DeleteLensProcess = 'DeleteLensProcess',
  /** Grants permission to delete Order */
  DeleteOrder = 'DeleteOrder',
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = 'DeletePaymentMethod',
  /** Grants permission to delete ProdcutQA */
  DeleteProdcutQA = 'DeleteProdcutQA',
  /** Grants permission to delete Product */
  DeleteProduct = 'DeleteProduct',
  /** Grants permission to delete Promotion */
  DeletePromotion = 'DeletePromotion',
  /** Grants permission to delete ReviewsPermission */
  DeleteReviewsPermission = 'DeleteReviewsPermission',
  /** Grants permission to delete Risk */
  DeleteRisk = 'DeleteRisk',
  /** Grants permission to delete Setting */
  DeleteSetting = 'DeleteSetting',
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = 'DeleteSettings',
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = 'DeleteShippingMethod',
  /** Grants permission to delete Subscription */
  DeleteSubscription = 'DeleteSubscription',
  /** Grants permission to delete Supplier */
  DeleteSupplier = 'DeleteSupplier',
  /** Grants permission to delete System */
  DeleteSystem = 'DeleteSystem',
  /** Grants permission to delete Tag */
  DeleteTag = 'DeleteTag',
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = 'DeleteTaxCategory',
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = 'DeleteTaxRate',
  /** Grants permission to delete Topic */
  DeleteTopic = 'DeleteTopic',
  /** Grants permission to delete Zone */
  DeleteZone = 'DeleteZone',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation */
  Public = 'Public',
  /** Grants permission to read Administrator */
  ReadAdministrator = 'ReadAdministrator',
  /** Grants permission to read Asset */
  ReadAsset = 'ReadAsset',
  /** Grants permission to read Banner */
  ReadBanner = 'ReadBanner',
  /** Grants permission to read Campaign */
  ReadCampaign = 'ReadCampaign',
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = 'ReadCatalog',
  /** Grants permission to read Channel */
  ReadChannel = 'ReadChannel',
  /** Grants permission to read Collection */
  ReadCollection = 'ReadCollection',
  /** Grants permission to read Country */
  ReadCountry = 'ReadCountry',
  /** Grants permission to read Customer */
  ReadCustomer = 'ReadCustomer',
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = 'ReadCustomerGroup',
  /** Grants permission to read EDM */
  ReadEDM = 'ReadEDM',
  /** Grants permission to read Facet */
  ReadFacet = 'ReadFacet',
  /** Grants permission to read HelpCenter */
  ReadHelpCenter = 'ReadHelpCenter',
  /** Grants permission to read LensProcess */
  ReadLensProcess = 'ReadLensProcess',
  /** Grants permission to read Order */
  ReadOrder = 'ReadOrder',
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = 'ReadPaymentMethod',
  /** Grants permission to read ProdcutQA */
  ReadProdcutQA = 'ReadProdcutQA',
  /** Grants permission to read Product */
  ReadProduct = 'ReadProduct',
  /** Grants permission to read Promotion */
  ReadPromotion = 'ReadPromotion',
  /** Grants permission to read ReviewsPermission */
  ReadReviewsPermission = 'ReadReviewsPermission',
  /** Grants permission to read Risk */
  ReadRisk = 'ReadRisk',
  /** Grants permission to read Setting */
  ReadSetting = 'ReadSetting',
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = 'ReadSettings',
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = 'ReadShippingMethod',
  /** Grants permission to read Subscription */
  ReadSubscription = 'ReadSubscription',
  /** Grants permission to read Supplier */
  ReadSupplier = 'ReadSupplier',
  /** Grants permission to read System */
  ReadSystem = 'ReadSystem',
  /** Grants permission to read Tag */
  ReadTag = 'ReadTag',
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = 'ReadTaxCategory',
  /** Grants permission to read TaxRate */
  ReadTaxRate = 'ReadTaxRate',
  /** Grants permission to read Topic */
  ReadTopic = 'ReadTopic',
  /** Grants permission to read Zone */
  ReadZone = 'ReadZone',
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = 'SuperAdmin',
  /** Grants permission to update Administrator */
  UpdateAdministrator = 'UpdateAdministrator',
  /** Grants permission to update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Grants permission to update Banner */
  UpdateBanner = 'UpdateBanner',
  /** Grants permission to update Campaign */
  UpdateCampaign = 'UpdateCampaign',
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = 'UpdateCatalog',
  /** Grants permission to update Channel */
  UpdateChannel = 'UpdateChannel',
  /** Grants permission to update Collection */
  UpdateCollection = 'UpdateCollection',
  /** Grants permission to update Country */
  UpdateCountry = 'UpdateCountry',
  /** Grants permission to update Customer */
  UpdateCustomer = 'UpdateCustomer',
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  /** Grants permission to update EDM */
  UpdateEDM = 'UpdateEDM',
  /** Grants permission to update Facet */
  UpdateFacet = 'UpdateFacet',
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  /** Grants permission to update HelpCenter */
  UpdateHelpCenter = 'UpdateHelpCenter',
  /** Grants permission to update LensProcess */
  UpdateLensProcess = 'UpdateLensProcess',
  /** Grants permission to update Order */
  UpdateOrder = 'UpdateOrder',
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  /** Grants permission to update ProdcutQA */
  UpdateProdcutQA = 'UpdateProdcutQA',
  /** Grants permission to update Product */
  UpdateProduct = 'UpdateProduct',
  /** Grants permission to update Promotion */
  UpdatePromotion = 'UpdatePromotion',
  /** Grants permission to update ReviewsPermission */
  UpdateReviewsPermission = 'UpdateReviewsPermission',
  /** Grants permission to update Risk */
  UpdateRisk = 'UpdateRisk',
  /** Grants permission to update Setting */
  UpdateSetting = 'UpdateSetting',
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = 'UpdateSettings',
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = 'UpdateShippingMethod',
  /** Grants permission to update Subscription */
  UpdateSubscription = 'UpdateSubscription',
  /** Grants permission to update Supplier */
  UpdateSupplier = 'UpdateSupplier',
  /** Grants permission to update System */
  UpdateSystem = 'UpdateSystem',
  /** Grants permission to update Tag */
  UpdateTag = 'UpdateTag',
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = 'UpdateTaxCategory',
  /** Grants permission to update TaxRate */
  UpdateTaxRate = 'UpdateTaxRate',
  /** Grants permission to update Topic */
  UpdateTopic = 'UpdateTopic',
  /** Grants permission to update Zone */
  UpdateZone = 'UpdateZone',
}

export type PermissionDefinition = {
  __typename?: 'PermissionDefinition';
  assignable: Scalars['Boolean'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type PreviewCollectionVariantsInput = {
  filters: Array<ConfigurableOperationInput>;
  parentId?: InputMaybe<Scalars['ID']>;
};

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  max: Scalars['Int'];
  min: Scalars['Int'];
};

/** 棱镜, 标准处方配置 */
export type PrismItem = {
  __typename?: 'PrismItem';
  /** OD(Right eye) */
  odHorizontal?: Maybe<Scalars['String']>;
  /** ODHorizontal  (Δ) Base Direction */
  odHorizontalDirection?: Maybe<Scalars['String']>;
  /** OD(Right eye) */
  odVertical?: Maybe<Scalars['String']>;
  /** ODVertical (Δ) Base Direction */
  odVerticalDirection?: Maybe<Scalars['String']>;
  /** OS(Left eye) */
  osHorizontal?: Maybe<Scalars['String']>;
  /** OS Horizontal  (Δ) Base Direction */
  osHorizontalDirection?: Maybe<Scalars['String']>;
  /** OS(Left eye) */
  osVertical?: Maybe<Scalars['String']>;
  /** OS Vertical (Δ) Base Direction */
  osVerticalDirection?: Maybe<Scalars['String']>;
};

/** 棱镜, 标准处方配置 */
export type PrismItemInput = {
  /** OD(Right eye) */
  odHorizontal?: InputMaybe<Scalars['String']>;
  /** ODHorizontal  (Δ) Base Direction */
  odHorizontalDirection?: InputMaybe<Scalars['String']>;
  /** OD(Right eye) */
  odVertical?: InputMaybe<Scalars['String']>;
  /** ODVertical (Δ) Base Direction */
  odVerticalDirection?: InputMaybe<Scalars['String']>;
  /** OS(Left eye) */
  osHorizontal?: InputMaybe<Scalars['String']>;
  /** OS Horizontal  (Δ) Base Direction */
  osHorizontalDirection?: InputMaybe<Scalars['String']>;
  /** OS(Left eye) */
  osVertical?: InputMaybe<Scalars['String']>;
  /** OS Vertical (Δ) Base Direction */
  osVerticalDirection?: InputMaybe<Scalars['String']>;
};

export type ProcessConfigsOfStepInput = {
  /** 当前用户的(T0...T4)流程输入数据 */
  lensProcessStepInputs: LensProcessStepInputs;
  /** 当前查询的流程步骤, 只返回当前步骤下的流程配置选项 */
  step: LensStepGroups;
};

export type Product = Node & {
  __typename?: 'Product';
  assets: Array<Asset>;
  channels: Array<Channel>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<ProductCustomFields>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  /** 扩展的镜架商品信息, 可能为null */
  frameFields?: Maybe<ProductFrame>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  optionGroups: Array<ProductOptionGroup>;
  /** 扩展的商品类型, frame | accessory */
  productType: Scalars['String'];
  recommendations: Array<ProductRecommendation>;
  reviewAvg: Scalars['Float'];
  reviews: ProductReviewList;
  reviewsHistogram: Array<ProductReviewHistogramItem>;
  slug: Scalars['String'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime'];
  /** Returns a paginated, sortable, filterable list of ProductVariants */
  variantList: ProductVariantList;
  /** Returns all ProductVariants */
  variants: Array<ProductVariant>;
};

export type ProductReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
};

export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductCustomFields = {
  __typename?: 'ProductCustomFields';
  bridge?: Maybe<Scalars['Int']>;
  dimensionModelConfig?: Maybe<Scalars['String']>;
  isFinishProduct?: Maybe<Scalars['Boolean']>;
  lensDiagonalSize?: Maybe<Scalars['Int']>;
  lensHeight?: Maybe<Scalars['Int']>;
  lensProcessTemplate?: Maybe<LensProcessTemplate>;
  lensWidth?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  minLensDiam?: Maybe<Scalars['Int']>;
  productTypeCode?: Maybe<Scalars['String']>;
  reviewCount?: Maybe<Scalars['Int']>;
  reviewRating?: Maybe<Scalars['Float']>;
  templeLength?: Maybe<Scalars['Int']>;
  totalWidth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type ProductFilterParameter = {
  bridge?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  dimensionModelConfig?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  isFinishProduct?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  lensDiagonalSize?: InputMaybe<NumberOperators>;
  lensHeight?: InputMaybe<NumberOperators>;
  lensWidth?: InputMaybe<NumberOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  minLensDiam?: InputMaybe<NumberOperators>;
  name?: InputMaybe<StringOperators>;
  productType?: InputMaybe<StringOperators>;
  productTypeCode?: InputMaybe<StringOperators>;
  reviewAvg?: InputMaybe<NumberOperators>;
  reviewCount?: InputMaybe<NumberOperators>;
  reviewRating?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  templeLength?: InputMaybe<NumberOperators>;
  totalWidth?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  weight?: InputMaybe<NumberOperators>;
};

/** 产品基础信息中扩展的镜架信息 */
export type ProductFrame = {
  __typename?: 'ProductFrame';
  /** 中梁 */
  bridge: Scalars['Int'];
  /** 镜架/镜腿显示的可视化尺寸画线配置数据, 所有的variant都是公用一个模型 */
  dimensionModelConfig?: Maybe<DimensionModelConfig>;
  /** 镜架/镜腿显示的尺寸mm/in */
  dimensionModelData?: Maybe<DimensionModelData>;
  /** 镜架PD */
  framePd: Scalars['Int'];
  /** 是否是成品眼镜, 如成品太阳镜可能自带镜片, 无须镜片流程 */
  isFinishProduct: Scalars['Boolean'];
  /** 对角线 */
  lensDiagonalSize: Scalars['Int'];
  /** 框高 */
  lensHeight: Scalars['Int'];
  /** 当前的镜片流程模版配置 */
  lensProcessTemplate?: Maybe<LensProcessTemplate>;
  /** 框宽 */
  lensWidth: Scalars['Int'];
  /** 最小镜片直径 */
  minLensDiam: Scalars['Int'];
  /** 腿长 */
  templeLength: Scalars['Int'];
  /** 整宽 */
  totalWidth: Scalars['Int'];
  /** 重量 */
  weight: Scalars['Int'];
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int'];
};

export type ProductListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  group: ProductOptionGroup;
  groupId: Scalars['ID'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroupTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductOptionInUseError = ErrorResult & {
  __typename?: 'ProductOptionInUseError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  optionGroupCode: Scalars['String'];
  productVariantCount: Scalars['Int'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductOptionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type ProductQa = Node & {
  __typename?: 'ProductQa';
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  helpful: Scalars['Int'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  product: Product;
  productId: Scalars['ID'];
  question: Scalars['String'];
  reply?: Maybe<Scalars['String']>;
  replyCreatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type ProductQaFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  helpful?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  productId?: InputMaybe<IdOperators>;
  question?: InputMaybe<StringOperators>;
  reply?: InputMaybe<StringOperators>;
  replyCreatedAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProductQaList = PaginatedList & {
  __typename?: 'ProductQaList';
  items: Array<ProductQa>;
  totalItems: Scalars['Int'];
};

export type ProductQaListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductQaFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductQaSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductQaSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  helpful?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  reply?: InputMaybe<SortOrder>;
  replyCreatedAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductRecommendation = {
  __typename?: 'ProductRecommendation';
  productId: Scalars['ID'];
  recommendation: Product;
  type: RecommendationType;
};

export type ProductReview = Node & {
  __typename?: 'ProductReview';
  adminCreatedCustomerName?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  customerName?: Maybe<Scalars['String']>;
  customerNameIsPublic: Scalars['Boolean'];
  downVotes: Scalars['Int'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  /** mata title 180 characters */
  metaDescription?: Maybe<Scalars['String']>;
  /** mata title 90 characters */
  metaTitle?: Maybe<Scalars['String']>;
  nextStates: Array<Scalars['String']>;
  /** current review of related orderLine */
  orderLineId?: Maybe<Scalars['ID']>;
  product?: Maybe<Product>;
  productId: Scalars['ID'];
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['ID'];
  rating: Scalars['Int'];
  /** extends new property relatedReviews */
  relatedReviews: Array<ProductReview>;
  reply?: Maybe<Scalars['String']>;
  replyCreatedAt?: Maybe<Scalars['DateTime']>;
  reviewAsset?: Maybe<Asset>;
  showAsTestimonial?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  suggestions?: Maybe<Scalars['String']>;
  /** If system auto created */
  systemAutoCreated: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  upVotes: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ProductReviewFilterParameter = {
  adminCreatedCustomerName?: InputMaybe<StringOperators>;
  content?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  customerId?: InputMaybe<IdOperators>;
  customerName?: InputMaybe<StringOperators>;
  customerNameIsPublic?: InputMaybe<BooleanOperators>;
  downVotes?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  orderLineId?: InputMaybe<IdOperators>;
  productId?: InputMaybe<IdOperators>;
  productVariantId?: InputMaybe<IdOperators>;
  rating?: InputMaybe<NumberOperators>;
  reply?: InputMaybe<StringOperators>;
  replyCreatedAt?: InputMaybe<DateOperators>;
  showAsTestimonial?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  state?: InputMaybe<StringOperators>;
  suggestions?: InputMaybe<StringOperators>;
  systemAutoCreated?: InputMaybe<BooleanOperators>;
  title?: InputMaybe<StringOperators>;
  upVotes?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProductReviewHistogramItem = {
  __typename?: 'ProductReviewHistogramItem';
  bin: Scalars['Int'];
  frequency: Scalars['Int'];
};

export type ProductReviewList = PaginatedList & {
  __typename?: 'ProductReviewList';
  items: Array<ProductReview>;
  totalItems: Scalars['Int'];
};

export type ProductReviewListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductReviewFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductReviewSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductReviewSortParameter = {
  adminCreatedCustomerName?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  customerName?: InputMaybe<SortOrder>;
  downVotes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  orderLineId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  productVariantId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  reply?: InputMaybe<SortOrder>;
  replyCreatedAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  suggestions?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  upVotes?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductSortParameter = {
  bridge?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dimensionModelConfig?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isFinishProduct?: InputMaybe<SortOrder>;
  lensDiagonalSize?: InputMaybe<SortOrder>;
  lensHeight?: InputMaybe<SortOrder>;
  lensProcessTemplate?: InputMaybe<SortOrder>;
  lensWidth?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  minLensDiam?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productType?: InputMaybe<SortOrder>;
  productTypeCode?: InputMaybe<SortOrder>;
  reviewAvg?: InputMaybe<SortOrder>;
  reviewCount?: InputMaybe<SortOrder>;
  reviewRating?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  templeLength?: InputMaybe<SortOrder>;
  totalWidth?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<ProductTranslationCustomFields>;
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductTranslationCustomFields = {
  __typename?: 'ProductTranslationCustomFields';
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type ProductTranslationInput = {
  customFields?: InputMaybe<ProductTranslationInputCustomFields>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ProductTranslationInputCustomFields = {
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  channels: Array<Channel>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<ProductVariantCustomFields>;
  enabled: Scalars['Boolean'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  /** 扩展的镜架商品信息, 可能为null */
  frameFields?: Maybe<ProductVariantFrame>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  outOfStockThreshold: Scalars['Int'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  product: Product;
  productId: Scalars['ID'];
  sku: Scalars['String'];
  stockAllocated: Scalars['Int'];
  stockLevel: Scalars['String'];
  stockMovements: StockMovementList;
  stockOnHand: Scalars['Int'];
  /** 产品供应商信息 */
  supplier?: Maybe<Supplier>;
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  trackInventory: GlobalFlag;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime'];
  useGlobalOutOfStockThreshold: Scalars['Boolean'];
};

export type ProductVariantStockMovementsArgs = {
  options?: InputMaybe<StockMovementListOptions>;
};

export type ProductVariantCustomFields = {
  __typename?: 'ProductVariantCustomFields';
  costPrice?: Maybe<Scalars['Int']>;
  dimensionFrameAsset?: Maybe<Asset>;
  dimensionTempleAsset?: Maybe<Asset>;
  internalSku?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  tryonFrameAsset?: Maybe<Asset>;
  tryonFrameModelConfig?: Maybe<Scalars['String']>;
  tryonTempleAsset?: Maybe<Asset>;
  visualFrameAsset?: Maybe<Asset>;
};

export type ProductVariantFilterParameter = {
  costPrice?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  internalSku?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  outOfStockThreshold?: InputMaybe<NumberOperators>;
  position?: InputMaybe<NumberOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  productId?: InputMaybe<IdOperators>;
  sku?: InputMaybe<StringOperators>;
  stockAllocated?: InputMaybe<NumberOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  stockOnHand?: InputMaybe<NumberOperators>;
  trackInventory?: InputMaybe<StringOperators>;
  tryonFrameModelConfig?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  useGlobalOutOfStockThreshold?: InputMaybe<BooleanOperators>;
};

/** 产品Variant(SKU)扩展的镜架信息 */
export type ProductVariantFrame = {
  __typename?: 'ProductVariantFrame';
  /** 单SKU镜架尺寸frame资源图片 */
  dimensionFrameAsset?: Maybe<Asset>;
  /** 单SKU镜架尺寸temple资源图片 */
  dimensionTempleAsset?: Maybe<Asset>;
  /** 单SKU镜架试戴frame资源图片 */
  tryonFrameAsset?: Maybe<Asset>;
  /** 试戴模型的资源配置数据, 每个色号的variant都是一个独立的模型 */
  tryonFrameModelConfig?: Maybe<TryonModelConfig>;
  /** 单SKU镜架试戴temple资源图片 */
  tryonTempleAsset?: Maybe<Asset>;
  /** 镜片流程中的可视化展示的透明镜框正面图 */
  visualFrameAsset?: Maybe<Asset>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductVariantFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductVariantSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ProductVariantSortParameter = {
  costPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dimensionFrameAsset?: InputMaybe<SortOrder>;
  dimensionTempleAsset?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  internalSku?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  outOfStockThreshold?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  stockAllocated?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
  stockOnHand?: InputMaybe<SortOrder>;
  tryonFrameAsset?: InputMaybe<SortOrder>;
  tryonFrameModelConfig?: InputMaybe<SortOrder>;
  tryonTempleAsset?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  visualFrameAsset?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductVariantTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  endsAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type PromotionFilterParameter = {
  couponCode?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  endsAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  perCustomerUsageLimit?: InputMaybe<NumberOperators>;
  startsAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type PromotionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PromotionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PromotionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type PromotionSortParameter = {
  couponCode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  perCustomerUsageLimit?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if the specified quantity of an OrderLine is greater than the number of items in that line */
export type QuantityTooGreatError = ErrorResult & {
  __typename?: 'QuantityTooGreatError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  activeAdministrator?: Maybe<Administrator>;
  activeChannel: Channel;
  administrator?: Maybe<Administrator>;
  administrators: AdministratorList;
  /** Query all supplier static tags */
  allSupplierStockTags: Array<Scalars['String']>;
  /** Get a single Asset by id */
  asset?: Maybe<Asset>;
  /** Get a list of Assets */
  assets: AssetList;
  /** Query exited user session auth token */
  authenticatedSessionToken?: Maybe<Scalars['String']>;
  /** Query detail of banner entity */
  banner?: Maybe<Banner>;
  /** Query all banner list */
  banners: BannerList;
  /** Query detail of campaign entity */
  campaign?: Maybe<Campaign>;
  /** Query detail of campaign coupon entity */
  campaignCoupon?: Maybe<CampaignCoupon>;
  /** Query all campaign coupon list */
  campaignCoupons: CampaignCouponList;
  /** Query all campaign list */
  campaigns: CampaignList;
  channel?: Maybe<Channel>;
  channels: Array<Channel>;
  /** Get a Collection either by id or slug. If neither id nor slug is specified, an error will result. */
  collection?: Maybe<Collection>;
  collectionFilters: Array<ConfigurableOperationDefinition>;
  collections: CollectionList;
  countries: CountryList;
  country?: Maybe<Country>;
  customer?: Maybe<Customer>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroups: CustomerGroupList;
  customers: CustomerList;
  /** Query all EdmEmailResolverJobLogging list */
  edmEmailResolverJobLoggings: EdmEmailResolverJobLoggingList;
  edmEmailResolverMethod?: Maybe<EdmEmailResolverMethod>;
  edmEmailResolverMethodHandlers: Array<ConfigurableOperationDefinition>;
  edmEmailResolverMethods: EdmEmailResolverMethodList;
  /** Query all EmailTemplateType list */
  edmEmailTemplateTypes: EdmEmailTemplateTypeList;
  /** Query all EmailTemplate list */
  edmEmailTemplates: EdmEmailTemplateList;
  /** Query all EdmGroupEmailChunk list */
  edmGroupEmailChunks: EdmGroupEmailChunkList;
  /** Query all EdmGroup list */
  edmGroups: EdmGroupList;
  edmTaskPlan?: Maybe<EdmTaskPlan>;
  /** Query all EdmTaskPlanJobLogging list */
  edmTaskPlanJobLoggings: EdmTaskPlanJobLoggingList;
  edmTaskPlans: EdmTaskPlanList;
  /** Returns a list of eligible shipping methods for the draft Order */
  eligibleShippingMethodsForDraftOrder: Array<ShippingMethodQuote>;
  facet?: Maybe<Facet>;
  facets: FacetList;
  favorite?: Maybe<Favorite>;
  favorites: FavoriteList;
  fulfillmentHandlers: Array<ConfigurableOperationDefinition>;
  globalSettings: GlobalSettings;
  /** Query detail of help center entity */
  helpCenter?: Maybe<HelpCenter>;
  /** Query detail of help Center Collection entity */
  helpCenterCollection?: Maybe<HelpCenterCollection>;
  /** Query all help center collections list */
  helpCenterCollections: HelpCenterCollectionList;
  /** Query detail of help center Hot Search entity */
  helpCenterHotSearch?: Maybe<HelpCenterHotSearch>;
  /** Query all help center hot search list */
  helpCenterHotSearches: HelpCenterHotSearchList;
  /** Query detail of help center tag entity */
  helpCenterTag?: Maybe<HelpCenterTag>;
  /** Query all help center tags list */
  helpCenterTags: HelpCenterTagList;
  /** Query all help center list */
  helpCenters: HelpCenterList;
  invoice?: Maybe<Invoice>;
  invoiceConfig?: Maybe<InvoiceConfig>;
  invoiceConfigs: InvoiceConfigList;
  invoices: InvoiceList;
  job?: Maybe<Job>;
  jobBufferSize: Array<JobBufferSize>;
  jobQueues: Array<JobQueue>;
  jobs: JobList;
  jobsById: Array<Job>;
  /** Query detail of lens process config item entity */
  lensProcessConfigItem?: Maybe<LensProcessConfigItem>;
  /** Query all lens process template config item list */
  lensProcessConfigItems: LensProcessConfigItemList;
  /** Query detail of lens process option entity */
  lensProcessOption?: Maybe<LensProcessOption>;
  /** Query all lens process options list */
  lensProcessOptions: LensProcessOptionList;
  /** Query detail of lens process template entity */
  lensProcessTemplate?: Maybe<LensProcessTemplate>;
  /** Query all lens process templates list */
  lensProcessTemplates: LensProcessTemplateList;
  /** Query all mailgun domain list */
  mailgunDomains: Array<MailgunDomainItem>;
  me?: Maybe<CurrentUser>;
  /** Query detail of module menu entity */
  moduleMenu?: Maybe<ModuleMenu>;
  /** Query all acl list of specificed menu entity */
  moduleMenuAcls?: Maybe<ModuleMenuAclList>;
  /** Query all module menu list */
  moduleMenus: ModuleMenuList;
  /** Query detail of module normal entity */
  moduleNormal?: Maybe<ModuleNormal>;
  /** Query all module normal list */
  moduleNormals: ModuleNormalList;
  order?: Maybe<Order>;
  orders: OrderList;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethodEligibilityCheckers: Array<ConfigurableOperationDefinition>;
  paymentMethodHandlers: Array<ConfigurableOperationDefinition>;
  paymentMethods: PaymentMethodList;
  pendingSearchIndexUpdates: Scalars['Int'];
  /** Used for real-time previews of the contents of a Collection */
  previewCollectionVariants: ProductVariantList;
  /** Get a Product either by id or slug. If neither id nor slug is specified, an error will result. */
  product?: Maybe<Product>;
  productOptionGroup?: Maybe<ProductOptionGroup>;
  productOptionGroups: Array<ProductOptionGroup>;
  /** Query detail of product qa entity */
  productQa?: Maybe<ProductQa>;
  /** Query all product qa list */
  productQas: ProductQaList;
  productRecommendations: Array<ProductRecommendation>;
  /** Get the product review */
  productReview?: Maybe<ProductReview>;
  /** Get the list of product reviews */
  productReviews: ProductReviewList;
  /** Get a ProductVariant by id */
  productVariant?: Maybe<ProductVariant>;
  /** List ProductVariants either all or for the specific product. */
  productVariants: ProductVariantList;
  /** List Products */
  products: ProductList;
  promotion?: Maybe<Promotion>;
  promotionActions: Array<ConfigurableOperationDefinition>;
  promotionConditions: Array<ConfigurableOperationDefinition>;
  promotions: PromotionList;
  /** 采购页面, 列出 可售库存 (在途库存+虚拟库存) < 0 的数据 并分组显示 */
  queryInsufficientOnSaleStock: SupplierStockList;
  /** 库存页面, 列出 可售库存 (在途库存+虚拟库存) > 0 的数据 + 特定tag 模糊匹配的数据, 并分组显示 */
  queryOnSaleStockedSkus: SupplierStockList;
  /** Query detail of risk entity */
  risk?: Maybe<Risk>;
  /** Query all risk list */
  risks: RiskList;
  role?: Maybe<Role>;
  roles: RoleList;
  /** Query detail of lens user rx config entity */
  rxConfig?: Maybe<RxItemConfig>;
  /** Query all lens user rx configs list */
  rxConfigs: RxItemConfigList;
  /** Query detail of lens user rx entity */
  rxItem?: Maybe<Rx>;
  /** Query all lens user rx list */
  rxList: RxList;
  search: SearchResponse;
  /** Query all SearchIndexRankingConfig list */
  searchIndexRankingConfigs: SearchIndexRankingConfigList;
  /** Query detail of setting entity */
  setting?: Maybe<Setting>;
  /** Query all setting list */
  settings: SettingList;
  shippingCalculators: Array<ConfigurableOperationDefinition>;
  shippingEligibilityCheckers: Array<ConfigurableOperationDefinition>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods: ShippingMethodList;
  sitemap?: Maybe<Sitemap>;
  sitemaps: SitemapList;
  /** Query detail of subscription entity */
  subscription?: Maybe<Subscription>;
  subscriptionFacet?: Maybe<SubscriptionFacet>;
  subscriptionFacetValues: SubscriptionFacetValueList;
  subscriptionFacets: SubscriptionFacetList;
  /** Query all subscription list */
  subscriptions: SubscriptionList;
  /** Query detail of supplier entity */
  supplier?: Maybe<Supplier>;
  /** Query detail of supplierStock entity */
  supplierStock?: Maybe<SupplierStock>;
  /** Query all supplier history list */
  supplierStockHistories: SupplierStockHistoryList;
  /** Query detail of supplier history entity */
  supplierStockHistory?: Maybe<SupplierStockHistory>;
  /** Query detail of SupplierStockInTransit entity */
  supplierStockInTransit?: Maybe<SupplierStockInTransit>;
  /** Query all SupplierStockInTransit list */
  supplierStockInTransits: SupplierStockInTransitList;
  /** Query all supplierStock list */
  supplierStocks: SupplierStockList;
  /** Query all supplier list */
  suppliers: SupplierList;
  tag: Tag;
  tags: TagList;
  taxCategories: Array<TaxCategory>;
  taxCategory?: Maybe<TaxCategory>;
  taxRate?: Maybe<TaxRate>;
  taxRates: TaxRateList;
  testEligibleShippingMethods: Array<ShippingMethodQuote>;
  testShippingMethod: TestShippingMethodResult;
  ticket?: Maybe<Ticket>;
  tickets: TicketList;
  /** Query detail of topic entity */
  topic?: Maybe<Topic>;
  /** Query detail of topic link entity */
  topicLink?: Maybe<TopicLink>;
  /** Query all topic link list */
  topicLinks: TopicLinkList;
  /** Query all topic list */
  topics: TopicList;
  /** Query detail of tryon model entity */
  tryonFaceModel?: Maybe<TryonFaceModel>;
  /** Query all tryon face models */
  tryonFaceModels: TryonFaceModelList;
  zone?: Maybe<Zone>;
  zones: Array<Zone>;
};

export type QueryAdministratorArgs = {
  id: Scalars['ID'];
};

export type QueryAdministratorsArgs = {
  options?: InputMaybe<AdministratorListOptions>;
};

export type QueryAssetArgs = {
  id: Scalars['ID'];
};

export type QueryAssetsArgs = {
  options?: InputMaybe<AssetListOptions>;
};

export type QueryAuthenticatedSessionTokenArgs = {
  customerId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
};

export type QueryBannerArgs = {
  id: Scalars['ID'];
};

export type QueryBannersArgs = {
  options?: InputMaybe<BannerListOptions>;
};

export type QueryCampaignArgs = {
  id: Scalars['ID'];
};

export type QueryCampaignCouponArgs = {
  id: Scalars['ID'];
};

export type QueryCampaignCouponsArgs = {
  options?: InputMaybe<CampaignCouponListOptions>;
};

export type QueryCampaignsArgs = {
  options?: InputMaybe<CampaignListOptions>;
};

export type QueryChannelArgs = {
  id: Scalars['ID'];
};

export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};

export type QueryCountriesArgs = {
  options?: InputMaybe<CountryListOptions>;
};

export type QueryCountryArgs = {
  id: Scalars['ID'];
};

export type QueryCustomerArgs = {
  id: Scalars['ID'];
};

export type QueryCustomerGroupArgs = {
  id: Scalars['ID'];
};

export type QueryCustomerGroupsArgs = {
  options?: InputMaybe<CustomerGroupListOptions>;
};

export type QueryCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type QueryEdmEmailResolverJobLoggingsArgs = {
  options?: InputMaybe<EdmEmailResolverJobLoggingListOptions>;
};

export type QueryEdmEmailResolverMethodArgs = {
  id: Scalars['ID'];
};

export type QueryEdmEmailResolverMethodsArgs = {
  options?: InputMaybe<EdmEmailResolverMethodListOptions>;
};

export type QueryEdmEmailTemplateTypesArgs = {
  options?: InputMaybe<EdmEmailTemplateTypeListOptions>;
};

export type QueryEdmEmailTemplatesArgs = {
  options?: InputMaybe<EdmEmailTemplateListOptions>;
};

export type QueryEdmGroupEmailChunksArgs = {
  options?: InputMaybe<EdmGroupEmailChunkListOptions>;
};

export type QueryEdmGroupsArgs = {
  options?: InputMaybe<EdmGroupListOptions>;
};

export type QueryEdmTaskPlanArgs = {
  id: Scalars['ID'];
};

export type QueryEdmTaskPlanJobLoggingsArgs = {
  options?: InputMaybe<EdmTaskPlanJobLoggingListOptions>;
};

export type QueryEdmTaskPlansArgs = {
  options?: InputMaybe<EdmTaskPlanListOptions>;
};

export type QueryEligibleShippingMethodsForDraftOrderArgs = {
  orderId: Scalars['ID'];
};

export type QueryFacetArgs = {
  id: Scalars['ID'];
};

export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};

export type QueryFavoriteArgs = {
  id: Scalars['ID'];
};

export type QueryFavoritesArgs = {
  options?: InputMaybe<FavoriteListOptions>;
  productVariantNameFilter?: InputMaybe<Scalars['String']>;
};

export type QueryHelpCenterArgs = {
  id: Scalars['ID'];
};

export type QueryHelpCenterCollectionArgs = {
  id: Scalars['ID'];
};

export type QueryHelpCenterCollectionsArgs = {
  options?: InputMaybe<HelpCenterCollectionListOptions>;
};

export type QueryHelpCenterHotSearchArgs = {
  id: Scalars['ID'];
};

export type QueryHelpCenterHotSearchesArgs = {
  options?: InputMaybe<HelpCenterHotSearchListOptions>;
};

export type QueryHelpCenterTagArgs = {
  id: Scalars['ID'];
};

export type QueryHelpCenterTagsArgs = {
  options?: InputMaybe<HelpCenterTagListOptions>;
};

export type QueryHelpCentersArgs = {
  options?: InputMaybe<HelpCenterListOptions>;
};

export type QueryInvoiceArgs = {
  orderCode: Scalars['String'];
};

export type QueryInvoiceConfigArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryInvoiceConfigsArgs = {
  options?: InputMaybe<InvoiceConfigListOptions>;
};

export type QueryInvoicesArgs = {
  options?: InputMaybe<InvoiceListOptions>;
};

export type QueryJobArgs = {
  jobId: Scalars['ID'];
};

export type QueryJobBufferSizeArgs = {
  bufferIds?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryJobsArgs = {
  options?: InputMaybe<JobListOptions>;
};

export type QueryJobsByIdArgs = {
  jobIds: Array<Scalars['ID']>;
};

export type QueryLensProcessConfigItemArgs = {
  id: Scalars['ID'];
};

export type QueryLensProcessConfigItemsArgs = {
  options?: InputMaybe<LensProcessConfigItemListOptions>;
};

export type QueryLensProcessOptionArgs = {
  id: Scalars['ID'];
};

export type QueryLensProcessOptionsArgs = {
  options?: InputMaybe<LensProcessOptionListOptions>;
};

export type QueryLensProcessTemplateArgs = {
  id: Scalars['ID'];
};

export type QueryLensProcessTemplatesArgs = {
  options?: InputMaybe<LensProcessTemplateListOptions>;
};

export type QueryMailgunDomainsArgs = {
  input?: InputMaybe<MailgunDomainQueryInput>;
};

export type QueryModuleMenuArgs = {
  id: Scalars['ID'];
};

export type QueryModuleMenuAclsArgs = {
  menuId: Scalars['ID'];
  options?: InputMaybe<ModuleMenuAclListOptions>;
};

export type QueryModuleMenusArgs = {
  options?: InputMaybe<ModuleMenuListOptions>;
};

export type QueryModuleNormalArgs = {
  id: Scalars['ID'];
};

export type QueryModuleNormalsArgs = {
  options?: InputMaybe<ModuleNormalListOptions>;
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type QueryPaymentMethodArgs = {
  id: Scalars['ID'];
};

export type QueryPaymentMethodsArgs = {
  options?: InputMaybe<PaymentMethodListOptions>;
};

export type QueryPreviewCollectionVariantsArgs = {
  input: PreviewCollectionVariantsInput;
  options?: InputMaybe<ProductVariantListOptions>;
};

export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryProductOptionGroupArgs = {
  id: Scalars['ID'];
};

export type QueryProductOptionGroupsArgs = {
  filterTerm?: InputMaybe<Scalars['String']>;
};

export type QueryProductQaArgs = {
  id: Scalars['ID'];
};

export type QueryProductQasArgs = {
  options?: InputMaybe<ProductQaListOptions>;
};

export type QueryProductRecommendationsArgs = {
  productId: Scalars['ID'];
};

export type QueryProductReviewArgs = {
  id: Scalars['ID'];
};

export type QueryProductReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
  withImageOnly?: InputMaybe<Scalars['Boolean']>;
};

export type QueryProductVariantArgs = {
  id: Scalars['ID'];
};

export type QueryProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
  productId?: InputMaybe<Scalars['ID']>;
};

export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};

export type QueryPromotionArgs = {
  id: Scalars['ID'];
};

export type QueryPromotionsArgs = {
  options?: InputMaybe<PromotionListOptions>;
};

export type QueryQueryInsufficientOnSaleStockArgs = {
  input: InsufficientOnSaleStockInput;
  options?: InputMaybe<SupplierStockListOptions>;
};

export type QueryQueryOnSaleStockedSkusArgs = {
  input: OnSaleStockedSkusInput;
  options?: InputMaybe<SupplierStockListOptions>;
};

export type QueryRiskArgs = {
  id: Scalars['ID'];
};

export type QueryRisksArgs = {
  options?: InputMaybe<RiskListOptions>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
};

export type QueryRolesArgs = {
  options?: InputMaybe<RoleListOptions>;
};

export type QueryRxConfigArgs = {
  id: Scalars['ID'];
};

export type QueryRxConfigsArgs = {
  options?: InputMaybe<RxItemConfigListOptions>;
};

export type QueryRxItemArgs = {
  id: Scalars['ID'];
};

export type QueryRxListArgs = {
  options?: InputMaybe<RxListOptions>;
};

export type QuerySearchArgs = {
  input: SearchInput;
};

export type QuerySearchIndexRankingConfigsArgs = {
  options?: InputMaybe<SearchIndexRankingConfigListOptions>;
};

export type QuerySettingArgs = {
  id: Scalars['ID'];
};

export type QuerySettingsArgs = {
  options?: InputMaybe<SettingListOptions>;
};

export type QueryShippingMethodArgs = {
  id: Scalars['ID'];
};

export type QueryShippingMethodsArgs = {
  options?: InputMaybe<ShippingMethodListOptions>;
};

export type QuerySitemapArgs = {
  id: Scalars['ID'];
};

export type QuerySitemapsArgs = {
  options?: InputMaybe<SitemapListOptions>;
};

export type QuerySubscriptionArgs = {
  id: Scalars['ID'];
};

export type QuerySubscriptionFacetArgs = {
  id: Scalars['ID'];
};

export type QuerySubscriptionFacetValuesArgs = {
  options?: InputMaybe<SubscriptionFacetValueListOptions>;
};

export type QuerySubscriptionFacetsArgs = {
  options?: InputMaybe<SubscriptionFacetListOptions>;
};

export type QuerySubscriptionsArgs = {
  facetValueIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  options?: InputMaybe<SubscriptionListOptions>;
};

export type QuerySupplierArgs = {
  id: Scalars['ID'];
};

export type QuerySupplierStockArgs = {
  id: Scalars['ID'];
};

export type QuerySupplierStockHistoriesArgs = {
  options?: InputMaybe<SupplierStockHistoryListOptions>;
};

export type QuerySupplierStockHistoryArgs = {
  id: Scalars['ID'];
};

export type QuerySupplierStockInTransitArgs = {
  id: Scalars['ID'];
};

export type QuerySupplierStockInTransitsArgs = {
  options?: InputMaybe<SupplierStockInTransitListOptions>;
};

export type QuerySupplierStocksArgs = {
  extrasQuery?: InputMaybe<StockExtrasQueryInput>;
  options?: InputMaybe<SupplierStockListOptions>;
};

export type QuerySuppliersArgs = {
  options?: InputMaybe<SupplierListOptions>;
};

export type QueryTagArgs = {
  id: Scalars['ID'];
};

export type QueryTagsArgs = {
  options?: InputMaybe<TagListOptions>;
};

export type QueryTaxCategoryArgs = {
  id: Scalars['ID'];
};

export type QueryTaxRateArgs = {
  id: Scalars['ID'];
};

export type QueryTaxRatesArgs = {
  options?: InputMaybe<TaxRateListOptions>;
};

export type QueryTestEligibleShippingMethodsArgs = {
  input: TestEligibleShippingMethodsInput;
};

export type QueryTestShippingMethodArgs = {
  input: TestShippingMethodInput;
};

export type QueryTicketArgs = {
  id: Scalars['ID'];
};

export type QueryTicketsArgs = {
  options?: InputMaybe<TicketListOptions>;
};

export type QueryTopicArgs = {
  id: Scalars['ID'];
};

export type QueryTopicLinkArgs = {
  id: Scalars['ID'];
};

export type QueryTopicLinksArgs = {
  options?: InputMaybe<TopicLinkListOptions>;
};

export type QueryTopicsArgs = {
  options?: InputMaybe<TopicListOptions>;
};

export type QueryTryonFaceModelArgs = {
  id: Scalars['ID'];
};

export type QueryTryonFaceModelsArgs = {
  options?: InputMaybe<TryonFaceModelListOptions>;
};

export type QueryZoneArgs = {
  id: Scalars['ID'];
};

export enum RecommendationType {
  CROSSSELL = 'CROSSSELL',
  UPSELL = 'UPSELL',
}

export type RefreshSitemapInput = {
  siteNames?: InputMaybe<Array<InputMaybe<SitemapSites>>>;
};

export type Refund = Node & {
  __typename?: 'Refund';
  adjustment: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  items: Scalars['Int'];
  metadata?: Maybe<Scalars['JSON']>;
  method?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  paymentId: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
  shipping: Scalars['Int'];
  state: Scalars['String'];
  total: Scalars['Int'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type RefundOrderInput = {
  adjustment: Scalars['Int'];
  lines: Array<OrderLineInput>;
  paymentId: Scalars['ID'];
  reason?: InputMaybe<Scalars['String']>;
  shipping: Scalars['Int'];
};

export type RefundOrderResult =
  | AlreadyRefundedError
  | MultipleOrderError
  | NothingToRefundError
  | OrderStateTransitionError
  | PaymentOrderMismatchError
  | QuantityTooGreatError
  | Refund
  | RefundOrderStateError
  | RefundStateTransitionError;

/** Returned if an attempting to refund an Order which is not in the expected state */
export type RefundOrderStateError = ErrorResult & {
  __typename?: 'RefundOrderStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  orderState: Scalars['String'];
};

/**
 * Returned when a call to modifyOrder fails to include a refundPaymentId even
 * though the price has decreased as a result of the changes.
 */
export type RefundPaymentIdMissingError = ErrorResult & {
  __typename?: 'RefundPaymentIdMissingError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when there is an error in transitioning the Refund state */
export type RefundStateTransitionError = ErrorResult & {
  __typename?: 'RefundStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  entity: Scalars['String'];
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  scalarFields: Array<Scalars['String']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type Release = Node &
  StockMovement & {
    __typename?: 'Release';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderItem: OrderItem;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
  };

export type RemoveCollectionsFromChannelInput = {
  channelId: Scalars['ID'];
  collectionIds: Array<Scalars['ID']>;
};

export type RemoveFacetFromChannelResult = Facet | FacetInUseError;

export type RemoveFacetsFromChannelInput = {
  channelId: Scalars['ID'];
  facetIds: Array<Scalars['ID']>;
  force?: InputMaybe<Scalars['Boolean']>;
};

export type RemoveOptionGroupFromProductResult =
  | Product
  | ProductOptionInUseError;

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RemoveProductVariantsFromChannelInput = {
  channelId: Scalars['ID'];
  productVariantIds: Array<Scalars['ID']>;
};

export type RemoveProductsFromChannelInput = {
  channelId: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};

export type RemovePromotionsFromChannelInput = {
  channelId: Scalars['ID'];
  promotionIds: Array<Scalars['ID']>;
};

export type Return = Node &
  StockMovement & {
    __typename?: 'Return';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderItem: OrderItem;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
  };

export type ReviewOrderLine = Node & {
  __typename?: 'ReviewOrderLine';
  id: Scalars['ID'];
  orderLineId: Scalars['ID'];
  productId: Scalars['ID'];
  productReview?: Maybe<ProductReview>;
  productSlug: Scalars['String'];
  productVariantAsset?: Maybe<Asset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  productVariantSku: Scalars['String'];
};

export type ReviewOrderLineList = PaginatedList & {
  __typename?: 'ReviewOrderLineList';
  items: Array<ReviewOrderLine>;
  totalItems: Scalars['Int'];
};

export enum ReviewStateEnum {
  Authorized = 'Authorized',
  Created = 'Created',
  Denied = 'Denied',
  Updated = 'Updated',
}

export type Risk = Node & {
  __typename?: 'Risk';
  address?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  riskScore: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type RiskFilterParameter = {
  address?: InputMaybe<StringOperators>;
  comment?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  customerId?: InputMaybe<IdOperators>;
  email?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  riskScore?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type RiskList = PaginatedList & {
  __typename?: 'RiskList';
  items: Array<Risk>;
  totalItems: Scalars['Int'];
};

export type RiskListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RiskFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RiskSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type RiskSortParameter = {
  address?: InputMaybe<SortOrder>;
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  riskScore?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Role = Node & {
  __typename?: 'Role';
  channels: Array<Channel>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime'];
};

export type RoleFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int'];
};

export type RoleListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RoleFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RoleSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type RoleSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Rx = Node & {
  __typename?: 'Rx';
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: Maybe<Scalars['String']>;
  /** 用户年龄 */
  age?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** 处方单对应的客户信息 */
  customer?: Maybe<Customer>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 是否标记为默认处方 */
  isDefault: Scalars['Boolean'];
  /** 处方单名称 */
  name?: Maybe<Scalars['String']>;
  /** 处方一般情况下需要将用户处方转换成标准处方数据, 此处用来存储标准转换之后的处方数据 */
  normalizedRx?: Maybe<NormalizedRx>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: Maybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: Maybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: Maybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: Maybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: Maybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: Maybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: Maybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: Maybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: Maybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: Maybe<PrismItem>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数 */
  reading?: Maybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: Maybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
  updatedAt: Scalars['DateTime'];
};

export type RxFilterParameter = {
  add?: InputMaybe<StringOperators>;
  age?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  directDegrees?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  isDefault?: InputMaybe<BooleanOperators>;
  name?: InputMaybe<StringOperators>;
  odAxis?: InputMaybe<StringOperators>;
  odCyl?: InputMaybe<StringOperators>;
  odSph?: InputMaybe<StringOperators>;
  osAxis?: InputMaybe<StringOperators>;
  osCyl?: InputMaybe<StringOperators>;
  osSph?: InputMaybe<StringOperators>;
  pd?: InputMaybe<StringOperators>;
  pdLeft?: InputMaybe<StringOperators>;
  pdRight?: InputMaybe<StringOperators>;
  reading?: InputMaybe<StringOperators>;
  rxComments?: InputMaybe<StringOperators>;
  rxType?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type RxItemConfig = Node & {
  __typename?: 'RxItemConfig';
  /** 配置项的加价 */
  adjustPrice: Scalars['Int'];
  id: Scalars['ID'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: Maybe<Array<Scalars['String']>>;
  languageCode: LanguageCode;
  /** 处方配置项展示名 */
  name: Scalars['String'];
  /** 处方匹配数据源默认的选中值, 可被规则引擎执行结果动态覆盖. */
  rxDefaultValue: Scalars['String'];
  /** 当前数据源匹配的输入规则, 标识当前选项在在获取其数据源的时候产生的数据规则校验. */
  rxInputRules?: Maybe<Array<Scalars['JSON']>>;
  /** 处方数据配置项名称 */
  rxItemName: RxItemName;
  /** 用来存放消息当前配置想所有用到的消息体 */
  rxMessages?: Maybe<Scalars['JSON']>;
  /** 当前rxItemName的选择项数据源配置, 处方里面每一项的数据都是下拉框数据源展示模式. */
  rxOptions?: Maybe<Scalars['JSON']>;
  /** 处方类型, 标准处方/老花处方 */
  rxType?: Maybe<RxType>;
  translations: Array<RxItemConfigTranslation>;
};

export type RxItemConfigFilterParameter = {
  adjustPrice?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  rxDefaultValue?: InputMaybe<StringOperators>;
  rxItemName?: InputMaybe<StringOperators>;
  rxType?: InputMaybe<StringOperators>;
};

export type RxItemConfigList = PaginatedList & {
  __typename?: 'RxItemConfigList';
  items: Array<RxItemConfig>;
  totalItems: Scalars['Int'];
};

export type RxItemConfigListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RxItemConfigFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RxItemConfigSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type RxItemConfigSortParameter = {
  adjustPrice?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  rxDefaultValue?: InputMaybe<SortOrder>;
};

export type RxItemConfigTranslation = {
  __typename?: 'RxItemConfigTranslation';
  id: Scalars['ID'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: Maybe<Array<Scalars['String']>>;
  languageCode: LanguageCode;
  /** 处方配置项展示名 */
  name: Scalars['String'];
  /** 用来存放消息当前配置想所有用到的消息体 */
  rxMessages?: Maybe<Scalars['JSON']>;
};

export type RxItemConfigTranslationInput = {
  id?: InputMaybe<Scalars['ID']>;
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: InputMaybe<Array<Scalars['String']>>;
  languageCode: LanguageCode;
  /** 处方配置项展示名 */
  name: Scalars['String'];
  /** 消息的多国语言配置 */
  rxMessages: Scalars['JSON'];
};

/** 处方单项指标数据类型名称标识 */
export enum RxItemName {
  /** 特殊:此特殊的配置规则仅仅用来当保存按钮的时候校验, 不做其他用途 */
  ACTION_SAVE_VERIFICATION = 'ACTION_SAVE_VERIFICATION',
  /** 当用户选择镜片类型为: 渐进(multifocal), 老花(reading)才展示给用户选择 */
  ADD = 'ADD',
  /** 用户年龄, 7-79, 80+ */
  AGE = 'AGE',
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  DIRECT_DEGREES = 'DIRECT_DEGREES',
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  OD_AXIS = 'OD_AXIS',
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  OD_CYL = 'OD_CYL',
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  OD_SPH = 'OD_SPH',
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  OS_AXIS = 'OS_AXIS',
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  OS_CYL = 'OS_CYL',
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  OS_SPH = 'OS_SPH',
  /** 双眼PD, 单位为1 */
  PD = 'PD',
  /** 左眼瞳距, 单眼PD，单位为0.5 */
  PD_LEFT = 'PD_LEFT',
  /** 右眼瞳距, 单眼PD，单位为0.5 */
  PD_RIGHT = 'PD_RIGHT',
  /** 棱镜, 标准处方可选配置 */
  PRISM = 'PRISM',
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  READING = 'READING',
}

export type RxList = PaginatedList & {
  __typename?: 'RxList';
  items: Array<Rx>;
  totalItems: Scalars['Int'];
};

export type RxListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RxFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RxSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type RxSortParameter = {
  add?: InputMaybe<SortOrder>;
  age?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  directDegrees?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  odAxis?: InputMaybe<SortOrder>;
  odCyl?: InputMaybe<SortOrder>;
  odSph?: InputMaybe<SortOrder>;
  osAxis?: InputMaybe<SortOrder>;
  osCyl?: InputMaybe<SortOrder>;
  osSph?: InputMaybe<SortOrder>;
  pd?: InputMaybe<SortOrder>;
  pdLeft?: InputMaybe<SortOrder>;
  pdRight?: InputMaybe<SortOrder>;
  reading?: InputMaybe<SortOrder>;
  rxComments?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** 处方类型, 老花处方/标准处方 */
export enum RxType {
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  DIRECT_DEGREES = 'DIRECT_DEGREES',
  /** 标准处方: 老花处方 */
  READING = 'READING',
  /** 标准处方: 自定义选项 */
  STANDARD = 'STANDARD',
}

export type Sale = Node &
  StockMovement & {
    __typename?: 'Sale';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderItem: OrderItem;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
  };

export type SaveUserProcessConfigStepInput = {
  /** 当前STEP选项下的选中的ID列表 */
  lensOptionInputs: Array<UserProcessConfigStepLensOptionInput>;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
  /** 当前步骤 */
  step: LensStepGroups;
  /** T0进入镜片流程用户上下文, 来源某一个分类等上下文信息 */
  t0LensCtxInput?: InputMaybe<LensProcessT0Inputs>;
  /** T2处方用户输入的数据 */
  t2LensRxInput?: InputMaybe<LensProcessT2Inputs>;
  /** T2用户特殊的ACTION自定义选项, 如加偏心等行为的集合 */
  t2UserActionInputs?: InputMaybe<Array<LensProcessT2UserActionInput>>;
};

export type SearchIndexRankingConfig = Node & {
  __typename?: 'SearchIndexRankingConfig';
  channelId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  rankingRate: Scalars['Float'];
  rankingType: SearchIndexRankingType;
  updatedAt: Scalars['DateTime'];
};

export type SearchIndexRankingConfigFilterParameter = {
  channelId?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  rankingRate?: InputMaybe<NumberOperators>;
  rankingType?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SearchIndexRankingConfigList = PaginatedList & {
  __typename?: 'SearchIndexRankingConfigList';
  items: Array<SearchIndexRankingConfig>;
  totalItems: Scalars['Int'];
};

export type SearchIndexRankingConfigListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SearchIndexRankingConfigFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SearchIndexRankingConfigSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SearchIndexRankingConfigSortParameter = {
  channelId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rankingRate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum SearchIndexRankingType {
  addToCartRanking = 'addToCartRanking',
  checkoutPaidRanking = 'checkoutPaidRanking',
  checkoutWaitingPayRanking = 'checkoutWaitingPayRanking',
  favoriteRanking = 'favoriteRanking',
  lensStepT1Ranking = 'lensStepT1Ranking',
  lensStepT2Ranking = 'lensStepT2Ranking',
  lensStepT3Ranking = 'lensStepT3Ranking',
  lensStepT4Ranking = 'lensStepT4Ranking',
  reviewRanking = 'reviewRanking',
}

export type SearchInput = {
  collectionId?: InputMaybe<Scalars['ID']>;
  collectionSlug?: InputMaybe<Scalars['String']>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  facetValueOperator?: InputMaybe<LogicalOperator>;
  groupByProduct?: InputMaybe<Scalars['Boolean']>;
  inStock?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  take?: InputMaybe<Scalars['Int']>;
  term?: InputMaybe<Scalars['String']>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  collections: Array<CollectionResult>;
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  totalItems: Scalars['Int'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  /** An array of ids of the Channels in which this result appears */
  channelIds: Array<Scalars['ID']>;
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']>;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  facetIds: Array<Scalars['ID']>;
  facetValueIds: Array<Scalars['ID']>;
  inStock: Scalars['Boolean'];
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID'];
  productName: Scalars['String'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  /** A relevance score for the result. Differs between database implementations */
  score: Scalars['Float'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID'];
  preview: Scalars['String'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  variantCreatedAt?: InputMaybe<SortOrder>;
};

export type ServerConfig = {
  __typename?: 'ServerConfig';
  customFieldConfig: CustomFields;
  orderProcess: Array<OrderProcessState>;
  permissions: Array<PermissionDefinition>;
  permittedAssetTypes: Array<Scalars['String']>;
};

export type SetCustomerForDraftOrderResult = EmailAddressConflictError | Order;

export type SetOrderShippingMethodResult =
  | IneligibleShippingMethodError
  | NoActiveOrderError
  | Order
  | OrderModificationError;

export type Setting = Node & {
  __typename?: 'Setting';
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  key: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['JSON'];
};

export type SettingFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  key?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SettingList = PaginatedList & {
  __typename?: 'SettingList';
  items: Array<Setting>;
  totalItems: Scalars['Int'];
};

export type SettingListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SettingFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SettingSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SettingSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SettingTranslationInput = {
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  value: Scalars['JSON'];
};

/** Returned if the Payment settlement fails */
export type SettlePaymentError = ErrorResult & {
  __typename?: 'SettlePaymentError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

export type SettlePaymentResult =
  | OrderStateTransitionError
  | Payment
  | PaymentStateTransitionError
  | SettlePaymentError;

export type SettleRefundInput = {
  id: Scalars['ID'];
  transactionId: Scalars['String'];
};

export type SettleRefundResult = Refund | RefundStateTransitionError;

export type ShippingLine = {
  __typename?: 'ShippingLine';
  discountedPrice: Scalars['Int'];
  discountedPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
  id: Scalars['ID'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  fulfillmentHandlerCode: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<ShippingMethodTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ShippingMethodFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  fulfillmentHandlerCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type ShippingMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ShippingMethodFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ShippingMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  code: Scalars['String'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
};

export type ShippingMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fulfillmentHandlerCode?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShippingMethodTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Int'];
};

export type Sitemap = Node & {
  __typename?: 'Sitemap';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  siteName: Scalars['String'];
  totalLinks: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type SitemapFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  siteName?: InputMaybe<StringOperators>;
  totalLinks?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SitemapList = PaginatedList & {
  __typename?: 'SitemapList';
  items: Array<Sitemap>;
  totalItems: Scalars['Int'];
};

export type SitemapListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SitemapFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SitemapSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export enum SitemapSites {
  de = 'de',
  en = 'en',
  es = 'es',
  uk = 'uk',
}

export type SitemapSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  siteName?: InputMaybe<SortOrder>;
  totalLinks?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type StockAdjustment = Node &
  StockMovement & {
    __typename?: 'StockAdjustment';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
  };

export type StockExtrasQueryInput = {
  orderCode?: InputMaybe<Scalars['String']>;
  orderPlacedEndAt?: InputMaybe<Scalars['DateTime']>;
  orderPlacedStartAt?: InputMaybe<Scalars['DateTime']>;
  orderState?: InputMaybe<Scalars['String']>;
};

export type StockMovement = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime'];
};

export type StockMovementItem =
  | Allocation
  | Cancellation
  | Release
  | Return
  | Sale
  | StockAdjustment;

export type StockMovementList = {
  __typename?: 'StockMovementList';
  items: Array<StockMovementItem>;
  totalItems: Scalars['Int'];
};

export type StockMovementListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<StockMovementType>;
};

export enum StockMovementType {
  ADJUSTMENT = 'ADJUSTMENT',
  ALLOCATION = 'ALLOCATION',
  CANCELLATION = 'CANCELLATION',
  RELEASE = 'RELEASE',
  RETURN = 'RETURN',
  SALE = 'SALE',
}

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
  inList: Scalars['String'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notContains?: InputMaybe<Scalars['String']>;
  notEq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type Subscription = Node & {
  __typename?: 'Subscription';
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  facetValues: Array<SubscriptionFacetValue>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  subscribeFrom: Scalars['String'];
  type: SubscriptionType;
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type SubscriptionFacet = Node & {
  __typename?: 'SubscriptionFacet';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  values: Array<SubscriptionFacetValue>;
};

export type SubscriptionFacetFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SubscriptionFacetList = PaginatedList & {
  __typename?: 'SubscriptionFacetList';
  items: Array<SubscriptionFacet>;
  totalItems: Scalars['Int'];
};

export type SubscriptionFacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SubscriptionFacetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SubscriptionFacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SubscriptionFacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubscriptionFacetValue = Node & {
  __typename?: 'SubscriptionFacetValue';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  facet: Facet;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SubscriptionFacetValueFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SubscriptionFacetValueList = PaginatedList & {
  __typename?: 'SubscriptionFacetValueList';
  items: Array<SubscriptionFacetValue>;
  totalItems: Scalars['Int'];
};

export type SubscriptionFacetValueListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SubscriptionFacetValueFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SubscriptionFacetValueSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SubscriptionFacetValueSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubscriptionFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  subscribeFrom?: InputMaybe<StringOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<StringOperators>;
};

export type SubscriptionList = PaginatedList & {
  __typename?: 'SubscriptionList';
  items: Array<Subscription>;
  totalItems: Scalars['Int'];
};

export type SubscriptionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SubscriptionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SubscriptionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SubscriptionSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  subscribeFrom?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum SubscriptionType {
  email = 'email',
  phone = 'phone',
}

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean'];
};

export type Supplier = Node & {
  __typename?: 'Supplier';
  comment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  supplierName: Scalars['String'];
  supplierNo: Scalars['String'];
  supplierType?: Maybe<Scalars['String']>;
};

export type SupplierFilterParameter = {
  comment?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  supplierName?: InputMaybe<StringOperators>;
  supplierNo?: InputMaybe<StringOperators>;
  supplierType?: InputMaybe<StringOperators>;
};

export type SupplierList = PaginatedList & {
  __typename?: 'SupplierList';
  items: Array<Supplier>;
  totalItems: Scalars['Int'];
};

export type SupplierListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SupplierFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SupplierSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SupplierSortParameter = {
  comment?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  supplierName?: InputMaybe<SortOrder>;
  supplierNo?: InputMaybe<SortOrder>;
  supplierType?: InputMaybe<SortOrder>;
};

export type SupplierStock = Node & {
  __typename?: 'SupplierStock';
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  inTransitsStock: Scalars['Int'];
  link?: Maybe<Scalars['String']>;
  product: Product;
  productId: Scalars['ID'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID'];
  stockArea?: Maybe<Scalars['String']>;
  stockHistory: SupplierStockHistoryList;
  stockOnHand: Scalars['Int'];
  stocksInTransits: Array<SupplierStockInTransit>;
  supplier?: Maybe<Supplier>;
  supplierId?: Maybe<Scalars['ID']>;
  tags?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['DateTime'];
  virtualStock: Scalars['Int'];
};

export type SupplierStockStockHistoryArgs = {
  options?: InputMaybe<SupplierStockHistoryListOptions>;
};

export enum SupplierStockAdjustType {
  /** 未配置 */
  NONE = 'NONE',
  /** 虚拟库存+真实库存 */
  STOCK_BOTH = 'STOCK_BOTH',
  /** 在途中... */
  STOCK_IN_TRANSIT = 'STOCK_IN_TRANSIT',
  /** 真实库存 */
  STOCK_REAL = 'STOCK_REAL',
  /** 在途中转换到入库 */
  STOCK_TRANSIT_TO_STOCK = 'STOCK_TRANSIT_TO_STOCK',
  /** 虚拟库存 */
  STOCK_VIRTUAL = 'STOCK_VIRTUAL',
}

export type SupplierStockFilterParameter = {
  comment?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  inTransitsStock?: InputMaybe<NumberOperators>;
  link?: InputMaybe<StringOperators>;
  productId?: InputMaybe<IdOperators>;
  productVariantId?: InputMaybe<IdOperators>;
  stockArea?: InputMaybe<StringOperators>;
  stockOnHand?: InputMaybe<NumberOperators>;
  supplierId?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  virtualStock?: InputMaybe<NumberOperators>;
};

export type SupplierStockHistory = Node & {
  __typename?: 'SupplierStockHistory';
  administrator?: Maybe<Administrator>;
  administratorId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  stockAdjustType: SupplierStockAdjustType;
  supplierStock: SupplierStock;
  supplierStockId: Scalars['ID'];
};

export type SupplierStockHistoryFilterParameter = {
  administratorId?: InputMaybe<IdOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  stockAdjustType?: InputMaybe<StringOperators>;
  supplierStockId?: InputMaybe<IdOperators>;
};

export type SupplierStockHistoryList = PaginatedList & {
  __typename?: 'SupplierStockHistoryList';
  items: Array<SupplierStockHistory>;
  totalItems: Scalars['Int'];
};

export type SupplierStockHistoryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SupplierStockHistoryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SupplierStockHistorySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SupplierStockHistorySortParameter = {
  administratorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  supplierStockId?: InputMaybe<SortOrder>;
};

export type SupplierStockInTransit = Node & {
  __typename?: 'SupplierStockInTransit';
  channelName?: Maybe<Scalars['String']>;
  channelOrderNo: Scalars['String'];
  id: Scalars['ID'];
  quantity: Scalars['Int'];
  supplierStock: SupplierStock;
  supplierStockId: Scalars['ID'];
};

export type SupplierStockInTransitFilterParameter = {
  channelName?: InputMaybe<StringOperators>;
  channelOrderNo?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  quantity?: InputMaybe<NumberOperators>;
  supplierStockId?: InputMaybe<IdOperators>;
};

export type SupplierStockInTransitList = PaginatedList & {
  __typename?: 'SupplierStockInTransitList';
  items: Array<SupplierStockInTransit>;
  totalItems: Scalars['Int'];
};

export type SupplierStockInTransitListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SupplierStockInTransitFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SupplierStockInTransitSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SupplierStockInTransitSortParameter = {
  channelName?: InputMaybe<SortOrder>;
  channelOrderNo?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  supplierStockId?: InputMaybe<SortOrder>;
};

export type SupplierStockList = PaginatedList & {
  __typename?: 'SupplierStockList';
  items: Array<SupplierStock>;
  totalItems: Scalars['Int'];
};

export type SupplierStockListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SupplierStockFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SupplierStockSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type SupplierStockSortParameter = {
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  inTransitsStock?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  productVariantId?: InputMaybe<SortOrder>;
  stockArea?: InputMaybe<SortOrder>;
  stockOnHand?: InputMaybe<SortOrder>;
  supplierId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  virtualStock?: InputMaybe<SortOrder>;
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type SurchargeInput = {
  description: Scalars['String'];
  price: Scalars['Int'];
  priceIncludesTax: Scalars['Boolean'];
  sku?: InputMaybe<Scalars['String']>;
  taxDescription?: InputMaybe<Scalars['String']>;
  taxRate?: InputMaybe<Scalars['Float']>;
};

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type TagFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<StringOperators>;
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int'];
};

export type TagListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TagFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TagSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type TagSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  category: TaxCategory;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  zone: Zone;
};

export type TaxRateFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<NumberOperators>;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};

export type TaxRateListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TaxRateFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TaxRateSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type TaxRateSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TestEligibleShippingMethodsInput = {
  lines: Array<TestShippingMethodOrderLineInput>;
  shippingAddress: CreateAddressInput;
};

export type TestShippingMethodInput = {
  calculator: ConfigurableOperationInput;
  checker: ConfigurableOperationInput;
  lines: Array<TestShippingMethodOrderLineInput>;
  shippingAddress: CreateAddressInput;
};

export type TestShippingMethodOrderLineInput = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type TestShippingMethodQuote = {
  __typename?: 'TestShippingMethodQuote';
  metadata?: Maybe<Scalars['JSON']>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
};

export type TestShippingMethodResult = {
  __typename?: 'TestShippingMethodResult';
  eligible: Scalars['Boolean'];
  quote?: Maybe<TestShippingMethodQuote>;
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};

export type Ticket = Node & {
  __typename?: 'Ticket';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issue: Scalars['String'];
  languageCode: LanguageCode;
  owner: Customer;
  subject: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TicketCollection = Node & {
  __typename?: 'TicketCollection';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  translations: Array<TicketCollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type TicketCollectionList = PaginatedList & {
  __typename?: 'TicketCollectionList';
  items: Array<TicketCollection>;
  totalItems: Scalars['Int'];
};

export type TicketCollectionTranslation = Node & {
  __typename?: 'TicketCollectionTranslation';
  id: Scalars['ID'];
  /** 当前语言 */
  languageCode: LanguageCode;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  /** 当前选项的名称 */
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type TicketComment = Node & {
  __typename?: 'TicketComment';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  owner: Customer;
  ticket: Ticket;
  updatedAt: Scalars['DateTime'];
};

export type TicketFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  issue?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  subject?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type TicketGroup = Node & {
  __typename?: 'TicketGroup';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  members: Array<Customer>;
  name: Scalars['String'];
  public: Scalars['Boolean'];
  sendMailTo: Array<Customer>;
  updatedAt: Scalars['DateTime'];
};

export type TicketHistory = Node & {
  __typename?: 'TicketHistory';
  action: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  owner: Customer;
  ticket: Ticket;
  updatedAt: Scalars['DateTime'];
};

export type TicketList = PaginatedList & {
  __typename?: 'TicketList';
  items: Array<Ticket>;
  totalItems: Scalars['Int'];
};

export type TicketListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TicketFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TicketSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type TicketNote = Node & {
  __typename?: 'TicketNote';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  note: Scalars['String'];
  owner: Customer;
  ticket: Ticket;
  updatedAt: Scalars['DateTime'];
};

export type TicketPriority = Node & {
  __typename?: 'TicketPriority';
  createdAt: Scalars['DateTime'];
  htmlColor: Scalars['String'];
  id: Scalars['ID'];
  overdueIn: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type TicketSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issue?: InputMaybe<SortOrder>;
  subject?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TicketTag = Node & {
  __typename?: 'TicketTag';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TicketType = Node & {
  __typename?: 'TicketType';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  priorities: Array<TicketPriority>;
  updatedAt: Scalars['DateTime'];
};

export type Topic = Node & {
  __typename?: 'Topic';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  helpfulNo: Scalars['Int'];
  helpfulYes: Scalars['Int'];
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TopicFilterParameter = {
  body?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  helpfulNo?: InputMaybe<NumberOperators>;
  helpfulYes?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type TopicLink = Node & {
  __typename?: 'TopicLink';
  coverImage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  position: Scalars['String'];
  published: Scalars['Boolean'];
  redirectTo: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TopicLinkFilterParameter = {
  coverImage?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<NumberOperators>;
  position?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  redirectTo?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type TopicLinkList = PaginatedList & {
  __typename?: 'TopicLinkList';
  items: Array<TopicLink>;
  totalItems: Scalars['Int'];
};

export type TopicLinkListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TopicLinkFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TopicLinkSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export enum TopicLinkPosition {
  SiteFooter = 'SiteFooter',
  SiteHelperCenter = 'SiteHelperCenter',
  SiteTopNav = 'SiteTopNav',
  SiteVideoGuide = 'SiteVideoGuide',
}

export type TopicLinkSortParameter = {
  coverImage?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  redirectTo?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TopicLinkTranslationInput = {
  coverImage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name: Scalars['String'];
  redirectTo?: InputMaybe<Scalars['String']>;
};

export type TopicList = PaginatedList & {
  __typename?: 'TopicList';
  items: Array<Topic>;
  totalItems: Scalars['Int'];
};

export type TopicListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TopicFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TopicSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type TopicSortParameter = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  helpfulNo?: InputMaybe<SortOrder>;
  helpfulYes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TopicTranslationInput = {
  body: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type TransitionFulfillmentToStateResult =
  | Fulfillment
  | FulfillmentStateTransitionError;

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type TransitionPaymentToStateResult =
  | Payment
  | PaymentStateTransitionError;

/** 轮廓第一个点位置百分比信息 */
export type TryonFaceContourEarPoints = {
  __typename?: 'TryonFaceContourEarPoints';
  /** 左轮廓第一个点(轮廓到左耳朵)占据人脸图片的位置百分比信息 */
  left: TryonFacePoint;
  /** 右轮廓第一个点(轮廓到右耳朵)占据人脸图片的位置百分比信息 */
  right: TryonFacePoint;
};

/** 双眼中心点位置百分比信息 */
export type TryonFaceEyeCenterPoints = {
  __typename?: 'TryonFaceEyeCenterPoints';
  /** 左眼中心点占据人脸图片的位置百分比信息 */
  left: TryonFacePoint;
  /** 右眼中心点占据人脸图片的位置百分比信息 */
  right: TryonFacePoint;
};

/** 缩放之后最终进行人脸识别的真实模特照片大小尺寸 */
export type TryonFaceImageRealSize = {
  __typename?: 'TryonFaceImageRealSize';
  /** 模特照片高 */
  height: Scalars['Int'];
  /** 模特照片宽 */
  width: Scalars['Int'];
};

/** 模特照片人脸模型 */
export type TryonFaceModel = Node & {
  __typename?: 'TryonFaceModel';
  /** 用户信息 */
  customerId?: Maybe<Scalars['ID']>;
  /** 人脸特征识别关键点位置 */
  facePoints: TryonFacePoints;
  /** 人脸框的宽度占据整个真实图片的百分比 */
  faceRectWidthRatio: Scalars['Float'];
  /** 人脸姿势分析结果。返回值包含以下属性，每个属性的值为一个 [-180, 180] 的浮点数，小数点后 6 位有效数字。单位为角度。 */
  headPose: TryonHeadPosePoints;
  id: Scalars['ID'];
  /** 上传的进行人脸识别的图片ID */
  imageId: Scalars['String'];
  /** 缩放之后的真实模特真实图片大小 */
  imageRealSize: TryonFaceImageRealSize;
  /** 模特图片信息 */
  modelAsset?: Maybe<Asset>;
  /** 模特PD, 男性: 66, 女性60, 可根据实际情况调整模特的效果. */
  userPd?: Maybe<Scalars['Int']>;
};

export type TryonFaceModelFilterParameter = {
  customerId?: InputMaybe<IdOperators>;
  faceRectWidthRatio?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  imageId?: InputMaybe<StringOperators>;
  userPd?: InputMaybe<NumberOperators>;
};

export type TryonFaceModelList = PaginatedList & {
  __typename?: 'TryonFaceModelList';
  items: Array<TryonFaceModel>;
  totalItems: Scalars['Int'];
};

export type TryonFaceModelListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TryonFaceModelFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TryonFaceModelSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type TryonFaceModelSortParameter = {
  customerId?: InputMaybe<SortOrder>;
  faceRectWidthRatio?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  userPd?: InputMaybe<SortOrder>;
};

/** 相对左上角为原点, 人脸特征点Point(x,y) */
export type TryonFacePoint = {
  __typename?: 'TryonFacePoint';
  /** 点的x位置占据的百分比 */
  x: Scalars['Float'];
  /** 点的y位置占据的百分比 */
  y: Scalars['Float'];
};

/** 人脸特征识别关键点位置 */
export type TryonFacePoints = {
  __typename?: 'TryonFacePoints';
  /** 轮廓第一个点位置百分比信息 */
  contourEar: TryonFaceContourEarPoints;
  /** 双眼中心点位置百分比信息 */
  eyeCenter: TryonFaceEyeCenterPoints;
};

/** 人脸姿势分析结果。返回值包含以下属性，每个属性的值为一个 [-180, 180] 的浮点数，小数点后 6 位有效数字。单位为角度。 */
export type TryonHeadPosePoints = {
  __typename?: 'TryonHeadPosePoints';
  /** 人头”真实“ 抬头 下正上负 */
  pitch: Scalars['Float'];
  /** 摆头（歪头）人头”真实“ 左偏头为正, 右偏头为负 */
  roll: Scalars['Float'];
  /** 人头”真实“ 摇头, 左正右负 */
  yaw: Scalars['Float'];
};

/** 图片真实尺寸 */
export type TryonImageRealSize = {
  __typename?: 'TryonImageRealSize';
  height: Scalars['Int'];
  width: Scalars['Int'];
};

/** 链接点数据 */
export type TryonJoint = {
  __typename?: 'TryonJoint';
  /** 左链接点 */
  left: TryonPoint;
  /** 右链接点 */
  right: TryonPoint;
};

/** 试戴模型图片百分比位置配置数据 */
export type TryonModelConfig = {
  __typename?: 'TryonModelConfig';
  /** 试戴模型frame配置数据 */
  frame: TryonModelConfigFrame;
  /** 试戴模型temple配置数据 */
  temple: TryonModelConfigTemple;
};

export type TryonModelConfigFrame = {
  __typename?: 'TryonModelConfigFrame';
  /** frame图片连接点位置百分比 */
  frameJoint: TryonJoint;
  framePd: Scalars['Int'];
  /** frame图片真实的尺寸大小 */
  imageRealSize: TryonImageRealSize;
};

export type TryonModelConfigTemple = {
  __typename?: 'TryonModelConfigTemple';
  /** temple图片真实的尺寸大小 */
  imageRealSize: TryonImageRealSize;
  /** temple图片链接点位置百分比 */
  templeJoint: TryonJoint;
};

export type TryonPoint = {
  __typename?: 'TryonPoint';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type UpdateActiveAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1?: InputMaybe<Scalars['String']>;
  streetLine2?: InputMaybe<Scalars['String']>;
};

export type UpdateAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type UpdateAssetInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  focalPoint?: InputMaybe<CoordinateInput>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateBannerInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  key?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<BannerPosition>;
  published?: InputMaybe<Scalars['Boolean']>;
  translations?: InputMaybe<Array<BannerTranslationInput>>;
};

export type UpdateCampaignCouponInput = {
  campaignId?: InputMaybe<Scalars['ID']>;
  couponCode?: InputMaybe<Scalars['String']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  endsAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
};

export type UpdateCampaignInput = {
  campaignType?: InputMaybe<CampaignType>;
  code?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  needClaimCoupon?: InputMaybe<Scalars['Boolean']>;
  periodOfValidity?: InputMaybe<Scalars['Int']>;
  promotionId?: InputMaybe<Scalars['Int']>;
  translations?: InputMaybe<Array<CampaignTranslationInput>>;
};

export type UpdateChannelInput = {
  code?: InputMaybe<Scalars['String']>;
  currencyCode?: InputMaybe<CurrencyCode>;
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultLanguageCode?: InputMaybe<LanguageCode>;
  defaultShippingZoneId?: InputMaybe<Scalars['ID']>;
  defaultTaxZoneId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  pricesIncludeTax?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
};

export type UpdateChannelResult = Channel | LanguageNotAvailableError;

export type UpdateCollectionCustomFieldsInput = {
  campaignId?: InputMaybe<Scalars['ID']>;
  collectionKeys?: InputMaybe<Scalars['String']>;
  collectionType?: InputMaybe<Scalars['String']>;
  invisible?: InputMaybe<Scalars['Boolean']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateCollectionInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<UpdateCollectionCustomFieldsInput>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<Array<ConfigurableOperationInput>>;
  id: Scalars['ID'];
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  parentId?: InputMaybe<Scalars['ID']>;
  translations?: InputMaybe<Array<UpdateCollectionTranslationInput>>;
};

export type UpdateCollectionTranslationInput = {
  customFields?: InputMaybe<UpdateCollectionTranslationInputCustomFields>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type UpdateCollectionTranslationInputCustomFields = {
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
};

export type UpdateCountryCustomFieldsInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
};

export type UpdateCountryInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<UpdateCountryCustomFieldsInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<CountryTranslationInput>>;
};

export type UpdateCustomerCustomFieldsInput = {
  birthday?: InputMaybe<Scalars['String']>;
  faceshape?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerGroupInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerInput = {
  customFields?: InputMaybe<UpdateCustomerCustomFieldsInput>;
  emailAddress?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerNoteInput = {
  note: Scalars['String'];
  noteId: Scalars['ID'];
};

export type UpdateCustomerResult = Customer | EmailAddressConflictError;

export type UpdateEdmEmailResolverJobLoggingInput = {
  id: Scalars['ID'];
  level?: InputMaybe<LogLevel>;
  log?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  resolverMethodId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEdmEmailResolverMethodInput = {
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  handler?: InputMaybe<ConfigurableOperationInput>;
  id: Scalars['ID'];
  languageCode?: InputMaybe<LanguageCode>;
  name?: InputMaybe<Scalars['String']>;
  schedule?: InputMaybe<EdmScheduleInput>;
};

export type UpdateEdmEmailTemplateInput = {
  edmEmailTemplateTypeId?: InputMaybe<Scalars['ID']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  generatorType?: InputMaybe<HandlebarsGeneratorType>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<EdmEmailTemplateTranslationInput>>;
};

export type UpdateEdmEmailTemplateTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateEdmGroupEmailChunkInput = {
  addressChunk?: InputMaybe<Scalars['JSON']>;
  edmGroupId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
};

export type UpdateEdmGroupInput = {
  creatorId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  languageCode?: InputMaybe<LanguageCode>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateEdmTaskPlanInput = {
  description?: InputMaybe<Scalars['String']>;
  edmEmailTemplateId?: InputMaybe<Scalars['ID']>;
  edmGroupIds?: InputMaybe<Array<Scalars['ID']>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  executions?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  languageCode?: InputMaybe<LanguageCode>;
  name?: InputMaybe<Scalars['String']>;
  schedule?: InputMaybe<EdmScheduleInput>;
  state?: InputMaybe<EdmTaskPlanState>;
};

export type UpdateEdmTaskPlanJobLoggingInput = {
  edmTaskPlanId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  level?: InputMaybe<LogLevel>;
  log?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFacetCustomFieldsInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  invisible?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateFacetInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<UpdateFacetCustomFieldsInput>;
  id: Scalars['ID'];
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  translations?: InputMaybe<Array<FacetTranslationInput>>;
};

export type UpdateFacetValueCustomFieldsInput = {
  campaignConfigData?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
};

export type UpdateFacetValueInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<UpdateFacetValueCustomFieldsInput>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<FacetValueTranslationInput>>;
};

export type UpdateGlobalSettingsInput = {
  availableLanguages?: InputMaybe<Array<LanguageCode>>;
  customFields?: InputMaybe<Scalars['JSON']>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateGlobalSettingsResult =
  | ChannelDefaultLanguageError
  | GlobalSettings;

export type UpdateHelpCenterCollectionInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  parentId?: InputMaybe<Scalars['ID']>;
  published?: InputMaybe<Scalars['Boolean']>;
  showOnTop?: InputMaybe<Scalars['Boolean']>;
  translations?: InputMaybe<Array<HelpCenterCollectionTranslationInput>>;
};

export type UpdateHelpCenterHotSearchInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  keyword?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<LanguageCode>;
  published?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateHelpCenterInput = {
  collectionIds?: InputMaybe<Array<Scalars['ID']>>;
  displayOrder?: InputMaybe<Scalars['Int']>;
  helpfulNo?: InputMaybe<Scalars['Int']>;
  helpfulYes?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  published?: InputMaybe<Scalars['Boolean']>;
  showOnTop?: InputMaybe<Scalars['Boolean']>;
  tagIds?: InputMaybe<Array<Scalars['ID']>>;
  translations?: InputMaybe<Array<HelpCenterTranslationInput>>;
};

export type UpdateHelpCenterTagInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  published?: InputMaybe<Scalars['Boolean']>;
  translations?: InputMaybe<Array<HelpCenterTagTranslationInput>>;
};

export type UpdateLensProcessConfigItemInput = {
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayOrder?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  lensProcessOptionId?: InputMaybe<Scalars['ID']>;
  lensProcessTemplateId?: InputMaybe<Scalars['ID']>;
  overridePrice?: InputMaybe<Scalars['Int']>;
  overrideRecommendRuleConditions?: InputMaybe<Scalars['JSON']>;
  overrideRuleConditions?: InputMaybe<Scalars['JSON']>;
};

export type UpdateLensProcessOptionInput = {
  adjustPrice?: InputMaybe<Scalars['Int']>;
  /**
   * 针对购物车升级, 如果指定了依赖keys
   * 1. 先验证当前的升级包规则满足条件之后
   * 2. 我们从这个里面找到他T3的可能能够选择流程, 计算T3流程的价格.(从中选择最便宜并且价格比当前价格更高的一个选项)
   */
  dependentFromT3Key?: InputMaybe<LensProcessOptionKeys>;
  displayOrder?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  key?: InputMaybe<LensProcessOptionKeys>;
  parentId?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['JSON']>;
  recommendRuleConditions?: InputMaybe<Scalars['JSON']>;
  /** 可选值, 针对T4(变种条件可能有1000个), 考虑性能, 可以设置他依赖的T1,T3作为条件, 在查询T4的时候数据提取过滤掉不需要的item */
  requiredPreSelectedKeys?: InputMaybe<Array<LensProcessOptionKeys>>;
  ruleConditions?: InputMaybe<Scalars['JSON']>;
  stepGroupName?: InputMaybe<LensStepGroups>;
  translations?: InputMaybe<Array<LensProcessOptionTranslationInput>>;
  uiComponents?: InputMaybe<LensOptionUiComponentsInput>;
  upgradeToKeys?: InputMaybe<Array<LensProcessOptionKeys>>;
};

export type UpdateLensProcessTemplateInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateModuleMenuAclInput = {
  aclTagName: Scalars['String'];
  aclTagRemark: Scalars['String'];
  id: Scalars['ID'];
  moduleMenuId?: InputMaybe<Scalars['Int']>;
  permissions: Array<Permission>;
};

export type UpdateModuleMenuInput = {
  description?: InputMaybe<Scalars['String']>;
  iconImg?: InputMaybe<Scalars['String']>;
  iconImgActive?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  invisible?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<MenuLinkTemplateInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathMatch?: InputMaybe<Scalars['String']>;
  permissions: Array<Permission>;
  routeBaseName?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  target?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<ModuleTemplateInput>;
};

export type UpdateModuleMenuSortsInput = {
  sorts: Array<ModuleMenuSortInput>;
};

export type UpdateModuleNormalInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  pathMatch?: InputMaybe<Scalars['String']>;
  permissions: Array<Permission>;
  routeBaseName?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<ModuleTemplateInput>;
};

export type UpdateOrderAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1?: InputMaybe<Scalars['String']>;
  streetLine2?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderCustomFieldsInput = {
  languageCode?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<UpdateOrderCustomFieldsInput>;
  id: Scalars['ID'];
};

export type UpdateOrderItemsResult =
  | InsufficientStockError
  | NegativeQuantityError
  | Order
  | OrderLimitError
  | OrderModificationError;

export type UpdateOrderNoteInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  noteId: Scalars['ID'];
};

export type UpdatePaymentMethodCustomFieldsInput = {
  paypalClientConfig?: InputMaybe<Scalars['String']>;
};

export type UpdatePaymentMethodInput = {
  checker?: InputMaybe<ConfigurableOperationInput>;
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<UpdatePaymentMethodCustomFieldsInput>;
  description?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  handler?: InputMaybe<ConfigurableOperationInput>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateProductCustomFieldsInput = {
  bridge?: InputMaybe<Scalars['Int']>;
  dimensionModelConfig?: InputMaybe<Scalars['String']>;
  isFinishProduct?: InputMaybe<Scalars['Boolean']>;
  lensDiagonalSize?: InputMaybe<Scalars['Int']>;
  lensHeight?: InputMaybe<Scalars['Int']>;
  lensProcessTemplateId?: InputMaybe<Scalars['ID']>;
  lensWidth?: InputMaybe<Scalars['Int']>;
  minLensDiam?: InputMaybe<Scalars['Int']>;
  productTypeCode?: InputMaybe<Scalars['String']>;
  reviewCount?: InputMaybe<Scalars['Int']>;
  reviewRating?: InputMaybe<Scalars['Float']>;
  templeLength?: InputMaybe<Scalars['Int']>;
  totalWidth?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type UpdateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<UpdateProductCustomFieldsInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<ProductTranslationInput>>;
};

export type UpdateProductOptionGroupInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};

export type UpdateProductOptionInput = {
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};

export type UpdateProductQaInput = {
  id: Scalars['ID'];
  productId?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['String']>;
  reply?: InputMaybe<Scalars['String']>;
  replyCreatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateProductReviewInput = {
  adminCreatedCustomerName?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  customerNameIsPublic?: InputMaybe<Scalars['Boolean']>;
  downVotes?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  languageCode?: InputMaybe<LanguageCode>;
  orderLineId?: InputMaybe<Scalars['ID']>;
  productVariantId?: InputMaybe<Scalars['ID']>;
  rating?: InputMaybe<Scalars['Float']>;
  reply?: InputMaybe<Scalars['String']>;
  showAsTestimonial?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  suggestions?: InputMaybe<Scalars['String']>;
  systemAutoCreated?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  upVotes?: InputMaybe<Scalars['Int']>;
};

export type UpdateProductVariantCustomFieldsInput = {
  costPrice?: InputMaybe<Scalars['Int']>;
  dimensionFrameAssetId?: InputMaybe<Scalars['ID']>;
  dimensionTempleAssetId?: InputMaybe<Scalars['ID']>;
  internalSku?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  tryonFrameAssetId?: InputMaybe<Scalars['ID']>;
  tryonFrameModelConfig?: InputMaybe<Scalars['String']>;
  tryonTempleAssetId?: InputMaybe<Scalars['ID']>;
  visualFrameAssetId?: InputMaybe<Scalars['ID']>;
};

export type UpdateProductVariantInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']>>;
  customFields?: InputMaybe<UpdateProductVariantCustomFieldsInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  outOfStockThreshold?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  stockOnHand?: InputMaybe<Scalars['Int']>;
  taxCategoryId?: InputMaybe<Scalars['ID']>;
  trackInventory?: InputMaybe<GlobalFlag>;
  translations?: InputMaybe<Array<ProductVariantTranslationInput>>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']>;
};

export type UpdatePromotionInput = {
  actions?: InputMaybe<Array<ConfigurableOperationInput>>;
  conditions?: InputMaybe<Array<ConfigurableOperationInput>>;
  couponCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  endsAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  perCustomerUsageLimit?: InputMaybe<Scalars['Int']>;
  startsAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePromotionResult = MissingConditionsError | Promotion;

export type UpdateRiskInput = {
  address?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  customerId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  riskScore?: InputMaybe<Scalars['Int']>;
};

export type UpdateRoleInput = {
  channelIds?: InputMaybe<Array<Scalars['ID']>>;
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  permissions?: InputMaybe<Array<Permission>>;
};

export type UpdateRxInput = {
  add?: InputMaybe<Scalars['String']>;
  age?: InputMaybe<Scalars['String']>;
  customerId?: InputMaybe<Scalars['Int']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 是否标记为默认处方 */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  normalizedRx?: InputMaybe<NormalizedRxInput>;
  odAxis?: InputMaybe<Scalars['String']>;
  odCyl?: InputMaybe<Scalars['String']>;
  odSph?: InputMaybe<Scalars['String']>;
  osAxis?: InputMaybe<Scalars['String']>;
  osCyl?: InputMaybe<Scalars['String']>;
  osSph?: InputMaybe<Scalars['String']>;
  pd?: InputMaybe<Scalars['String']>;
  pdLeft?: InputMaybe<Scalars['String']>;
  pdRight?: InputMaybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: InputMaybe<PrismItemInput>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  reading?: InputMaybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: InputMaybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};

export type UpdateRxItemConfigInput = {
  adjustPrice?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  rxDefaultValue?: InputMaybe<Scalars['String']>;
  rxInputRules?: InputMaybe<Array<Scalars['JSON']>>;
  rxItemName?: InputMaybe<RxItemName>;
  rxOptions?: InputMaybe<Scalars['JSON']>;
  rxType?: InputMaybe<RxType>;
  translations: Array<RxItemConfigTranslationInput>;
};

export type UpdateSearchIndexRankingConfigInput = {
  channelId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  languageCode?: InputMaybe<LanguageCode>;
  rankingRate?: InputMaybe<Scalars['Float']>;
  rankingType?: InputMaybe<SearchIndexRankingType>;
};

export type UpdateSettingInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  key?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Array<SettingTranslationInput>>;
};

export type UpdateShippingMethodInput = {
  calculator?: InputMaybe<ConfigurableOperationInput>;
  checker?: InputMaybe<ConfigurableOperationInput>;
  code?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  fulfillmentHandler?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  translations: Array<ShippingMethodTranslationInput>;
};

export type UpdateSubscriptionFacetInput = {
  code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSubscriptionFacetValueInput = {
  code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSubscriptionInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  id: Scalars['ID'];
  languageCode?: InputMaybe<LanguageCode>;
  subscribeFrom?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SubscriptionType>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateSupplierInput = {
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  supplierName?: InputMaybe<Scalars['String']>;
  supplierNo?: InputMaybe<Scalars['String']>;
  supplierType?: InputMaybe<Scalars['String']>;
};

export type UpdateSupplierStockHistoryInput = {
  data?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  stockAdjustType?: InputMaybe<SupplierStockAdjustType>;
  supplierStockId?: InputMaybe<Scalars['ID']>;
  uniqueKey?: InputMaybe<Scalars['String']>;
};

export type UpdateSupplierStockInTransitInput = {
  channelName?: InputMaybe<Scalars['String']>;
  channelOrderNo?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  quantity?: InputMaybe<Scalars['Int']>;
  supplierStockId?: InputMaybe<Scalars['ID']>;
};

export type UpdateSupplierStockInput = {
  comment?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  inTransitsStock?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  productVariantId?: InputMaybe<Scalars['String']>;
  stockArea?: InputMaybe<Scalars['String']>;
  stockOnHand?: InputMaybe<Scalars['Int']>;
  supplierId?: InputMaybe<Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  virtualStock?: InputMaybe<Scalars['Int']>;
};

export type UpdateTagInput = {
  id: Scalars['ID'];
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateTaxCategoryInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isDefault?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTaxRateInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  customerGroupId?: InputMaybe<Scalars['ID']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
  zoneId?: InputMaybe<Scalars['ID']>;
};

export type UpdateTopicInput = {
  helpfulNo?: InputMaybe<Scalars['Int']>;
  helpfulYes?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  published?: InputMaybe<Scalars['Boolean']>;
  translations?: InputMaybe<Array<TopicTranslationInput>>;
};

export type UpdateTopicLinkInput = {
  displayOrder?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  parentId?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  translations?: InputMaybe<Array<TopicLinkTranslationInput>>;
};

export type UpdateTryonFaceModelInput = {
  id: Scalars['ID'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  userPd?: InputMaybe<Scalars['Int']>;
};

export type UpdateZoneInput = {
  customFields?: InputMaybe<Scalars['JSON']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type User = Node & {
  __typename?: 'User';
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type UserActionOptionItemsVariablesData = {
  __typename?: 'UserActionOptionItemsVariablesData';
  /** 搜索选项facet的特征列表.可根据产品查询出来, 动态匹配. */
  facets?: Maybe<Array<UserActionOptionItemsVariablesInputFacetData>>;
  /** 搜索选项minLensDiam必须<=如下值+PD */
  maxMinLensDiam?: Maybe<Scalars['Int']>;
};

export type UserActionOptionItemsVariablesInput = {
  /** 搜索选项facet的特征列表.可根据产品查询出来, 动态匹配. */
  facets?: InputMaybe<Array<UserActionOptionItemsVariablesInputFacetInput>>;
  /** 搜索选项minLensDiam必须<=如下值+PD */
  maxMinLensDiam?: InputMaybe<Scalars['Int']>;
};

export type UserActionOptionItemsVariablesInputFacetData = {
  __typename?: 'UserActionOptionItemsVariablesInputFacetData';
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type UserActionOptionItemsVariablesInputFacetInput = {
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type UserProcessConfigStepLensOptionInput = {
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: InputMaybe<LensProcessOptionKeys>;
};

export type UserProcessConfigStepLensOptionItem = {
  __typename?: 'UserProcessConfigStepLensOptionItem';
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: Maybe<LensProcessOptionKeys>;
};

export type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  members: Array<Country>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
