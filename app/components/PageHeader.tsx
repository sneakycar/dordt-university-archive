export default function PageHeader({
  title,
  lede,
  kicker = "Exhibition",
}: {
  title: string;
  lede?: string;
  kicker?: string;
}) {
  return (
    <header className="dordt-page-header">
      <p className="dordt-page-header__kicker">{kicker}</p>
      <h1>{title}</h1>
      {lede ? <p className="dordt-page-header__lede">{lede}</p> : null}
    </header>
  );
}
