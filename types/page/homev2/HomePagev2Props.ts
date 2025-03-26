import TImage from "@/types/ui/TImage";

interface THeroCarousel {
  img: TImage[];
}

// Интерфейс для публикаций
interface TPublicationSlide {
  files: TImage[];
}

interface TPublication {
  slide: TPublicationSlide;
}

// Интерфейс для блога
interface TBlog {
  title: string;
  date: string;
  picture?: TImage;
}

// Интерфейс для партнёров
interface TPartner {
  title: string;
  subtitle: string;
  image?: TImage;
}

// Интерфейс для отзывов (если populate = '*', то структура неизвестна)
interface TReview {
  name: string;
  program: string;
  goal: string;
  pointA: string;
  pointB: string;
  videoId: string;
}
interface THomev2PageData {
  heroCarousel: THeroCarousel;
  publications: TPublication;
  blogs: TBlog[];
  partners: TPartner[];
  reviews: TReview[];
}

export type {THeroCarousel, TPublicationSlide, TPublication, TBlog,TPartner,TReview,THomev2PageData};