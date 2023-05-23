import BookNowSection from "@/components/book/BookNowSection";
import HeroCarousel from "@/components/carousel/HeroCarousel";
import CitiesSection from "@/components/cities/CitiesSection";
import OffersSection from "@/components/offers/OffersSection";
import SearchHeader from "@/components/searchHeader/SearchHeader";

export default function Home() {
  return (
    <>
      <SearchHeader />
      <HeroCarousel />
      <CitiesSection />
      <OffersSection />
      <BookNowSection />
    </>
  );
}
