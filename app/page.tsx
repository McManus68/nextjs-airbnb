import ClientOnly from '@/app/components/ClientOnly';
import Container from '@/app/components/Container';
import EmptyState from '@/app/components/EmptyState';
import getListings, { IListingParams } from '@/app/actions/getListings';
import ListingCard from '@/app/components/listings/ListingCard';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { SafeListing } from '@/app/types';

interface HomeProps {
  searchParams: IListingParams;
}

export const dynamic = 'force-dynamic';

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
          pt-24
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
          "
        >
          {listings.map((listing: SafeListing) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
