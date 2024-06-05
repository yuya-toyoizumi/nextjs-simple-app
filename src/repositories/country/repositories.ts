import { useGraphqlApiClient } from "@/globalStates/useGraphqlApiClient";
import { Country, CountryListResponse } from "@/models/country/type";
import { GraphQLClient } from "graphql-request";
import { useMemo } from "react";
import { getCountryListQuery } from "./queries";

export const useCountryRepository = () => {
  const client = useGraphqlApiClient();
  return useMemo(() => createCountryRepository(client), [client]);
};

export const createCountryRepository = (client: GraphQLClient) => ({
  async getList(): Promise<Country[]> {
    const query = getCountryListQuery();
    const data = await client.request<CountryListResponse>(query);
    return data.countries;
  },
});
