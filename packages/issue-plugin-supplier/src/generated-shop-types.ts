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

export type ActiveOrderResult = NoActiveOrderError | Order;

export type AddPaymentToOrderResult =
  | IneligiblePaymentMethodError
  | NoActiveOrderError
  | Order
  | OrderPaymentStateError
  | OrderStateTransitionError
  | PaymentDeclinedError
  | PaymentFailedError;

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

/** 处方输入验证的规则返回params的类型定义. */
export type AllRuleProcessOptionEventParamsType = {
  __typename?: 'AllRuleProcessOptionEventParamsType';
  /** 当前根据流程选项条件动态产出的价格. */
  adjustPrice?: Maybe<Scalars['Int']>;
  /** 当前选项是否禁用, 为不可用状态. 需要将选项值强制设置为null */
  disabled?: Maybe<Scalars['Boolean']>;
};

/** 流程选项相关T1,T2,T3,T4事件类型名定义 */
export enum AllRuleProcessOptionEventTypes {
  /** 用来标识当前流程选项, 是否启用, 默认为禁用, 当且仅当为可用的时候才执行. */
  PROCESS_OPTION_ITEM_EVENT_TYPE_IS_AVAILABLE = 'PROCESS_OPTION_ITEM_EVENT_TYPE_IS_AVAILABLE',
  /** 用来标识当前流程选项, 是否启用, 如果启动才进行其他规则校验, 如果未启用, 则忽略其他规则校验. */
  PROCESS_OPTION_ITEM_EVENT_TYPE_IS_DISABLED = 'PROCESS_OPTION_ITEM_EVENT_TYPE_IS_DISABLED',
  /** 用来标识当前流程选项, 是否显示为推荐, 默认为false. */
  PROCESS_OPTION_ITEM_EVENT_TYPE_IS_RECOMMEND = 'PROCESS_OPTION_ITEM_EVENT_TYPE_IS_RECOMMEND',
}

/** 处方输入验证的规则返回params的类型定义. */
export type AllRuleRxEventParamsType = {
  __typename?: 'AllRuleRxEventParamsType';
  /** 当前选项是否禁用, 为不可用状态. 需要将选项值强制设置为null */
  disabled?: Maybe<Scalars['Boolean']>;
  /** 对应错误信息的i18n多国语言消息KEY. */
  messageKey?: Maybe<Scalars['String']>;
  /** 当前产生了验证错误信息, warn, error, info, label */
  messageType?: Maybe<RxItemMessageType>;
  /** 当前业务规则命中的默认值 */
  rxOptionDefaultValue?: Maybe<Scalars['String']>;
  /** 当前业务命中默认选项范围的key */
  rxOptionKey?: Maybe<LensProcessOptionKeys>;
  /** 某一些消息结果里面可能包含了一些数据内容, 比如需要跳转到专题页的页面地址等. */
  rxValidateAction?: Maybe<RxRuleDefineValidateAction>;
};

/** 处方规则相关的事件类型名定义 */
export enum AllRuleRxEventTypes {
  /** 当前验证规则标识用户当前需要popup弹窗提示让他选择特定的action行为执行. 比如跳转到专题页, 比如当前切换当前的T1,T2流程 */
  RX_OPTION_ITEM_EVENT_TYPE_FOR_USER_ACTION = 'RX_OPTION_ITEM_EVENT_TYPE_FOR_USER_ACTION',
  /** 用来标识所有的处方选项, 启用之后, 用户输入的数据不合法事件. */
  RX_OPTION_ITEM_EVENT_TYPE_INPUT_INVALID = 'RX_OPTION_ITEM_EVENT_TYPE_INPUT_INVALID',
  /** 用来标识处方选项指定的rxType下是此选项在其他输入条件下是否是可选输入, 还是必须要有值得, 不能为空(''|null|undefined) */
  RX_OPTION_ITEM_EVENT_TYPE_INPUT_REQUIRED = 'RX_OPTION_ITEM_EVENT_TYPE_INPUT_REQUIRED',
  /** 用来标识所有的处方选项, 是否启用, 如果启动才进行其他规则校验, 如果未启用, 则忽略其他规则校验. */
  RX_OPTION_ITEM_EVENT_TYPE_IS_DISABLED = 'RX_OPTION_ITEM_EVENT_TYPE_IS_DISABLED',
  /** 规则匹配动态数据源列表对应的事件类型. */
  RX_OPTION_ITEM_EVENT_TYPE_ITEMS_RANGE = 'RX_OPTION_ITEM_EVENT_TYPE_ITEMS_RANGE',
}

