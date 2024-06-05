"use client";

import { useCountryList } from "@/usecases/country/readers";

export default function Countries() {
  const { data: countries, isLoading, error } = useCountryList();

  if (isLoading || !countries) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Countries</h1>
      {countries.map((country, index) => {
        return <p key={index}>{country.name}</p>;
      })}
    </>
  );
}
