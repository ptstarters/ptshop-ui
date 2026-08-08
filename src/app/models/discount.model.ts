export type DiscountFilterId =
    | 'all'
    | 'party'
    | 'discount'
    | 'free-delivery'
    | 'free-product'
    | 'prize';

export interface DiscountFilter {
    id: DiscountFilterId;
    title: string;
    icon: string;
}