/** Returned when attempting to set the Customer for an Order when already logged in. */
export type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String'];
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
  type: AssetType;
  updatedAt: Scalars['DateTime'];
  width: Scalars['Int'];
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export enum AssetType {
  BINARY = 'BINARY',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

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

export type AuthenticationResult =
  | CurrentUser
  | InvalidCredentialsError
  | NotVerifiedError;

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

export type CampaignApplyForResultData = {
  __typename?: 'CampaignApplyForResultData';
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

export type CampaignCouponList = PaginatedList & {
  __typename?: 'CampaignCouponList';
  items: Array<CampaignCoupon>;
  totalItems: Scalars['Int'];
};

export type CampaignList = PaginatedList & {
  __typename?: 'CampaignList';
  items: Array<Campaign>;
  totalItems: Scalars['Int'];
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

export type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  /** 当前分类是否配置了campaign活动 */
  campaign?: Maybe<Campaign>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CollectionCustomFields>;
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID'];
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
  collectionType?: Maybe<Scalars['String']>;
  invisible?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};

export type CollectionFilterParameter = {
  collectionType?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  invisible?: InputMaybe<BooleanOperators>;
  isFeatured?: InputMaybe<BooleanOperators>;
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

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export type CountryTranslation = {
  __typename?: 'CountryTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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

export type CreateCustomerCustomFieldsInput = {
  birthday?: InputMaybe<Scalars['String']>;
  faceshape?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerInput = {
  customFields?: InputMaybe<CreateCustomerCustomFieldsInput>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateInvitedCustomerProductReviewInput = {
  content: Scalars['String'];
  crop: Scalars['String'];
  customerNameIsPublic: Scalars['Boolean'];
  encryptedOrderId: Scalars['String'];
  file?: InputMaybe<Array<Scalars['Upload']>>;
  orderLineId: Scalars['ID'];
  productId: Scalars['ID'];
  rating: Scalars['Float'];
  suggestions?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  variantId: Scalars['ID'];
};

export type CreateInvoiceInput = {
  orderCode: Scalars['String'];
};

export type CreateProductQaInput = {
  productId: Scalars['ID'];
  question: Scalars['String'];
};

export type CreateProductReviewInput = {
  content: Scalars['String'];
  crop: Scalars['String'];
  customerNameIsPublic: Scalars['Boolean'];
  file?: InputMaybe<Array<Scalars['Upload']>>;
  orderLineId: Scalars['ID'];
  productId: Scalars['ID'];
  rating: Scalars['Float'];
  suggestions?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  variantId: Scalars['ID'];
};

export type CreateRxInput = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  /** 是否标记为默认处方 */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** 处方单名称 */
  name?: InputMaybe<Scalars['String']>;
  /** 按照处方转换规则转换之后的处方内容 */
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

export type CreateTicketInput = {
  issue: Scalars['String'];
  subject: Scalars['String'];
};

export type CreateTryonFaceModelInput = {
  crop: Array<Scalars['String']>;
  file: Array<Scalars['Upload']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  userPd?: InputMaybe<Scalars['Int']>;
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

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CustomerCustomFields>;
  emailAddress: Scalars['String'];
  favorites: FavoriteList;
  firstName: Scalars['String'];
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

export type EmailAddInput = {
  email: Scalars['String'];
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export enum ErrorCode {
  ALREADY_LOGGED_IN_ERROR = 'ALREADY_LOGGED_IN_ERROR',
  COUPON_CODE_EXPIRED_ERROR = 'COUPON_CODE_EXPIRED_ERROR',
  COUPON_CODE_INVALID_ERROR = 'COUPON_CODE_INVALID_ERROR',
  COUPON_CODE_LIMIT_ERROR = 'COUPON_CODE_LIMIT_ERROR',
  EMAIL_ADDRESS_CONFLICT_ERROR = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  INELIGIBLE_PAYMENT_METHOD_ERROR = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  INELIGIBLE_SHIPPING_METHOD_ERROR = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  INSUFFICIENT_STOCK_ERROR = 'INSUFFICIENT_STOCK_ERROR',
  INVALID_CREDENTIALS_ERROR = 'INVALID_CREDENTIALS_ERROR',
  MISSING_PASSWORD_ERROR = 'MISSING_PASSWORD_ERROR',
  NATIVE_AUTH_STRATEGY_ERROR = 'NATIVE_AUTH_STRATEGY_ERROR',
  NEGATIVE_QUANTITY_ERROR = 'NEGATIVE_QUANTITY_ERROR',
  NOT_VERIFIED_ERROR = 'NOT_VERIFIED_ERROR',
  NO_ACTIVE_ORDER_ERROR = 'NO_ACTIVE_ORDER_ERROR',
  ORDER_LIMIT_ERROR = 'ORDER_LIMIT_ERROR',
  ORDER_MODIFICATION_ERROR = 'ORDER_MODIFICATION_ERROR',
  ORDER_PAYMENT_STATE_ERROR = 'ORDER_PAYMENT_STATE_ERROR',
  ORDER_STATE_TRANSITION_ERROR = 'ORDER_STATE_TRANSITION_ERROR',
  PASSWORD_ALREADY_SET_ERROR = 'PASSWORD_ALREADY_SET_ERROR',
  PASSWORD_RESET_TOKEN_EXPIRED_ERROR = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  PASSWORD_RESET_TOKEN_INVALID_ERROR = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PASSWORD_VALIDATION_ERROR = 'PASSWORD_VALIDATION_ERROR',
  PAYMENT_DECLINED_ERROR = 'PAYMENT_DECLINED_ERROR',
  PAYMENT_FAILED_ERROR = 'PAYMENT_FAILED_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  VERIFICATION_TOKEN_EXPIRED_ERROR = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  VERIFICATION_TOKEN_INVALID_ERROR = 'VERIFICATION_TOKEN_INVALID_ERROR',
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
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
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

export type FacetValueCampaignConfigData = {
  __typename?: 'FacetValueCampaignConfigData';
  /** 直降活动结束时间 */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** 直降专题, 镜架实际打折的比例 20%, 填字符串20 */
  frameDiscountPercent: Scalars['String'];
  /** 直降, 允许设置当前直降后的售价, 只针对镜架, 如果配置了此项目, 则覆盖会自动计算frameDiscountPercent, 此处$5填写为500 */
  frameFixedSaleAmount?: Maybe<Scalars['String']>;
  /** 直降专题, 镜架折扣显示标签 */
  framePromotionText: Scalars['String'];
  /** 直降专题, 镜架对应镜片实际打折的比例 20%, 填字符串填20 */
  lensDiscountPercent: Scalars['String'];
  /** 直降专题, 镜架对应的镜片折扣显示标签 */
  lensPromotionText: Scalars['String'];
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

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  method: Scalars['String'];
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

export enum GlobalFlag {
  FALSE = 'FALSE',
  INHERIT = 'INHERIT',
  TRUE = 'TRUE',
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

export type HelpSummarize = {
  __typename?: 'HelpSummarize';
  topArticles: Array<HelpCenter>;
  topCollections: Array<HelpCenterCollection>;
  topHotSearchWords: Array<HelpCenterHotSearch>;
};

export type HelpSummarizeOptions = {
  topArticleCount?: InputMaybe<Scalars['Int']>;
  topCollectionCount?: InputMaybe<Scalars['Int']>;
  topHotSearchWordCount?: InputMaybe<Scalars['Int']>;
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  createdAt: Scalars['DateTime'];
  data: Scalars['JSON'];
  id: Scalars['ID'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
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

/**
 * Returned if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible. */
export type IneligiblePaymentMethodError = ErrorResult & {
  __typename?: 'IneligiblePaymentMethodError';
  eligibilityCheckerMessage?: Maybe<Scalars['String']>;
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  order: Order;
  quantityAvailable: Scalars['Int'];
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

export type InvoiceConfigList = PaginatedList & {
  __typename?: 'InvoiceConfigList';
  items: Array<InvoiceConfig>;
  totalItems: Scalars['Int'];
};

export type InvoiceList = PaginatedList & {
  __typename?: 'InvoiceList';
  items: Array<Invoice>;
  totalItems: Scalars['Int'];
};

export enum InvoiceType {
  Invoice = 'Invoice',
  Order = 'Order',
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

export type LensOptionUiComponents = {
  __typename?: 'LensOptionUiComponents';
  /** 当前选项的孩子节点展示的UI控件,如color_box */
  childComponentType?: Maybe<LensOptionUiComponentsType>;
  /** UI显示空间类型 */
  uiType?: Maybe<LensOptionUiComponentsType>;
  /** UI显示空间类型对应的显示值 */
  uiValue?: Maybe<Scalars['String']>;
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

export type LensProcessStepQueryResult = {
  __typename?: 'LensProcessStepQueryResult';
  /** Step1下面的流程选项 */
  T1?: Maybe<Array<LensProcessOption>>;
  /** Step2下面的流程选项 */
  T2?: Maybe<Array<LensProcessOption>>;
  /** Step3下面的流程选项 */
  T3?: Maybe<Array<LensProcessOption>>;
  /** Step4下面的流程选项 */
  T4?: Maybe<Array<LensProcessOption>>;
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

export type LensProcessTemplateList = PaginatedList & {
  __typename?: 'LensProcessTemplateList';
  items: Array<LensProcessTemplate>;
  totalItems: Scalars['Int'];
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

/** 查询并验证处方配置项输入参数 */
export type ListAndValidateRxConfigsInput = {
  /** T0镜架的商品基础信息 */
  T0: LensProcessT0Inputs;
  /** T1用途大类/用途子类途, 用户的选择数据输入 */
  T1?: InputMaybe<LensProcessT1Inputs>;
  /** T2填处方, 用户的输入数据输入 */
  T2?: InputMaybe<LensProcessT2Inputs>;
  /** 当前接口调用模式, 可选, 用来区别调用是点击了save 按钮还是其他 */
  eventType?: InputMaybe<ListAndValidateRxEventType>;
};

export enum ListAndValidateRxEventType {
  /** 当前处方选项onChange */
  ON_RX_ITEM_CHANGE = 'ON_RX_ITEM_CHANGE',
  /** 保存整个处方onSave */
  ON_RX_SAVE_VERIFICATION = 'ON_RX_SAVE_VERIFICATION',
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

export enum LogicalOperator {
  AND = 'AND',
  OR = 'OR',
}

/** Returned when attempting to register or verify a customer account without a password, when one is required. */
export type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available. */
  addItemToOrder: UpdateOrderItemsResult;
  /** Add a Payment to the Order */
  addPaymentToOrder: AddPaymentToOrderResult;
  addSubscriptionEmail: Subscription;
  addSubscriptionPhone: Subscription;
  /** Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the active Order */
  applyCouponCode: ApplyCouponCodeResult;
  /** 申请特定活动的优惠码, 返回申请的优惠券信息 */
  applyForCouponCode?: Maybe<CampaignCoupon>;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  createInvitedCustomerProductReview?: Maybe<ProductReview>;
  /** Create a new invoice */
  createInvoice?: Maybe<Invoice>;
  /** Create a new ProductQa */
  createProductQa: ProductQa;
  createProductReview?: Maybe<ProductReview>;
  createTicket?: Maybe<Ticket>;
  /** Create a new user tryon face model */
  createTryonFaceModels: Array<TryonFaceModel>;
  /** Delete an existing Address */
  deleteCustomerAddress: Success;
  /** Delete own rx item */
  deleteRx: DeletionResponse;
  /** Delete an existing user tryon face model */
  deleteTryonFaceModel: DeletionResponse;
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  /** End the current authenticated session */
  logout: Success;
  /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  /**
   * Register a Customer account with the given credentials. There are three possible registration flows:
   *
   * _If `authOptions.requireVerification` is set to `true`:_
   *
   * 1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
   *    verified and authenticated in one step.
   * 2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
   *    verified and authenticated in one step.
   *
   * _If `authOptions.requireVerification` is set to `false`:_
   *
   * 3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
   */
  registerCustomerAccount: RegisterCustomerAccountResult;
  /** Remove all OrderLine from the Order */
  removeAllOrderLines: RemoveOrderItemsResult;
  /** Removes the given coupon code from the active Order */
  removeCouponCode?: Maybe<Order>;
  /** Remove an OrderLine from the Order */
  removeOrderLine: RemoveOrderItemsResult;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  /**
   * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
   * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
   * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
   * that verification token to the Customer, which is then used to verify the change of email address.
   */
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  /** Resets a Customer's password based on the provided token */
  resetPassword: ResetPasswordResult;
  /** Create a new Rx */
  saveRx: Rx;
  /** 保存当前STEP的数据, 并返回激活订单的详细信息 */
  saveUserProcessConfigStep: UpdateOrderItemsResult;
  /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
  setCustomerForOrder: SetCustomerForOrderResult;
  /** Sets the billing address for this order */
  setOrderBillingAddress: ActiveOrderResult;
  /** Allows any custom fields to be set for the active order */
  setOrderCustomFields: ActiveOrderResult;
  /** Sets the shipping address for this order */
  setOrderShippingAddress: ActiveOrderResult;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query */
  setOrderShippingMethod: SetOrderShippingMethodResult;
  settlePayment: Scalars['Boolean'];
  toggleFavorite?: Maybe<ToggleFavoriteResult>;
  /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  updateCrossSellingProducts: Scalars['Boolean'];
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /**
   * Confirm the update of the emailAddress with the provided token, which has been generated by the
   * `requestUpdateCustomerEmailAddress` mutation.
   */
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  /** Update the password of the active Customer */
  updateCustomerPassword: UpdateCustomerPasswordResult;
  /** Create a new help center helpful yes/no */
  updateHelpCenterHelpful: HelpCenter;
  /** Create a new product qa helpful yes/no */
  updateProductQaHelpful: ProductQa;
  updateProductReview?: Maybe<ProductReview>;
  /** Update an existing Rx */
  updateRx: Rx;
  /** Create a new Topic helpful yes/no */
  updateTopicHelpful: Topic;
  updateUpSellingProducts: Scalars['Boolean'];
  /**
   * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.
   *
   * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
   * provided here.
   */
  verifyCustomerAccount: VerifyCustomerAccountResult;
  voteOnReview: ProductReview;
};

export type MutationAddItemToOrderArgs = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};

export type MutationAddSubscriptionEmailArgs = {
  input: EmailAddInput;
};

export type MutationAddSubscriptionPhoneArgs = {
  input: PhoneAddInput;
};

export type MutationAdjustOrderLineArgs = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String'];
};

export type MutationApplyForCouponCodeArgs = {
  code: Scalars['String'];
  emailAddress: Scalars['String'];
};

export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};

export type MutationCreateInvitedCustomerProductReviewArgs = {
  input: CreateInvitedCustomerProductReviewInput;
};

export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};

export type MutationCreateProductQaArgs = {
  input: CreateProductQaInput;
};

export type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};

export type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};

export type MutationCreateTryonFaceModelsArgs = {
  input: Array<CreateTryonFaceModelInput>;
};

export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteRxArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTryonFaceModelArgs = {
  id: Scalars['ID'];
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String'];
};

export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};

export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String'];
};

export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID'];
};

export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String'];
};

export type MutationRequestUpdateCustomerEmailAddressArgs = {
  newEmailAddress: Scalars['String'];
  password: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type MutationSaveRxArgs = {
  input: CreateRxInput;
};

export type MutationSaveUserProcessConfigStepArgs = {
  input: SaveUserProcessConfigStepInput;
};

export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};

export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};

export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};

export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};

export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Scalars['ID'];
};

export type MutationSettlePaymentArgs = {
  input: SettlePaymentInput;
};

export type MutationToggleFavoriteArgs = {
  productVariantId: Scalars['ID'];
};

export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String'];
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

export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String'];
};

export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type MutationUpdateHelpCenterHelpfulArgs = {
  input: UpdateHelpCenterHelpfulInput;
};

export type MutationUpdateProductQaHelpfulArgs = {
  input: UpdateProductQaHelpfulInput;
};

export type MutationUpdateProductReviewArgs = {
  input: UpdateProductReviewInput;
};

export type MutationUpdateRxArgs = {
  input: UpdateRxInput;
};

export type MutationUpdateTopicHelpfulArgs = {
  input: UpdateTopicHelpfulInput;
};

export type MutationUpdateUpSellingProductsArgs = {
  productId: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};

export type MutationVerifyCustomerAccountArgs = {
  password?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

export type MutationVoteOnReviewArgs = {
  id: Scalars['ID'];
  vote: Scalars['Boolean'];
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
  | NativeAuthStrategyError
  | NotVerifiedError;

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

/**
 * Returned if `authOptions.requireVerification` is set to `true` (which is the default)
 * and an unverified user attempts to authenticate.
 */
export type NotVerifiedError = ErrorResult & {
  __typename?: 'NotVerifiedError';
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

export type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean'];
  /** 当前激活订单可用的优惠券列表 */
  availableCoupons: Array<CampaignCoupon>;
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
  /** Use this in your Storefront to show in order page if user order */
  invoice?: Maybe<Invoice>;
  lines: Array<OrderLine>;
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

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type OrderSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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

/** Returned when attempting to verify a customer account with a password, when a password has already been set. */
export type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/** Returned when attempting to register or verify a customer account where the given password fails password validation. */
export type PasswordValidationError = ErrorResult & {
  __typename?: 'PasswordValidationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  validationErrorMessage: Scalars['String'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  method: Scalars['String'];
  refunds: Array<Refund>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Returned when a Payment is declined by the payment provider. */
export type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

/** Returned when a Payment fails due to an error. */
export type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
  /**
   * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
   * as the "metadata" argument. For example, it could contain an ID for the payment and other
   * data generated by the payment provider.
   */
  metadata: Scalars['JSON'];
  /** This field should correspond to the `code` property of a PaymentMethod. */
  method: Scalars['String'];
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

export type PaymentMethodPaypalClientConfig = {
  __typename?: 'PaymentMethodPaypalClientConfig';
  clientId: Scalars['String'];
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
  /** 扩展一个字段配置为paypal客户端支付SDK集成 */
  paypalClientConfig?: Maybe<PaymentMethodPaypalClientConfig>;
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

export type PhoneAddInput = {
  phone: Scalars['String'];
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
  collections: Array<Collection>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<ProductCustomFields>;
  description: Scalars['String'];
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
  /** Query questionAnsers property field questionAnsers */
  questionAnswers: ProductQaList;
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

export type ProductQuestionAnswersArgs = {
  options?: InputMaybe<ProductQaListOptions>;
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

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  /** 当前配置了直降活动扩展字段, 展示显示辅助, 并不参与实际价格折扣, 实际价格通过优惠券实现进行直降 */
  campaignView?: Maybe<ProductVariantCampaignView>;
  /** Indicates product page if user can create a review, return reviewOrderLine/undefined */
  canReview?: Maybe<ReviewOrderLine>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<ProductVariantCustomFields>;
  facetValues: Array<FacetValue>;
  /** Use this in your Storefront to show in product page if user favorite */
  favorite?: Maybe<Favorite>;
  /** Total favorite count of variant item */
  favoriteCount: Scalars['Int'];
  featuredAsset?: Maybe<Asset>;
  /** 扩展的镜架商品信息, 可能为null */
  frameFields?: Maybe<ProductVariantFrame>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  product: Product;
  productId: Scalars['ID'];
  sku: Scalars['String'];
  stockLevel: Scalars['String'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime'];
};

export type ProductVariantCampaignView = {
  __typename?: 'ProductVariantCampaignView';
  endsAt?: Maybe<Scalars['DateTime']>;
  framePrice?: Maybe<Scalars['String']>;
  framePromotionText?: Maybe<Scalars['String']>;
  lensPromotionText?: Maybe<Scalars['String']>;
};

export type ProductVariantCustomFields = {
  __typename?: 'ProductVariantCustomFields';
  dimensionFrameAsset?: Maybe<Asset>;
  dimensionTempleAsset?: Maybe<Asset>;
  position?: Maybe<Scalars['Int']>;
  tryonFrameAsset?: Maybe<Asset>;
  tryonFrameModelConfig?: Maybe<Scalars['String']>;
  tryonTempleAsset?: Maybe<Asset>;
  visualFrameAsset?: Maybe<Asset>;
};

export type ProductVariantFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  favoriteCount?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  position?: InputMaybe<NumberOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  productId?: InputMaybe<IdOperators>;
  sku?: InputMaybe<StringOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  tryonFrameModelConfig?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
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
  createdAt?: InputMaybe<SortOrder>;
  dimensionFrameAsset?: InputMaybe<SortOrder>;
  dimensionTempleAsset?: InputMaybe<SortOrder>;
  favoriteCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
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

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** The active Channel */
  activeChannel: Channel;
  /** The active Customer */
  activeCustomer?: Maybe<Customer>;
  /**
   * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
   * state of `PaymentAuthorized` or `PaymentSettled`, then that Order is no longer considered "active" and this
   * query will once again return `null`.
   */
  activeOrder?: Maybe<Order>;
  /** An array of supported Countries */
  availableCountries: Array<Country>;
  /** A list of available order lines to user review */
  availableOrderLinesToReview: ReviewOrderLineList;
  /** Query detail of banner entity */
  banner?: Maybe<Banner>;
  /** Query all banner list */
  banners: BannerList;
  /** customer can review this product variant, return reviewOrderLine/undefined */
  canReviewProductVariant?: Maybe<ReviewOrderLine>;
  /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  collection?: Maybe<Collection>;
  /** A list of Collections available to the shop */
  collections: CollectionList;
  /** Query all tryon face models list of customer (builtin, self owns) */
  customerTryonFaceModels: Array<TryonFaceModel>;
  /** Returns a list of payment methods and their eligibility based on the current active Order */
  eligiblePaymentMethods: Array<PaymentMethodQuote>;
  /** Returns a list of eligible shipping methods based on the current active Order */
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  /** Returns a Facet by its id */
  facet?: Maybe<Facet>;
  /** A list of Facets available to the shop */
  facets: FacetList;
  favorite?: Maybe<Favorite>;
  favorites: FavoriteList;
  /** 根据活动标识获取特定的优惠信息 */
  getCampaignInfo?: Maybe<Campaign>;
  /** Query detail of help center entity */
  helpCenter?: Maybe<HelpCenter>;
  /** Query detail of help center collection entity */
  helpCenterCollection?: Maybe<HelpCenterCollection>;
  /** Query all help center collections */
  helpCenterCollections: HelpCenterCollectionList;
  /** Query all help center hot searches */
  helpCenterHotSearches: HelpCenterHotSearchList;
  /** Query detail of help center tag entity */
  helpCenterTag?: Maybe<HelpCenterTag>;
  /** Query all help center tags */
  helpCenterTags: HelpCenterTagList;
  /** Query all help centers */
  helpCenters: HelpCenterList;
  /** Help summarize */
  helpSummarize?: Maybe<HelpSummarize>;
  /** Query customer review order lines information, list order lines review information (if can review, editing, creating) */
  invitedCustomerReviewOrderLines?: Maybe<CustomerReviewOrderLines>;
  /** Query all lens process template config item list */
  lensProcessConfigItems: LensProcessConfigItemList;
  /** Query all lens process options list */
  lensProcessOptions: LensProcessOptionList;
  /** 查询当前处方的每一个处方配置的选项列表, 并根据用户的输入给出错误/警告等提示信息. */
  listAndValidateRxConfigs: Array<RxValidatedConfigItem>;
  /** Returns information about the current authenticated User */
  me?: Maybe<CurrentUser>;
  /** query customer product review */
  myProductReview?: Maybe<ProductReview>;
  /** query customer all commented product review records */
  myProductReviews: ProductReviewList;
  /** Returns the possible next states that the activeOrder can transition to */
  nextOrderStates: Array<Scalars['String']>;
  /**
   * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
   * currently-authenticated User may be queried.
   */
  order?: Maybe<Order>;
  /**
   * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
   * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
   * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
   * general anonymous access to Order data.
   */
  orderByCode?: Maybe<Order>;
  /** 查询指定流程步骤下的可用流程选项配置列表 */
  processConfigsOfStep: LensProcessStepQueryResult;
  /** Get a Product either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  product?: Maybe<Product>;
  /** 查询当前产品配置的模版可用的steps步骤 */
  productConfiguredProcessSteps: Array<LensStepGroups>;
  /** Query detail of product qa entity */
  productQa?: Maybe<ProductQa>;
  /** Query all product qas */
  productQas: ProductQaList;
  productRecommendations: Array<ProductRecommendation>;
  /** Get a ProductReview either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  productReview?: Maybe<ProductReview>;
  /** query all reviews of this product */
  productReviews: ProductReviewList;
  /** query product reviews witch contains images */
  productWithImageReviews: ProductReviewList;
  /** Get a list of Products */
  products: ProductList;
  /** Get related reviews of specificed product review */
  relatedReviews: Array<ProductReview>;
  /** Query detail of risk entity */
  risk?: Maybe<Risk>;
  /** Query all risk list */
  risks: RiskList;
  /** Query all lens user rx list */
  rxList: RxList;
  /** Search Products based on the criteria set by the `SearchInput` */
  search: SearchResponse;
  /** Query detail of setting entity */
  setting?: Maybe<Setting>;
  /** Query all setting list */
  settings: SettingList;
  /** Get testimonials from reviews */
  testimonialReviews: Array<ProductReview>;
  ticket?: Maybe<Ticket>;
  tickets: TicketList;
  /** Query detail of topic entity */
  topic?: Maybe<Topic>;
  /** Query all topiclinks */
  topicLinks: TopicLinkList;
  /** Query all topics */
  topics: TopicList;
  unionMain: UnionMain;
};

export type QueryAvailableOrderLinesToReviewArgs = {
  options?: InputMaybe<ReviewOrderLineListOptions>;
};

export type QueryBannerArgs = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QueryBannersArgs = {
  options?: InputMaybe<BannerListOptions>;
};

export type QueryCanReviewProductVariantArgs = {
  orderLineId?: InputMaybe<Scalars['ID']>;
  productVariantId: Scalars['ID'];
};

export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};

export type QueryCustomerTryonFaceModelsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

export type QueryFacetArgs = {
  id: Scalars['ID'];
};

export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};

export type QueryFavoriteArgs = {
  productVariantId: Scalars['ID'];
};

export type QueryFavoritesArgs = {
  options?: InputMaybe<FavoriteListOptions>;
  productVariantNameFilter?: InputMaybe<Scalars['String']>;
};

export type QueryGetCampaignInfoArgs = {
  code: Scalars['String'];
};

export type QueryHelpCenterArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryHelpCenterCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryHelpCenterCollectionsArgs = {
  options?: InputMaybe<HelpCenterCollectionListOptions>;
};

export type QueryHelpCenterHotSearchesArgs = {
  options?: InputMaybe<HelpCenterHotSearchListOptions>;
};

export type QueryHelpCenterTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryHelpCenterTagsArgs = {
  options?: InputMaybe<HelpCenterTagListOptions>;
};

export type QueryHelpCentersArgs = {
  collectionIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  options?: InputMaybe<HelpCenterListOptions>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type QueryHelpSummarizeArgs = {
  options?: InputMaybe<HelpSummarizeOptions>;
};

export type QueryInvitedCustomerReviewOrderLinesArgs = {
  encryptedOrderId: Scalars['String'];
};

export type QueryLensProcessConfigItemsArgs = {
  options?: InputMaybe<LensProcessConfigItemListOptions>;
};

export type QueryLensProcessOptionsArgs = {
  options?: InputMaybe<LensProcessOptionListOptions>;
};

export type QueryListAndValidateRxConfigsArgs = {
  input: ListAndValidateRxConfigsInput;
};

export type QueryMyProductReviewArgs = {
  id: Scalars['ID'];
};

export type QueryMyProductReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryOrderByCodeArgs = {
  code: Scalars['String'];
};

export type QueryProcessConfigsOfStepArgs = {
  input: ProcessConfigsOfStepInput;
};

export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryProductConfiguredProcessStepsArgs = {
  productId: Scalars['ID'];
};

export type QueryProductQaArgs = {
  id: Scalars['ID'];
};

export type QueryProductQasArgs = {
  options?: InputMaybe<ProductQaListOptions>;
  productId: Scalars['ID'];
};

export type QueryProductRecommendationsArgs = {
  productId: Scalars['ID'];
};

export type QueryProductReviewArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryProductReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
  productId: Scalars['ID'];
};

export type QueryProductWithImageReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
  productId: Scalars['ID'];
};

export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};

export type QueryRelatedReviewsArgs = {
  id: Scalars['ID'];
  productId: Scalars['ID'];
};

export type QueryRiskArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryRisksArgs = {
  options?: InputMaybe<RiskListOptions>;
};

export type QueryRxListArgs = {
  options?: InputMaybe<RxListOptions>;
};

export type QuerySearchArgs = {
  input: SearchInput;
};

export type QuerySettingArgs = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
};

export type QuerySettingsArgs = {
  options?: InputMaybe<SettingListOptions>;
};

export type QueryTestimonialReviewsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

export type QueryTicketArgs = {
  ticketId: Scalars['ID'];
};

export type QueryTicketsArgs = {
  options?: InputMaybe<TicketListOptions>;
};

export type QueryTopicArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type QueryTopicLinksArgs = {
  options?: InputMaybe<TopicLinkListOptions>;
};

export type QueryTopicsArgs = {
  options?: InputMaybe<TopicListOptions>;
};

export enum RecommendationType {
  CROSSSELL = 'CROSSSELL',
  UPSELL = 'UPSELL',
}

export type RefreshCustomerVerificationResult =
  | NativeAuthStrategyError
  | Success;

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

export type RegisterCustomerAccountResult =
  | MissingPasswordError
  | NativeAuthStrategyError
  | PasswordValidationError
  | Success;

export type RegisterCustomerCustomFieldsInput = {
  birthday?: InputMaybe<Scalars['String']>;
  faceshape?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<Scalars['String']>;
};

export type RegisterCustomerInput = {
  customFields?: InputMaybe<RegisterCustomerCustomFieldsInput>;
  emailAddress: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
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

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RequestPasswordResetResult = NativeAuthStrategyError | Success;

export type RequestUpdateCustomerEmailAddressResult =
  | EmailAddressConflictError
  | InvalidCredentialsError
  | NativeAuthStrategyError
  | Success;

export type ResetPasswordResult =
  | CurrentUser
  | NativeAuthStrategyError
  | NotVerifiedError
  | PasswordResetTokenExpiredError
  | PasswordResetTokenInvalidError
  | PasswordValidationError;

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

export type ReviewOrderLineFilterParameter = {
  id?: InputMaybe<IdOperators>;
  orderLineId?: InputMaybe<IdOperators>;
  productId?: InputMaybe<IdOperators>;
  productSlug?: InputMaybe<StringOperators>;
  productVariantId?: InputMaybe<IdOperators>;
  productVariantName?: InputMaybe<StringOperators>;
  productVariantSku?: InputMaybe<StringOperators>;
};

export type ReviewOrderLineList = PaginatedList & {
  __typename?: 'ReviewOrderLineList';
  items: Array<ReviewOrderLine>;
  totalItems: Scalars['Int'];
};

export type ReviewOrderLineListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ReviewOrderLineFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ReviewOrderLineSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};

export type ReviewOrderLineSortParameter = {
  id?: InputMaybe<SortOrder>;
  orderLineId?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  productSlug?: InputMaybe<SortOrder>;
  productVariantId?: InputMaybe<SortOrder>;
  productVariantName?: InputMaybe<SortOrder>;
  productVariantSku?: InputMaybe<SortOrder>;
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

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int'];
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

export type RxItemConfigList = PaginatedList & {
  __typename?: 'RxItemConfigList';
  items: Array<RxItemConfig>;
  totalItems: Scalars['Int'];
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

export enum RxItemMessageType {
  /** 错误信息, 用户必须要解决掉重新验证, 才能进入下一步 */
  error = 'error',
  /** 其他提示文本信息 */
  info = 'info',
  /** 其他标签文本信息 */
  label = 'label',
  /** 警告错误, 用户可以选择同意忽略在前端 */
  warn = 'warn',
}

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

export type RxRuleDefineValidateAction = {
  __typename?: 'RxRuleDefineValidateAction';
  /** 规则验证信息的i18n多国语言消息KEY */
  actionMessageKey?: Maybe<Scalars['String']>;
  /** 规则验证的结果类型, 此处类型如果为error,则需要强制选择 */
  actionMessageType?: Maybe<RxItemMessageType>;
  /** 当前的action对应的action可选数据对象items对象结构 */
  actionOptionItems?: Maybe<Array<RxValidatedResultActionOptionItem>>;
  /** 可选值, 当前如果进行全局验证触发特殊的action规则, 比如popup/流程切换, 切换平光流程等. */
  actionType?: Maybe<RxValidatedResultActionType>;
  /** 当前action的显示顺序, 越大越优先显示, 最终显示给用户时, 如果同时存在多action, 需要排序. */
  displayOrder: Scalars['Int'];
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

/** 每一项规则验证处理之后的配置项数据 */
export type RxValidatedConfigItem = {
  __typename?: 'RxValidatedConfigItem';
  /** 选择当前action行为的价格调整 */
  adjustPrice: Scalars['Int'];
  /** 当前选项是否处于disabled状态 */
  disabled: Scalars['Boolean'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction: Array<Scalars['String']>;
  /** 处方配置项展示名 */
  name: Scalars['String'];
  /** 当前处方配置项的默认选中的值 */
  rxDefaultValue: Scalars['String'];
  /** 处方数据配置项名称 */
  rxItemName: RxItemName;
  /** 当前rxItemName的选择项数据源配置, 处方里面每一项的数据都是下拉框数据源展示模式. */
  rxOptions: Array<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方/直接选度数(游泳镜,项链镜)的处方 */
  rxType: RxType;
  /** 当前规则验证结果之后, 可能会携带的数据. */
  rxValidateAction: Array<RxValidatedResultAction>;
  /** 当前配置项目规则校验结果 */
  rxValidateResult: Array<RxValidatedResult>;
};

/** 规则验证结果 */
export type RxValidatedResult = {
  __typename?: 'RxValidatedResult';
  /** 规则验证结果国际化消息提示 */
  messageText?: Maybe<Scalars['String']>;
  /** 规则验证的结果类型 */
  messageType?: Maybe<RxItemMessageType>;
  /** 处方数据配置项名称 */
  rxItemName: RxItemName;
  /** 当前的校验的规则名 */
  rxRuleName: Scalars['String'];
};

export type RxValidatedResultAction = {
  __typename?: 'RxValidatedResultAction';
  /** 规则验证信息的i18n多国语言消息 */
  actionMessageText?: Maybe<Scalars['String']>;
  /** 规则验证的结果类型 */
  actionMessageType?: Maybe<RxItemMessageType>;
  /** 当前的action对应的action可选数据对象items对象结构 */
  actionOptionItems?: Maybe<Array<RxValidatedResultActionOptionItem>>;
  /** 可选值, 当前如果进行全局验证触发特殊的action规则, 比如popup/流程切换, 切换平光流程等. */
  actionType?: Maybe<RxValidatedResultActionType>;
  /** 当前action的显示顺序, 越大越优先显示, 最终显示给用户时, 如果同时存在多action, 需要排序. */
  displayOrder: Scalars['Int'];
};

export type RxValidatedResultActionOptionItem = {
  __typename?: 'RxValidatedResultActionOptionItem';
  /** 当前action项的名称, 如加钱, 当成唯一KEY来使用 */
  actionItemKey: Scalars['String'];
  /** 选择当前action行为的价格调整 */
  adjustPrice: Scalars['Int'];
  /** 当前action项的名称, 如加钱项, 多国语言的翻译名称, 会显示到加价理由上. 有的选项不需要消息提示. */
  i18nName?: Maybe<Scalars['String']>;
  /** 当前action 配置项目配置变量, 比如专题页面URL */
  variables: RxValidatedResultActionOptionItemVariables;
};

export type RxValidatedResultActionOptionItemVariables = {
  __typename?: 'RxValidatedResultActionOptionItemVariables';
  /** 搜索选项facet的特征列表.可根据产品查询出来, 动态匹配. */
  facets?: Maybe<Array<RxValidatedResultActionOptionItemVariablesFacet>>;
  /** 搜索选项minLensDiam必须<=如下值+PD */
  maxMinLensDiam?: Maybe<Scalars['Int']>;
};

export type RxValidatedResultActionOptionItemVariablesFacet = {
  __typename?: 'RxValidatedResultActionOptionItemVariablesFacet';
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};

/** 当前处方save进行联合校验, 返回特殊actionType */
export enum RxValidatedResultActionType {
  /** 弹窗提示用户进行流程切换到平光 */
  POPUP_CONFIRM_PROCESS_CHANGE_TO_NON_PRESCRIPTION = 'POPUP_CONFIRM_PROCESS_CHANGE_TO_NON_PRESCRIPTION',
  /** 跳转到高处方的对应分类过滤页面: 'High prescription frames' */
  POPUP_FILTER_FRAME_WITH_HIGHT_PRESCRIPTION = 'POPUP_FILTER_FRAME_WITH_HIGHT_PRESCRIPTION',
  /** 双眼PD偏心或换镜架弹窗(新处方), 加偏心费10$或者按照规则重新筛选产品 */
  POPUP_FILTER_FRAME_WITH_MIN_LENS_DIAM = 'POPUP_FILTER_FRAME_WITH_MIN_LENS_DIAM',
}

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
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']>;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
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

export type SetCustomerForOrderResult =
  | AlreadyLoggedInError
  | EmailAddressConflictError
  | NoActiveOrderError
  | Order;

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

export type SettlePaymentInput = {
  orderId: Scalars['ID'];
  transactionId: Scalars['String'];
};

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

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
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

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Int'];
};

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
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

export type SubscriptionFacetList = PaginatedList & {
  __typename?: 'SubscriptionFacetList';
  items: Array<SubscriptionFacet>;
  totalItems: Scalars['Int'];
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

export type SubscriptionFacetValueList = PaginatedList & {
  __typename?: 'SubscriptionFacetValueList';
  items: Array<SubscriptionFacetValue>;
  totalItems: Scalars['Int'];
};

export type SubscriptionList = PaginatedList & {
  __typename?: 'SubscriptionList';
  items: Array<Subscription>;
  totalItems: Scalars['Int'];
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

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int'];
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

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
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

export type ToggleFavoriteResult = {
  __typename?: 'ToggleFavoriteResult';
  favorite?: Maybe<Favorite>;
  favoriteCount: Scalars['Int'];
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

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

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

export type TryonFaceModelList = PaginatedList & {
  __typename?: 'TryonFaceModelList';
  items: Array<TryonFaceModel>;
  totalItems: Scalars['Int'];
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

export type UnionMain = {
  __typename?: 'UnionMain';
  /** All settings from plugin-banner */
  banners: Array<Banner>;
  /** Best seller products of home page */
  bestSellerProducts: Array<SearchResult>;
  /** All collections */
  collections: Array<Collection>;
  /** All footer topic links */
  footerTopicLinks: Array<TopicLink>;
  /** New Arrivals products of home page */
  newArrivalsProducts: Array<SearchResult>;
  /** All settings from plugin-setting */
  settings: Array<Setting>;
  /** testimonial reviews of aboutus page */
  testimonialReviews: Array<ProductReview>;
  /** All video guide topic links */
  videoGuideTopicLinks: Array<TopicLink>;
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

export type UpdateCustomerCustomFieldsInput = {
  birthday?: InputMaybe<Scalars['String']>;
  faceshape?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerEmailAddressResult =
  | IdentifierChangeTokenExpiredError
  | IdentifierChangeTokenInvalidError
  | NativeAuthStrategyError
  | Success;

export type UpdateCustomerInput = {
  customFields?: InputMaybe<UpdateCustomerCustomFieldsInput>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerPasswordResult =
  | InvalidCredentialsError
  | NativeAuthStrategyError
  | PasswordValidationError
  | Success;

export type UpdateHelpCenterHelpfulInput = {
  helpfulNo?: InputMaybe<Scalars['Boolean']>;
  helpfulYes?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type UpdateOrderCustomFieldsInput = {
  languageCode?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<UpdateOrderCustomFieldsInput>;
};

export type UpdateOrderItemsResult =
  | InsufficientStockError
  | NegativeQuantityError
  | Order
  | OrderLimitError
  | OrderModificationError;

export type UpdateProductQaHelpfulInput = {
  helpfulYes?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type UpdateProductReviewInput = {
  content?: InputMaybe<Scalars['String']>;
  customerNameIsPublic?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  rating?: InputMaybe<Scalars['Int']>;
  suggestions?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateRxInput = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 是否标记为默认处方 */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** 处方单名称 */
  name?: InputMaybe<Scalars['String']>;
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

export type UpdateTopicHelpfulInput = {
  helpfulNo?: InputMaybe<Scalars['Boolean']>;
  helpfulYes?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
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

/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};

export type VerifyCustomerAccountResult =
  | CurrentUser
  | MissingPasswordError
  | NativeAuthStrategyError
  | PasswordAlreadySetError
  | PasswordValidationError
  | VerificationTokenExpiredError
  | VerificationTokenInvalidError;

export type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  members: Array<Country>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
