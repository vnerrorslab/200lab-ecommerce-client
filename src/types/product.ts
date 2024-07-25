// ----------------------------------------------------------------------

export type IProductItemHeroProps = {
  title: string;
  caption: string;
  coverUrl: string;
  label: string;
};

export type IProductItemProps = {
  id: string;
  name: string;
  sold: number;
  label: string;
  price: number;
  caption: string;
  stock: number;
  coverUrl: string;
  category: string;
  images: string[];
  priceSale: number;
  ratingNumber: number;
  description: string;
  totalReviews: number;
};

export type IProductFiltersProps = {
  filterTag: string[];
  filterStock: boolean;
  filterBrand: string[];
  filterShipping: string[];
  filterCategories: string;
  filterRating: string | null;
  filterPrice: {
    start: number;
    end: number;
  };
};

export type IProductOrderProps = {
  id: string;
  item: string;
  price: number;
  status: string;
  orderId: string;
  deliveryDate: Date;
};
