import { SelectBox } from "../../components/SelectBox/SelectBox";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import "./style.scss";
import { CountryList } from "../../components/CountryList/CountryList";
import { useEffect, useRef, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import axios from "axios";
import { CountryPropsType } from "../../types/type";

export const Home = () => {
  const [region, setRegion] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [allCountries, setAllCountries] = useState<CountryPropsType[] | []>([]);
  const [data, setData] = useState<CountryPropsType[] | []>([]);

  const prevRegionRef = useRef(region);
  const prevSearchRef = useRef(search);

  useEffect(() => {
    let filteredData = allCountries;

    if (region !== "All") {
      filteredData = filteredData.filter(
        (country) => country.region === region
      );
    }

    if (search !== "") {
      filteredData = filteredData.filter((country) =>
        country.name.common.toLowerCase().includes(search)
      );
    }
    setData(filteredData);

    prevRegionRef.current = region;
    prevSearchRef.current = search;
  }, [region, search, allCountries]);

  const getAllCountries = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setAllCountries(res.data);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="min-h-screen w-full px-8 home">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="sm:flex justify-between items-center pt-3 filter-box">
            <SearchBox onSearch={setSearch} />
            <SelectBox
              defaultValue={"All"}
              onSelect={setRegion}
              options={["All", "Africa", "Asia", "Europe", "Oceania"]}
            />
          </div>
          <CountryList data={data} />
        </>
      )}
    </div>
  );
};
