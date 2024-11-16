import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Currency, DetailPropsType } from "../../types/type";
import { Loading } from "../../components/Loading/Loading";
import "./style.scss";
import axios from "axios";

export const Detail = () => {
  const { countryName } = useParams();
  const [data, setData] = useState<DetailPropsType>();
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const getCountryDetailDataAsync = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      setData(res.data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getCountryDetailDataAsync();
    };
    fetchData();
  }, [countryName]);

  return (
    <div className="detail pt-20 px-9">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Button text={"Back"} useImage={true} onClick={() => navigate("/")} />
          <div className="flex pt-20">
            <div className="imgBx">
              <img src={data?.flags?.png} alt="flag" />
            </div>
            <div className="infoBx ml-32 py-5">
              <h2 className="pb-5">{data?.name.common}</h2>
              <div className="columns-2">
                <div className="flex pt-3">
                  <div className="title pr-1">Native Name:</div>
                  <div className="info">
                    {data?.altSpellings && data?.altSpellings.length >= 2
                      ? data.altSpellings[1]
                      : data?.altSpellings[0]}
                  </div>
                </div>
                <div className="flex pt-3">
                  <div className="title pr-1">Population:</div>
                  <div className="info">
                    {data?.population.toLocaleString()}
                  </div>
                </div>
                <div className="flex pt-3">
                  <div className="title pr-1">Region:</div>
                  <div className="info">{data?.region}</div>
                </div>
                <div className="flex pt-3">
                  <div className="title pr-1">Sub Region:</div>
                  <div className="info">{data?.subregion}</div>
                </div>
                <div className="flex pt-3">
                  <div className="title pr-1">Capital:</div>
                  <div className="info">{data?.capital[0]}</div>
                </div>
                <div className="flex pt-3">
                  <div className="title pr-1">Top Level Domain:</div>
                  <div className="info">{data?.tld[0]}</div>
                </div>
                <div className="flex pt-3">
                  <div className="title pr-1">Currencies:</div>
                  <div className="info">
                    {data?.currencies &&
                      Object.values(data?.currencies as Currency)[0].name}
                  </div>
                </div>
                <div className="flex pt-3">
                  <div className="title pr-1">Languages:</div>
                  <div className="flex info">
                    {data?.languages &&
                      Object.values(data?.languages).map((e, index) => (
                        <div>
                          {index + 1 != Object.values(data?.languages).length
                            ? `${e} ,`
                            : `${e}`}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
