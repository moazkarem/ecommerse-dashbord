export interface Ibrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IbrandResponse {
  result: number;
  paginationResult: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  data: Ibrand[];
}
