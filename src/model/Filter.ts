export interface BaseFilters {
  brands?: string[];
  colors?: string[];
}

export type PhoneFilters = {
  os: string[];
} & BaseFilters;

export type Filters = PhoneFilters | BaseFilters;
