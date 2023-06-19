import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';
import React from 'react';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getReservations from '@/app/actions/getReservation';
import TripsClient from '@/app/trips/TripsClient';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  const reservations = await getReservations({
    userId: currentUser?.id,
  });

  console.log('reservations', reservations);

  if (reservations.length === 0) {
    return (
      <div>
        <ClientOnly>
          <EmptyState
            title="No trips found"
            subtitle="Looks like you havnt reserved any trips."
          />
        </ClientOnly>
      </div>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;
