import {IMovieInfo} from "./movieInfo";

export interface IMoviePage {
  page: number;
  results: IMovieInfo[];
  total_pages: number;
  total_results: number
}
