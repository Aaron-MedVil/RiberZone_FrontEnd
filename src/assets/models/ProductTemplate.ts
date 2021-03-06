export interface ProductTemplate {
    id?: number,
    messageMainAttachmentId?: number,
    name?: string,
    sequence?: number,
    description?: string,
    descriptionPurchase?: string,
    descriptionSale?: string,
    type?: string,
    categId?: number,
    listPrice?: number,
    volume?: number,
    weight?: number,
    saleOk?: boolean,
    purchaseOk?: boolean,
    uomId?: number,
    uomPoId?: number,
    companyId?: number,
    active?: boolean,
    color?: number,
    defaultCode?: string,
    canImage1024BeZoomed?: boolean,
    hasConfigurableAttributes?: boolean,
    createUid?: number,
    createDate?: string,
    writeUid?: number,
    writeDate?: string,
    serviceType?: string,
    saleLineWarn?: string,
    saleLineWarnMsg?: string,
    expensePolicy?: string,
    invoicePolicy?: string,
    categName?: string,
    imagen?: string,
    productUomQty?: string,
    state?: string,
    xRating?: number;
}