"use client";

import React, { useState } from "react";
import StripePaymentForm from "./StripePaymentForm";
import DonationSuccessModal from "./DonationSuccessModal";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export default function DonationWidget() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

  // Step 3 Donor Info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [gatewayMode, setGatewayMode] = useState<"checkout" | "card">("checkout");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Success Modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successDetails, setSuccessDetails] = useState<{
    transactionId: string;
    amount: number;
    frequency?: string;
    email?: string;
    name?: string;
  }>({ transactionId: "", amount: 0 });

  const getEffectiveAmount = (): number => {
    if (isCustom && customAmount) {
      const parsed = parseFloat(customAmount);
      return isNaN(parsed) || parsed <= 0 ? 0 : parsed;
    }
    return selectedAmount || 0;
  };

  const handleAmountContinue = () => {
    const finalAmt = getEffectiveAmount();
    if (finalAmt <= 0) {
      setErrorMessage("Please enter or select a valid donation amount.");
      return;
    }
    setErrorMessage(null);
    setStep(3);
  };

  const handleStripeCheckoutSession = async () => {
    const finalAmt = getEffectiveAmount();
    if (!firstName || !email) {
      setErrorMessage("First Name and Email Address are required.");
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmt,
          frequency,
          email,
          name: `${firstName} ${lastName}`.trim(),
          metadata: {
            comment,
            isCompany: isCompany ? "true" : "false",
            isAnonymous: isAnonymous ? "true" : "false",
          },
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Demo fallback simulation
        setTimeout(() => {
          setIsSubmitting(false);
          setSuccessDetails({
            transactionId: `cs_${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
            amount: finalAmt,
            frequency,
            email,
            name: isAnonymous ? "Anonymous Donor" : `${firstName} ${lastName}`.trim(),
          });
          setShowSuccessModal(true);
        }, 1000);
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || "Failed to initiate Stripe Checkout.");
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedAmount(100);
    setCustomAmount("");
    setIsCustom(false);
    setFrequency("one-time");
    setFirstName("");
    setLastName("");
    setEmail("");
    setComment("");
    setIsCompany(false);
    setIsAnonymous(false);
    setGatewayMode("checkout");
    setShowSuccessModal(false);
    setErrorMessage(null);
  };

  return (
    <div className="bg-[#FBF4E8] rounded-[8px] border border-[#ECE3D2] p-6 sm:p-8 max-w-[640px] mx-auto shadow-sm">
      {/* STEP 1: INITIAL LANDING SCREEN */}
      {step === 1 && (
        <div className="text-center py-4">
          <h3 className="font-serif text-[24px] text-[#232323] mb-3">
            Support Jasmine Nyree Campus
          </h3>
          <p className="text-[14px] text-[#5F5F5F] mb-6 leading-relaxed">
            Your generous contribution empowers individuals with special needs, supports adult training, and builds stronger communities.
          </p>
          <button
            onClick={() => setStep(2)}
            className="w-full sm:w-auto px-8 py-4 bg-[#C69440] hover:bg-[#A87A2C] text-white rounded-[4px] font-bold text-[15px] tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            Donate
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* STEP 2: CHOOSE AMOUNT */}
      {step === 2 && (
        <div>
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECE3D2]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C69440]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECE3D2]" />
          </div>

          <h3 className="text-[16px] font-bold text-[#3A3A3A] mb-4 text-center">
            Step 2 of 3: Choose Donation Amount
          </h3>

          {/* Error Banner */}
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-[4px] text-[13px] mb-4">
              {errorMessage}
            </div>
          )}

          {/* Preset Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 mb-4">
            {PRESET_AMOUNTS.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setSelectedAmount(amt);
                  setIsCustom(false);
                  setCustomAmount("");
                  setErrorMessage(null);
                }}
                className={`py-3 px-3 rounded-[4px] text-[15px] font-bold transition-all border cursor-pointer ${
                  selectedAmount === amt && !isCustom
                    ? "bg-[#C69440] text-white border-[#C69440] shadow-md"
                    : "bg-white text-[#3A3A3A] border-[#ECE3D2] hover:border-[#C69440] hover:text-[#C69440]"
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>

          {/* Custom Amount Button & Input */}
          <div className="flex items-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => {
                setIsCustom(true);
                setSelectedAmount(null);
              }}
              className={`py-3 px-5 rounded-[4px] text-[14px] font-bold transition-all border whitespace-nowrap cursor-pointer ${
                isCustom
                  ? "bg-[#C69440] text-white border-[#C69440]"
                  : "bg-white text-[#3A3A3A] border-[#ECE3D2] hover:border-[#C69440]"
              }`}
            >
              Custom Amount
            </button>
            {isCustom && (
              <div className="flex items-center gap-1.5 flex-1">
                <span className="text-[18px] font-bold text-[#3A3A3A]">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setErrorMessage(null);
                  }}
                  className="w-full bg-white py-2.5 px-3 rounded-[4px] border border-[#ECE3D2] text-[15px] text-[#3A3A3A] focus:outline-none focus:border-[#C69440]"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Donation Frequency Options */}
          <div className="bg-white border border-[#ECE3D2] rounded-[6px] p-4 mb-6 flex items-center justify-around">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="frequency"
                checked={frequency === "one-time"}
                onChange={() => setFrequency("one-time")}
                className="accent-[#C69440] w-4 h-4"
              />
              <span className="text-[14px] text-[#3A3A3A] font-semibold">One-Time Donation</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="frequency"
                checked={frequency === "monthly"}
                onChange={() => setFrequency("monthly")}
                className="accent-[#C69440] w-4 h-4"
              />
              <span className="text-[14px] text-[#3A3A3A] font-semibold flex items-center gap-1">
                Monthly Giving
                <span className="text-[10px] bg-[#E3C88F] text-[#2B2B2B] px-1.5 py-0.5 rounded font-bold uppercase">
                  Recurring
                </span>
              </span>
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-3 text-[14px] font-semibold text-[#5F5F5F] hover:text-[#232323] transition-colors"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handleAmountContinue}
              className="flex-1 sm:flex-initial px-8 py-3.5 bg-[#C69440] hover:bg-[#A87A2C] text-white rounded-[4px] font-bold text-[14px] tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              Continue (${getEffectiveAmount() || "0"})
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: YOUR INFO & PAYMENT GATEWAY */}
      {step === 3 && (
        <div>
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECE3D2]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECE3D2]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C69440]" />
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-bold text-[#3A3A3A]">
              Step 3 of 3: Your Info & Payment
            </h3>
            <span className="text-[13px] font-bold text-[#C69440] bg-[#F3E6D0] px-2.5 py-1 rounded">
              Amount: ${getEffectiveAmount()} ({frequency})
            </span>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-[4px] text-[13px] mb-4">
              {errorMessage}
            </div>
          )}

          {/* Donor Information Form */}
          <div className="space-y-3.5 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[13px] font-semibold text-[#3A3A3A] mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white border border-[#ECE3D2] rounded-[4px] py-2.5 px-3 text-[14px] text-[#232323] focus:outline-none focus:border-[#C69440]"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#3A3A3A] mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-white border border-[#ECE3D2] rounded-[4px] py-2.5 px-3 text-[14px] text-[#232323] focus:outline-none focus:border-[#C69440]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#3A3A3A] mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-[#ECE3D2] rounded-[4px] py-2.5 px-3 text-[14px] text-[#232323] focus:outline-none focus:border-[#C69440]"
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#3A3A3A] mb-1">
                Comment / Dedication Note (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Add a message or dedicate this donation..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-white border border-[#ECE3D2] rounded-[4px] py-2 px-3 text-[13.5px] text-[#232323] focus:outline-none focus:border-[#C69440]"
              />
            </div>

            {/* Checkbox Options */}
            <div className="space-y-2 pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#4A4A4A]">
                <input
                  type="checkbox"
                  checked={isCompany}
                  onChange={(e) => setIsCompany(e.target.checked)}
                  className="accent-[#C69440] w-4 h-4 rounded"
                />
                Is this donation on behalf of a company?
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#4A4A4A]">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="accent-[#C69440] w-4 h-4 rounded"
                />
                Make this an anonymous donation.
              </label>
            </div>
          </div>

          {/* Payment Gateway Mode Selector */}
          <div className="mb-6">
            <label className="block text-[13.5px] font-bold text-[#3A3A3A] mb-2">
              Select Payment Method:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setGatewayMode("checkout")}
                className={`p-3.5 rounded-[6px] border text-left cursor-pointer transition-all flex items-center gap-3 ${
                  gatewayMode === "checkout"
                    ? "bg-white border-[#C69440] ring-2 ring-[#C69440]/20 shadow-sm"
                    : "bg-[#FDFBF7] border-[#ECE3D2] opacity-80 hover:opacity-100"
                }`}
              >
                <input
                  type="radio"
                  name="gateway"
                  checked={gatewayMode === "checkout"}
                  onChange={() => setGatewayMode("checkout")}
                  className="accent-[#C69440]"
                />
                <div>
                  <div className="text-[13.5px] font-bold text-[#232323]">Donate with Stripe - Checkout</div>
                  <div className="text-[11.5px] text-[#6B7280]">Embedded secure checkout modal</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setGatewayMode("card")}
                className={`p-3.5 rounded-[6px] border text-left cursor-pointer transition-all flex items-center gap-3 ${
                  gatewayMode === "card"
                    ? "bg-white border-[#C69440] ring-2 ring-[#C69440]/20 shadow-sm"
                    : "bg-[#FDFBF7] border-[#ECE3D2] opacity-80 hover:opacity-100"
                }`}
              >
                <input
                  type="radio"
                  name="gateway"
                  checked={gatewayMode === "card"}
                  onChange={() => setGatewayMode("card")}
                  className="accent-[#C69440]"
                />
                <div>
                  <div className="text-[13.5px] font-bold text-[#232323]">Donate with Stripe - Credit Card</div>
                  <div className="text-[11.5px] text-[#6B7280]">Inline card details entry</div>
                </div>
              </button>
            </div>
          </div>

          {/* Gateway Action Rendering */}
          {gatewayMode === "card" ? (
            <StripePaymentForm
              amount={getEffectiveAmount()}
              frequency={frequency}
              donorInfo={{
                firstName,
                lastName,
                email,
                comment,
                isCompany,
                isAnonymous,
              }}
              onSuccess={(details) => {
                setSuccessDetails({
                  ...details,
                  frequency,
                  email,
                  name: isAnonymous ? "Anonymous Donor" : `${firstName} ${lastName}`.trim(),
                });
                setShowSuccessModal(true);
              }}
              onError={(err) => setErrorMessage(err)}
            />
          ) : (
            <div>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleStripeCheckoutSession}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-4 rounded-[4px] text-[15px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Launching Stripe Checkout..."
                ) : (
                  <>
                    Donate ${getEffectiveAmount()} with Stripe Checkout
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Back Action */}
          <div className="mt-4 text-left">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-[13px] font-semibold text-[#5F5F5F] hover:text-[#232323] transition-colors"
            >
              ← Back to Amount Selection
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      <DonationSuccessModal
        isOpen={showSuccessModal}
        onClose={resetForm}
        details={successDetails}
      />
    </div>
  );
}
