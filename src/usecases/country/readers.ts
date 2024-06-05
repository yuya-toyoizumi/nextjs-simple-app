import { Country } from "@/models/country/type";
import { useCountryRepository } from "@/repositories/country/repositories";
import useSWR from "swr";
import { countryCacheKeyGenerator } from "./cache";

export const useCountryList = () => {
  const repository = useCountryRepository();
  return useSWR<Country[], Error>(
    countryCacheKeyGenerator.generateListKey(),
    () => repository.getList(),
  );
};
