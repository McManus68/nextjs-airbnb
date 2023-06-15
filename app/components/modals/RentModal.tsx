'use client';

import React from 'react';
import Modal from '@/app/components/modals/Modal';
import useRentModal from '@/app/hooks/useRentModal';

const RentModal = () => {
  const rentModal = useRentModal();
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onOpen}
      actionLabel="Submit"
      title="Airbnb your home!"
    />
  );
};

export default RentModal;
