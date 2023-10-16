export declare type Maybe<T> = T;
export declare type InputMaybe<T> = T;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string | number;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
    JSON: any;
    Money: any;
    Upload: any;
};
export declare type AddFulfillmentToOrderResult = CreateFulfillmentError | EmptyOrderLineSelectionError | Fulfillment | FulfillmentStateTransitionError | InsufficientStockOnHandError | InvalidFulfillmentHandlerError | ItemsAlreadyFulfilledError;
export declare type AddItemInput = {
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
};
export declare type AddItemToDraftOrderInput = {
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
};
export declare type AddManualPaymentToOrderResult = ManualPaymentStateError | Order;
export declare type AddNoteToCustomerInput = {
    id: Scalars['ID'];
    isPublic: Scalars['Boolean'];
    note: Scalars['String'];
};
export declare type AddNoteToOrderInput = {
    id: Scalars['ID'];
    isPublic: Scalars['Boolean'];
    note: Scalars['String'];
};
export declare type Address = Node & {
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
export declare type AdjustDraftOrderLineInput = {
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};
export declare type Adjustment = {
    __typename?: 'Adjustment';
    adjustmentSource: Scalars['String'];
    amount: Scalars['Money'];
    data?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    type: AdjustmentType;
};
export declare enum AdjustmentType {
    DISTRIBUTED_ORDER_PROMOTION = "DISTRIBUTED_ORDER_PROMOTION",
    OTHER = "OTHER",
    PROMOTION = "PROMOTION"
}
export declare type Administrator = Node & {
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
export declare type AdministratorFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    emailAddress?: InputMaybe<StringOperators>;
    firstName?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    lastName?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type AdministratorList = PaginatedList & {
    __typename?: 'AdministratorList';
    items: Array<Administrator>;
    totalItems: Scalars['Int'];
};
export declare type AdministratorListOptions = {
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
export declare type AdministratorPaymentInput = {
    metadata?: InputMaybe<Scalars['JSON']>;
    paymentMethod?: InputMaybe<Scalars['String']>;
};
export declare type AdministratorRefundInput = {
    paymentId: Scalars['ID'];
    reason?: InputMaybe<Scalars['String']>;
};
export declare type AdministratorSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    emailAddress?: InputMaybe<SortOrder>;
    firstName?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    lastName?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type Allocation = Node & StockMovement & {
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
export declare type AlreadyRefundedError = ErrorResult & {
    __typename?: 'AlreadyRefundedError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    refundId: Scalars['ID'];
};
export declare type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;
export declare type Asset = Node & {
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
export declare type AssetFilterParameter = {
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
export declare type AssetList = PaginatedList & {
    __typename?: 'AssetList';
    items: Array<Asset>;
    totalItems: Scalars['Int'];
};
export declare type AssetListOptions = {
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
export declare type AssetSortParameter = {
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
export declare enum AssetType {
    BINARY = "BINARY",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO"
}
export declare type AssignAssetsToChannelInput = {
    assetIds: Array<Scalars['ID']>;
    channelId: Scalars['ID'];
};
export declare type AssignCollectionsToChannelInput = {
    channelId: Scalars['ID'];
    collectionIds: Array<Scalars['ID']>;
};
export declare type AssignFacetsToChannelInput = {
    channelId: Scalars['ID'];
    facetIds: Array<Scalars['ID']>;
};
export declare type AssignProductVariantsToChannelInput = {
    channelId: Scalars['ID'];
    priceFactor?: InputMaybe<Scalars['Float']>;
    productVariantIds: Array<Scalars['ID']>;
};
export declare type AssignProductsToChannelInput = {
    channelId: Scalars['ID'];
    priceFactor?: InputMaybe<Scalars['Float']>;
    productIds: Array<Scalars['ID']>;
};
export declare type AssignPromotionsToChannelInput = {
    channelId: Scalars['ID'];
    promotionIds: Array<Scalars['ID']>;
};
export declare type AuthenticationInput = {
    native?: InputMaybe<NativeAuthInput>;
};
export declare type AuthenticationMethod = Node & {
    __typename?: 'AuthenticationMethod';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    strategy: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type AuthenticationResult = CurrentUser | InvalidCredentialsError;
export declare type BooleanCustomFieldConfig = CustomField & {
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
export declare type BooleanListOperators = {
    inList: Scalars['Boolean'];
};
/** Operators for filtering on a Boolean field */
export declare type BooleanOperators = {
    eq?: InputMaybe<Scalars['Boolean']>;
    isNull?: InputMaybe<Scalars['Boolean']>;
};
export declare type Campaign = Node & {
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
export declare type CampaignApplyForBeforeData = {
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
export declare type CampaignApplyForBeforeDataInput = {
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
export declare type CampaignApplyForResultData = {
    __typename?: 'CampaignApplyForResultData';
    /** Expiry Date */
    expiryLabel: Scalars['String'];
    /** 规则小字 */
    ruleText: Array<Scalars['String']>;
    /** Terms条款label */
    termsCondition: Scalars['String'];
};
export declare type CampaignApplyForResultDataInput = {
    /** Expiry Date */
    expiryLabel: Scalars['String'];
    /** 规则小字 */
    ruleText: Array<Scalars['String']>;
    /** Terms条款label */
    termsCondition: Scalars['String'];
};
export declare type CampaignCoupon = Node & {
    __typename?: 'CampaignCoupon';
    campaign: Campaign;
    couponCode: Scalars['String'];
    createdAt: Scalars['DateTime'];
    emailAddress: Scalars['String'];
    endsAt?: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    updatedAt: Scalars['DateTime'];
};
export declare type CampaignCouponFilterParameter = {
    couponCode?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    emailAddress?: InputMaybe<StringOperators>;
    endsAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type CampaignCouponList = PaginatedList & {
    __typename?: 'CampaignCouponList';
    items: Array<CampaignCoupon>;
    totalItems: Scalars['Int'];
};
export declare type CampaignCouponListOptions = {
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
export declare type CampaignCouponSortParameter = {
    couponCode?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    emailAddress?: InputMaybe<SortOrder>;
    endsAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type CampaignFilterParameter = {
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
export declare type CampaignList = PaginatedList & {
    __typename?: 'CampaignList';
    items: Array<Campaign>;
    totalItems: Scalars['Int'];
};
export declare type CampaignListOptions = {
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
export declare type CampaignSortParameter = {
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
export declare type CampaignTranslationInput = {
    applyForBeforeData: CampaignApplyForBeforeDataInput;
    applyForResultData?: InputMaybe<CampaignApplyForResultDataInput>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    lgImage?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
    shortDesc?: InputMaybe<Scalars['String']>;
    xsImage?: InputMaybe<Scalars['String']>;
};
export declare enum CampaignType {
    /** 所有用户, 固定金额拉新, 直降模式 */
    AllUserFixedAmount = "AllUserFixedAmount",
    /** 买一送一+镜片打折 */
    BuyXGetYFreeWithLensDiscount = "BuyXGetYFreeWithLensDiscount",
    /** 节假日直活动 */
    DirectDiscount = "DirectDiscount",
    /** 新用户首单镜架1USD */
    NewUserFirstPair = "NewUserFirstPair",
    /** 新用户固定金额拉新, 领券模式 */
    NewUserFixedAmount = "NewUserFixedAmount"
}
/** Returned if an attempting to cancel lines from an Order which is still active */
export declare type CancelActiveOrderError = ErrorResult & {
    __typename?: 'CancelActiveOrderError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    orderState: Scalars['String'];
};
export declare type CancelOrderInput = {
    /** Specify whether the shipping charges should also be cancelled. Defaults to false */
    cancelShipping?: InputMaybe<Scalars['Boolean']>;
    /** Optionally specify which OrderLines to cancel. If not provided, all OrderLines will be cancelled */
    lines?: InputMaybe<Array<OrderLineInput>>;
    /** The id of the order to be cancelled */
    orderId: Scalars['ID'];
    reason?: InputMaybe<Scalars['String']>;
};
export declare type CancelOrderResult = CancelActiveOrderError | EmptyOrderLineSelectionError | MultipleOrderError | Order | OrderStateTransitionError | QuantityTooGreatError;
/** Returned if the Payment cancellation fails */
export declare type CancelPaymentError = ErrorResult & {
    __typename?: 'CancelPaymentError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    paymentErrorMessage: Scalars['String'];
};
export declare type CancelPaymentResult = CancelPaymentError | Payment | PaymentStateTransitionError;
export declare type Cancellation = Node & StockMovement & {
    __typename?: 'Cancellation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderLine: OrderLine;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
};
export declare type Channel = Node & {
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
    seller?: Maybe<Seller>;
    token: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
/**
 * Returned when the default LanguageCode of a Channel is no longer found in the `availableLanguages`
 * of the GlobalSettings
 */
export declare type ChannelDefaultLanguageError = ErrorResult & {
    __typename?: 'ChannelDefaultLanguageError';
    channelCode: Scalars['String'];
    errorCode: ErrorCode;
    language: Scalars['String'];
    message: Scalars['String'];
};
export declare type Collection = Node & {
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
    inheritFilters: Scalars['Boolean'];
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
export declare type CollectionProductVariantsArgs = {
    options?: InputMaybe<ProductVariantListOptions>;
};
export declare type CollectionBreadcrumb = {
    __typename?: 'CollectionBreadcrumb';
    id: Scalars['ID'];
    name: Scalars['String'];
    slug: Scalars['String'];
};
export declare type CollectionCustomFields = {
    __typename?: 'CollectionCustomFields';
    campaign?: Maybe<Campaign>;
};
export declare type CollectionFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    inheritFilters?: InputMaybe<BooleanOperators>;
    isPrivate?: InputMaybe<BooleanOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    position?: InputMaybe<NumberOperators>;
    slug?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type CollectionList = PaginatedList & {
    __typename?: 'CollectionList';
    items: Array<Collection>;
    totalItems: Scalars['Int'];
};
export declare type CollectionListOptions = {
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
export declare type CollectionResult = {
    __typename?: 'CollectionResult';
    collection: Collection;
    count: Scalars['Int'];
};
export declare type CollectionSortParameter = {
    campaign?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    position?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type CollectionTranslation = {
    __typename?: 'CollectionTranslation';
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type ConfigArg = {
    __typename?: 'ConfigArg';
    name: Scalars['String'];
    value: Scalars['String'];
};
export declare type ConfigArgDefinition = {
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
export declare type ConfigArgInput = {
    name: Scalars['String'];
    /** A JSON stringified representation of the actual value */
    value: Scalars['String'];
};
export declare type ConfigurableOperation = {
    __typename?: 'ConfigurableOperation';
    args: Array<ConfigArg>;
    code: Scalars['String'];
};
export declare type ConfigurableOperationDefinition = {
    __typename?: 'ConfigurableOperationDefinition';
    args: Array<ConfigArgDefinition>;
    code: Scalars['String'];
    description: Scalars['String'];
};
export declare type ConfigurableOperationInput = {
    arguments: Array<ConfigArgInput>;
    code: Scalars['String'];
};
export declare type Coordinate = {
    __typename?: 'Coordinate';
    x: Scalars['Float'];
    y: Scalars['Float'];
};
export declare type CoordinateInput = {
    x: Scalars['Float'];
    y: Scalars['Float'];
};
export declare type Country = Node & {
    __typename?: 'Country';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<CountryTranslation>;
    updatedAt: Scalars['DateTime'];
};
export declare type CountryFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    enabled?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type CountryList = PaginatedList & {
    __typename?: 'CountryList';
    items: Array<Country>;
    totalItems: Scalars['Int'];
};
export declare type CountryListOptions = {
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
export declare type CountrySortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type CountryTranslation = {
    __typename?: 'CountryTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type CountryTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
/** Returned if the provided coupon code is invalid */
export declare type CouponCodeExpiredError = ErrorResult & {
    __typename?: 'CouponCodeExpiredError';
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned if the provided coupon code is invalid */
export declare type CouponCodeInvalidError = ErrorResult & {
    __typename?: 'CouponCodeInvalidError';
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned if the provided coupon code is invalid */
export declare type CouponCodeLimitError = ErrorResult & {
    __typename?: 'CouponCodeLimitError';
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    limit: Scalars['Int'];
    message: Scalars['String'];
};
export declare type CreateAddressInput = {
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
export declare type CreateAdministratorInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    emailAddress: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    password: Scalars['String'];
    roleIds: Array<Scalars['ID']>;
};
export declare type CreateAssetInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    file: Scalars['Upload'];
    tags?: InputMaybe<Array<Scalars['String']>>;
};
export declare type CreateAssetResult = Asset | MimeTypeError;
export declare type CreateCampaignCouponInput = {
    campaignId: Scalars['ID'];
    couponCode: Scalars['String'];
    emailAddress: Scalars['String'];
    endsAt?: InputMaybe<Scalars['DateTime']>;
};
export declare type CreateCampaignInput = {
    campaignType: CampaignType;
    code: Scalars['String'];
    enabled: Scalars['Boolean'];
    needClaimCoupon?: InputMaybe<Scalars['Boolean']>;
    periodOfValidity?: InputMaybe<Scalars['Int']>;
    promotionId?: InputMaybe<Scalars['Int']>;
    translations: Array<CampaignTranslationInput>;
};
export declare type CreateChannelInput = {
    code: Scalars['String'];
    currencyCode: CurrencyCode;
    customFields?: InputMaybe<Scalars['JSON']>;
    defaultLanguageCode: LanguageCode;
    defaultShippingZoneId: Scalars['ID'];
    defaultTaxZoneId: Scalars['ID'];
    pricesIncludeTax: Scalars['Boolean'];
    sellerId?: InputMaybe<Scalars['ID']>;
    token: Scalars['String'];
};
export declare type CreateChannelResult = Channel | LanguageNotAvailableError;
export declare type CreateCollectionCustomFieldsInput = {
    campaignId?: InputMaybe<Scalars['ID']>;
};
export declare type CreateCollectionInput = {
    assetIds?: InputMaybe<Array<Scalars['ID']>>;
    customFields?: InputMaybe<CreateCollectionCustomFieldsInput>;
    featuredAssetId?: InputMaybe<Scalars['ID']>;
    filters: Array<ConfigurableOperationInput>;
    inheritFilters?: InputMaybe<Scalars['Boolean']>;
    isPrivate?: InputMaybe<Scalars['Boolean']>;
    parentId?: InputMaybe<Scalars['ID']>;
    translations: Array<CreateCollectionTranslationInput>;
};
export declare type CreateCollectionTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    description: Scalars['String'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
};
export declare type CreateCountryInput = {
    code: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled: Scalars['Boolean'];
    translations: Array<CountryTranslationInput>;
};
export declare type CreateCustomerGroupInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    customerIds?: InputMaybe<Array<Scalars['ID']>>;
    name: Scalars['String'];
};
export declare type CreateCustomerInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    emailAddress: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type CreateCustomerResult = Customer | EmailAddressConflictError;
export declare type CreateFacetInput = {
    code: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    isPrivate: Scalars['Boolean'];
    translations: Array<FacetTranslationInput>;
    values?: InputMaybe<Array<CreateFacetValueWithFacetInput>>;
};
export declare type CreateFacetValueInput = {
    code: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    facetId: Scalars['ID'];
    translations: Array<FacetValueTranslationInput>;
};
export declare type CreateFacetValueWithFacetInput = {
    code: Scalars['String'];
    translations: Array<FacetValueTranslationInput>;
};
/** Returned if an error is thrown in a FulfillmentHandler's createFulfillment method */
export declare type CreateFulfillmentError = ErrorResult & {
    __typename?: 'CreateFulfillmentError';
    errorCode: ErrorCode;
    fulfillmentHandlerError: Scalars['String'];
    message: Scalars['String'];
};
export declare type CreateGroupOptionInput = {
    code: Scalars['String'];
    translations: Array<ProductOptionGroupTranslationInput>;
};
export declare type CreatePaymentMethodInput = {
    checker?: InputMaybe<ConfigurableOperationInput>;
    code: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled: Scalars['Boolean'];
    handler: ConfigurableOperationInput;
    translations: Array<PaymentMethodTranslationInput>;
};
export declare type CreateProductInput = {
    assetIds?: InputMaybe<Array<Scalars['ID']>>;
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
    featuredAssetId?: InputMaybe<Scalars['ID']>;
    translations: Array<ProductTranslationInput>;
};
export declare type CreateProductOptionGroupInput = {
    code: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    options: Array<CreateGroupOptionInput>;
    translations: Array<ProductOptionGroupTranslationInput>;
};
export declare type CreateProductOptionInput = {
    code: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    productOptionGroupId: Scalars['ID'];
    translations: Array<ProductOptionGroupTranslationInput>;
};
export declare type CreateProductVariantInput = {
    assetIds?: InputMaybe<Array<Scalars['ID']>>;
    customFields?: InputMaybe<Scalars['JSON']>;
    facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
    featuredAssetId?: InputMaybe<Scalars['ID']>;
    optionIds?: InputMaybe<Array<Scalars['ID']>>;
    outOfStockThreshold?: InputMaybe<Scalars['Int']>;
    price?: InputMaybe<Scalars['Money']>;
    productId: Scalars['ID'];
    sku: Scalars['String'];
    stockLevels?: InputMaybe<Array<StockLevelInput>>;
    stockOnHand?: InputMaybe<Scalars['Int']>;
    taxCategoryId?: InputMaybe<Scalars['ID']>;
    trackInventory?: InputMaybe<GlobalFlag>;
    translations: Array<ProductVariantTranslationInput>;
    useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']>;
};
export declare type CreateProductVariantOptionInput = {
    code: Scalars['String'];
    optionGroupId: Scalars['ID'];
    translations: Array<ProductOptionTranslationInput>;
};
export declare type CreatePromotionInput = {
    actions: Array<ConfigurableOperationInput>;
    conditions: Array<ConfigurableOperationInput>;
    couponCode?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled: Scalars['Boolean'];
    endsAt?: InputMaybe<Scalars['DateTime']>;
    perCustomerUsageLimit?: InputMaybe<Scalars['Int']>;
    startsAt?: InputMaybe<Scalars['DateTime']>;
    translations: Array<PromotionTranslationInput>;
};
export declare type CreatePromotionResult = MissingConditionsError | Promotion;
export declare type CreateRoleInput = {
    channelIds?: InputMaybe<Array<Scalars['ID']>>;
    code: Scalars['String'];
    description: Scalars['String'];
    permissions: Array<Permission>;
};
export declare type CreateSellerInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    name: Scalars['String'];
};
export declare type CreateSettingInput = {
    enabled?: InputMaybe<Scalars['Boolean']>;
    key: Scalars['String'];
    translations: Array<SettingTranslationInput>;
};
export declare type CreateShippingMethodInput = {
    calculator: ConfigurableOperationInput;
    checker: ConfigurableOperationInput;
    code: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    fulfillmentHandler: Scalars['String'];
    translations: Array<ShippingMethodTranslationInput>;
};
export declare type CreateStockLocationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    description?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
};
export declare type CreateSubscriptionFacetInput = {
    code: Scalars['String'];
    name: Scalars['String'];
    values?: InputMaybe<Array<CreateSubscriptionFacetValueWithFacetInput>>;
};
export declare type CreateSubscriptionFacetValueInput = {
    code: Scalars['String'];
    facetId: Scalars['ID'];
    name: Scalars['String'];
};
export declare type CreateSubscriptionFacetValueWithFacetInput = {
    code: Scalars['String'];
    name: Scalars['String'];
};
export declare type CreateSubscriptionInput = {
    enabled: Scalars['Boolean'];
    facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
    languageCode: LanguageCode;
    subscribeFrom: Scalars['String'];
    type: SubscriptionType;
    value: Scalars['String'];
};
export declare type CreateTagInput = {
    value: Scalars['String'];
};
export declare type CreateTaxCategoryInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    isDefault?: InputMaybe<Scalars['Boolean']>;
    name: Scalars['String'];
};
export declare type CreateTaxRateInput = {
    categoryId: Scalars['ID'];
    customFields?: InputMaybe<Scalars['JSON']>;
    customerGroupId?: InputMaybe<Scalars['ID']>;
    enabled: Scalars['Boolean'];
    name: Scalars['String'];
    value: Scalars['Float'];
    zoneId: Scalars['ID'];
};
export declare type CreateZoneInput = {
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
export declare enum CurrencyCode {
    /** United Arab Emirates dirham */
    AED = "AED",
    /** Afghan afghani */
    AFN = "AFN",
    /** Albanian lek */
    ALL = "ALL",
    /** Armenian dram */
    AMD = "AMD",
    /** Netherlands Antillean guilder */
    ANG = "ANG",
    /** Angolan kwanza */
    AOA = "AOA",
    /** Argentine peso */
    ARS = "ARS",
    /** Australian dollar */
    AUD = "AUD",
    /** Aruban florin */
    AWG = "AWG",
    /** Azerbaijani manat */
    AZN = "AZN",
    /** Bosnia and Herzegovina convertible mark */
    BAM = "BAM",
    /** Barbados dollar */
    BBD = "BBD",
    /** Bangladeshi taka */
    BDT = "BDT",
    /** Bulgarian lev */
    BGN = "BGN",
    /** Bahraini dinar */
    BHD = "BHD",
    /** Burundian franc */
    BIF = "BIF",
    /** Bermudian dollar */
    BMD = "BMD",
    /** Brunei dollar */
    BND = "BND",
    /** Boliviano */
    BOB = "BOB",
    /** Brazilian real */
    BRL = "BRL",
    /** Bahamian dollar */
    BSD = "BSD",
    /** Bhutanese ngultrum */
    BTN = "BTN",
    /** Botswana pula */
    BWP = "BWP",
    /** Belarusian ruble */
    BYN = "BYN",
    /** Belize dollar */
    BZD = "BZD",
    /** Canadian dollar */
    CAD = "CAD",
    /** Congolese franc */
    CDF = "CDF",
    /** Swiss franc */
    CHF = "CHF",
    /** Chilean peso */
    CLP = "CLP",
    /** Renminbi (Chinese) yuan */
    CNY = "CNY",
    /** Colombian peso */
    COP = "COP",
    /** Costa Rican colon */
    CRC = "CRC",
    /** Cuban convertible peso */
    CUC = "CUC",
    /** Cuban peso */
    CUP = "CUP",
    /** Cape Verde escudo */
    CVE = "CVE",
    /** Czech koruna */
    CZK = "CZK",
    /** Djiboutian franc */
    DJF = "DJF",
    /** Danish krone */
    DKK = "DKK",
    /** Dominican peso */
    DOP = "DOP",
    /** Algerian dinar */
    DZD = "DZD",
    /** Egyptian pound */
    EGP = "EGP",
    /** Eritrean nakfa */
    ERN = "ERN",
    /** Ethiopian birr */
    ETB = "ETB",
    /** Euro */
    EUR = "EUR",
    /** Fiji dollar */
    FJD = "FJD",
    /** Falkland Islands pound */
    FKP = "FKP",
    /** Pound sterling */
    GBP = "GBP",
    /** Georgian lari */
    GEL = "GEL",
    /** Ghanaian cedi */
    GHS = "GHS",
    /** Gibraltar pound */
    GIP = "GIP",
    /** Gambian dalasi */
    GMD = "GMD",
    /** Guinean franc */
    GNF = "GNF",
    /** Guatemalan quetzal */
    GTQ = "GTQ",
    /** Guyanese dollar */
    GYD = "GYD",
    /** Hong Kong dollar */
    HKD = "HKD",
    /** Honduran lempira */
    HNL = "HNL",
    /** Croatian kuna */
    HRK = "HRK",
    /** Haitian gourde */
    HTG = "HTG",
    /** Hungarian forint */
    HUF = "HUF",
    /** Indonesian rupiah */
    IDR = "IDR",
    /** Israeli new shekel */
    ILS = "ILS",
    /** Indian rupee */
    INR = "INR",
    /** Iraqi dinar */
    IQD = "IQD",
    /** Iranian rial */
    IRR = "IRR",
    /** Icelandic króna */
    ISK = "ISK",
    /** Jamaican dollar */
    JMD = "JMD",
    /** Jordanian dinar */
    JOD = "JOD",
    /** Japanese yen */
    JPY = "JPY",
    /** Kenyan shilling */
    KES = "KES",
    /** Kyrgyzstani som */
    KGS = "KGS",
    /** Cambodian riel */
    KHR = "KHR",
    /** Comoro franc */
    KMF = "KMF",
    /** North Korean won */
    KPW = "KPW",
    /** South Korean won */
    KRW = "KRW",
    /** Kuwaiti dinar */
    KWD = "KWD",
    /** Cayman Islands dollar */
    KYD = "KYD",
    /** Kazakhstani tenge */
    KZT = "KZT",
    /** Lao kip */
    LAK = "LAK",
    /** Lebanese pound */
    LBP = "LBP",
    /** Sri Lankan rupee */
    LKR = "LKR",
    /** Liberian dollar */
    LRD = "LRD",
    /** Lesotho loti */
    LSL = "LSL",
    /** Libyan dinar */
    LYD = "LYD",
    /** Moroccan dirham */
    MAD = "MAD",
    /** Moldovan leu */
    MDL = "MDL",
    /** Malagasy ariary */
    MGA = "MGA",
    /** Macedonian denar */
    MKD = "MKD",
    /** Myanmar kyat */
    MMK = "MMK",
    /** Mongolian tögrög */
    MNT = "MNT",
    /** Macanese pataca */
    MOP = "MOP",
    /** Mauritanian ouguiya */
    MRU = "MRU",
    /** Mauritian rupee */
    MUR = "MUR",
    /** Maldivian rufiyaa */
    MVR = "MVR",
    /** Malawian kwacha */
    MWK = "MWK",
    /** Mexican peso */
    MXN = "MXN",
    /** Malaysian ringgit */
    MYR = "MYR",
    /** Mozambican metical */
    MZN = "MZN",
    /** Namibian dollar */
    NAD = "NAD",
    /** Nigerian naira */
    NGN = "NGN",
    /** Nicaraguan córdoba */
    NIO = "NIO",
    /** Norwegian krone */
    NOK = "NOK",
    /** Nepalese rupee */
    NPR = "NPR",
    /** New Zealand dollar */
    NZD = "NZD",
    /** Omani rial */
    OMR = "OMR",
    /** Panamanian balboa */
    PAB = "PAB",
    /** Peruvian sol */
    PEN = "PEN",
    /** Papua New Guinean kina */
    PGK = "PGK",
    /** Philippine peso */
    PHP = "PHP",
    /** Pakistani rupee */
    PKR = "PKR",
    /** Polish złoty */
    PLN = "PLN",
    /** Paraguayan guaraní */
    PYG = "PYG",
    /** Qatari riyal */
    QAR = "QAR",
    /** Romanian leu */
    RON = "RON",
    /** Serbian dinar */
    RSD = "RSD",
    /** Russian ruble */
    RUB = "RUB",
    /** Rwandan franc */
    RWF = "RWF",
    /** Saudi riyal */
    SAR = "SAR",
    /** Solomon Islands dollar */
    SBD = "SBD",
    /** Seychelles rupee */
    SCR = "SCR",
    /** Sudanese pound */
    SDG = "SDG",
    /** Swedish krona/kronor */
    SEK = "SEK",
    /** Singapore dollar */
    SGD = "SGD",
    /** Saint Helena pound */
    SHP = "SHP",
    /** Sierra Leonean leone */
    SLL = "SLL",
    /** Somali shilling */
    SOS = "SOS",
    /** Surinamese dollar */
    SRD = "SRD",
    /** South Sudanese pound */
    SSP = "SSP",
    /** São Tomé and Príncipe dobra */
    STN = "STN",
    /** Salvadoran colón */
    SVC = "SVC",
    /** Syrian pound */
    SYP = "SYP",
    /** Swazi lilangeni */
    SZL = "SZL",
    /** Thai baht */
    THB = "THB",
    /** Tajikistani somoni */
    TJS = "TJS",
    /** Turkmenistan manat */
    TMT = "TMT",
    /** Tunisian dinar */
    TND = "TND",
    /** Tongan paʻanga */
    TOP = "TOP",
    /** Turkish lira */
    TRY = "TRY",
    /** Trinidad and Tobago dollar */
    TTD = "TTD",
    /** New Taiwan dollar */
    TWD = "TWD",
    /** Tanzanian shilling */
    TZS = "TZS",
    /** Ukrainian hryvnia */
    UAH = "UAH",
    /** Ugandan shilling */
    UGX = "UGX",
    /** United States dollar */
    USD = "USD",
    /** Uruguayan peso */
    UYU = "UYU",
    /** Uzbekistan som */
    UZS = "UZS",
    /** Venezuelan bolívar soberano */
    VES = "VES",
    /** Vietnamese đồng */
    VND = "VND",
    /** Vanuatu vatu */
    VUV = "VUV",
    /** Samoan tala */
    WST = "WST",
    /** CFA franc BEAC */
    XAF = "XAF",
    /** East Caribbean dollar */
    XCD = "XCD",
    /** CFA franc BCEAO */
    XOF = "XOF",
    /** CFP franc (franc Pacifique) */
    XPF = "XPF",
    /** Yemeni rial */
    YER = "YER",
    /** South African rand */
    ZAR = "ZAR",
    /** Zambian kwacha */
    ZMW = "ZMW",
    /** Zimbabwean dollar */
    ZWL = "ZWL"
}
export declare type CurrentUser = {
    __typename?: 'CurrentUser';
    channels: Array<CurrentUserChannel>;
    id: Scalars['ID'];
    identifier: Scalars['String'];
};
export declare type CurrentUserChannel = {
    __typename?: 'CurrentUserChannel';
    code: Scalars['String'];
    id: Scalars['ID'];
    permissions: Array<Permission>;
    token: Scalars['String'];
};
export declare type CustomField = {
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
export declare type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | LocaleTextCustomFieldConfig | RelationCustomFieldConfig | StringCustomFieldConfig | TextCustomFieldConfig;
export declare type CustomFields = {
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
    Seller: Array<CustomFieldConfig>;
    ShippingMethod: Array<CustomFieldConfig>;
    StockLocation: Array<CustomFieldConfig>;
    TaxCategory: Array<CustomFieldConfig>;
    TaxRate: Array<CustomFieldConfig>;
    User: Array<CustomFieldConfig>;
    Zone: Array<CustomFieldConfig>;
};
export declare type Customer = Node & {
    __typename?: 'Customer';
    addresses?: Maybe<Array<Address>>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    emailAddress: Scalars['String'];
    firstName: Scalars['String'];
    groups: Array<CustomerGroup>;
    history: HistoryEntryList;
    id: Scalars['ID'];
    lastName: Scalars['String'];
    orders: OrderList;
    phoneNumber?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
    user?: Maybe<User>;
};
export declare type CustomerHistoryArgs = {
    options?: InputMaybe<HistoryEntryListOptions>;
};
export declare type CustomerOrdersArgs = {
    options?: InputMaybe<OrderListOptions>;
};
export declare type CustomerFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    emailAddress?: InputMaybe<StringOperators>;
    firstName?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    lastName?: InputMaybe<StringOperators>;
    phoneNumber?: InputMaybe<StringOperators>;
    postalCode?: InputMaybe<StringOperators>;
    title?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type CustomerGroup = Node & {
    __typename?: 'CustomerGroup';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    customers: CustomerList;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type CustomerGroupCustomersArgs = {
    options?: InputMaybe<CustomerListOptions>;
};
export declare type CustomerGroupFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type CustomerGroupList = PaginatedList & {
    __typename?: 'CustomerGroupList';
    items: Array<CustomerGroup>;
    totalItems: Scalars['Int'];
};
export declare type CustomerGroupListOptions = {
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
export declare type CustomerGroupSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type CustomerList = PaginatedList & {
    __typename?: 'CustomerList';
    items: Array<Customer>;
    totalItems: Scalars['Int'];
};
export declare type CustomerListOptions = {
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
export declare type CustomerSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    emailAddress?: InputMaybe<SortOrder>;
    firstName?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    lastName?: InputMaybe<SortOrder>;
    phoneNumber?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
/** Operators for filtering on a list of Date fields */
export declare type DateListOperators = {
    inList: Scalars['DateTime'];
};
/** Operators for filtering on a DateTime field */
export declare type DateOperators = {
    after?: InputMaybe<Scalars['DateTime']>;
    before?: InputMaybe<Scalars['DateTime']>;
    between?: InputMaybe<DateRange>;
    eq?: InputMaybe<Scalars['DateTime']>;
    isNull?: InputMaybe<Scalars['Boolean']>;
};
export declare type DateRange = {
    end: Scalars['DateTime'];
    start: Scalars['DateTime'];
};
/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export declare type DateTimeCustomFieldConfig = CustomField & {
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
export declare type DeleteAssetInput = {
    assetId: Scalars['ID'];
    deleteFromAllChannels?: InputMaybe<Scalars['Boolean']>;
    force?: InputMaybe<Scalars['Boolean']>;
};
export declare type DeleteAssetsInput = {
    assetIds: Array<Scalars['ID']>;
    deleteFromAllChannels?: InputMaybe<Scalars['Boolean']>;
    force?: InputMaybe<Scalars['Boolean']>;
};
export declare type DeleteStockLocationInput = {
    id: Scalars['ID'];
    transferToLocationId?: InputMaybe<Scalars['ID']>;
};
export declare type DeletionResponse = {
    __typename?: 'DeletionResponse';
    message?: Maybe<Scalars['String']>;
    result: DeletionResult;
};
export declare enum DeletionResult {
    /** The entity was successfully deleted */
    DELETED = "DELETED",
    /** Deletion did not take place, reason given in message */
    NOT_DELETED = "NOT_DELETED"
}
export declare type Discount = {
    __typename?: 'Discount';
    adjustmentSource: Scalars['String'];
    amount: Scalars['Money'];
    amountWithTax: Scalars['Money'];
    description: Scalars['String'];
    type: AdjustmentType;
};
/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export declare type EmailAddressConflictError = ErrorResult & {
    __typename?: 'EmailAddressConflictError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned if no OrderLines have been specified for the operation */
export declare type EmptyOrderLineSelectionError = ErrorResult & {
    __typename?: 'EmptyOrderLineSelectionError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare enum ErrorCode {
    ALREADY_REFUNDED_ERROR = "ALREADY_REFUNDED_ERROR",
    CANCEL_ACTIVE_ORDER_ERROR = "CANCEL_ACTIVE_ORDER_ERROR",
    CANCEL_PAYMENT_ERROR = "CANCEL_PAYMENT_ERROR",
    CHANNEL_DEFAULT_LANGUAGE_ERROR = "CHANNEL_DEFAULT_LANGUAGE_ERROR",
    COUPON_CODE_EXPIRED_ERROR = "COUPON_CODE_EXPIRED_ERROR",
    COUPON_CODE_INVALID_ERROR = "COUPON_CODE_INVALID_ERROR",
    COUPON_CODE_LIMIT_ERROR = "COUPON_CODE_LIMIT_ERROR",
    CREATE_FULFILLMENT_ERROR = "CREATE_FULFILLMENT_ERROR",
    EMAIL_ADDRESS_CONFLICT_ERROR = "EMAIL_ADDRESS_CONFLICT_ERROR",
    EMPTY_ORDER_LINE_SELECTION_ERROR = "EMPTY_ORDER_LINE_SELECTION_ERROR",
    FACET_IN_USE_ERROR = "FACET_IN_USE_ERROR",
    FULFILLMENT_STATE_TRANSITION_ERROR = "FULFILLMENT_STATE_TRANSITION_ERROR",
    INELIGIBLE_SHIPPING_METHOD_ERROR = "INELIGIBLE_SHIPPING_METHOD_ERROR",
    INSUFFICIENT_STOCK_ERROR = "INSUFFICIENT_STOCK_ERROR",
    INSUFFICIENT_STOCK_ON_HAND_ERROR = "INSUFFICIENT_STOCK_ON_HAND_ERROR",
    INVALID_CREDENTIALS_ERROR = "INVALID_CREDENTIALS_ERROR",
    INVALID_FULFILLMENT_HANDLER_ERROR = "INVALID_FULFILLMENT_HANDLER_ERROR",
    ITEMS_ALREADY_FULFILLED_ERROR = "ITEMS_ALREADY_FULFILLED_ERROR",
    LANGUAGE_NOT_AVAILABLE_ERROR = "LANGUAGE_NOT_AVAILABLE_ERROR",
    MANUAL_PAYMENT_STATE_ERROR = "MANUAL_PAYMENT_STATE_ERROR",
    MIME_TYPE_ERROR = "MIME_TYPE_ERROR",
    MISSING_CONDITIONS_ERROR = "MISSING_CONDITIONS_ERROR",
    MULTIPLE_ORDER_ERROR = "MULTIPLE_ORDER_ERROR",
    NATIVE_AUTH_STRATEGY_ERROR = "NATIVE_AUTH_STRATEGY_ERROR",
    NEGATIVE_QUANTITY_ERROR = "NEGATIVE_QUANTITY_ERROR",
    NOTHING_TO_REFUND_ERROR = "NOTHING_TO_REFUND_ERROR",
    NO_ACTIVE_ORDER_ERROR = "NO_ACTIVE_ORDER_ERROR",
    NO_CHANGES_SPECIFIED_ERROR = "NO_CHANGES_SPECIFIED_ERROR",
    ORDER_LIMIT_ERROR = "ORDER_LIMIT_ERROR",
    ORDER_MODIFICATION_ERROR = "ORDER_MODIFICATION_ERROR",
    ORDER_MODIFICATION_STATE_ERROR = "ORDER_MODIFICATION_STATE_ERROR",
    ORDER_STATE_TRANSITION_ERROR = "ORDER_STATE_TRANSITION_ERROR",
    PAYMENT_METHOD_MISSING_ERROR = "PAYMENT_METHOD_MISSING_ERROR",
    PAYMENT_ORDER_MISMATCH_ERROR = "PAYMENT_ORDER_MISMATCH_ERROR",
    PAYMENT_STATE_TRANSITION_ERROR = "PAYMENT_STATE_TRANSITION_ERROR",
    PRODUCT_OPTION_IN_USE_ERROR = "PRODUCT_OPTION_IN_USE_ERROR",
    QUANTITY_TOO_GREAT_ERROR = "QUANTITY_TOO_GREAT_ERROR",
    REFUND_ORDER_STATE_ERROR = "REFUND_ORDER_STATE_ERROR",
    REFUND_PAYMENT_ID_MISSING_ERROR = "REFUND_PAYMENT_ID_MISSING_ERROR",
    REFUND_STATE_TRANSITION_ERROR = "REFUND_STATE_TRANSITION_ERROR",
    SETTLE_PAYMENT_ERROR = "SETTLE_PAYMENT_ERROR",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
export declare type ErrorResult = {
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type Facet = Node & {
    __typename?: 'Facet';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    isPrivate: Scalars['Boolean'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<FacetTranslation>;
    updatedAt: Scalars['DateTime'];
    values: Array<FacetValue>;
};
export declare type FacetFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    isPrivate?: InputMaybe<BooleanOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type FacetInUseError = ErrorResult & {
    __typename?: 'FacetInUseError';
    errorCode: ErrorCode;
    facetCode: Scalars['String'];
    message: Scalars['String'];
    productCount: Scalars['Int'];
    variantCount: Scalars['Int'];
};
export declare type FacetList = PaginatedList & {
    __typename?: 'FacetList';
    items: Array<Facet>;
    totalItems: Scalars['Int'];
};
export declare type FacetListOptions = {
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
export declare type FacetSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type FacetTranslation = {
    __typename?: 'FacetTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type FacetTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
export declare type FacetValue = Node & {
    __typename?: 'FacetValue';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    facet: Facet;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<FacetValueTranslation>;
    updatedAt: Scalars['DateTime'];
};
/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export declare type FacetValueFilterInput = {
    and?: InputMaybe<Scalars['ID']>;
    or?: InputMaybe<Array<Scalars['ID']>>;
};
export declare type FacetValueFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type FacetValueList = PaginatedList & {
    __typename?: 'FacetValueList';
    items: Array<FacetValue>;
    totalItems: Scalars['Int'];
};
export declare type FacetValueListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<FacetValueFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<FacetValueSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};
/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export declare type FacetValueResult = {
    __typename?: 'FacetValueResult';
    count: Scalars['Int'];
    facetValue: FacetValue;
};
export declare type FacetValueSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type FacetValueTranslation = {
    __typename?: 'FacetValueTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type FacetValueTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
export declare type FloatCustomFieldConfig = CustomField & {
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
export declare type FulfillOrderInput = {
    handler: ConfigurableOperationInput;
    lines: Array<OrderLineInput>;
};
export declare type Fulfillment = Node & {
    __typename?: 'Fulfillment';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    lines: Array<FulfillmentLine>;
    method: Scalars['String'];
    nextStates: Array<Scalars['String']>;
    state: Scalars['String'];
    /** @deprecated Use the `lines` field instead */
    summary: Array<FulfillmentLine>;
    trackingCode?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};
export declare type FulfillmentLine = {
    __typename?: 'FulfillmentLine';
    fulfillment: Fulfillment;
    fulfillmentId: Scalars['ID'];
    orderLine: OrderLine;
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};
/** Returned when there is an error in transitioning the Fulfillment state */
export declare type FulfillmentStateTransitionError = ErrorResult & {
    __typename?: 'FulfillmentStateTransitionError';
    errorCode: ErrorCode;
    fromState: Scalars['String'];
    message: Scalars['String'];
    toState: Scalars['String'];
    transitionError: Scalars['String'];
};
export declare enum GlobalFlag {
    FALSE = "FALSE",
    INHERIT = "INHERIT",
    TRUE = "TRUE"
}
export declare type GlobalSettings = {
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
export declare type HistoryEntry = Node & {
    __typename?: 'HistoryEntry';
    administrator?: Maybe<Administrator>;
    createdAt: Scalars['DateTime'];
    data: Scalars['JSON'];
    id: Scalars['ID'];
    isPublic: Scalars['Boolean'];
    type: HistoryEntryType;
    updatedAt: Scalars['DateTime'];
};
export declare type HistoryEntryFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    isPublic?: InputMaybe<BooleanOperators>;
    type?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type HistoryEntryList = PaginatedList & {
    __typename?: 'HistoryEntryList';
    items: Array<HistoryEntry>;
    totalItems: Scalars['Int'];
};
export declare type HistoryEntryListOptions = {
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
export declare type HistoryEntrySortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare enum HistoryEntryType {
    CUSTOMER_ADDED_TO_GROUP = "CUSTOMER_ADDED_TO_GROUP",
    CUSTOMER_ADDRESS_CREATED = "CUSTOMER_ADDRESS_CREATED",
    CUSTOMER_ADDRESS_DELETED = "CUSTOMER_ADDRESS_DELETED",
    CUSTOMER_ADDRESS_UPDATED = "CUSTOMER_ADDRESS_UPDATED",
    CUSTOMER_DETAIL_UPDATED = "CUSTOMER_DETAIL_UPDATED",
    CUSTOMER_EMAIL_UPDATE_REQUESTED = "CUSTOMER_EMAIL_UPDATE_REQUESTED",
    CUSTOMER_EMAIL_UPDATE_VERIFIED = "CUSTOMER_EMAIL_UPDATE_VERIFIED",
    CUSTOMER_NOTE = "CUSTOMER_NOTE",
    CUSTOMER_PASSWORD_RESET_REQUESTED = "CUSTOMER_PASSWORD_RESET_REQUESTED",
    CUSTOMER_PASSWORD_RESET_VERIFIED = "CUSTOMER_PASSWORD_RESET_VERIFIED",
    CUSTOMER_PASSWORD_UPDATED = "CUSTOMER_PASSWORD_UPDATED",
    CUSTOMER_REGISTERED = "CUSTOMER_REGISTERED",
    CUSTOMER_REMOVED_FROM_GROUP = "CUSTOMER_REMOVED_FROM_GROUP",
    CUSTOMER_VERIFIED = "CUSTOMER_VERIFIED",
    ORDER_CANCELLATION = "ORDER_CANCELLATION",
    ORDER_COUPON_APPLIED = "ORDER_COUPON_APPLIED",
    ORDER_COUPON_REMOVED = "ORDER_COUPON_REMOVED",
    ORDER_FULFILLMENT = "ORDER_FULFILLMENT",
    ORDER_FULFILLMENT_TRANSITION = "ORDER_FULFILLMENT_TRANSITION",
    ORDER_MODIFIED = "ORDER_MODIFIED",
    ORDER_NOTE = "ORDER_NOTE",
    ORDER_PAYMENT_TRANSITION = "ORDER_PAYMENT_TRANSITION",
    ORDER_REFUND_TRANSITION = "ORDER_REFUND_TRANSITION",
    ORDER_STATE_TRANSITION = "ORDER_STATE_TRANSITION"
}
/** Operators for filtering on a list of ID fields */
export declare type IdListOperators = {
    inList: Scalars['ID'];
};
/** Operators for filtering on an ID field */
export declare type IdOperators = {
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    isNull?: InputMaybe<Scalars['Boolean']>;
    notEq?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
};
export declare type ImportInfo = {
    __typename?: 'ImportInfo';
    errors?: Maybe<Array<Scalars['String']>>;
    imported: Scalars['Int'];
    processed: Scalars['Int'];
};
/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export declare type IneligibleShippingMethodError = ErrorResult & {
    __typename?: 'IneligibleShippingMethodError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned when attempting to add more items to the Order than are available */
export declare type InsufficientStockError = ErrorResult & {
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
export declare type InsufficientStockOnHandError = ErrorResult & {
    __typename?: 'InsufficientStockOnHandError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    productVariantId: Scalars['ID'];
    productVariantName: Scalars['String'];
    stockOnHand: Scalars['Int'];
};
export declare type IntCustomFieldConfig = CustomField & {
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
export declare type InvalidCredentialsError = ErrorResult & {
    __typename?: 'InvalidCredentialsError';
    authenticationError: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned if the specified FulfillmentHandler code is not valid */
export declare type InvalidFulfillmentHandlerError = ErrorResult & {
    __typename?: 'InvalidFulfillmentHandlerError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned if the specified items are already part of a Fulfillment */
export declare type ItemsAlreadyFulfilledError = ErrorResult & {
    __typename?: 'ItemsAlreadyFulfilledError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type Job = Node & {
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
export declare type JobBufferSize = {
    __typename?: 'JobBufferSize';
    bufferId: Scalars['String'];
    size: Scalars['Int'];
};
export declare type JobFilterParameter = {
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
export declare type JobList = PaginatedList & {
    __typename?: 'JobList';
    items: Array<Job>;
    totalItems: Scalars['Int'];
};
export declare type JobListOptions = {
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
export declare type JobQueue = {
    __typename?: 'JobQueue';
    name: Scalars['String'];
    running: Scalars['Boolean'];
};
export declare type JobSortParameter = {
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
export declare enum JobState {
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    PENDING = "PENDING",
    RETRYING = "RETRYING",
    RUNNING = "RUNNING"
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
export declare enum LanguageCode {
    /** Afrikaans */
    af = "af",
    /** Akan */
    ak = "ak",
    /** Amharic */
    am = "am",
    /** Arabic */
    ar = "ar",
    /** Assamese */
    as = "as",
    /** Azerbaijani */
    az = "az",
    /** Belarusian */
    be = "be",
    /** Bulgarian */
    bg = "bg",
    /** Bambara */
    bm = "bm",
    /** Bangla */
    bn = "bn",
    /** Tibetan */
    bo = "bo",
    /** Breton */
    br = "br",
    /** Bosnian */
    bs = "bs",
    /** Catalan */
    ca = "ca",
    /** Chechen */
    ce = "ce",
    /** Corsican */
    co = "co",
    /** Czech */
    cs = "cs",
    /** Church Slavic */
    cu = "cu",
    /** Welsh */
    cy = "cy",
    /** Danish */
    da = "da",
    /** German */
    de = "de",
    /** Austrian German */
    de_AT = "de_AT",
    /** Swiss High German */
    de_CH = "de_CH",
    /** Dzongkha */
    dz = "dz",
    /** Ewe */
    ee = "ee",
    /** Greek */
    el = "el",
    /** English */
    en = "en",
    /** Australian English */
    en_AU = "en_AU",
    /** Canadian English */
    en_CA = "en_CA",
    /** British English */
    en_GB = "en_GB",
    /** American English */
    en_US = "en_US",
    /** Esperanto */
    eo = "eo",
    /** Spanish */
    es = "es",
    /** European Spanish */
    es_ES = "es_ES",
    /** Mexican Spanish */
    es_MX = "es_MX",
    /** Estonian */
    et = "et",
    /** Basque */
    eu = "eu",
    /** Persian */
    fa = "fa",
    /** Dari */
    fa_AF = "fa_AF",
    /** Fulah */
    ff = "ff",
    /** Finnish */
    fi = "fi",
    /** Faroese */
    fo = "fo",
    /** French */
    fr = "fr",
    /** Canadian French */
    fr_CA = "fr_CA",
    /** Swiss French */
    fr_CH = "fr_CH",
    /** Western Frisian */
    fy = "fy",
    /** Irish */
    ga = "ga",
    /** Scottish Gaelic */
    gd = "gd",
    /** Galician */
    gl = "gl",
    /** Gujarati */
    gu = "gu",
    /** Manx */
    gv = "gv",
    /** Hausa */
    ha = "ha",
    /** Hebrew */
    he = "he",
    /** Hindi */
    hi = "hi",
    /** Croatian */
    hr = "hr",
    /** Haitian Creole */
    ht = "ht",
    /** Hungarian */
    hu = "hu",
    /** Armenian */
    hy = "hy",
    /** Interlingua */
    ia = "ia",
    /** Indonesian */
    id = "id",
    /** Igbo */
    ig = "ig",
    /** Sichuan Yi */
    ii = "ii",
    /** Icelandic */
    is = "is",
    /** Italian */
    it = "it",
    /** Japanese */
    ja = "ja",
    /** Javanese */
    jv = "jv",
    /** Georgian */
    ka = "ka",
    /** Kikuyu */
    ki = "ki",
    /** Kazakh */
    kk = "kk",
    /** Kalaallisut */
    kl = "kl",
    /** Khmer */
    km = "km",
    /** Kannada */
    kn = "kn",
    /** Korean */
    ko = "ko",
    /** Kashmiri */
    ks = "ks",
    /** Kurdish */
    ku = "ku",
    /** Cornish */
    kw = "kw",
    /** Kyrgyz */
    ky = "ky",
    /** Latin */
    la = "la",
    /** Luxembourgish */
    lb = "lb",
    /** Ganda */
    lg = "lg",
    /** Lingala */
    ln = "ln",
    /** Lao */
    lo = "lo",
    /** Lithuanian */
    lt = "lt",
    /** Luba-Katanga */
    lu = "lu",
    /** Latvian */
    lv = "lv",
    /** Malagasy */
    mg = "mg",
    /** Maori */
    mi = "mi",
    /** Macedonian */
    mk = "mk",
    /** Malayalam */
    ml = "ml",
    /** Mongolian */
    mn = "mn",
    /** Marathi */
    mr = "mr",
    /** Malay */
    ms = "ms",
    /** Maltese */
    mt = "mt",
    /** Burmese */
    my = "my",
    /** Norwegian Bokmål */
    nb = "nb",
    /** North Ndebele */
    nd = "nd",
    /** Nepali */
    ne = "ne",
    /** Dutch */
    nl = "nl",
    /** Flemish */
    nl_BE = "nl_BE",
    /** Norwegian Nynorsk */
    nn = "nn",
    /** Nyanja */
    ny = "ny",
    /** Oromo */
    om = "om",
    /** Odia */
    or = "or",
    /** Ossetic */
    os = "os",
    /** Punjabi */
    pa = "pa",
    /** Polish */
    pl = "pl",
    /** Pashto */
    ps = "ps",
    /** Portuguese */
    pt = "pt",
    /** Brazilian Portuguese */
    pt_BR = "pt_BR",
    /** European Portuguese */
    pt_PT = "pt_PT",
    /** Quechua */
    qu = "qu",
    /** Romansh */
    rm = "rm",
    /** Rundi */
    rn = "rn",
    /** Romanian */
    ro = "ro",
    /** Moldavian */
    ro_MD = "ro_MD",
    /** Russian */
    ru = "ru",
    /** Kinyarwanda */
    rw = "rw",
    /** Sanskrit */
    sa = "sa",
    /** Sindhi */
    sd = "sd",
    /** Northern Sami */
    se = "se",
    /** Sango */
    sg = "sg",
    /** Sinhala */
    si = "si",
    /** Slovak */
    sk = "sk",
    /** Slovenian */
    sl = "sl",
    /** Samoan */
    sm = "sm",
    /** Shona */
    sn = "sn",
    /** Somali */
    so = "so",
    /** Albanian */
    sq = "sq",
    /** Serbian */
    sr = "sr",
    /** Southern Sotho */
    st = "st",
    /** Sundanese */
    su = "su",
    /** Swedish */
    sv = "sv",
    /** Swahili */
    sw = "sw",
    /** Congo Swahili */
    sw_CD = "sw_CD",
    /** Tamil */
    ta = "ta",
    /** Telugu */
    te = "te",
    /** Tajik */
    tg = "tg",
    /** Thai */
    th = "th",
    /** Tigrinya */
    ti = "ti",
    /** Turkmen */
    tk = "tk",
    /** Tongan */
    to = "to",
    /** Turkish */
    tr = "tr",
    /** Tatar */
    tt = "tt",
    /** Uyghur */
    ug = "ug",
    /** Ukrainian */
    uk = "uk",
    /** Urdu */
    ur = "ur",
    /** Uzbek */
    uz = "uz",
    /** Vietnamese */
    vi = "vi",
    /** Volapük */
    vo = "vo",
    /** Wolof */
    wo = "wo",
    /** Xhosa */
    xh = "xh",
    /** Yiddish */
    yi = "yi",
    /** Yoruba */
    yo = "yo",
    /** Chinese */
    zh = "zh",
    /** Simplified Chinese */
    zh_Hans = "zh_Hans",
    /** Traditional Chinese */
    zh_Hant = "zh_Hant",
    /** Zulu */
    zu = "zu"
}
/** Returned if attempting to set a Channel's defaultLanguageCode to a language which is not enabled in GlobalSettings */
export declare type LanguageNotAvailableError = ErrorResult & {
    __typename?: 'LanguageNotAvailableError';
    errorCode: ErrorCode;
    languageCode: Scalars['String'];
    message: Scalars['String'];
};
export declare type LocaleStringCustomFieldConfig = CustomField & {
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
export declare type LocaleTextCustomFieldConfig = CustomField & {
    __typename?: 'LocaleTextCustomFieldConfig';
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
export declare type LocalizedString = {
    __typename?: 'LocalizedString';
    languageCode: LanguageCode;
    value: Scalars['String'];
};
export declare enum LogicalOperator {
    AND = "AND",
    OR = "OR"
}
export declare type ManualPaymentInput = {
    metadata?: InputMaybe<Scalars['JSON']>;
    method: Scalars['String'];
    orderId: Scalars['ID'];
    transactionId?: InputMaybe<Scalars['String']>;
};
/**
 * Returned when a call to addManualPaymentToOrder is made but the Order
 * is not in the required state.
 */
export declare type ManualPaymentStateError = ErrorResult & {
    __typename?: 'ManualPaymentStateError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type MimeTypeError = ErrorResult & {
    __typename?: 'MimeTypeError';
    errorCode: ErrorCode;
    fileName: Scalars['String'];
    message: Scalars['String'];
    mimeType: Scalars['String'];
};
/** Returned if a PromotionCondition has neither a couponCode nor any conditions set */
export declare type MissingConditionsError = ErrorResult & {
    __typename?: 'MissingConditionsError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type ModifyOrderInput = {
    addItems?: InputMaybe<Array<AddItemInput>>;
    adjustOrderLines?: InputMaybe<Array<OrderLineInput>>;
    couponCodes?: InputMaybe<Array<Scalars['String']>>;
    dryRun: Scalars['Boolean'];
    note?: InputMaybe<Scalars['String']>;
    options?: InputMaybe<ModifyOrderOptions>;
    orderId: Scalars['ID'];
    refund?: InputMaybe<AdministratorRefundInput>;
    surcharges?: InputMaybe<Array<SurchargeInput>>;
    updateBillingAddress?: InputMaybe<UpdateOrderAddressInput>;
    updateShippingAddress?: InputMaybe<UpdateOrderAddressInput>;
};
export declare type ModifyOrderOptions = {
    freezePromotions?: InputMaybe<Scalars['Boolean']>;
    recalculateShipping?: InputMaybe<Scalars['Boolean']>;
};
export declare type ModifyOrderResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | InsufficientStockError | NegativeQuantityError | NoChangesSpecifiedError | Order | OrderLimitError | OrderModificationStateError | PaymentMethodMissingError | RefundPaymentIdMissingError;
export declare type MoveCollectionInput = {
    collectionId: Scalars['ID'];
    index: Scalars['Int'];
    parentId: Scalars['ID'];
};
/** Returned if an operation has specified OrderLines from multiple Orders */
export declare type MultipleOrderError = ErrorResult & {
    __typename?: 'MultipleOrderError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type Mutation = {
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
    /** Applies the given coupon code to the draft Order */
    applyCouponCodeToDraftOrder: ApplyCouponCodeResult;
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
    cancelJob: Job;
    cancelOrder: CancelOrderResult;
    cancelPayment: CancelPaymentResult;
    /** clean expired campaign coupons */
    cleanExpiredCampaignCoupons: DeletionResponse;
    /** clean all union cache */
    cleanSessionCache: Scalars['Boolean'];
    /** Create a new Administrator */
    createAdministrator: Administrator;
    /** Create a new Asset */
    createAssets: Array<CreateAssetResult>;
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
    /** Create a new Facet */
    createFacet: Facet;
    /** Create one or more FacetValues */
    createFacetValues: Array<FacetValue>;
    /** 后端直接为用户, 申请特定活动的优惠码, 并推送邮箱, 用来支撑邮件营销, 比如: 每次推1000个用户邮箱. */
    createMailerCampaignForUsers?: Maybe<Scalars['Boolean']>;
    /** Create existing PaymentMethod */
    createPaymentMethod: PaymentMethod;
    /** Create a new Product */
    createProduct: Product;
    /** Create a new ProductOption within a ProductOptionGroup */
    createProductOption: ProductOption;
    /** Create a new ProductOptionGroup */
    createProductOptionGroup: ProductOptionGroup;
    /** Create a set of ProductVariants based on the OptionGroups assigned to the given Product */
    createProductVariants: Array<Maybe<ProductVariant>>;
    createPromotion: CreatePromotionResult;
    /** Create a new Role */
    createRole: Role;
    /** Create a new Seller */
    createSeller: Seller;
    /** Create a new Setting */
    createSetting: Setting;
    /** Create a new ShippingMethod */
    createShippingMethod: ShippingMethod;
    createStockLocation: StockLocation;
    /** Create a new Subscription */
    createSubscription: Subscription;
    /** Create a new Subscription Facet */
    createSubscriptionFacet: SubscriptionFacet;
    /** Create one or more Subscription FacetValues */
    createSubscriptionFacetValues: Array<SubscriptionFacetValue>;
    /** Create a new Tag */
    createTag: Tag;
    /** Create a new TaxCategory */
    createTaxCategory: TaxCategory;
    /** Create a new TaxRate */
    createTaxRate: TaxRate;
    /** Create a new Zone */
    createZone: Zone;
    /** Delete an Administrator */
    deleteAdministrator: DeletionResponse;
    /** Delete an Asset */
    deleteAsset: DeletionResponse;
    /** Delete multiple Assets */
    deleteAssets: DeletionResponse;
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
    /** Delete an existing Facet */
    deleteFacet: DeletionResponse;
    /** Delete one or more FacetValues */
    deleteFacetValues: Array<DeletionResponse>;
    /** Delete multiple existing Facets */
    deleteFacets: Array<DeletionResponse>;
    deleteOrderNote: DeletionResponse;
    /** Delete a PaymentMethod */
    deletePaymentMethod: DeletionResponse;
    /** Delete a Product */
    deleteProduct: DeletionResponse;
    /** Delete a ProductOption */
    deleteProductOption: DeletionResponse;
    /** Delete a ProductVariant */
    deleteProductVariant: DeletionResponse;
    /** Delete multiple ProductVariants */
    deleteProductVariants: Array<DeletionResponse>;
    /** Delete multiple Products */
    deleteProducts: Array<DeletionResponse>;
    deletePromotion: DeletionResponse;
    /** Delete an existing Role */
    deleteRole: DeletionResponse;
    /** Delete a Seller */
    deleteSeller: DeletionResponse;
    /** Delete an existing Setting */
    deleteSetting: DeletionResponse;
    /** Delete a ShippingMethod */
    deleteShippingMethod: DeletionResponse;
    deleteStockLocation: DeletionResponse;
    /** Delete an existing Subscription */
    deleteSubscription: DeletionResponse;
    /** Delete an existing Subscription Facet */
    deleteSubscriptionFacet: DeletionResponse;
    /** Delete one or more Subscription FacetValues */
    deleteSubscriptionFacetValues: Array<DeletionResponse>;
    /** Delete an existing Tag */
    deleteTag: DeletionResponse;
    /** Deletes a TaxCategory */
    deleteTaxCategory: DeletionResponse;
    /** Delete a TaxRate */
    deleteTaxRate: DeletionResponse;
    /** Delete a Zone */
    deleteZone: DeletionResponse;
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
    refundOrder: RefundOrderResult;
    reindex: Job;
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
    /** Removes ProductVariants from the specified Channel */
    removeProductVariantsFromChannel: Array<ProductVariant>;
    /** Removes all ProductVariants of Product from the specified Channel */
    removeProductsFromChannel: Array<Product>;
    /** Removes Promotions from the specified Channel */
    removePromotionsFromChannel: Array<Promotion>;
    /** Remove all settled jobs in the given queues older than the given date. Returns the number of jobs deleted. */
    removeSettledJobs: Scalars['Int'];
    /** Revalite slug for next ssg */
    revalidateSlug: Scalars['Boolean'];
    runPendingSearchIndexUpdates: Success;
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
    /** Sync setting from html template */
    syncSettingsFromTemplates: Scalars['Boolean'];
    transitionFulfillmentToState: TransitionFulfillmentToStateResult;
    transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
    transitionPaymentToState: TransitionPaymentToStateResult;
    /** Update the active (currently logged-in) Administrator */
    updateActiveAdministrator: Administrator;
    /** Update an existing Administrator */
    updateAdministrator: Administrator;
    /** Update an existing Asset */
    updateAsset: Asset;
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
    /** Update an existing Customer */
    updateCustomer: UpdateCustomerResult;
    /** Update an existing Address */
    updateCustomerAddress: Address;
    /** Update an existing CustomerGroup */
    updateCustomerGroup: CustomerGroup;
    updateCustomerNote: HistoryEntry;
    /** Update an existing Facet */
    updateFacet: Facet;
    /** Update one or more FacetValues */
    updateFacetValues: Array<FacetValue>;
    updateGlobalSettings: UpdateGlobalSettingsResult;
    updateOrderNote: HistoryEntry;
    /** Update an existing PaymentMethod */
    updatePaymentMethod: PaymentMethod;
    /** Update an existing Product */
    updateProduct: Product;
    /** Create a new ProductOption within a ProductOptionGroup */
    updateProductOption: ProductOption;
    /** Update an existing ProductOptionGroup */
    updateProductOptionGroup: ProductOptionGroup;
    /** Update existing ProductVariants */
    updateProductVariants: Array<Maybe<ProductVariant>>;
    /** Update multiple existing Products */
    updateProducts: Array<Product>;
    updatePromotion: UpdatePromotionResult;
    /** Update an existing Role */
    updateRole: Role;
    /** Update an existing Seller */
    updateSeller: Seller;
    /** Update an existing Setting */
    updateSetting: Setting;
    /** Update an existing ShippingMethod */
    updateShippingMethod: ShippingMethod;
    updateStockLocation: StockLocation;
    /** Update an existing Subscription */
    updateSubscription: Subscription;
    /** Update an existing Subscription Facet */
    updateSubscriptionFacet: SubscriptionFacet;
    /** Update one or more Subscription FacetValues */
    updateSubscriptionFacetValues: Array<SubscriptionFacetValue>;
    /** Update an existing Tag */
    updateTag: Tag;
    /** Update an existing TaxCategory */
    updateTaxCategory: TaxCategory;
    /** Update an existing TaxRate */
    updateTaxRate: TaxRate;
    /** Update an existing Zone */
    updateZone: Zone;
};
export declare type MutationAddCustomersToGroupArgs = {
    customerGroupId: Scalars['ID'];
    customerIds: Array<Scalars['ID']>;
};
export declare type MutationAddFulfillmentToOrderArgs = {
    input: FulfillOrderInput;
};
export declare type MutationAddItemToDraftOrderArgs = {
    input: AddItemToDraftOrderInput;
    orderId: Scalars['ID'];
};
export declare type MutationAddManualPaymentToOrderArgs = {
    input: ManualPaymentInput;
};
export declare type MutationAddMembersToZoneArgs = {
    memberIds: Array<Scalars['ID']>;
    zoneId: Scalars['ID'];
};
export declare type MutationAddNoteToCustomerArgs = {
    input: AddNoteToCustomerInput;
};
export declare type MutationAddNoteToOrderArgs = {
    input: AddNoteToOrderInput;
};
export declare type MutationAddOptionGroupToProductArgs = {
    optionGroupId: Scalars['ID'];
    productId: Scalars['ID'];
};
export declare type MutationAdjustDraftOrderLineArgs = {
    input: AdjustDraftOrderLineInput;
    orderId: Scalars['ID'];
};
export declare type MutationApplyCouponCodeToDraftOrderArgs = {
    couponCode: Scalars['String'];
    orderId: Scalars['ID'];
};
export declare type MutationAssignAssetsToChannelArgs = {
    input: AssignAssetsToChannelInput;
};
export declare type MutationAssignCollectionsToChannelArgs = {
    input: AssignCollectionsToChannelInput;
};
export declare type MutationAssignFacetsToChannelArgs = {
    input: AssignFacetsToChannelInput;
};
export declare type MutationAssignProductVariantsToChannelArgs = {
    input: AssignProductVariantsToChannelInput;
};
export declare type MutationAssignProductsToChannelArgs = {
    input: AssignProductsToChannelInput;
};
export declare type MutationAssignPromotionsToChannelArgs = {
    input: AssignPromotionsToChannelInput;
};
export declare type MutationAssignRoleToAdministratorArgs = {
    administratorId: Scalars['ID'];
    roleId: Scalars['ID'];
};
export declare type MutationAuthenticateArgs = {
    input: AuthenticationInput;
    rememberMe?: InputMaybe<Scalars['Boolean']>;
};
export declare type MutationCancelJobArgs = {
    jobId: Scalars['ID'];
};
export declare type MutationCancelOrderArgs = {
    input: CancelOrderInput;
};
export declare type MutationCancelPaymentArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateAdministratorArgs = {
    input: CreateAdministratorInput;
};
export declare type MutationCreateAssetsArgs = {
    input: Array<CreateAssetInput>;
};
export declare type MutationCreateCampaignArgs = {
    input: CreateCampaignInput;
};
export declare type MutationCreateCampaignCouponArgs = {
    input: CreateCampaignCouponInput;
};
export declare type MutationCreateChannelArgs = {
    input: CreateChannelInput;
};
export declare type MutationCreateCollectionArgs = {
    input: CreateCollectionInput;
};
export declare type MutationCreateCountryArgs = {
    input: CreateCountryInput;
};
export declare type MutationCreateCustomerArgs = {
    input: CreateCustomerInput;
    password?: InputMaybe<Scalars['String']>;
};
export declare type MutationCreateCustomerAddressArgs = {
    customerId: Scalars['ID'];
    input: CreateAddressInput;
};
export declare type MutationCreateCustomerGroupArgs = {
    input: CreateCustomerGroupInput;
};
export declare type MutationCreateFacetArgs = {
    input: CreateFacetInput;
};
export declare type MutationCreateFacetValuesArgs = {
    input: Array<CreateFacetValueInput>;
};
export declare type MutationCreateMailerCampaignForUsersArgs = {
    campaignId: Scalars['Int'];
    emails: Array<Scalars['String']>;
    languageCode: LanguageCode;
};
export declare type MutationCreatePaymentMethodArgs = {
    input: CreatePaymentMethodInput;
};
export declare type MutationCreateProductArgs = {
    input: CreateProductInput;
};
export declare type MutationCreateProductOptionArgs = {
    input: CreateProductOptionInput;
};
export declare type MutationCreateProductOptionGroupArgs = {
    input: CreateProductOptionGroupInput;
};
export declare type MutationCreateProductVariantsArgs = {
    input: Array<CreateProductVariantInput>;
};
export declare type MutationCreatePromotionArgs = {
    input: CreatePromotionInput;
};
export declare type MutationCreateRoleArgs = {
    input: CreateRoleInput;
};
export declare type MutationCreateSellerArgs = {
    input: CreateSellerInput;
};
export declare type MutationCreateSettingArgs = {
    input: CreateSettingInput;
};
export declare type MutationCreateShippingMethodArgs = {
    input: CreateShippingMethodInput;
};
export declare type MutationCreateStockLocationArgs = {
    input: CreateStockLocationInput;
};
export declare type MutationCreateSubscriptionArgs = {
    input: CreateSubscriptionInput;
};
export declare type MutationCreateSubscriptionFacetArgs = {
    input: CreateSubscriptionFacetInput;
};
export declare type MutationCreateSubscriptionFacetValuesArgs = {
    input: Array<CreateSubscriptionFacetValueInput>;
};
export declare type MutationCreateTagArgs = {
    input: CreateTagInput;
};
export declare type MutationCreateTaxCategoryArgs = {
    input: CreateTaxCategoryInput;
};
export declare type MutationCreateTaxRateArgs = {
    input: CreateTaxRateInput;
};
export declare type MutationCreateZoneArgs = {
    input: CreateZoneInput;
};
export declare type MutationDeleteAdministratorArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteAssetArgs = {
    input: DeleteAssetInput;
};
export declare type MutationDeleteAssetsArgs = {
    input: DeleteAssetsInput;
};
export declare type MutationDeleteCampaignArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteCampaignCouponArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteChannelArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteCollectionArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteCollectionsArgs = {
    ids: Array<Scalars['ID']>;
};
export declare type MutationDeleteCountryArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteCustomerArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteCustomerAddressArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteCustomerGroupArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteCustomerNoteArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteDraftOrderArgs = {
    orderId: Scalars['ID'];
};
export declare type MutationDeleteFacetArgs = {
    force?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
};
export declare type MutationDeleteFacetValuesArgs = {
    force?: InputMaybe<Scalars['Boolean']>;
    ids: Array<Scalars['ID']>;
};
export declare type MutationDeleteFacetsArgs = {
    force?: InputMaybe<Scalars['Boolean']>;
    ids: Array<Scalars['ID']>;
};
export declare type MutationDeleteOrderNoteArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeletePaymentMethodArgs = {
    force?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
};
export declare type MutationDeleteProductArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteProductOptionArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteProductVariantArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteProductVariantsArgs = {
    ids: Array<Scalars['ID']>;
};
export declare type MutationDeleteProductsArgs = {
    ids: Array<Scalars['ID']>;
};
export declare type MutationDeletePromotionArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteRoleArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteSellerArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteSettingArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteShippingMethodArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteStockLocationArgs = {
    input: DeleteStockLocationInput;
};
export declare type MutationDeleteSubscriptionArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteSubscriptionFacetArgs = {
    force?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
};
export declare type MutationDeleteSubscriptionFacetValuesArgs = {
    force?: InputMaybe<Scalars['Boolean']>;
    ids: Array<Scalars['ID']>;
};
export declare type MutationDeleteTagArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteTaxCategoryArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteTaxRateArgs = {
    id: Scalars['ID'];
};
export declare type MutationDeleteZoneArgs = {
    id: Scalars['ID'];
};
export declare type MutationFlushBufferedJobsArgs = {
    bufferIds?: InputMaybe<Array<Scalars['String']>>;
};
export declare type MutationImportProductsArgs = {
    csvFile: Scalars['Upload'];
};
export declare type MutationLoginArgs = {
    password: Scalars['String'];
    rememberMe?: InputMaybe<Scalars['Boolean']>;
    username: Scalars['String'];
};
export declare type MutationModifyOrderArgs = {
    input: ModifyOrderInput;
};
export declare type MutationMoveCollectionArgs = {
    input: MoveCollectionInput;
};
export declare type MutationRefundOrderArgs = {
    input: RefundOrderInput;
};
export declare type MutationRemoveCollectionsFromChannelArgs = {
    input: RemoveCollectionsFromChannelInput;
};
export declare type MutationRemoveCouponCodeFromDraftOrderArgs = {
    couponCode: Scalars['String'];
    orderId: Scalars['ID'];
};
export declare type MutationRemoveCustomersFromGroupArgs = {
    customerGroupId: Scalars['ID'];
    customerIds: Array<Scalars['ID']>;
};
export declare type MutationRemoveDraftOrderLineArgs = {
    orderId: Scalars['ID'];
    orderLineId: Scalars['ID'];
};
export declare type MutationRemoveFacetsFromChannelArgs = {
    input: RemoveFacetsFromChannelInput;
};
export declare type MutationRemoveMembersFromZoneArgs = {
    memberIds: Array<Scalars['ID']>;
    zoneId: Scalars['ID'];
};
export declare type MutationRemoveOptionGroupFromProductArgs = {
    optionGroupId: Scalars['ID'];
    productId: Scalars['ID'];
};
export declare type MutationRemoveProductVariantsFromChannelArgs = {
    input: RemoveProductVariantsFromChannelInput;
};
export declare type MutationRemoveProductsFromChannelArgs = {
    input: RemoveProductsFromChannelInput;
};
export declare type MutationRemovePromotionsFromChannelArgs = {
    input: RemovePromotionsFromChannelInput;
};
export declare type MutationRemoveSettledJobsArgs = {
    olderThan?: InputMaybe<Scalars['DateTime']>;
    queueNames?: InputMaybe<Array<Scalars['String']>>;
};
export declare type MutationRevalidateSlugArgs = {
    slug: Scalars['String'];
};
export declare type MutationSetCustomerForDraftOrderArgs = {
    customerId?: InputMaybe<Scalars['ID']>;
    input?: InputMaybe<CreateCustomerInput>;
    orderId: Scalars['ID'];
};
export declare type MutationSetDraftOrderBillingAddressArgs = {
    input: CreateAddressInput;
    orderId: Scalars['ID'];
};
export declare type MutationSetDraftOrderCustomFieldsArgs = {
    input: UpdateOrderInput;
    orderId: Scalars['ID'];
};
export declare type MutationSetDraftOrderShippingAddressArgs = {
    input: CreateAddressInput;
    orderId: Scalars['ID'];
};
export declare type MutationSetDraftOrderShippingMethodArgs = {
    orderId: Scalars['ID'];
    shippingMethodId: Scalars['ID'];
};
export declare type MutationSetOrderCustomFieldsArgs = {
    input: UpdateOrderInput;
};
export declare type MutationSettlePaymentArgs = {
    id: Scalars['ID'];
};
export declare type MutationSettleRefundArgs = {
    input: SettleRefundInput;
};
export declare type MutationTransitionFulfillmentToStateArgs = {
    id: Scalars['ID'];
    state: Scalars['String'];
};
export declare type MutationTransitionOrderToStateArgs = {
    id: Scalars['ID'];
    state: Scalars['String'];
};
export declare type MutationTransitionPaymentToStateArgs = {
    id: Scalars['ID'];
    state: Scalars['String'];
};
export declare type MutationUpdateActiveAdministratorArgs = {
    input: UpdateActiveAdministratorInput;
};
export declare type MutationUpdateAdministratorArgs = {
    input: UpdateAdministratorInput;
};
export declare type MutationUpdateAssetArgs = {
    input: UpdateAssetInput;
};
export declare type MutationUpdateCampaignArgs = {
    input: UpdateCampaignInput;
};
export declare type MutationUpdateCampaignCouponArgs = {
    input: UpdateCampaignCouponInput;
};
export declare type MutationUpdateChannelArgs = {
    input: UpdateChannelInput;
};
export declare type MutationUpdateCollectionArgs = {
    input: UpdateCollectionInput;
};
export declare type MutationUpdateCountryArgs = {
    input: UpdateCountryInput;
};
export declare type MutationUpdateCustomerArgs = {
    input: UpdateCustomerInput;
};
export declare type MutationUpdateCustomerAddressArgs = {
    input: UpdateAddressInput;
};
export declare type MutationUpdateCustomerGroupArgs = {
    input: UpdateCustomerGroupInput;
};
export declare type MutationUpdateCustomerNoteArgs = {
    input: UpdateCustomerNoteInput;
};
export declare type MutationUpdateFacetArgs = {
    input: UpdateFacetInput;
};
export declare type MutationUpdateFacetValuesArgs = {
    input: Array<UpdateFacetValueInput>;
};
export declare type MutationUpdateGlobalSettingsArgs = {
    input: UpdateGlobalSettingsInput;
};
export declare type MutationUpdateOrderNoteArgs = {
    input: UpdateOrderNoteInput;
};
export declare type MutationUpdatePaymentMethodArgs = {
    input: UpdatePaymentMethodInput;
};
export declare type MutationUpdateProductArgs = {
    input: UpdateProductInput;
};
export declare type MutationUpdateProductOptionArgs = {
    input: UpdateProductOptionInput;
};
export declare type MutationUpdateProductOptionGroupArgs = {
    input: UpdateProductOptionGroupInput;
};
export declare type MutationUpdateProductVariantsArgs = {
    input: Array<UpdateProductVariantInput>;
};
export declare type MutationUpdateProductsArgs = {
    input: Array<UpdateProductInput>;
};
export declare type MutationUpdatePromotionArgs = {
    input: UpdatePromotionInput;
};
export declare type MutationUpdateRoleArgs = {
    input: UpdateRoleInput;
};
export declare type MutationUpdateSellerArgs = {
    input: UpdateSellerInput;
};
export declare type MutationUpdateSettingArgs = {
    input: UpdateSettingInput;
};
export declare type MutationUpdateShippingMethodArgs = {
    input: UpdateShippingMethodInput;
};
export declare type MutationUpdateStockLocationArgs = {
    input: UpdateStockLocationInput;
};
export declare type MutationUpdateSubscriptionArgs = {
    input: UpdateSubscriptionInput;
};
export declare type MutationUpdateSubscriptionFacetArgs = {
    input: UpdateSubscriptionFacetInput;
};
export declare type MutationUpdateSubscriptionFacetValuesArgs = {
    input: Array<UpdateSubscriptionFacetValueInput>;
};
export declare type MutationUpdateTagArgs = {
    input: UpdateTagInput;
};
export declare type MutationUpdateTaxCategoryArgs = {
    input: UpdateTaxCategoryInput;
};
export declare type MutationUpdateTaxRateArgs = {
    input: UpdateTaxRateInput;
};
export declare type MutationUpdateZoneArgs = {
    input: UpdateZoneInput;
};
export declare type NativeAuthInput = {
    password: Scalars['String'];
    username: Scalars['String'];
};
/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export declare type NativeAuthStrategyError = ErrorResult & {
    __typename?: 'NativeAuthStrategyError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError;
/** Returned when attempting to set a negative OrderLine quantity. */
export declare type NegativeQuantityError = ErrorResult & {
    __typename?: 'NegativeQuantityError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export declare type NoActiveOrderError = ErrorResult & {
    __typename?: 'NoActiveOrderError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned when a call to modifyOrder fails to specify any changes */
export declare type NoChangesSpecifiedError = ErrorResult & {
    __typename?: 'NoChangesSpecifiedError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type Node = {
    id: Scalars['ID'];
};
/** Returned if an attempting to refund an Order but neither items nor shipping refund was specified */
export declare type NothingToRefundError = ErrorResult & {
    __typename?: 'NothingToRefundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Operators for filtering on a list of Number fields */
export declare type NumberListOperators = {
    inList: Scalars['Float'];
};
/** Operators for filtering on a Int or Float field */
export declare type NumberOperators = {
    between?: InputMaybe<NumberRange>;
    eq?: InputMaybe<Scalars['Float']>;
    gt?: InputMaybe<Scalars['Float']>;
    gte?: InputMaybe<Scalars['Float']>;
    isNull?: InputMaybe<Scalars['Boolean']>;
    lt?: InputMaybe<Scalars['Float']>;
    lte?: InputMaybe<Scalars['Float']>;
};
export declare type NumberRange = {
    end: Scalars['Float'];
    start: Scalars['Float'];
};
export declare type Order = Node & {
    __typename?: 'Order';
    /** An order is active as long as the payment process has not been completed */
    active: Scalars['Boolean'];
    aggregateOrder?: Maybe<Order>;
    aggregateOrderId?: Maybe<Scalars['ID']>;
    billingAddress?: Maybe<OrderAddress>;
    channels: Array<Channel>;
    /** A unique code for the Order */
    code: Scalars['String'];
    /** An array of all coupon codes applied to the Order */
    couponCodes: Array<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    currencyCode: CurrencyCode;
    customFields?: Maybe<Scalars['JSON']>;
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
    sellerOrders?: Maybe<Array<Order>>;
    shipping: Scalars['Money'];
    shippingAddress?: Maybe<OrderAddress>;
    shippingLines: Array<ShippingLine>;
    shippingWithTax: Scalars['Money'];
    state: Scalars['String'];
    /**
     * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
     * discounts which have been prorated (proportionally distributed) amongst the OrderItems.
     * To get a total of all OrderLines which does not account for prorated discounts, use the
     * sum of `OrderLine.discountedLinePrice` values.
     */
    subTotal: Scalars['Money'];
    /** Same as subTotal, but inclusive of tax */
    subTotalWithTax: Scalars['Money'];
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
    total: Scalars['Money'];
    totalQuantity: Scalars['Int'];
    /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
    totalWithTax: Scalars['Money'];
    type: OrderType;
    updatedAt: Scalars['DateTime'];
};
export declare type OrderHistoryArgs = {
    options?: InputMaybe<HistoryEntryListOptions>;
};
export declare type OrderAddress = {
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
export declare type OrderFilterParameter = {
    active?: InputMaybe<BooleanOperators>;
    aggregateOrderId?: InputMaybe<IdOperators>;
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    currencyCode?: InputMaybe<StringOperators>;
    customerLastName?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
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
    type?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type OrderItem = Node & {
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
    discountedUnitPrice: Scalars['Money'];
    /** The price of a single unit including discounts and tax */
    discountedUnitPriceWithTax: Scalars['Money'];
    fulfillment?: Maybe<Fulfillment>;
    id: Scalars['ID'];
    /**
     * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
     * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
     * and refund calculations.
     */
    proratedUnitPrice: Scalars['Money'];
    /** The proratedUnitPrice including tax */
    proratedUnitPriceWithTax: Scalars['Money'];
    refundId?: Maybe<Scalars['ID']>;
    taxLines: Array<TaxLine>;
    taxRate: Scalars['Float'];
    /** The price of a single unit, excluding tax and discounts */
    unitPrice: Scalars['Money'];
    /** The price of a single unit, including tax but excluding discounts */
    unitPriceWithTax: Scalars['Money'];
    unitTax: Scalars['Money'];
    updatedAt: Scalars['DateTime'];
};
/** Returned when the maximum order size limit has been reached. */
export declare type OrderLimitError = ErrorResult & {
    __typename?: 'OrderLimitError';
    errorCode: ErrorCode;
    maxItems: Scalars['Int'];
    message: Scalars['String'];
};
export declare type OrderLine = Node & {
    __typename?: 'OrderLine';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    /** The price of the line including discounts, excluding tax */
    discountedLinePrice: Scalars['Money'];
    /** The price of the line including discounts and tax */
    discountedLinePriceWithTax: Scalars['Money'];
    /**
     * The price of a single unit including discounts, excluding tax.
     *
     * If Order-level discounts have been applied, this will not be the
     * actual taxable unit price (see `proratedUnitPrice`), but is generally the
     * correct price to display to customers to avoid confusion
     * about the internal handling of distributed Order-level discounts.
     */
    discountedUnitPrice: Scalars['Money'];
    /** The price of a single unit including discounts and tax */
    discountedUnitPriceWithTax: Scalars['Money'];
    discounts: Array<Discount>;
    featuredAsset?: Maybe<Asset>;
    fulfillmentLines?: Maybe<Array<FulfillmentLine>>;
    id: Scalars['ID'];
    /** The total price of the line excluding tax and discounts. */
    linePrice: Scalars['Money'];
    /** The total price of the line including tax but excluding discounts. */
    linePriceWithTax: Scalars['Money'];
    /** The total tax on this line */
    lineTax: Scalars['Money'];
    order: Order;
    /** The quantity at the time the Order was placed */
    orderPlacedQuantity: Scalars['Int'];
    productVariant: ProductVariant;
    /**
     * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
     * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
     * and refund calculations.
     */
    proratedLinePrice: Scalars['Money'];
    /** The proratedLinePrice including tax */
    proratedLinePriceWithTax: Scalars['Money'];
    /**
     * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
     * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
     * and refund calculations.
     */
    proratedUnitPrice: Scalars['Money'];
    /** The proratedUnitPrice including tax */
    proratedUnitPriceWithTax: Scalars['Money'];
    quantity: Scalars['Int'];
    taxLines: Array<TaxLine>;
    taxRate: Scalars['Float'];
    /** The price of a single unit, excluding tax and discounts */
    unitPrice: Scalars['Money'];
    /** Non-zero if the unitPrice has changed since it was initially added to Order */
    unitPriceChangeSinceAdded: Scalars['Money'];
    /** The price of a single unit, including tax but excluding discounts */
    unitPriceWithTax: Scalars['Money'];
    /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
    unitPriceWithTaxChangeSinceAdded: Scalars['Money'];
    updatedAt: Scalars['DateTime'];
};
export declare type OrderLineInput = {
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};
export declare type OrderList = PaginatedList & {
    __typename?: 'OrderList';
    items: Array<Order>;
    totalItems: Scalars['Int'];
};
export declare type OrderListOptions = {
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
export declare type OrderModification = Node & {
    __typename?: 'OrderModification';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    isSettled: Scalars['Boolean'];
    lines: Array<OrderModificationLine>;
    note: Scalars['String'];
    payment?: Maybe<Payment>;
    priceChange: Scalars['Money'];
    refund?: Maybe<Refund>;
    surcharges?: Maybe<Array<Surcharge>>;
    updatedAt: Scalars['DateTime'];
};
/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export declare type OrderModificationError = ErrorResult & {
    __typename?: 'OrderModificationError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type OrderModificationLine = {
    __typename?: 'OrderModificationLine';
    modification: OrderModification;
    modificationId: Scalars['ID'];
    orderLine: OrderLine;
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};
/** Returned when attempting to modify the contents of an Order that is not in the `Modifying` state. */
export declare type OrderModificationStateError = ErrorResult & {
    __typename?: 'OrderModificationStateError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type OrderProcessState = {
    __typename?: 'OrderProcessState';
    name: Scalars['String'];
    to: Array<Scalars['String']>;
};
export declare type OrderSortParameter = {
    aggregateOrderId?: InputMaybe<SortOrder>;
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    customerLastName?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
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
export declare type OrderStateTransitionError = ErrorResult & {
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
export declare type OrderTaxSummary = {
    __typename?: 'OrderTaxSummary';
    /** A description of this tax */
    description: Scalars['String'];
    /** The total net price or OrderItems to which this taxRate applies */
    taxBase: Scalars['Money'];
    /** The taxRate as a percentage */
    taxRate: Scalars['Float'];
    /** The total tax being applied to the Order at this taxRate */
    taxTotal: Scalars['Money'];
};
export declare enum OrderType {
    Aggregate = "Aggregate",
    Regular = "Regular",
    Seller = "Seller"
}
export declare type PaginatedList = {
    items: Array<Node>;
    totalItems: Scalars['Int'];
};
export declare type Payment = Node & {
    __typename?: 'Payment';
    amount: Scalars['Money'];
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
export declare type PaymentMethod = Node & {
    __typename?: 'PaymentMethod';
    checker?: Maybe<ConfigurableOperation>;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    enabled: Scalars['Boolean'];
    handler: ConfigurableOperation;
    id: Scalars['ID'];
    name: Scalars['String'];
    translations: Array<PaymentMethodTranslation>;
    updatedAt: Scalars['DateTime'];
};
export declare type PaymentMethodFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    enabled?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type PaymentMethodList = PaginatedList & {
    __typename?: 'PaymentMethodList';
    items: Array<PaymentMethod>;
    totalItems: Scalars['Int'];
};
export declare type PaymentMethodListOptions = {
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
export declare type PaymentMethodMissingError = ErrorResult & {
    __typename?: 'PaymentMethodMissingError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type PaymentMethodQuote = {
    __typename?: 'PaymentMethodQuote';
    code: Scalars['String'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    eligibilityMessage?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    isEligible: Scalars['Boolean'];
    name: Scalars['String'];
};
export declare type PaymentMethodSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type PaymentMethodTranslation = {
    __typename?: 'PaymentMethodTranslation';
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type PaymentMethodTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
/** Returned if an attempting to refund a Payment against OrderLines from a different Order */
export declare type PaymentOrderMismatchError = ErrorResult & {
    __typename?: 'PaymentOrderMismatchError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned when there is an error in transitioning the Payment state */
export declare type PaymentStateTransitionError = ErrorResult & {
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
export declare enum Permission {
    /** Authenticated means simply that the user is logged in */
    Authenticated = "Authenticated",
    /** Grants permission to create Administrator */
    CreateAdministrator = "CreateAdministrator",
    /** Grants permission to create Asset */
    CreateAsset = "CreateAsset",
    /** Grants permission to create Campaign */
    CreateCampaign = "CreateCampaign",
    /** Grants permission to create Products, Facets, Assets, Collections */
    CreateCatalog = "CreateCatalog",
    /** Grants permission to create Channel */
    CreateChannel = "CreateChannel",
    /** Grants permission to create Collection */
    CreateCollection = "CreateCollection",
    /** Grants permission to create Country */
    CreateCountry = "CreateCountry",
    /** Grants permission to create Customer */
    CreateCustomer = "CreateCustomer",
    /** Grants permission to create CustomerGroup */
    CreateCustomerGroup = "CreateCustomerGroup",
    /** Grants permission to create Facet */
    CreateFacet = "CreateFacet",
    /** Grants permission to create Order */
    CreateOrder = "CreateOrder",
    /** Grants permission to create PaymentMethod */
    CreatePaymentMethod = "CreatePaymentMethod",
    /** Grants permission to create Product */
    CreateProduct = "CreateProduct",
    /** Grants permission to create Promotion */
    CreatePromotion = "CreatePromotion",
    /** Grants permission to create Seller */
    CreateSeller = "CreateSeller",
    /** Grants permission to create Setting */
    CreateSetting = "CreateSetting",
    /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    CreateSettings = "CreateSettings",
    /** Grants permission to create ShippingMethod */
    CreateShippingMethod = "CreateShippingMethod",
    /** Grants permission to create Subscription */
    CreateSubscription = "CreateSubscription",
    /** Grants permission to create System */
    CreateSystem = "CreateSystem",
    /** Grants permission to create Tag */
    CreateTag = "CreateTag",
    /** Grants permission to create TaxCategory */
    CreateTaxCategory = "CreateTaxCategory",
    /** Grants permission to create TaxRate */
    CreateTaxRate = "CreateTaxRate",
    /** Grants permission to create Zone */
    CreateZone = "CreateZone",
    /** Grants permission to delete Administrator */
    DeleteAdministrator = "DeleteAdministrator",
    /** Grants permission to delete Asset */
    DeleteAsset = "DeleteAsset",
    /** Grants permission to delete Campaign */
    DeleteCampaign = "DeleteCampaign",
    /** Grants permission to delete Products, Facets, Assets, Collections */
    DeleteCatalog = "DeleteCatalog",
    /** Grants permission to delete Channel */
    DeleteChannel = "DeleteChannel",
    /** Grants permission to delete Collection */
    DeleteCollection = "DeleteCollection",
    /** Grants permission to delete Country */
    DeleteCountry = "DeleteCountry",
    /** Grants permission to delete Customer */
    DeleteCustomer = "DeleteCustomer",
    /** Grants permission to delete CustomerGroup */
    DeleteCustomerGroup = "DeleteCustomerGroup",
    /** Grants permission to delete Facet */
    DeleteFacet = "DeleteFacet",
    /** Grants permission to delete Order */
    DeleteOrder = "DeleteOrder",
    /** Grants permission to delete PaymentMethod */
    DeletePaymentMethod = "DeletePaymentMethod",
    /** Grants permission to delete Product */
    DeleteProduct = "DeleteProduct",
    /** Grants permission to delete Promotion */
    DeletePromotion = "DeletePromotion",
    /** Grants permission to delete Seller */
    DeleteSeller = "DeleteSeller",
    /** Grants permission to delete Setting */
    DeleteSetting = "DeleteSetting",
    /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    DeleteSettings = "DeleteSettings",
    /** Grants permission to delete ShippingMethod */
    DeleteShippingMethod = "DeleteShippingMethod",
    /** Grants permission to delete Subscription */
    DeleteSubscription = "DeleteSubscription",
    /** Grants permission to delete System */
    DeleteSystem = "DeleteSystem",
    /** Grants permission to delete Tag */
    DeleteTag = "DeleteTag",
    /** Grants permission to delete TaxCategory */
    DeleteTaxCategory = "DeleteTaxCategory",
    /** Grants permission to delete TaxRate */
    DeleteTaxRate = "DeleteTaxRate",
    /** Grants permission to delete Zone */
    DeleteZone = "DeleteZone",
    /** Owner means the user owns this entity, e.g. a Customer's own Order */
    Owner = "Owner",
    /** Public means any unauthenticated user may perform the operation */
    Public = "Public",
    /** Grants permission to read Administrator */
    ReadAdministrator = "ReadAdministrator",
    /** Grants permission to read Asset */
    ReadAsset = "ReadAsset",
    /** Grants permission to read Campaign */
    ReadCampaign = "ReadCampaign",
    /** Grants permission to read Products, Facets, Assets, Collections */
    ReadCatalog = "ReadCatalog",
    /** Grants permission to read Channel */
    ReadChannel = "ReadChannel",
    /** Grants permission to read Collection */
    ReadCollection = "ReadCollection",
    /** Grants permission to read Country */
    ReadCountry = "ReadCountry",
    /** Grants permission to read Customer */
    ReadCustomer = "ReadCustomer",
    /** Grants permission to read CustomerGroup */
    ReadCustomerGroup = "ReadCustomerGroup",
    /** Grants permission to read Facet */
    ReadFacet = "ReadFacet",
    /** Grants permission to read Order */
    ReadOrder = "ReadOrder",
    /** Grants permission to read PaymentMethod */
    ReadPaymentMethod = "ReadPaymentMethod",
    /** Grants permission to read Product */
    ReadProduct = "ReadProduct",
    /** Grants permission to read Promotion */
    ReadPromotion = "ReadPromotion",
    /** Grants permission to read Seller */
    ReadSeller = "ReadSeller",
    /** Grants permission to read Setting */
    ReadSetting = "ReadSetting",
    /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    ReadSettings = "ReadSettings",
    /** Grants permission to read ShippingMethod */
    ReadShippingMethod = "ReadShippingMethod",
    /** Grants permission to read Subscription */
    ReadSubscription = "ReadSubscription",
    /** Grants permission to read System */
    ReadSystem = "ReadSystem",
    /** Grants permission to read Tag */
    ReadTag = "ReadTag",
    /** Grants permission to read TaxCategory */
    ReadTaxCategory = "ReadTaxCategory",
    /** Grants permission to read TaxRate */
    ReadTaxRate = "ReadTaxRate",
    /** Grants permission to read Zone */
    ReadZone = "ReadZone",
    /** SuperAdmin has unrestricted access to all operations */
    SuperAdmin = "SuperAdmin",
    /** Grants permission to update Administrator */
    UpdateAdministrator = "UpdateAdministrator",
    /** Grants permission to update Asset */
    UpdateAsset = "UpdateAsset",
    /** Grants permission to update Campaign */
    UpdateCampaign = "UpdateCampaign",
    /** Grants permission to update Products, Facets, Assets, Collections */
    UpdateCatalog = "UpdateCatalog",
    /** Grants permission to update Channel */
    UpdateChannel = "UpdateChannel",
    /** Grants permission to update Collection */
    UpdateCollection = "UpdateCollection",
    /** Grants permission to update Country */
    UpdateCountry = "UpdateCountry",
    /** Grants permission to update Customer */
    UpdateCustomer = "UpdateCustomer",
    /** Grants permission to update CustomerGroup */
    UpdateCustomerGroup = "UpdateCustomerGroup",
    /** Grants permission to update Facet */
    UpdateFacet = "UpdateFacet",
    /** Grants permission to update GlobalSettings */
    UpdateGlobalSettings = "UpdateGlobalSettings",
    /** Grants permission to update Order */
    UpdateOrder = "UpdateOrder",
    /** Grants permission to update PaymentMethod */
    UpdatePaymentMethod = "UpdatePaymentMethod",
    /** Grants permission to update Product */
    UpdateProduct = "UpdateProduct",
    /** Grants permission to update Promotion */
    UpdatePromotion = "UpdatePromotion",
    /** Grants permission to update Seller */
    UpdateSeller = "UpdateSeller",
    /** Grants permission to update Setting */
    UpdateSetting = "UpdateSetting",
    /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    UpdateSettings = "UpdateSettings",
    /** Grants permission to update ShippingMethod */
    UpdateShippingMethod = "UpdateShippingMethod",
    /** Grants permission to update Subscription */
    UpdateSubscription = "UpdateSubscription",
    /** Grants permission to update System */
    UpdateSystem = "UpdateSystem",
    /** Grants permission to update Tag */
    UpdateTag = "UpdateTag",
    /** Grants permission to update TaxCategory */
    UpdateTaxCategory = "UpdateTaxCategory",
    /** Grants permission to update TaxRate */
    UpdateTaxRate = "UpdateTaxRate",
    /** Grants permission to update Zone */
    UpdateZone = "UpdateZone"
}
export declare type PermissionDefinition = {
    __typename?: 'PermissionDefinition';
    assignable: Scalars['Boolean'];
    description: Scalars['String'];
    name: Scalars['String'];
};
export declare type PreviewCollectionVariantsInput = {
    filters: Array<ConfigurableOperationInput>;
    inheritFilters: Scalars['Boolean'];
    parentId?: InputMaybe<Scalars['ID']>;
};
/** The price range where the result has more than one price */
export declare type PriceRange = {
    __typename?: 'PriceRange';
    max: Scalars['Money'];
    min: Scalars['Money'];
};
export declare type Product = Node & {
    __typename?: 'Product';
    assets: Array<Asset>;
    channels: Array<Channel>;
    collections: Array<Collection>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    enabled: Scalars['Boolean'];
    facetValues: Array<FacetValue>;
    featuredAsset?: Maybe<Asset>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    optionGroups: Array<ProductOptionGroup>;
    slug: Scalars['String'];
    translations: Array<ProductTranslation>;
    updatedAt: Scalars['DateTime'];
    /** Returns a paginated, sortable, filterable list of ProductVariants */
    variantList: ProductVariantList;
    /** Returns all ProductVariants */
    variants: Array<ProductVariant>;
};
export declare type ProductVariantListArgs = {
    options?: InputMaybe<ProductVariantListOptions>;
};
export declare type ProductFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    enabled?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    slug?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type ProductList = PaginatedList & {
    __typename?: 'ProductList';
    items: Array<Product>;
    totalItems: Scalars['Int'];
};
export declare type ProductListOptions = {
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
export declare type ProductOption = Node & {
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
export declare type ProductOptionGroup = Node & {
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
export declare type ProductOptionGroupTranslation = {
    __typename?: 'ProductOptionGroupTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type ProductOptionGroupTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
export declare type ProductOptionInUseError = ErrorResult & {
    __typename?: 'ProductOptionInUseError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    optionGroupCode: Scalars['String'];
    productVariantCount: Scalars['Int'];
};
export declare type ProductOptionTranslation = {
    __typename?: 'ProductOptionTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type ProductOptionTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
export declare type ProductSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type ProductTranslation = {
    __typename?: 'ProductTranslation';
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type ProductTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
};
export declare type ProductVariant = Node & {
    __typename?: 'ProductVariant';
    assets: Array<Asset>;
    channels: Array<Channel>;
    createdAt: Scalars['DateTime'];
    currencyCode: CurrencyCode;
    customFields?: Maybe<Scalars['JSON']>;
    enabled: Scalars['Boolean'];
    facetValues: Array<FacetValue>;
    featuredAsset?: Maybe<Asset>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    options: Array<ProductOption>;
    outOfStockThreshold: Scalars['Int'];
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
    product: Product;
    productId: Scalars['ID'];
    sku: Scalars['String'];
    /** @deprecated use stockLevels */
    stockAllocated: Scalars['Int'];
    stockLevel: Scalars['String'];
    stockLevels: Array<StockLevel>;
    stockMovements: StockMovementList;
    /** @deprecated use stockLevels */
    stockOnHand: Scalars['Int'];
    taxCategory: TaxCategory;
    taxRateApplied: TaxRate;
    trackInventory: GlobalFlag;
    translations: Array<ProductVariantTranslation>;
    updatedAt: Scalars['DateTime'];
    useGlobalOutOfStockThreshold: Scalars['Boolean'];
};
export declare type ProductVariantStockMovementsArgs = {
    options?: InputMaybe<StockMovementListOptions>;
};
export declare type ProductVariantFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    currencyCode?: InputMaybe<StringOperators>;
    enabled?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    outOfStockThreshold?: InputMaybe<NumberOperators>;
    price?: InputMaybe<NumberOperators>;
    priceWithTax?: InputMaybe<NumberOperators>;
    productId?: InputMaybe<IdOperators>;
    sku?: InputMaybe<StringOperators>;
    stockAllocated?: InputMaybe<NumberOperators>;
    stockLevel?: InputMaybe<StringOperators>;
    stockOnHand?: InputMaybe<NumberOperators>;
    trackInventory?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
    useGlobalOutOfStockThreshold?: InputMaybe<BooleanOperators>;
};
export declare type ProductVariantList = PaginatedList & {
    __typename?: 'ProductVariantList';
    items: Array<ProductVariant>;
    totalItems: Scalars['Int'];
};
export declare type ProductVariantListOptions = {
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
export declare type ProductVariantSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    outOfStockThreshold?: InputMaybe<SortOrder>;
    price?: InputMaybe<SortOrder>;
    priceWithTax?: InputMaybe<SortOrder>;
    productId?: InputMaybe<SortOrder>;
    sku?: InputMaybe<SortOrder>;
    stockAllocated?: InputMaybe<SortOrder>;
    stockLevel?: InputMaybe<SortOrder>;
    stockOnHand?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type ProductVariantTranslation = {
    __typename?: 'ProductVariantTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type ProductVariantTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
export declare type Promotion = Node & {
    __typename?: 'Promotion';
    actions: Array<ConfigurableOperation>;
    conditions: Array<ConfigurableOperation>;
    couponCode?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    enabled: Scalars['Boolean'];
    endsAt?: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    perCustomerUsageLimit?: Maybe<Scalars['Int']>;
    startsAt?: Maybe<Scalars['DateTime']>;
    translations: Array<PromotionTranslation>;
    updatedAt: Scalars['DateTime'];
};
export declare type PromotionFilterParameter = {
    couponCode?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    enabled?: InputMaybe<BooleanOperators>;
    endsAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    perCustomerUsageLimit?: InputMaybe<NumberOperators>;
    startsAt?: InputMaybe<DateOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type PromotionList = PaginatedList & {
    __typename?: 'PromotionList';
    items: Array<Promotion>;
    totalItems: Scalars['Int'];
};
export declare type PromotionListOptions = {
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
export declare type PromotionSortParameter = {
    couponCode?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    endsAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    perCustomerUsageLimit?: InputMaybe<SortOrder>;
    startsAt?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type PromotionTranslation = {
    __typename?: 'PromotionTranslation';
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type PromotionTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
/** Returned if the specified quantity of an OrderLine is greater than the number of items in that line */
export declare type QuantityTooGreatError = ErrorResult & {
    __typename?: 'QuantityTooGreatError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    activeAdministrator?: Maybe<Administrator>;
    activeChannel: Channel;
    administrator?: Maybe<Administrator>;
    administrators: AdministratorList;
    /** Get a single Asset by id */
    asset?: Maybe<Asset>;
    /** Get a list of Assets */
    assets: AssetList;
    /** Query exited user session auth token */
    authenticatedSessionToken?: Maybe<Scalars['String']>;
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
    /** Returns a list of eligible shipping methods for the draft Order */
    eligibleShippingMethodsForDraftOrder: Array<ShippingMethodQuote>;
    facet?: Maybe<Facet>;
    facetValues: FacetValueList;
    facets: FacetList;
    fulfillmentHandlers: Array<ConfigurableOperationDefinition>;
    globalSettings: GlobalSettings;
    job?: Maybe<Job>;
    jobBufferSize: Array<JobBufferSize>;
    jobQueues: Array<JobQueue>;
    jobs: JobList;
    jobsById: Array<Job>;
    me?: Maybe<CurrentUser>;
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
    role?: Maybe<Role>;
    roles: RoleList;
    search: SearchResponse;
    seller?: Maybe<Seller>;
    sellers: SellerList;
    /** Query detail of setting entity */
    setting?: Maybe<Setting>;
    /** Query all setting list */
    settings: SettingList;
    shippingCalculators: Array<ConfigurableOperationDefinition>;
    shippingEligibilityCheckers: Array<ConfigurableOperationDefinition>;
    shippingMethod?: Maybe<ShippingMethod>;
    shippingMethods: ShippingMethodList;
    stockLocation?: Maybe<StockLocation>;
    stockLocations: StockLocationList;
    /** Query detail of subscription entity */
    subscription?: Maybe<Subscription>;
    subscriptionFacet?: Maybe<SubscriptionFacet>;
    subscriptionFacetValues: SubscriptionFacetValueList;
    subscriptionFacets: SubscriptionFacetList;
    /** Query all subscription list */
    subscriptions: SubscriptionList;
    tag: Tag;
    tags: TagList;
    taxCategories: Array<TaxCategory>;
    taxCategory?: Maybe<TaxCategory>;
    taxRate?: Maybe<TaxRate>;
    taxRates: TaxRateList;
    testEligibleShippingMethods: Array<ShippingMethodQuote>;
    testShippingMethod: TestShippingMethodResult;
    zone?: Maybe<Zone>;
    zones: Array<Zone>;
};
export declare type QueryAdministratorArgs = {
    id: Scalars['ID'];
};
export declare type QueryAdministratorsArgs = {
    options?: InputMaybe<AdministratorListOptions>;
};
export declare type QueryAssetArgs = {
    id: Scalars['ID'];
};
export declare type QueryAssetsArgs = {
    options?: InputMaybe<AssetListOptions>;
};
export declare type QueryAuthenticatedSessionTokenArgs = {
    customerId?: InputMaybe<Scalars['ID']>;
    email?: InputMaybe<Scalars['String']>;
};
export declare type QueryCampaignArgs = {
    id: Scalars['ID'];
};
export declare type QueryCampaignCouponArgs = {
    id: Scalars['ID'];
};
export declare type QueryCampaignCouponsArgs = {
    options?: InputMaybe<CampaignCouponListOptions>;
};
export declare type QueryCampaignsArgs = {
    options?: InputMaybe<CampaignListOptions>;
};
export declare type QueryChannelArgs = {
    id: Scalars['ID'];
};
export declare type QueryCollectionArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryCollectionsArgs = {
    options?: InputMaybe<CollectionListOptions>;
};
export declare type QueryCountriesArgs = {
    options?: InputMaybe<CountryListOptions>;
};
export declare type QueryCountryArgs = {
    id: Scalars['ID'];
};
export declare type QueryCustomerArgs = {
    id: Scalars['ID'];
};
export declare type QueryCustomerGroupArgs = {
    id: Scalars['ID'];
};
export declare type QueryCustomerGroupsArgs = {
    options?: InputMaybe<CustomerGroupListOptions>;
};
export declare type QueryCustomersArgs = {
    options?: InputMaybe<CustomerListOptions>;
};
export declare type QueryEligibleShippingMethodsForDraftOrderArgs = {
    orderId: Scalars['ID'];
};
export declare type QueryFacetArgs = {
    id: Scalars['ID'];
};
export declare type QueryFacetValuesArgs = {
    options?: InputMaybe<FacetValueListOptions>;
};
export declare type QueryFacetsArgs = {
    options?: InputMaybe<FacetListOptions>;
};
export declare type QueryJobArgs = {
    jobId: Scalars['ID'];
};
export declare type QueryJobBufferSizeArgs = {
    bufferIds?: InputMaybe<Array<Scalars['String']>>;
};
export declare type QueryJobsArgs = {
    options?: InputMaybe<JobListOptions>;
};
export declare type QueryJobsByIdArgs = {
    jobIds: Array<Scalars['ID']>;
};
export declare type QueryOrderArgs = {
    id: Scalars['ID'];
};
export declare type QueryOrdersArgs = {
    options?: InputMaybe<OrderListOptions>;
};
export declare type QueryPaymentMethodArgs = {
    id: Scalars['ID'];
};
export declare type QueryPaymentMethodsArgs = {
    options?: InputMaybe<PaymentMethodListOptions>;
};
export declare type QueryPreviewCollectionVariantsArgs = {
    input: PreviewCollectionVariantsInput;
    options?: InputMaybe<ProductVariantListOptions>;
};
export declare type QueryProductArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryProductOptionGroupArgs = {
    id: Scalars['ID'];
};
export declare type QueryProductOptionGroupsArgs = {
    filterTerm?: InputMaybe<Scalars['String']>;
};
export declare type QueryProductVariantArgs = {
    id: Scalars['ID'];
};
export declare type QueryProductVariantsArgs = {
    options?: InputMaybe<ProductVariantListOptions>;
    productId?: InputMaybe<Scalars['ID']>;
};
export declare type QueryProductsArgs = {
    options?: InputMaybe<ProductListOptions>;
};
export declare type QueryPromotionArgs = {
    id: Scalars['ID'];
};
export declare type QueryPromotionsArgs = {
    options?: InputMaybe<PromotionListOptions>;
};
export declare type QueryRoleArgs = {
    id: Scalars['ID'];
};
export declare type QueryRolesArgs = {
    options?: InputMaybe<RoleListOptions>;
};
export declare type QuerySearchArgs = {
    input: SearchInput;
};
export declare type QuerySellerArgs = {
    id: Scalars['ID'];
};
export declare type QuerySellersArgs = {
    options?: InputMaybe<SellerListOptions>;
};
export declare type QuerySettingArgs = {
    id: Scalars['ID'];
};
export declare type QuerySettingsArgs = {
    options?: InputMaybe<SettingListOptions>;
};
export declare type QueryShippingMethodArgs = {
    id: Scalars['ID'];
};
export declare type QueryShippingMethodsArgs = {
    options?: InputMaybe<ShippingMethodListOptions>;
};
export declare type QueryStockLocationArgs = {
    id: Scalars['ID'];
};
export declare type QueryStockLocationsArgs = {
    options?: InputMaybe<StockLocationListOptions>;
};
export declare type QuerySubscriptionArgs = {
    id: Scalars['ID'];
};
export declare type QuerySubscriptionFacetArgs = {
    id: Scalars['ID'];
};
export declare type QuerySubscriptionFacetValuesArgs = {
    options?: InputMaybe<SubscriptionFacetValueListOptions>;
};
export declare type QuerySubscriptionFacetsArgs = {
    options?: InputMaybe<SubscriptionFacetListOptions>;
};
export declare type QuerySubscriptionsArgs = {
    facetValueIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    options?: InputMaybe<SubscriptionListOptions>;
};
export declare type QueryTagArgs = {
    id: Scalars['ID'];
};
export declare type QueryTagsArgs = {
    options?: InputMaybe<TagListOptions>;
};
export declare type QueryTaxCategoryArgs = {
    id: Scalars['ID'];
};
export declare type QueryTaxRateArgs = {
    id: Scalars['ID'];
};
export declare type QueryTaxRatesArgs = {
    options?: InputMaybe<TaxRateListOptions>;
};
export declare type QueryTestEligibleShippingMethodsArgs = {
    input: TestEligibleShippingMethodsInput;
};
export declare type QueryTestShippingMethodArgs = {
    input: TestShippingMethodInput;
};
export declare type QueryZoneArgs = {
    id: Scalars['ID'];
};
export declare type Refund = Node & {
    __typename?: 'Refund';
    adjustment: Scalars['Money'];
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    items: Scalars['Money'];
    lines: Array<RefundLine>;
    metadata?: Maybe<Scalars['JSON']>;
    method?: Maybe<Scalars['String']>;
    paymentId: Scalars['ID'];
    reason?: Maybe<Scalars['String']>;
    shipping: Scalars['Money'];
    state: Scalars['String'];
    total: Scalars['Money'];
    transactionId?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};
export declare type RefundLine = {
    __typename?: 'RefundLine';
    orderLine: OrderLine;
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
    refund: Refund;
    refundId: Scalars['ID'];
};
export declare type RefundOrderInput = {
    adjustment: Scalars['Money'];
    lines: Array<OrderLineInput>;
    paymentId: Scalars['ID'];
    reason?: InputMaybe<Scalars['String']>;
    shipping: Scalars['Money'];
};
export declare type RefundOrderResult = AlreadyRefundedError | MultipleOrderError | NothingToRefundError | OrderStateTransitionError | PaymentOrderMismatchError | QuantityTooGreatError | Refund | RefundOrderStateError | RefundStateTransitionError;
/** Returned if an attempting to refund an Order which is not in the expected state */
export declare type RefundOrderStateError = ErrorResult & {
    __typename?: 'RefundOrderStateError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    orderState: Scalars['String'];
};
/**
 * Returned when a call to modifyOrder fails to include a refundPaymentId even
 * though the price has decreased as a result of the changes.
 */
export declare type RefundPaymentIdMissingError = ErrorResult & {
    __typename?: 'RefundPaymentIdMissingError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};
/** Returned when there is an error in transitioning the Refund state */
export declare type RefundStateTransitionError = ErrorResult & {
    __typename?: 'RefundStateTransitionError';
    errorCode: ErrorCode;
    fromState: Scalars['String'];
    message: Scalars['String'];
    toState: Scalars['String'];
    transitionError: Scalars['String'];
};
export declare type RelationCustomFieldConfig = CustomField & {
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
export declare type Release = Node & StockMovement & {
    __typename?: 'Release';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderItem: OrderItem;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
};
export declare type RemoveCollectionsFromChannelInput = {
    channelId: Scalars['ID'];
    collectionIds: Array<Scalars['ID']>;
};
export declare type RemoveFacetFromChannelResult = Facet | FacetInUseError;
export declare type RemoveFacetsFromChannelInput = {
    channelId: Scalars['ID'];
    facetIds: Array<Scalars['ID']>;
    force?: InputMaybe<Scalars['Boolean']>;
};
export declare type RemoveOptionGroupFromProductResult = Product | ProductOptionInUseError;
export declare type RemoveOrderItemsResult = Order | OrderModificationError;
export declare type RemoveProductVariantsFromChannelInput = {
    channelId: Scalars['ID'];
    productVariantIds: Array<Scalars['ID']>;
};
export declare type RemoveProductsFromChannelInput = {
    channelId: Scalars['ID'];
    productIds: Array<Scalars['ID']>;
};
export declare type RemovePromotionsFromChannelInput = {
    channelId: Scalars['ID'];
    promotionIds: Array<Scalars['ID']>;
};
export declare type Return = Node & StockMovement & {
    __typename?: 'Return';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderItem: OrderItem;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
};
export declare type Role = Node & {
    __typename?: 'Role';
    channels: Array<Channel>;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    permissions: Array<Permission>;
    updatedAt: Scalars['DateTime'];
};
export declare type RoleFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type RoleList = PaginatedList & {
    __typename?: 'RoleList';
    items: Array<Role>;
    totalItems: Scalars['Int'];
};
export declare type RoleListOptions = {
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
export declare type RoleSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type Sale = Node & StockMovement & {
    __typename?: 'Sale';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    orderItem: OrderItem;
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
};
export declare type SearchInput = {
    collectionId?: InputMaybe<Scalars['ID']>;
    collectionSlug?: InputMaybe<Scalars['String']>;
    facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
    groupByProduct?: InputMaybe<Scalars['Boolean']>;
    skip?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<SearchResultSortParameter>;
    take?: InputMaybe<Scalars['Int']>;
    term?: InputMaybe<Scalars['String']>;
};
export declare type SearchReindexResponse = {
    __typename?: 'SearchReindexResponse';
    success: Scalars['Boolean'];
};
export declare type SearchResponse = {
    __typename?: 'SearchResponse';
    collections: Array<CollectionResult>;
    facetValues: Array<FacetValueResult>;
    items: Array<SearchResult>;
    totalItems: Scalars['Int'];
};
export declare type SearchResult = {
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
export declare type SearchResultAsset = {
    __typename?: 'SearchResultAsset';
    focalPoint?: Maybe<Coordinate>;
    id: Scalars['ID'];
    preview: Scalars['String'];
};
/** The price of a search result product, either as a range or as a single price */
export declare type SearchResultPrice = PriceRange | SinglePrice;
export declare type SearchResultSortParameter = {
    name?: InputMaybe<SortOrder>;
    price?: InputMaybe<SortOrder>;
};
export declare type Seller = Node & {
    __typename?: 'Seller';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type SellerFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type SellerList = PaginatedList & {
    __typename?: 'SellerList';
    items: Array<Seller>;
    totalItems: Scalars['Int'];
};
export declare type SellerListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<SellerFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<SellerSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};
export declare type SellerSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type ServerConfig = {
    __typename?: 'ServerConfig';
    customFieldConfig: CustomFields;
    orderProcess: Array<OrderProcessState>;
    permissions: Array<PermissionDefinition>;
    permittedAssetTypes: Array<Scalars['String']>;
};
export declare type SetCustomerForDraftOrderResult = EmailAddressConflictError | Order;
export declare type SetOrderShippingMethodResult = IneligibleShippingMethodError | NoActiveOrderError | Order | OrderModificationError;
export declare type Setting = Node & {
    __typename?: 'Setting';
    createdAt: Scalars['DateTime'];
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    key: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    value: Scalars['JSON'];
};
export declare type SettingFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    enabled?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    key?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type SettingList = PaginatedList & {
    __typename?: 'SettingList';
    items: Array<Setting>;
    totalItems: Scalars['Int'];
};
export declare type SettingListOptions = {
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
export declare type SettingSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    key?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type SettingTranslationInput = {
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    value: Scalars['JSON'];
};
/** Returned if the Payment settlement fails */
export declare type SettlePaymentError = ErrorResult & {
    __typename?: 'SettlePaymentError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    paymentErrorMessage: Scalars['String'];
};
export declare type SettlePaymentResult = OrderStateTransitionError | Payment | PaymentStateTransitionError | SettlePaymentError;
export declare type SettleRefundInput = {
    id: Scalars['ID'];
    transactionId: Scalars['String'];
};
export declare type SettleRefundResult = Refund | RefundStateTransitionError;
export declare type ShippingLine = {
    __typename?: 'ShippingLine';
    discountedPrice: Scalars['Money'];
    discountedPriceWithTax: Scalars['Money'];
    discounts: Array<Discount>;
    id: Scalars['ID'];
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
    shippingMethod: ShippingMethod;
};
export declare type ShippingMethod = Node & {
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
export declare type ShippingMethodFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    fulfillmentHandlerCode?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type ShippingMethodList = PaginatedList & {
    __typename?: 'ShippingMethodList';
    items: Array<ShippingMethod>;
    totalItems: Scalars['Int'];
};
export declare type ShippingMethodListOptions = {
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
export declare type ShippingMethodQuote = {
    __typename?: 'ShippingMethodQuote';
    code: Scalars['String'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    id: Scalars['ID'];
    /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
    metadata?: Maybe<Scalars['JSON']>;
    name: Scalars['String'];
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
};
export declare type ShippingMethodSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    fulfillmentHandlerCode?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type ShippingMethodTranslation = {
    __typename?: 'ShippingMethodTranslation';
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type ShippingMethodTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
};
/** The price value where the result has a single price */
export declare type SinglePrice = {
    __typename?: 'SinglePrice';
    value: Scalars['Money'];
};
export declare enum SortOrder {
    ASC = "ASC",
    DESC = "DESC"
}
export declare type StockAdjustment = Node & StockMovement & {
    __typename?: 'StockAdjustment';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
};
export declare type StockLevel = Node & {
    __typename?: 'StockLevel';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    stockAllocated: Scalars['Int'];
    stockLocation: StockLocation;
    stockLocationId: Scalars['ID'];
    stockOnHand: Scalars['Int'];
    updatedAt: Scalars['DateTime'];
};
export declare type StockLevelInput = {
    stockLocationId: Scalars['ID'];
    stockOnHand: Scalars['Int'];
};
export declare type StockLocation = Node & {
    __typename?: 'StockLocation';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type StockLocationFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type StockLocationList = PaginatedList & {
    __typename?: 'StockLocationList';
    items: Array<StockLocation>;
    totalItems: Scalars['Int'];
};
export declare type StockLocationListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<StockLocationFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<StockLocationSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};
export declare type StockLocationSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type StockMovement = {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    productVariant: ProductVariant;
    quantity: Scalars['Int'];
    type: StockMovementType;
    updatedAt: Scalars['DateTime'];
};
export declare type StockMovementItem = Allocation | Cancellation | Release | Return | Sale | StockAdjustment;
export declare type StockMovementList = {
    __typename?: 'StockMovementList';
    items: Array<StockMovementItem>;
    totalItems: Scalars['Int'];
};
export declare type StockMovementListOptions = {
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    type?: InputMaybe<StockMovementType>;
};
export declare enum StockMovementType {
    ADJUSTMENT = "ADJUSTMENT",
    ALLOCATION = "ALLOCATION",
    CANCELLATION = "CANCELLATION",
    RELEASE = "RELEASE",
    RETURN = "RETURN",
    SALE = "SALE"
}
export declare type StringCustomFieldConfig = CustomField & {
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
export declare type StringFieldOption = {
    __typename?: 'StringFieldOption';
    label?: Maybe<Array<LocalizedString>>;
    value: Scalars['String'];
};
/** Operators for filtering on a list of String fields */
export declare type StringListOperators = {
    inList: Scalars['String'];
};
/** Operators for filtering on a String field */
export declare type StringOperators = {
    contains?: InputMaybe<Scalars['String']>;
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    isNull?: InputMaybe<Scalars['Boolean']>;
    notContains?: InputMaybe<Scalars['String']>;
    notEq?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
    regex?: InputMaybe<Scalars['String']>;
};
export declare type Subscription = Node & {
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
export declare type SubscriptionFacet = Node & {
    __typename?: 'SubscriptionFacet';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    values: Array<SubscriptionFacetValue>;
};
export declare type SubscriptionFacetFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type SubscriptionFacetList = PaginatedList & {
    __typename?: 'SubscriptionFacetList';
    items: Array<SubscriptionFacet>;
    totalItems: Scalars['Int'];
};
export declare type SubscriptionFacetListOptions = {
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
export declare type SubscriptionFacetSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type SubscriptionFacetValue = Node & {
    __typename?: 'SubscriptionFacetValue';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    facet: Facet;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type SubscriptionFacetValueFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};
export declare type SubscriptionFacetValueList = PaginatedList & {
    __typename?: 'SubscriptionFacetValueList';
    items: Array<SubscriptionFacetValue>;
    totalItems: Scalars['Int'];
};
export declare type SubscriptionFacetValueListOptions = {
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
export declare type SubscriptionFacetValueSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};
export declare type SubscriptionFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    enabled?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    subscribeFrom?: InputMaybe<StringOperators>;
    type?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
    value?: InputMaybe<StringOperators>;
};
export declare type SubscriptionList = PaginatedList & {
    __typename?: 'SubscriptionList';
    items: Array<Subscription>;
    totalItems: Scalars['Int'];
};
export declare type SubscriptionListOptions = {
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
export declare type SubscriptionReportingItem = {
    __typename?: 'SubscriptionReportingItem';
    createdAt: Scalars['DateTime'];
    emailAddress: Scalars['String'];
    emailAddressFrom?: Maybe<Scalars['String']>;
    orderCode?: Maybe<Scalars['String']>;
    orderState?: Maybe<Scalars['String']>;
};
export declare type SubscriptionSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    subscribeFrom?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
    value?: InputMaybe<SortOrder>;
};
export declare enum SubscriptionType {
    email = "email",
    phone = "phone"
}
/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export declare type Success = {
    __typename?: 'Success';
    success: Scalars['Boolean'];
};
export declare type Surcharge = Node & {
    __typename?: 'Surcharge';
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
    sku?: Maybe<Scalars['String']>;
    taxLines: Array<TaxLine>;
    taxRate: Scalars['Float'];
    updatedAt: Scalars['DateTime'];
};
export declare type SurchargeInput = {
    description: Scalars['String'];
    price: Scalars['Money'];
    priceIncludesTax: Scalars['Boolean'];
    sku?: InputMaybe<Scalars['String']>;
    taxDescription?: InputMaybe<Scalars['String']>;
    taxRate?: InputMaybe<Scalars['Float']>;
};
export declare type Tag = Node & {
    __typename?: 'Tag';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    updatedAt: Scalars['DateTime'];
    value: Scalars['String'];
};
export declare type TagFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    updatedAt?: InputMaybe<DateOperators>;
    value?: InputMaybe<StringOperators>;
};
export declare type TagList = PaginatedList & {
    __typename?: 'TagList';
    items: Array<Tag>;
    totalItems: Scalars['Int'];
};
export declare type TagListOptions = {
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
export declare type TagSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
    value?: InputMaybe<SortOrder>;
};
export declare type TaxCategory = Node & {
    __typename?: 'TaxCategory';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    isDefault: Scalars['Boolean'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};
export declare type TaxLine = {
    __typename?: 'TaxLine';
    description: Scalars['String'];
    taxRate: Scalars['Float'];
};
export declare type TaxRate = Node & {
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
export declare type TaxRateFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    enabled?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
    value?: InputMaybe<NumberOperators>;
};
export declare type TaxRateList = PaginatedList & {
    __typename?: 'TaxRateList';
    items: Array<TaxRate>;
    totalItems: Scalars['Int'];
};
export declare type TaxRateListOptions = {
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
export declare type TaxRateSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
    value?: InputMaybe<SortOrder>;
};
export declare type TestEligibleShippingMethodsInput = {
    lines: Array<TestShippingMethodOrderLineInput>;
    shippingAddress: CreateAddressInput;
};
export declare type TestShippingMethodInput = {
    calculator: ConfigurableOperationInput;
    checker: ConfigurableOperationInput;
    lines: Array<TestShippingMethodOrderLineInput>;
    shippingAddress: CreateAddressInput;
};
export declare type TestShippingMethodOrderLineInput = {
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
};
export declare type TestShippingMethodQuote = {
    __typename?: 'TestShippingMethodQuote';
    metadata?: Maybe<Scalars['JSON']>;
    price: Scalars['Money'];
    priceWithTax: Scalars['Money'];
};
export declare type TestShippingMethodResult = {
    __typename?: 'TestShippingMethodResult';
    eligible: Scalars['Boolean'];
    quote?: Maybe<TestShippingMethodQuote>;
};
export declare type TextCustomFieldConfig = CustomField & {
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
export declare type TransitionFulfillmentToStateResult = Fulfillment | FulfillmentStateTransitionError;
export declare type TransitionOrderToStateResult = Order | OrderStateTransitionError;
export declare type TransitionPaymentToStateResult = Payment | PaymentStateTransitionError;
export declare type UpdateActiveAdministratorInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    emailAddress?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
};
export declare type UpdateAddressInput = {
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
export declare type UpdateAdministratorInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    emailAddress?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    lastName?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    roleIds?: InputMaybe<Array<Scalars['ID']>>;
};
export declare type UpdateAssetInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    focalPoint?: InputMaybe<CoordinateInput>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    tags?: InputMaybe<Array<Scalars['String']>>;
};
export declare type UpdateCampaignCouponInput = {
    campaignId?: InputMaybe<Scalars['ID']>;
    couponCode?: InputMaybe<Scalars['String']>;
    emailAddress?: InputMaybe<Scalars['String']>;
    endsAt?: InputMaybe<Scalars['DateTime']>;
    id: Scalars['ID'];
};
export declare type UpdateCampaignInput = {
    campaignType?: InputMaybe<CampaignType>;
    code?: InputMaybe<Scalars['String']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    needClaimCoupon?: InputMaybe<Scalars['Boolean']>;
    periodOfValidity?: InputMaybe<Scalars['Int']>;
    promotionId?: InputMaybe<Scalars['Int']>;
    translations?: InputMaybe<Array<CampaignTranslationInput>>;
};
export declare type UpdateChannelInput = {
    code?: InputMaybe<Scalars['String']>;
    currencyCode?: InputMaybe<CurrencyCode>;
    customFields?: InputMaybe<Scalars['JSON']>;
    defaultLanguageCode?: InputMaybe<LanguageCode>;
    defaultShippingZoneId?: InputMaybe<Scalars['ID']>;
    defaultTaxZoneId?: InputMaybe<Scalars['ID']>;
    id: Scalars['ID'];
    pricesIncludeTax?: InputMaybe<Scalars['Boolean']>;
    sellerId?: InputMaybe<Scalars['ID']>;
    token?: InputMaybe<Scalars['String']>;
};
export declare type UpdateChannelResult = Channel | LanguageNotAvailableError;
export declare type UpdateCollectionCustomFieldsInput = {
    campaignId?: InputMaybe<Scalars['ID']>;
};
export declare type UpdateCollectionInput = {
    assetIds?: InputMaybe<Array<Scalars['ID']>>;
    customFields?: InputMaybe<UpdateCollectionCustomFieldsInput>;
    featuredAssetId?: InputMaybe<Scalars['ID']>;
    filters?: InputMaybe<Array<ConfigurableOperationInput>>;
    id: Scalars['ID'];
    inheritFilters?: InputMaybe<Scalars['Boolean']>;
    isPrivate?: InputMaybe<Scalars['Boolean']>;
    parentId?: InputMaybe<Scalars['ID']>;
    translations?: InputMaybe<Array<UpdateCollectionTranslationInput>>;
};
export declare type UpdateCollectionTranslationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    description?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    languageCode: LanguageCode;
    name?: InputMaybe<Scalars['String']>;
    slug?: InputMaybe<Scalars['String']>;
};
export declare type UpdateCountryInput = {
    code?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    translations?: InputMaybe<Array<CountryTranslationInput>>;
};
export declare type UpdateCustomerGroupInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
};
export declare type UpdateCustomerInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    emailAddress?: InputMaybe<Scalars['String']>;
    firstName?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    lastName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type UpdateCustomerNoteInput = {
    note: Scalars['String'];
    noteId: Scalars['ID'];
};
export declare type UpdateCustomerResult = Customer | EmailAddressConflictError;
export declare type UpdateFacetInput = {
    code?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
    isPrivate?: InputMaybe<Scalars['Boolean']>;
    translations?: InputMaybe<Array<FacetTranslationInput>>;
};
export declare type UpdateFacetValueInput = {
    code?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
    translations?: InputMaybe<Array<FacetValueTranslationInput>>;
};
export declare type UpdateGlobalSettingsInput = {
    availableLanguages?: InputMaybe<Array<LanguageCode>>;
    customFields?: InputMaybe<Scalars['JSON']>;
    outOfStockThreshold?: InputMaybe<Scalars['Int']>;
    trackInventory?: InputMaybe<Scalars['Boolean']>;
};
export declare type UpdateGlobalSettingsResult = ChannelDefaultLanguageError | GlobalSettings;
export declare type UpdateOrderAddressInput = {
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
export declare type UpdateOrderInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
};
export declare type UpdateOrderItemsResult = InsufficientStockError | NegativeQuantityError | Order | OrderLimitError | OrderModificationError;
export declare type UpdateOrderNoteInput = {
    isPublic?: InputMaybe<Scalars['Boolean']>;
    note?: InputMaybe<Scalars['String']>;
    noteId: Scalars['ID'];
};
export declare type UpdatePaymentMethodInput = {
    checker?: InputMaybe<ConfigurableOperationInput>;
    code?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    handler?: InputMaybe<ConfigurableOperationInput>;
    id: Scalars['ID'];
    translations?: InputMaybe<Array<PaymentMethodTranslationInput>>;
};
export declare type UpdateProductInput = {
    assetIds?: InputMaybe<Array<Scalars['ID']>>;
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
    featuredAssetId?: InputMaybe<Scalars['ID']>;
    id: Scalars['ID'];
    translations?: InputMaybe<Array<ProductTranslationInput>>;
};
export declare type UpdateProductOptionGroupInput = {
    code?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
    translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};
export declare type UpdateProductOptionInput = {
    code?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
    translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};
export declare type UpdateProductVariantInput = {
    assetIds?: InputMaybe<Array<Scalars['ID']>>;
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
    featuredAssetId?: InputMaybe<Scalars['ID']>;
    id: Scalars['ID'];
    outOfStockThreshold?: InputMaybe<Scalars['Int']>;
    price?: InputMaybe<Scalars['Money']>;
    sku?: InputMaybe<Scalars['String']>;
    stockLevels?: InputMaybe<Array<StockLevelInput>>;
    stockOnHand?: InputMaybe<Scalars['Int']>;
    taxCategoryId?: InputMaybe<Scalars['ID']>;
    trackInventory?: InputMaybe<GlobalFlag>;
    translations?: InputMaybe<Array<ProductVariantTranslationInput>>;
    useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']>;
};
export declare type UpdatePromotionInput = {
    actions?: InputMaybe<Array<ConfigurableOperationInput>>;
    conditions?: InputMaybe<Array<ConfigurableOperationInput>>;
    couponCode?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    endsAt?: InputMaybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    perCustomerUsageLimit?: InputMaybe<Scalars['Int']>;
    startsAt?: InputMaybe<Scalars['DateTime']>;
    translations?: InputMaybe<Array<PromotionTranslationInput>>;
};
export declare type UpdatePromotionResult = MissingConditionsError | Promotion;
export declare type UpdateRoleInput = {
    channelIds?: InputMaybe<Array<Scalars['ID']>>;
    code?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    permissions?: InputMaybe<Array<Permission>>;
};
export declare type UpdateSellerInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
};
export declare type UpdateSettingInput = {
    enabled?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    key?: InputMaybe<Scalars['String']>;
    translations?: InputMaybe<Array<SettingTranslationInput>>;
};
export declare type UpdateShippingMethodInput = {
    calculator?: InputMaybe<ConfigurableOperationInput>;
    checker?: InputMaybe<ConfigurableOperationInput>;
    code?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    fulfillmentHandler?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    translations: Array<ShippingMethodTranslationInput>;
};
export declare type UpdateStockLocationInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
};
export declare type UpdateSubscriptionFacetInput = {
    code?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
};
export declare type UpdateSubscriptionFacetValueInput = {
    code?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
};
export declare type UpdateSubscriptionInput = {
    enabled?: InputMaybe<Scalars['Boolean']>;
    facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
    id: Scalars['ID'];
    languageCode?: InputMaybe<LanguageCode>;
    subscribeFrom?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<SubscriptionType>;
    value?: InputMaybe<Scalars['String']>;
};
export declare type UpdateTagInput = {
    id: Scalars['ID'];
    value?: InputMaybe<Scalars['String']>;
};
export declare type UpdateTaxCategoryInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
    isDefault?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
};
export declare type UpdateTaxRateInput = {
    categoryId?: InputMaybe<Scalars['ID']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    customerGroupId?: InputMaybe<Scalars['ID']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    value?: InputMaybe<Scalars['Float']>;
    zoneId?: InputMaybe<Scalars['ID']>;
};
export declare type UpdateZoneInput = {
    customFields?: InputMaybe<Scalars['JSON']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
};
export declare type User = Node & {
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
export declare type Zone = Node & {
    __typename?: 'Zone';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    members: Array<Country>;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};