"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  width: 500px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1rem;
    width: 90vw;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 600px) {
    width: 80%;
    padding: 0rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 400px;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Select = styled.select`
  width: 400px;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Result = styled.div`
  width: 400px;
  padding: 1rem;
  border-top: 1px solid #ccc;
  color: #333;
  font-size: 1.1rem;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 80%;
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const PricingComponent = () => {
  const [price, setPrice] = useState("");
  const [shippingFee, setShippingFee] = useState(75);
  const [profitMargin, setProfitMargin] = useState(20);
  const [marketplaceFee, setMarketplaceFee] = useState(14);
  const [commission, setCommission] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const handleMarketplaceChange = ({ target }) =>
    setMarketplaceFee(target.value);

  useEffect(() => {
    if (!price) return;
    const subPrice = price * (1 + profitMargin / 100) + shippingFee;
    const totalPrice = subPrice / (1 - marketplaceFee / 100);
    const commissionValue = totalPrice - subPrice;
    setCommission(commissionValue);
    setFinalPrice(totalPrice);
  }, [price, shippingFee, profitMargin, marketplaceFee]);

  return (
    <Container>
      <InputContainer>
        <Label>İlk Fiyat</Label>
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Fiyat giriniz"
        />
      </InputContainer>
      <InputContainer>
        <Label>Kar Oranı (%)</Label>
        <Input
          type="number"
          value={profitMargin}
          onChange={(e) => setProfitMargin(Number(e.target.value))}
        />
      </InputContainer>
      <InputContainer>
        <Label>Kargo Ücreti</Label>
        <Input
          type="number"
          value={shippingFee}
          onChange={(e) => setShippingFee(Number(e.target.value))}
        />
      </InputContainer>
      <InputContainer>
        <Label>Pazaryeri Seçimi</Label>
        <Select onChange={handleMarketplaceChange}>
          <option value={14}>Trendyol (14%)</option>
          <option value={20}>Hepsiburada (20%)</option>
        </Select>
      </InputContainer>
      <Result>Pazaryeri Komisyonu: {commission.toFixed(2)} TL</Result>
      <Result>Son Fiyat: {finalPrice.toFixed(2)} TL</Result>
    </Container>
  );
};

export default PricingComponent;
