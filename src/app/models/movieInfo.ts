export interface IMovieInfo {
  id: number;
  overview: string;
  release_date: string;
  title: string;
  adult: boolean;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  original_language: string;
  popularity: number;
  genre_ids: number[];
  vote_count: number
  original_title: string;
  video: boolean;
}
