interface Idimensions {
  width: number,
  height: number,
  depth: number
}
interface Ireviews{
  rating: number,
  comment: string,
  date: string,
  reviewerName: string,
  reviewerEmail: string
}
interface Imeta {
  createdAt: string,
  updatedAt: string,
  barcode: string,
  qrCode: string
}
export interface Iproduct {
      id: number,
      title: string,
      description: string,
      category: string,
      price: number,
      discountPercentage: number,
      rating: number,
      stock: number,
      tags: string[],
      brand: string,
      sku: string,
      weight: number,
      dimensions: Idimensions,
      warrantyInformation: string,
      shippingInformation: string,
      availabilityStatus: string,
      reviews: Ireviews[],
      returnPolicy: string,
      minimumOrderQuantity: number,
      meta: Imeta,
      images: string[],
      thumbnail: string
}
