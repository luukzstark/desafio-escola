import React, { useEffect, useState } from "react";

import Header from "../Header/Index";
import HeaderPage from "../HeaderPage/Index";
import list from "../../Services";
import * as S from "./Styles";
import Serie from "../Serie";

export default function Home() {
  const [listSeries, setListSeries] = useState([]);

  useEffect(() => {
    const fetchListSeries = async () => {
      try {
        const response = await list();
        setListSeries(response.data);
      } catch (error) {
        console.error("Erro ao obter a lista de séries:", error);
      }
    };

    fetchListSeries();
  }, []);

  return (
    <S.Page>
      <Header />
      <HeaderPage nameSchool="Nome da Escola" />
      <S.SerieSection>
        {listSeries.map((data) => {
          return <Serie data={data} key={data?.id} />;
        })}
      </S.SerieSection>
    </S.Page>
  );
}
