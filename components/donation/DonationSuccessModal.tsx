"use client";

import React from "react";

interface DonationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: {
    transactionId: string;
    amount: number;
    frequency?: string;
    email?: string;
    name?: string;
  };
}

export default function DonationSuccessModal({
  isOpen,
  onClose,
  details,
}: DonationSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-[12px] border border-[#ECE3D2] shadow-2xl max-w-[480px] w-full p-6 text-center relative animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success Icon Badge */}
        <div className="w-16 h-16 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#10B981]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="font-serif text-[24px] font-bold text-[#232323] mb-1">
          Thank You for Your Support!
        </h3>
        <p className="text-[14px] text-[#5F5F5F] mb-6">
          Your tax-deductible contribution directly helps individuals with special needs and empowers our community.
        </p>

        {/* Receipt Box */}
        <div className="bg-[#FDFBF7] border border-[#ECE3D2] rounded-[8px] p-4 text-left mb-6 space-y-2 text-[13.5px]">
          <div className="flex justify-between border-b border-[#F0E8DA] pb-2">
            <span className="text-[#6B7280]">Donation Amount:</span>
            <span className="font-bold text-[#232323]">${details.amount}.00 USD</span>
          </div>
          {details.frequency && (
            <div className="flex justify-between border-b border-[#F0E8DA] pb-2">
              <span className="text-[#6B7280]">Frequency:</span>
              <span className="font-semibold text-[#232323] capitalize">{details.frequency}</span>
            </div>
          )}
          <div className="flex justify-between border-b border-[#F0E8DA] pb-2">
            <span className="text-[#6B7280]">Transaction Reference:</span>
            <span className="font-mono text-[12px] font-semibold text-[#C69440]">{details.transactionId}</span>
          </div>
          {details.name && (
            <div className="flex justify-between border-b border-[#F0E8DA] pb-2">
              <span className="text-[#6B7280]">Donor:</span>
              <span className="font-medium text-[#232323]">{details.name}</span>
            </div>
          )}
          {details.email && (
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Email Receipt Sent To:</span>
              <span className="font-medium text-[#232323]">{details.email}</span>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#C69440] hover:bg-[#A87A2C] text-white py-3.5 rounded-[4px] font-bold text-[14px] uppercase tracking-wider transition-colors cursor-pointer"
        >
          Return to Donation Page
        </button>
      </div>
    </div>
  );
}
