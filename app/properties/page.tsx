import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';
import React from 'react';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getListings from '@/app/actions/getListings';
import PropertiesClient from '@/app/properties/PropertiesClient';

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  const listings = await getListings({
    userId: currentUser?.id,
  });

  if (listings.length === 0) {
    return (
      <div>
        <ClientOnly>
          <EmptyState
            title="No properties found"
            subtitle="Looks like you havnt no properties."
          />
        </ClientOnly>
      </div>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
