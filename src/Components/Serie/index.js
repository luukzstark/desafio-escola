import * as S from "./Styles";

export default function Serie({ data }) {
  return data.books.map((book) => (
    <S.SerieContainer key={data.serie + "" + book.id}>
      <S.SerieHeader>
        <h1>{data.serie}ª Série</h1>
        <S.PiArrowCounterClockwiseIcon />
      </S.SerieHeader>
      <S.SerieBody>
        {book.chapters.map((chapter, i) => {
          return (
            <S.Chapter key={chapter.id}>
              <S.HeaderChapter>
                <h1>{chapter.title}</h1>
                {i === 0 && <span>{book.matter}</span>}
              </S.HeaderChapter>
              <S.BodyChapter>
                {chapter.infos.map((info) => {
                  return (
                    <S.ItemBodyChapter key={info.id}>
                      <S.Item_col_1>
                        <S.PiDotsSixVerticalLightIcon />
                        <S.NumberOrder>{info.actual_order}</S.NumberOrder>
                        <p>{info.title}</p>
                      </S.Item_col_1>
                      <S.Item_col_2>
                        <S.VscEyeIcon />
                        <S.TbExternalLinkIcon />
                      </S.Item_col_2>
                    </S.ItemBodyChapter>
                  );
                })}
              </S.BodyChapter>
            </S.Chapter>
          );
        })}
      </S.SerieBody>
    </S.SerieContainer>
  ));
}
